# Design Notes (Important)
# We do not decode payloads
# We do not execute anything
# We do not store decoded data
# Entropy is computed on full content (cheap & safe)
# Confidence is capped ≤ 0.75
# This keeps the engine safe by design.

import re
import math
import base64
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


BASE64_REGEX = re.compile(r"[A-Za-z0-9+/=]{40,}")
MINIFIED_LINE_THRESHOLD = 300
HIGH_ENTROPY_THRESHOLD = 4.5


def shannon_entropy(data: str) -> float:
    if not data:
        return 0.0

    entropy = 0.0
    length = len(data)
    for char in set(data):
        p = data.count(char) / length
        entropy -= p * math.log2(p)

    return entropy


class ObfuscationAnalyzer(Analyzer):
    name = "obfuscation"
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

                # 1. Long base64-like strings
                for match in BASE64_REGEX.finditer(content):
                    findings.append(
                        Finding(
                            id="OBFUSCATION-BASE64",
                            category=Category.OBFUSCATION,
                            severity=Severity.MEDIUM,
                            confidence=0.6,
                            file_path=str(file_path),
                            line_number=None,
                            message="Suspicious long encoded string detected",
                            why_it_matters=(
                                "Encoded payloads are often used to hide "
                                "malicious code or data."
                            ),
                            recommendation=(
                                "Investigate the decoded content and ensure "
                                "it is safe and necessary."
                            ),
                        )
                    )

                # 2. Minified / packed code
                for line in content.splitlines():
                    if len(line) > MINIFIED_LINE_THRESHOLD:
                        findings.append(
                            Finding(
                                id="OBFUSCATION-MINIFIED",
                                category=Category.OBFUSCATION,
                                severity=Severity.MEDIUM,
                                confidence=0.5,
                                file_path=str(file_path),
                                line_number=None,
                                message="Highly minified or packed code detected",
                                why_it_matters=(
                                    "Minified or packed code can conceal "
                                    "dangerous behavior and hinder review."
                                ),
                                recommendation=(
                                    "Reformat the code or review the original "
                                    "unminified source."
                                ),
                            )
                        )
                        break

                # 3. High entropy detection
                entropy = shannon_entropy(content)
                if entropy > HIGH_ENTROPY_THRESHOLD:
                    findings.append(
                        Finding(
                            id="OBFUSCATION-ENTROPY",
                            category=Category.OBFUSCATION,
                            severity=Severity.MEDIUM,
                            confidence=0.55,
                            file_path=str(file_path),
                            line_number=None,
                            message="High entropy content detected",
                            why_it_matters=(
                                "High entropy is characteristic of encrypted "
                                "or compressed payloads."
                            ),
                            recommendation=(
                                "Verify whether this content is encrypted, "
                                "compressed, or intentionally obfuscated."
                            ),
                        )
                    )

                # 4. Decode → execute pattern (heuristic)
                if "base64" in content.lower() and "exec" in content.lower():
                    findings.append(
                        Finding(
                            id="OBFUSCATION-DECODE-EXEC",
                            category=Category.OBFUSCATION,
                            severity=Severity.HIGH,
                            confidence=0.75,
                            file_path=str(file_path),
                            line_number=None,
                            message="Decode and execute pattern detected",
                            why_it_matters=(
                                "Decoding followed by execution is a common "
                                "malware technique."
                            ),
                            recommendation=(
                                "Remove dynamic decoding and execution. "
                                "Review the decoded payload carefully."
                            ),
                        )
                    )

        return findings
