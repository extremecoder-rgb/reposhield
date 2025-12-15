from typing import List, Dict

from multi_repo_analyzer.core import ScanReport, Finding
from multi_repo_analyzer.core.scoring import calculate_risk
from multi_repo_analyzer.core.correlation import correlate_findings
from multi_repo_analyzer.core.suppression import suppress_benign_patterns
from multi_repo_analyzer.core.positives import positive_indicators


REPORT_VERSION = "1.0"


def generate_report(
    report: ScanReport,
    rule_metrics: Dict | None = None,
) -> Dict:
    """
    Generate the final JSON-serializable security report.
    """

    correlated = correlate_findings(report.findings)
    final_findings = suppress_benign_patterns(correlated)

    score, verdict = calculate_risk(final_findings)

    return {
        "version": REPORT_VERSION,
        "tool": {
            "name": report.tool_name,
            "version": report.tool_version,
        },
        "scan": {
            "path": report.scanned_path,
            "created_at": report.created_at,
        },
        "risk": {
            "score": score,
            "verdict": verdict,
        },
        "findings": [f.to_dict() for f in final_findings],
        "notes": _generate_notes(verdict, final_findings),
        "rule_metrics": rule_metrics or {},
    }


def _generate_notes(verdict: str, findings: List[Finding]) -> List[str]:
    notes: List[str] = []

    if verdict == "SAFE":
        notes.extend(positive_indicators(findings))
        notes.append("Continue following secure development practices.")
    elif verdict == "CAUTION":
        notes.append("Some potentially risky patterns were detected.")
        notes.append("Review the findings and assess whether they are necessary.")
    else:
        notes.append("High-risk behaviors were detected.")
        notes.append("Immediate review and remediation is recommended.")

    return notes
