import ast
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext
from multi_repo_analyzer.core.confidence import adjust_confidence


DANGEROUS_CALLS = {
    "os.system",
    "subprocess.Popen",
    "subprocess.call",
    "subprocess.run",
    "eval",
    "exec",
}


class StaticCodeAnalyzer(Analyzer):
    name = "static_code"
    supported_languages = {"python"}

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for path in context.files_by_language.get("python", []):
            source = path.read_text(errors="ignore")

            # ---- REGEX / STRING-LEVEL DETECTION (WEAK SIGNAL) ----
            if "os.system" in source or "eval(" in source or "exec(" in source:
                confidence = adjust_confidence(
                    base=0.4,
                    is_test_file=self._is_test_file(path),
                    ast_confirmed=False,
                )

                findings.append(
                    Finding(
                        id="STATIC-OS_SYSTEM",
                        category=Category.CODE_EXECUTION,
                        severity=Severity.HIGH,
                        confidence=confidence,
                        file_path=str(path),
                        line_number=None,
                        message="Suspicious use of dynamic execution",
                        why_it_matters=(
                            "Dynamic code execution or shell invocation can "
                            "allow arbitrary command execution."
                        ),
                        recommendation=(
                            "Avoid dynamic execution and validate all inputs. "
                            "Use safer alternatives where possible."
                        ),
                    )
                )

            # ---- AST-LEVEL CONFIRMATION (STRONG SIGNAL) ----
            try:
                tree = ast.parse(source)
            except SyntaxError:
                continue

            for node in ast.walk(tree):
                if not isinstance(node, ast.Call):
                    continue

                call_name = self._get_call_name(node.func)
                if call_name in DANGEROUS_CALLS:
                    confidence = adjust_confidence(
                        base=0.8,
                        is_test_file=self._is_test_file(path),
                        ast_confirmed=True,
                    )

                    findings.append(
                        Finding(
                            id="STATIC-AST-CALL",
                            category=Category.CODE_EXECUTION,
                            severity=Severity.CRITICAL,
                            confidence=confidence,
                            file_path=str(path),
                            line_number=node.lineno,
                            message=f"Dangerous function call: {call_name}",
                            why_it_matters=(
                                "This function can execute arbitrary code and "
                                "is commonly abused by malware."
                            ),
                            recommendation=(
                                "Remove dynamic execution. If unavoidable, "
                                "strictly validate inputs and isolate execution."
                            ),
                        )
                    )

        return findings

    # ---- FIXED HELPER ----
    def _get_call_name(self, node) -> str:
        """
        Safely resolve function call names like:
        - os.system
        - subprocess.run
        - eval
        """
        if isinstance(node, ast.Name):
            return node.id

        if isinstance(node, ast.Attribute):
            base = self._get_call_name(node.value)
            return f"{base}.{node.attr}" if base else node.attr

        return ""

    def _is_test_file(self, path: Path) -> bool:
        lowered = str(path).lower()
        return (
            "test" in lowered
            or "/tests/" in lowered
            or "\\tests\\" in lowered
        )
