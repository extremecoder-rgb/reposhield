from multi_repo_analyzer.core import Finding, Severity, Category
from multi_repo_analyzer.core.correlation import correlate_findings


def test_execution_and_dependency_correlation_boosts_confidence():
    f1 = Finding(
        id="STATIC-AST-CALL",
        category=Category.CODE_EXECUTION,
        severity=Severity.CRITICAL,
        confidence=0.8,
        file_path="setup.py",
        line_number=1,
        message="exec",
        why_it_matters="",
        recommendation="",
    )

    f2 = Finding(
        id="DEPENDENCY-POSTINSTALL",
        category=Category.DEPENDENCIES,  # ✅ FIXED ENUM
        severity=Severity.HIGH,
        confidence=0.7,
        file_path="setup.py",
        line_number=1,
        message="postinstall",
        why_it_matters="",
        recommendation="",
    )

    findings = correlate_findings([f1, f2])

    assert findings[0].confidence > 0.8
    assert findings[1].confidence > 0.7
