import ast
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext
from multi_repo_analyzer.core.confidence import adjust_confidence
from multi_repo_analyzer.core.file_context import classify_file_context


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
            file_context = classify_file_context(path)

            # ---- REGEX / STRING-LEVEL DETECTION (WEAK SIGNAL) ----
            if "os.system" in source or "eval(" in source or "exec(" in source:
                base_confidence = 0.4

                if file_context in {"INSTALL", "CI"}:
                    base_confidence += 0.1
                elif file_context == "LOW_RISK":
                    base_confidence -= 0.1

                confidence = adjust_confidence(
                    base=base_confidence,
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
                    base_confidence = 0.8

                    if file_context in {"INSTALL", "CI"}:
                        base_confidence += 0.1
                    elif file_context == "LOW_RISK":
                        base_confidence -= 0.2

                    confidence = adjust_confidence(
                        base=base_confidence,
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

    # ---- SAFE AST NAME RESOLUTION ----
    def _get_call_name(self, node) -> str:
        if isinstance(node, ast.Name):
            return node.id

        if isinstance(node, ast.Attribute):
            base = self._get_call_name(node.value)
            return f"{base}.{node.attr}" if base else node.attr

        return ""

    # ---- FIXED TEST FILE DETECTION ----
    def _is_test_file(self, path: Path) -> bool:
        parts = {p.lower() for p in path.parts}
        filename = path.name.lower()

        if "tests" in parts:
            return True

        if filename.startswith("test_") or filename.endswith("_test.py"):
            return True

        return False
