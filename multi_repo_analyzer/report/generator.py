from typing import List, Dict

from multi_repo_analyzer.core import ScanReport, Finding
from multi_repo_analyzer.core.scoring import calculate_risk
from multi_repo_analyzer.core.correlation import correlate_findings
from multi_repo_analyzer.core.suppression import suppress_benign_patterns
from multi_repo_analyzer.core.positives import positive_indicators


REPORT_VERSION = "1.0"


def generate_report(report: ScanReport) -> Dict:
    """
    Generate the final JSON-serializable security report.

    Pipeline order (IMPORTANT):
    1. Correlate related findings (signal reinforcement)
    2. Suppress explicitly benign patterns
    3. Calculate final risk score & verdict
    4. Add positive safety indicators
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
        "notes": _generate_notes(verdict, final_findings),
    }


def _generate_notes(verdict: str, findings: List[Finding]) -> List[str]:
    """
    Generate human-readable notes explaining
    both detected risks and positive safety signals.
    """

    notes: List[str] = []

    if verdict == "SAFE":
        # Explicit positive indicators build user trust
        notes.extend(positive_indicators(findings))
        notes.append("Continue following secure development practices.")

    elif verdict == "CAUTION":
        notes.append("Some potentially risky patterns were detected.")
        notes.append("Review the findings and assess whether they are necessary.")

    else:
        notes.append("High-risk behaviors were detected.")
        notes.append("Immediate review and remediation is recommended.")

    return notes
