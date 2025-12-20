# multi_repo_analyzer/service/scan_service.py
#
# Purpose:
# Orchestrate a full GitHub repository scan using the existing engine.
#
# This is the glue layer between:
# - GitHub URL input
# - Temporary workspace
# - Core scan engine
# - JSON report output
#
# SECURITY:
# - No engine changes
# - No execution
# - Automatic cleanup

from pathlib import Path
from typing import Dict

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
    """Raised when the service-level scan fails."""


def scan_github_repository(
    repo_url: str,
    policy_name: str = "standard",
) -> Dict:
    """
    Scan a public GitHub repository and return a JSON report.

    This function is SAFE to expose via API.
    """

    with temporary_workspace() as workspace:
        try:
            repo_path = clone_public_repo(
                repo_url=repo_url,
                destination=workspace,
            )
        except GitHubCloneError as exc:
            raise ServiceScanError(str(exc))

        # 🛡️ Safety guard
        guard = ScanGuard(max_files=10_000)

        try:
            files_by_language = walk_repository(
                repo_path,
                guard=guard,
            )
        except ScanLimitExceeded as exc:
            raise ServiceScanError(f"Scan aborted: {exc}")

        context = ScanContext(
            root_path=repo_path,
            files_by_language=files_by_language,
            max_file_size=1_000_000,
        )

        # 🔍 Run analyzers (unchanged)
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

        # 📄 Base report
        report_data = generate_report(scan_report)

        # 🔐 Policy evaluation
        policy_engine = PolicyEngine(policy_name)
        policy_result = policy_engine.evaluate(
            score=report_data["risk"]["score"],
            verdict=report_data["risk"]["verdict"],
        )

        # Embed policy into report
        report_data = generate_report(
            scan_report,
            policy_result=policy_result,
        )

        return report_data
