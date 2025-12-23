# Design Notes (Important)
# We do not decode payloads
# We do not execute anything
# We do not store decoded data
# Entropy is computed on full content (cheap & safe)
# Confidence is capped ≤ 0.8
# This keeps the engine safe by design.

import re
import math
from pathlib import Path
from typing import List

from multi_repo_analyzer.analyzer.base import Analyzer
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


# Increased threshold to avoid flagging short tokens or small assets
BASE64_REGEX = re.compile(r"[A-Za-z0-9+/=]{128,}")
# Standard minification in prod bundles often hits this, so we check path context too
MINIFIED_LINE_THRESHOLD = 1500
HIGH_ENTROPY_THRESHOLD = 5.2 # Increased from 5.0

# Folders commonly containing generated/minified code that should be treated as low-risk
LOW_RISK_DIRS = {
    "dist",
    "build",
    "vendor",
    "static",
    "out",
    "bundle",
    "bower_components",
}

# Frontend specific directories that often contain high-entropy assets in code (SVGs, long class names)
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


class ObfuscationAnalyzer(Analyzer):
    name = "obfuscation"
    supported_languages = {"python", "javascript", "bash"}

    def _get_path_risk_context(self, path: Path) -> str:
        """Categorizes path risk: 'BUILD' (lowest), 'ASSET' (medium-low), 'SOURCE' (high)"""
        parts = {p.lower() for p in path.parts}
        
        if any(d in parts for d in LOW_RISK_DIRS):
            return "BUILD"
            
        if any(d in parts for d in FRONTEND_ASSET_DIRS):
            return "ASSET"
            
        return "SOURCE"

    def analyze(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for language, files in context.files_by_language.items():
            if language not in self.supported_languages:
                continue

            for file_path in files:
                risk_context = self._get_path_risk_context(file_path)
                filename = file_path.name.lower()

                # Skip expected minified files for standard minification check
                is_expected_minified = filename.endswith(".min.js") or filename.endswith(".bundle.js")

                try:
                    content = file_path.read_text(errors="ignore")
                except OSError:
                    continue

                if not content:
                    continue

                # 1. Long base64-like strings
                for match in BASE64_REGEX.finditer(content):
                    match_len = len(match.group(0))
                    
                    # Ignore short base64 in build/asset folders
                    if risk_context == "BUILD" and match_len < 1024:
                        continue
                    if risk_context == "ASSET" and match_len < 512:
                        continue

                    findings.append(
                        Finding(
                            id="OBFUSCATION-BASE64",
                            category=Category.OBFUSCATION,
                            severity=Severity.LOW if risk_context != "SOURCE" else Severity.MEDIUM,
                            confidence=0.3 if risk_context == "BUILD" else 0.5,
                            file_path=str(file_path),
                            line_number=None,
                            message="Suspicious long encoded string detected",
                            why_it_matters=(
                                "Encoded payloads (Base64) can be used to hide "
                                "malicious commands or data from static analysis."
                            ),
                            recommendation=(
                                "Verify the content of this string. If it's a "
                                "legitimate asset (image/data), ignore this."
                            ),
                        )
                    )
                    break 

                # 2. Minified / packed code
                if not is_expected_minified and risk_context == "SOURCE":
                    for line in content.splitlines():
                        if len(line) > MINIFIED_LINE_THRESHOLD:
                            # Heuristic: Check if it's just a bunch of SVG path data
                            if "path d=" in line.lower() and len(line) < 5000:
                                continue

                            findings.append(
                                Finding(
                                    id="OBFUSCATION-MINIFIED",
                                    category=Category.OBFUSCATION,
                                    severity=Severity.MEDIUM,
                                    confidence=0.5,
                                    file_path=str(file_path),
                                    line_number=None,
                                    message="Highly minified or packed code detected in source directory",
                                    why_it_matters=(
                                        "Minified code in source directories can conceal "
                                        "malicious behavior and is harder to review."
                                    ),
                                    recommendation=(
                                        "If this is a third-party library, move it to a vendor "
                                        "folder."
                                    ),
                                )
                            )
                            break

                # 3. High entropy detection
                # Skip entropy on large files in low-risk paths
                if not (risk_context != "SOURCE" and len(content) > 50_000):
                    entropy = shannon_entropy(content)
                    
                    # Assets (SVGs) can have high entropy, so we boost the threshold for them
                    threshold = HIGH_ENTROPY_THRESHOLD
                    if risk_context == "ASSET":
                        threshold += 0.3
                        
                    if entropy > threshold:
                        findings.append(
                            Finding(
                                id="OBFUSCATION-ENTROPY",
                                category=Category.OBFUSCATION,
                                severity=Severity.LOW if risk_context != "SOURCE" else Severity.MEDIUM,
                                confidence=0.3 if risk_context != "SOURCE" else 0.5,
                                file_path=str(file_path),
                                line_number=None,
                                message="High entropy content detected",
                                why_it_matters=(
                                    "High entropy often indicates encrypted or compressed "
                                    "data, common in malware."
                                ),
                                recommendation=(
                                    "Verify whether this content is encrypted data or just assets."
                                ),
                            )
                        )

                # 4. Decode → execute pattern (High Signal)
                content_lower = content.lower()
                is_js = language == "javascript"
                is_py = language == "python"

                has_decode = "base64" in content_lower or "atob(" in content_lower or "buffer.from" in content_lower
                has_exec = False
                
                if is_js:
                    has_exec = "eval(" in content_lower or "new function(" in content_lower
                elif is_py:
                    has_exec = "exec(" in content_lower or "eval(" in content_lower

                if has_decode and has_exec:
                    findings.append(
                        Finding(
                            id="OBFUSCATION-DECODE-EXEC",
                            category=Category.OBFUSCATION,
                            severity=Severity.HIGH,
                            confidence=0.8,
                            file_path=str(file_path),
                            line_number=None,
                            message="Dangerous 'Decode and Execute' pattern detected",
                            why_it_matters=(
                                "Dynamic decoding followed by execution is one of the "
                                "most common techniques used by malware."
                            ),
                            recommendation=(
                                "Manually inspect what is being decoded and executed."
                            ),
                        )
                    )

        return findings
