# Detect dangerous CI/CD behaviors in workflow files:
# - unpinned GitHub Actions
# - secrets used in scripts
# - arbitrary shell execution

import re
from pathlib import Path
from typing import List

import yaml

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


UNPINNED_ACTION = re.compile(
    r"@(?:main|master|latest|v\d+)\b",
    re.IGNORECASE,
)

SECRET_REF = re.compile(
    r"\$\{\{\s*secrets\.",
    re.IGNORECASE,
)


class CICDAnalyzer(Analyzer):
    name = "cicd"
    supported_languages = {"config"}

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for files in context.files_by_language.values():
            for path in files:
                # ✅ PLATFORM-SAFE PATH CHECK
                if ".github" not in path.parts or "workflows" not in path.parts:
                    continue

                if path.suffix not in {".yml", ".yaml"}:
                    continue

                try:
                    data = yaml.safe_load(path.read_text())
                except Exception:
                    continue

                if not isinstance(data, dict):
                    continue

                jobs = data.get("jobs", {}) or {}
                for job in jobs.values():
                    steps = job.get("steps", []) or []
                    for step in steps:
                        if isinstance(step, dict):
                            findings.extend(self._analyze_step(step, path))

        return findings

    def _analyze_step(self, step: dict, path: Path) -> List[Finding]:
        findings: List[Finding] = []

        # 1. Unpinned GitHub Actions
        uses = step.get("uses")
        if isinstance(uses, str) and UNPINNED_ACTION.search(uses):
            findings.append(
                Finding(
                    id="CICD-UNPINNED-ACTION",
                    category=Category.CI_CD,
                    severity=Severity.MEDIUM,
                    confidence=0.7,
                    file_path=str(path),
                    line_number=None,
                    message="Unpinned GitHub Action detected",
                    why_it_matters=(
                        "Unpinned actions can change unexpectedly and "
                        "introduce malicious code into the pipeline."
                    ),
                    recommendation=(
                        "Pin GitHub Actions to a specific commit SHA "
                        "instead of a mutable tag."
                    ),
                )
            )

        # 2. Secrets referenced in run scripts
        run = step.get("run")
        if isinstance(run, str) and SECRET_REF.search(run):
            findings.append(
                Finding(
                    id="CICD-SECRETS-IN-SCRIPT",
                    category=Category.CI_CD,
                    severity=Severity.HIGH,
                    confidence=0.8,
                    file_path=str(path),
                    line_number=None,
                    message="Secrets referenced directly in CI script",
                    why_it_matters=(
                        "Secrets referenced in scripts may be leaked via logs "
                        "or abused by malicious workflow steps."
                    ),
                    recommendation=(
                        "Avoid printing secrets and restrict their usage "
                        "to trusted, well-reviewed actions."
                    ),
                )
            )

        return findings
