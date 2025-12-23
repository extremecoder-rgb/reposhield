import re
import math
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


# High-signal secret patterns (non-exhaustive)
SECRET_PATTERNS = {
    "AWS_ACCESS_KEY": re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
    "GITHUB_TOKEN": re.compile(r"\bghp_[A-Za-z0-9]{36,}\b"),
    "GENERIC_API_KEY": re.compile(
        r"(api[_-]?key|secret|token)\s*[:=]\s*['\"][A-Za-z0-9\-_=]{24,}['\"]",
        re.IGNORECASE,
    ),
}

# Increased thresholds for MERN/React noise (SVGs, long class names)
HIGH_ENTROPY_THRESHOLD = 4.8  # Was 4.0
MIN_SECRET_LENGTH = 32        # Was 20

# Paths that frequently contain high-entropy but safe data (assets in code)
NON_PROD_KEYWORDS = {"test", "example", "docs", "mock", "spec"}
FRONTEND_ASSET_DIRS = {"components", "assets", "styles", "images"}


def shannon_entropy(data: str) -> float:
    if not data:
        return 0.0

    entropy = 0.0
    length = len(data)
    unique_chars = set(data)
    for char in unique_chars:
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

    def _is_non_prod_or_frontend_asset(self, path: Path) -> bool:
        path_str = str(path).lower()
        parts = {p.lower() for p in path.parts}
        
        if any(k in path_str for k in NON_PROD_KEYWORDS):
            return True
            
        if any(d in parts for d in FRONTEND_ASSET_DIRS):
            return True
            
        return False

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for language, files in context.files_by_language.items():
            if language not in self.supported_languages:
                continue

            for file_path in files:
                is_low_confidence_path = self._is_non_prod_or_frontend_asset(file_path)
                
                try:
                    content = file_path.read_text(errors="ignore")
                except OSError:
                    continue

                if not content:
                    continue

                # 1. Pattern-based detection (Strong Signals)
                for rule_id, pattern in SECRET_PATTERNS.items():
                    if pattern.search(content):
                        findings.append(
                            Finding(
                                id=f"SECRET-{rule_id}",
                                category=Category.SECRETS,
                                severity=Severity.HIGH,
                                confidence=0.85 if not is_low_confidence_path else 0.6,
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

                # 2. High-entropy heuristic (Weak signal, high noise in Frontend)
                # We only alert on high entropy if not in known noisy paths OR if entropy is extreme
                tokens = re.findall(r"[A-Za-z0-9+/=_-]{32,}", content)
                for token in tokens:
                    entropy = shannon_entropy(token)
                    
                    # Heuristic: SVGs and Base64 assets often have entropy between 4.0 and 4.7
                    # Real secrets usually are 4.8+
                    if entropy >= HIGH_ENTROPY_THRESHOLD:
                        confidence = 0.5
                        severity = Severity.MEDIUM
                        
                        if is_low_confidence_path:
                            # Significant penalty for findings in Frontend components or tests
                            confidence = 0.3
                            severity = Severity.LOW
                            
                        # If it's likely an SVG path (no caps, or specific pattern), skip it
                        if token.startswith("M") and "," in token or "path d=" in content.lower():
                            if len(token) > 100: # Likely SVG path data
                                continue

                        findings.append(
                            Finding(
                                id="SECRET-HIGH-ENTROPY",
                                category=Category.SECRETS,
                                severity=severity,
                                confidence=confidence,
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
