from multi_repo_analyzer.core import Finding, Severity, Category
from multi_repo_analyzer.core.scoring import calculate_risk


def test_risk_scoring_basic():
    findings = [
        Finding(
            id="F1",
            category=Category.CODE_EXECUTION,
            severity=Severity.HIGH,
            confidence=0.8,
            file_path="a.py",
            line_number=1,
            message="test",
            why_it_matters="test",
            recommendation="test",
        ),
        Finding(
            id="F2",
            category=Category.SECRETS,
            severity=Severity.MEDIUM,
            confidence=0.6,
            file_path="b.py",
            line_number=2,
            message="test",
            why_it_matters="test",
            recommendation="test",
        ),
    ]

    score, verdict = calculate_risk(findings)

    assert score > 0
    assert verdict in {"SAFE", "CAUTION", "RISKY"}
