# Purpose:
# Explicitly suppress known benign patterns.
# Suppression NEVER removes findings.
# It reduces confidence and explains why.

from typing import List

from multi_repo_analyzer.core import Finding


BENIGN_PATH_KEYWORDS = {
    "tests",
    "examples",
    "docs",
    "scripts",
}


BENIGN_COMMANDS = {
    "black",
    "pytest",
    "flake8",
    "mypy",
}


def suppress_benign_patterns(findings: List[Finding]) -> List[Finding]:
    suppressed: List[Finding] = []

    for f in findings:
        reason = _benign_reason(f)

        if reason:
            suppressed.append(_with_suppression(f, reason))
        else:
            suppressed.append(f)

    return suppressed


def _benign_reason(f: Finding) -> str | None:
    path = f.file_path.lower()

    if any(k in path for k in BENIGN_PATH_KEYWORDS):
        return "Finding occurs in a non-production path"

    if any(cmd in f.message.lower() for cmd in BENIGN_COMMANDS):
        return "Command is commonly used for development tooling"

    return None


def _with_suppression(f: Finding, reason: str) -> Finding:
    return Finding(
        id=f.id,
        category=f.category,
        severity=f.severity,
        confidence=max(0.3, round(f.confidence - 0.3, 2)),
        file_path=f.file_path,
        line_number=f.line_number,
        message=f"{f.message} (suppressed: {reason})",
        why_it_matters=f.why_it_matters,
        recommendation=f.recommendation,
    )
