from multi_repo_analyzer.core import Finding, Severity, Category
from multi_repo_analyzer.core.suppression import suppress_benign_patterns


def test_test_path_reduces_confidence():
    f = Finding(
        id="STATIC-AST-CALL",
        category=Category.CODE_EXECUTION,
        severity=Severity.CRITICAL,
        confidence=0.9,
        file_path="tests/test_bad.py",
        line_number=1,
        message="os.system",
        why_it_matters="",
        recommendation="",
    )

    findings = suppress_benign_patterns([f])

    assert findings[0].confidence < 0.9
    assert "suppressed" in findings[0].message.lower()
