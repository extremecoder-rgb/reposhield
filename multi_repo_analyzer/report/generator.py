# {
#   "tool": { ... },
#   "scan": { ... },
#   "risk": { ... },
#   "findings": [ ... ],
#   "notes": [ ... ]
# }


from typing import List, Dict

from multi_repo_analyzer.core import ScanReport, Finding
from multi_repo_analyzer.core.scoring import calculate_risk


REPORT_VERSION = "1.0"


def generate_report(report: ScanReport) -> Dict:
    """
    Generate the final JSON-serializable report.
    """
    score, verdict = calculate_risk(report.findings)

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
        "findings": [f.to_dict() for f in report.findings],
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
