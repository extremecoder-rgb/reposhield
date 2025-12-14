# Detect supply-chain risk signals from dependency manifests:
# install hooks
# shell execution
# remote downloads
# suspicious setup logic

import ast
import json
import re
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


SHELL_KEYWORDS = {
    "curl",
    "wget",
    "bash",
    "sh ",
    "powershell",
}


class DependencyAnalyzer(Analyzer):
    name = "dependencies"
    supported_languages = {"config", "python", "javascript"}

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for language, files in context.files_by_language.items():
            for file_path in files:
                name = file_path.name.lower()

                if name == "package.json":
                    findings.extend(self._analyze_package_json(file_path))

                elif name == "requirements.txt":
                    findings.extend(self._analyze_requirements(file_path))

                elif name == "setup.py":
                    findings.extend(self._analyze_setup_py(file_path))

        return findings

    # ---------- npm / package.json ----------

    def _analyze_package_json(self, path: Path) -> List[Finding]:
        findings: List[Finding] = []

        try:
            data = json.loads(path.read_text())
        except Exception:
            return findings

        scripts = data.get("scripts", {}) or {}
        for hook in ("preinstall", "install", "postinstall"):
            cmd = scripts.get(hook)
            if not cmd:
                continue

            confidence = 0.6
            severity = Severity.MEDIUM

            if any(k in cmd.lower() for k in SHELL_KEYWORDS):
                confidence = 0.8
                severity = Severity.HIGH

            findings.append(
                Finding(
                    id="DEPENDENCY-NPM-INSTALL-HOOK",
                    category=Category.SUPPLY_CHAIN,
                    severity=severity,
                    confidence=confidence,
                    file_path=str(path),
                    line_number=None,
                    message=f"npm {hook} script detected",
                    why_it_matters=(
                        "Install-time scripts can execute arbitrary commands "
                        "during dependency installation."
                    ),
                    recommendation=(
                        "Review install scripts carefully. Avoid shell "
                        "execution or remote downloads during install."
                    ),
                )
            )

        return findings

    # ---------- Python / requirements.txt ----------

    def _analyze_requirements(self, path: Path) -> List[Finding]:
        findings: List[Finding] = []

        try:
            lines = path.read_text().splitlines()
        except Exception:
            return findings

        for line in lines:
            line = line.strip()
            if not line or line.startswith("#"):
                continue

            if line.startswith(("git+", "http://", "https://")):
                findings.append(
                    Finding(
                        id="DEPENDENCY-PY-REMOTE",
                        category=Category.SUPPLY_CHAIN,
                        severity=Severity.HIGH,
                        confidence=0.75,
                        file_path=str(path),
                        line_number=None,
                        message="Remote dependency source detected",
                        why_it_matters=(
                            "Dependencies installed from remote URLs or VCS "
                            "may change unexpectedly or be compromised."
                        ),
                        recommendation=(
                            "Pin dependencies to trusted versions and "
                            "prefer official package indexes."
                        ),
                    )
                )

        return findings

    def _analyze_setup_py(self, path: Path) -> List[Finding]:
        findings: List[Finding] = []

        try:
            tree = ast.parse(path.read_text())
        except Exception:
            return findings

        for node in ast.walk(tree):
            if isinstance(node, ast.Call):
                func = self._get_func_name(node.func)
                if func in {"os.system", "subprocess.call", "subprocess.Popen"}:
                    findings.append(
                        Finding(
                            id="DEPENDENCY-SETUP-EXEC",
                            category=Category.SUPPLY_CHAIN,
                            severity=Severity.CRITICAL,
                            confidence=0.85,
                            file_path=str(path),
                            line_number=getattr(node, "lineno", None),
                            message="Code execution detected in setup.py",
                            why_it_matters=(
                                "Arbitrary code execution during package "
                                "installation is a common supply-chain attack vector."
                            ),
                            recommendation=(
                                "Remove executable logic from setup.py. "
                                "Use declarative configuration only."
                            ),
                        )
                    )

        return findings

    def _get_func_name(self, node) -> str | None:
        if isinstance(node, ast.Name):
            return node.id
        if isinstance(node, ast.Attribute):
            base = self._get_func_name(node.value)
            return f"{base}.{node.attr}" if base else None
        return None
