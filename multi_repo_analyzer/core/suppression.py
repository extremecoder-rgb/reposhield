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
    "mocks",
    "setupTests",
}

FRONTEND_UI_DIRS = {
    "components",
    "pages",
    "ui",
    "sections",
    "layouts",
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
    
    # 1. Standard non-production path suppression
    if any(k in path for k in BENIGN_PATH_KEYWORDS):
        return "Finding occurs in a non-production path"

    # 2. Frontend-specific entropy suppression (High Noise area)
    is_entropy_related = "entropy" in f.id.lower() or "base64" in f.id.lower()
    is_frontend_ui = any(d in path for d in FRONTEND_UI_DIRS) or path.endswith((".jsx", ".tsx"))
    
    if is_entropy_related and is_frontend_ui:
        return "High entropy is common in UI components (SVGs, assets)"

    # 3. Tooling commands
    if any(cmd in f.message.lower() for cmd in BENIGN_COMMANDS):
        return "Command is commonly used for development tooling"

    return None


def _with_suppression(f: Finding, reason: str) -> Finding:
    # Aggressive confidence drop for suppressed findings
    # (0.3 squared = 0.09 weight, virtually eliminating its risk score impact)
    return Finding(
        id=f.id,
        category=f.category,
        severity=f.severity,
        confidence=0.2, # Fixed low confidence for suppressed
        file_path=f.file_path,
        line_number=f.line_number,
        message=f"{f.message} (suppressed: {reason})",
        why_it_matters=f.why_it_matters,
        recommendation=f.recommendation,
    )
