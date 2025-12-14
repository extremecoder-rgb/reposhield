# Purpos :-
# One analyzer:
# scans file contents safely
# applies regex rules
# optionally confirms via AST (Python)
# emits Finding objects

import re
import ast
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


DANGEROUS_REGEX_PATTERNS = {
    "eval": re.compile(r"\beval\s*\("),
    "exec": re.compile(r"\bexec\s*\("),
    "os_system": re.compile(r"os\.system\s*\("),
    "subprocess": re.compile(r"subprocess\."),
    "curl": re.compile(r"\bcurl\s+"),
    "wget": re.compile(r"\bwget\s+"),
}


class StaticCodeAnalyzer(Analyzer):
    name = "static_code"
    supported_languages = {"python", "javascript", "bash"}

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for language, files in context.files_by_language.items():
            if language not in self.supported_languages:
                continue

            for file_path in files:
                try:
                    content = file_path.read_text(errors="ignore")
                except OSError:
                    continue

                # Regex-based detection
                for rule_id, pattern in DANGEROUS_REGEX_PATTERNS.items():
                    if pattern.search(content):
                        findings.append(
                            Finding(
                                id=f"STATIC-{rule_id.upper()}",
                                category=Category.CODE_EXECUTION,
                                severity=Severity.HIGH,
                                confidence=0.4,
                                file_path=str(file_path),
                                line_number=None,
                                message=f"Suspicious use of {rule_id}",
                                why_it_matters=(
                                    "Dynamic code execution or shell invocation "
                                    "can allow arbitrary command execution."
                                ),
                                recommendation=(
                                    "Avoid dynamic execution and validate all inputs. "
                                    "Use safer alternatives where possible."
                                ),
                            )
                        )

                # AST confirmation (Python only)
                if language == "python":
                    findings.extend(
                        self._analyze_python_ast(file_path)
                    )

        return findings

    def _analyze_python_ast(self, file_path: Path) -> List[Finding]:
        findings: List[Finding] = []

        try:
            tree = ast.parse(file_path.read_text())
        except Exception:
            return findings

        for node in ast.walk(tree):
            if isinstance(node, ast.Call):
                func_name = self._get_func_name(node.func)
                if func_name in {"eval", "exec", "os.system"}:
                    findings.append(
                        Finding(
                            id="STATIC-AST-CALL",
                            category=Category.CODE_EXECUTION,
                            severity=Severity.CRITICAL,
                            confidence=0.8,
                            file_path=str(file_path),
                            line_number=getattr(node, "lineno", None),
                            message=f"Dangerous function call: {func_name}",
                            why_it_matters=(
                                "This function can execute arbitrary code "
                                "and is commonly abused by malware."
                            ),
                            recommendation=(
                                "Remove dynamic execution. If unavoidable, "
                                "strictly validate inputs and isolate execution."
                            ),
                        )
                    )

        return findings

    def _get_func_name(self, node) -> str | None:
        if isinstance(node, ast.Name):
            return node.id
        if isinstance(node, ast.Attribute):
            return f"{self._get_func_name(node.value)}.{node.attr}"
        return None
