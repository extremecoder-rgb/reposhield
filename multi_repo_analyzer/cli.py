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
        "--output",
        help="Write report to file instead of stdout",
    )

    args = parser.parse_args()

    if args.command == "scan":
        run_scan(args.path, args.output)


def run_scan(path: str, output: str | None) -> None:
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

    report_data = generate_report(scan_report)

    output_json = json.dumps(report_data, indent=2)

    if output:
        Path(output).write_text(output_json)
    else:
        print(output_json)

    exit_code = _exit_code_from_verdict(report_data["risk"]["verdict"])
    sys.exit(exit_code)


def _exit_code_from_verdict(verdict: str) -> int:
    if verdict == "SAFE":
        return 0
    if verdict == "CAUTION":
        return 1
    return 2


if __name__ == "__main__":
    main()
