from typing import Dict, List

from multi_repo_analyzer.service.workspace import temporary_workspace
from multi_repo_analyzer.service.github import clone_public_repo, GitHubCloneError

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


class ServiceScanError(Exception):
    pass


def _build_practical_explanations(report_data: Dict) -> List[Dict]:
    """
    Build practical, file-level explanations from findings.
    NO AI RAMBLING.
    """
    explanations = []

    for f in report_data.get("findings", []):
        explanations.append(
            {
                "file": f.get("file_path"),
                "issue": f.get("category"),
                "severity": f.get("severity"),
                "pattern": f.get("message"),
                "why_risky": f.get("why_it_matters"),
                "impact": f.get("recommendation"),
            }
        )

    return explanations


def scan_github_repository(
    repo_url: str,
    policy_name: str = "standard",
) -> Dict:

    with temporary_workspace() as workspace:
        try:
            repo_path = clone_public_repo(repo_url, workspace)
        except GitHubCloneError as exc:
            raise ServiceScanError(str(exc))

        guard = ScanGuard(max_files=10_000)

        try:
            files_by_language = walk_repository(repo_path, guard=guard)
        except ScanLimitExceeded as exc:
            raise ServiceScanError(f"Scan aborted: {exc}")

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
            tool_name="multi-repo-analyzer",
            tool_version="0.1.0",
            scanned_path=repo_url,
            findings=findings,
        )

        report_data = generate_report(scan_report)

        policy_engine = PolicyEngine(policy_name)
        policy_result = policy_engine.evaluate(
            score=report_data["risk"]["score"],
            verdict=report_data["risk"]["verdict"],
            findings=report_data.get("findings", []),
        )


        report_data = generate_report(
            scan_report,
            policy_result=policy_result,
        )

        # ✅ PRACTICAL EXPLANATIONS (WHAT YOU WANT)
        practical = _build_practical_explanations(report_data)

        if practical:
            report_data["ai"] = {
                "explanation": practical
            }

        return report_data
