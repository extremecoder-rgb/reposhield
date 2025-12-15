from multi_repo_analyzer.core import Finding, Severity, Category
from multi_repo_analyzer.core.positives import positive_indicators


def test_safe_repo_has_positive_notes():
    findings = []

    notes = positive_indicators(findings)

    assert "No dynamic code execution detected." in notes
    assert "No obfuscation or packing techniques detected." in notes
