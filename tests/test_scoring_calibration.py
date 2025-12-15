from multi_repo_analyzer.core import Finding, Severity, Category
from multi_repo_analyzer.core.scoring import calculate_risk


def test_single_low_confidence_critical_is_not_risky():
    f = Finding(
        id="TEST",
        category=Category.CODE_EXECUTION,
        severity=Severity.CRITICAL,
        confidence=0.3,
        file_path="a.py",
        line_number=1,
        message="x",
        why_it_matters="",
        recommendation="",
    )

    score, verdict = calculate_risk([f])

    assert verdict != "RISKY"


def test_multiple_medium_findings_accumulate():
    findings = []

    for i in range(3):
        findings.append(
            Finding(
                id=f"F{i}",
                category=Category.CODE_EXECUTION,
                severity=Severity.MEDIUM,
                confidence=0.7,
                file_path=f"f{i}.py",
                line_number=1,
                message="x",
                why_it_matters="",
                recommendation="",
            )
        )

    score, verdict = calculate_risk(findings)

    assert verdict in {"CAUTION", "RISKY"}
