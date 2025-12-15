from typing import List, Dict

from multi_repo_analyzer.core import ScanReport
from multi_repo_analyzer.core.scoring import calculate_risk
from multi_repo_analyzer.core.correlation import correlate_findings
from multi_repo_analyzer.core.suppression import suppress_benign_patterns


REPORT_VERSION = "1.0"


def generate_report(report: ScanReport) -> Dict:
    """
    Generate the final JSON-serializable report.

    Pipeline order (IMPORTANT):
    1. Correlate related findings (boost confidence)
    2. Suppress benign patterns (reduce confidence explicitly)
    3. Calculate final risk score & verdict
    """

    # Step 1: Cross-signal correlation
    correlated_findings = correlate_findings(report.findings)

    # Step 2: Explicit benign suppression
    final_findings = suppress_benign_patterns(correlated_findings)

    # Step 3: Risk scoring
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
        "notes": _generate_notes(verdict),
    }


def _generate_notes(verdict: str) -> List[str]:
    if verdict == "SAFE":
        return [
            "No high-risk behaviors were detected.",
            "Continue following secure development practices.",
        ]

    if verdict == "CAUTION":
        return [
            "Some risky patterns were detected.",
            "Review the findings and mitigate where appropriate.",
        ]

    return [
        "High-risk behaviors were detected.",
        "Immediate review and remediation is recommended.",
    ]
