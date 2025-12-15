# Purpose:
# Identify positive safety indicators that reduce overall concern.
# These do NOT reduce findings or scores.
# They explain why a repo is probably safe.

from typing import List

from multi_repo_analyzer.core import Finding


def positive_indicators(findings: List[Finding]) -> List[str]:
    notes: List[str] = []

    if not any("STATIC" in f.id for f in findings):
        notes.append("No dynamic code execution detected.")

    if not any("NETWORK" in f.id for f in findings):
        notes.append("No outbound network behavior detected.")

    if not any("OBFUSCATION" in f.id for f in findings):
        notes.append("No obfuscation or packing techniques detected.")

    if not any("DEPENDENCY" in f.id for f in findings):
        notes.append("No suspicious dependency install behavior detected.")

    return notes
