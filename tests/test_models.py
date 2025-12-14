from multi_repo_analyzer.core import Finding, Severity, Category


def test_finding_serialization():
    finding = Finding(
        id="TEST-001",
        category=Category.SECRETS,
        severity=Severity.HIGH,
        confidence=0.9,
        file_path="app.py",
        line_number=12,
        message="Hardcoded API key detected",
        why_it_matters="Hardcoded secrets can be leaked",
        recommendation="Move secrets to environment variables",
    )

    data = finding.to_dict()

    assert data["severity"] == "high"
    assert data["category"] == "secrets"
    assert data["confidence"] == 0.9
