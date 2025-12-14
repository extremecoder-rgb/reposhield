import re
import math
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


# High-signal secret patterns (non-exhaustive)
SECRET_PATTERNS = {
    "AWS_ACCESS_KEY": re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
    "GITHUB_TOKEN": re.compile(r"\bghp_[A-Za-z0-9]{36,}\b"),
    "GENERIC_API_KEY": re.compile(
        r"(api[_-]?key|secret|token)\s*[:=]\s*['\"][A-Za-z0-9\-_=]{16,}['\"]",
        re.IGNORECASE,
    ),
}

HIGH_ENTROPY_THRESHOLD = 4.0
MIN_SECRET_LENGTH = 20


def shannon_entropy(data: str) -> float:
    if not data:
        return 0.0

    entropy = 0.0
    length = len(data)
    for char in set(data):
        p = data.count(char) / length
        entropy -= p * math.log2(p)

    return entropy


class SecretsAnalyzer(Analyzer):
    name = "secrets"
    supported_languages = {
        "python",
        "javascript",
        "bash",
        "config",
    }

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

                # 1. Pattern-based detection
                for rule_id, pattern in SECRET_PATTERNS.items():
                    if pattern.search(content):
                        findings.append(
                            Finding(
                                id=f"SECRET-{rule_id}",
                                category=Category.SECRETS,
                                severity=Severity.HIGH,
                                confidence=0.85,
                                file_path=str(file_path),
                                line_number=None,
                                message="Potential hardcoded secret detected",
                                why_it_matters=(
                                    "Hardcoded secrets can be leaked via source "
                                    "control and abused by attackers."
                                ),
                                recommendation=(
                                    "Remove hardcoded secrets and store them "
                                    "in environment variables or a secret manager."
                                ),
                            )
                        )

                # 2. High-entropy heuristic (contextual)
                for token in re.findall(r"[A-Za-z0-9+/=_-]{20,}", content):
                    if len(token) < MIN_SECRET_LENGTH:
                        continue

                    entropy = shannon_entropy(token)
                    if entropy >= HIGH_ENTROPY_THRESHOLD:
                        findings.append(
                            Finding(
                                id="SECRET-HIGH-ENTROPY",
                                category=Category.SECRETS,
                                severity=Severity.MEDIUM,
                                confidence=0.6,
                                file_path=str(file_path),
                                line_number=None,
                                message="High-entropy string may represent a secret",
                                why_it_matters=(
                                    "High-entropy strings often indicate API keys, "
                                    "tokens, or credentials."
                                ),
                                recommendation=(
                                    "Verify whether this value is a secret. "
                                    "If so, rotate it and store it securely."
                                ),
                            )
                        )
                        break  # avoid flooding

        return findings
