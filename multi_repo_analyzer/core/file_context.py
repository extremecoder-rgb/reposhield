# Purpose:
# Classify where a file runs (install-time, CI, test, normal)
# This is NOT ScanContext.
# This is file-level execution context.

from pathlib import Path


def classify_file_context(path: Path) -> str:
    p = str(path).lower()

    if ".github/workflows" in p:
        return "CI"

    if p.endswith("setup.py") or "install" in p:
        return "INSTALL"

    if "tests" in p or "examples" in p or "docs" in p:
        return "LOW_RISK"

    return "NORMAL"
