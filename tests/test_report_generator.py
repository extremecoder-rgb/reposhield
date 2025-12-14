from multi_repo_analyzer.core import ScanReport, Finding, Severity, Category
from multi_repo_analyzer.report.generator import generate_report


def test_report_generation():
    report = ScanReport(
        tool_name="multi-repo-analyzer",
        tool_version="0.1.0",
        scanned_path="/repo",
        findings=[
            Finding(
                id="TEST",
                category=Category.SECRETS,
                severity=Severity.HIGH,
                confidence=0.9,
                file_path="a.py",
                line_number=1,
                message="test",
                why_it_matters="test",
                recommendation="test",
            )
        ],
    )

    output = generate_report(report)

    assert output["risk"]["verdict"] in {"SAFE", "CAUTION", "RISKY"}
    assert len(output["findings"]) == 1
    assert "notes" in output
