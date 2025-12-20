from dotenv import load_dotenv
load_dotenv()

import argparse
import json
import sys
from pathlib import Path

from multi_repo_analyzer.ingest import walk_repository
from multi_repo_analyzer.core import ScanContext, ScanReport
from multi_repo_analyzer.core.safety import ScanGuard, ScanLimitExceeded
from multi_repo_analyzer.report.generator import generate_report

from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.analyzer.static_code import StaticCodeAnalyzer
from multi_repo_analyzer.analyzer.obfuscation import ObfuscationAnalyzer
from multi_repo_analyzer.analyzer.secrets import SecretsAnalyzer
from multi_repo_analyzer.analyzer.dependencies import DependencyAnalyzer
from multi_repo_analyzer.analyzer.cicd import CICDAnalyzer

from multi_repo_analyzer.core.policy.engine import PolicyEngine

# 🔵 AI imports (Phase 4)
from multi_repo_analyzer.core.ai.context_builder import build_ai_context
from multi_repo_analyzer.core.ai.client import GeminiClient
from multi_repo_analyzer.core.ai.education import generate_education_for_findings
from multi_repo_analyzer.core.ai.safety import sanitize_ai_output
from multi_repo_analyzer.core.ai.errors import AIUnavailableError


TOOL_NAME = "multi-repo-analyzer"
TOOL_VERSION = "0.1.0"


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Static multi-repo security analyzer"
    )

    subparsers = parser.add_subparsers(dest="command", required=True)

    scan_parser = subparsers.add_parser("scan", help="Scan a repository")
    scan_parser.add_argument("path", help="Path to repository")

    scan_parser.add_argument(
        "--policy",
        choices=["standard", "beginner", "zero-trust"],
        default="standard",
        help="Policy profile to apply",
    )

    scan_parser.add_argument(
        "--guard",
        action="store_true",
        help="Enable Guard Mode (simulated blocking)",
    )

    scan_parser.add_argument(
        "--explain",
        action="store_true",
        help="Generate AI explanations (optional, advisory only)",
    )

    scan_parser.add_argument(
        "--output",
        help="Write report to file instead of stdout",
    )

    args = parser.parse_args()

    if args.command == "scan":
        run_scan(
            path=args.path,
            policy_name=args.policy,
            guard_mode=args.guard,
            explain=args.explain,
            output=args.output,
        )


def run_scan(
    path: str,
    policy_name: str,
    guard_mode: bool,
    explain: bool,
    output: str | None,
) -> None:
    repo_path = Path(path).resolve()

    guard = ScanGuard(max_files=10_000)

    try:
        files_by_language = walk_repository(
            repo_path,
            guard=guard,
        )
    except ScanLimitExceeded as exc:
        print(f"Scan aborted: {exc}", file=sys.stderr)
        sys.exit(2)

    context = ScanContext(
        root_path=repo_path,
        files_by_language=files_by_language,
        max_file_size=1_000_000,
    )

    registry = AnalyzerRegistry()
    registry.register(StaticCodeAnalyzer())
    registry.register(ObfuscationAnalyzer())
    registry.register(SecretsAnalyzer())
    registry.register(DependencyAnalyzer())
    registry.register(CICDAnalyzer())

    findings = registry.run(context)

    scan_report = ScanReport(
        tool_name=TOOL_NAME,
        tool_version=TOOL_VERSION,
        scanned_path=str(repo_path),
        findings=findings,
    )

    # 🔍 Base report
    report_data = generate_report(scan_report)

    # 🔐 Policy evaluation
    policy_engine = PolicyEngine(policy_name)
    policy_result = policy_engine.evaluate(
        score=report_data["risk"]["score"],
        verdict=report_data["risk"]["verdict"],
    )

    report_data = generate_report(
        scan_report,
        policy_result=policy_result,
    )

    # 🟢 PHASE 4 — AI EXPLAINABILITY (OPTIONAL)
    if explain:
        try:
            ai_context = build_ai_context(report_data)
            client = GeminiClient()

            education = generate_education_for_findings(
                context=ai_context,
                llm_client=client,
            )

            report_data["ai"] = {
                "education": {
                    fid: sanitize_ai_output(text)
                    for fid, text in education.items()
                }
            }

        except AIUnavailableError:
            report_data["ai"] = {
                "error": "AI explanations unavailable. Core scan unaffected."
            }

        except Exception:
            report_data["ai"] = {
                "error": "AI explanation failed safely. Core scan unaffected."
            }

    # 📧 Simulated alerting
    if policy_result.decision == "BLOCK":
        print("\n📧 SECURITY ALERT (SIMULATION)")
        print(f"Policy: {policy_result.policy_name}")
        print(f"Reason: {policy_result.reason}\n")

    # 🛡️ Guard mode
    if guard_mode and policy_result.decision == "BLOCK":
        print("🚨 THREAT DETECTED")
        print("❌ Operation BLOCKED (simulation)")
        sys.exit(2)

    output_json = json.dumps(report_data, indent=2)

    if output:
        Path(output).write_text(output_json)
    else:
        print(output_json)

    sys.exit(_exit_code_from_verdict(report_data["risk"]["verdict"]))


def _exit_code_from_verdict(verdict: str) -> int:
    if verdict == "SAFE":
        return 0
    if verdict == "CAUTION":
        return 1
    return 2


if __name__ == "__main__":
    main()
