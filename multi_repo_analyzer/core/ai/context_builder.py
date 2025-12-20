# Purpose:
# Convert a final ScanReport JSON into an AI-safe context.
# This is the ENFORCEMENT POINT of the AI boundary.

from typing import Dict

from multi_repo_analyzer.core.ai.contract import AIContext, AIFinding


def build_ai_context(report_data: Dict) -> AIContext:
    """
    Build a strictly sanitized AIContext from the final report.

    IMPORTANT:
    - Input MUST be the output of generate_report()
    - Raw code, secrets, and file contents are NOT allowed
    """

    findings = [
        AIFinding(
            id=f["id"],
            category=f["category"],
            severity=f["severity"],
            confidence=f["confidence"],
            file_path=f["file_path"],
            message=f["message"],
            why_it_matters=f["why_it_matters"],
            recommendation=f["recommendation"],
        )
        for f in report_data.get("findings", [])
    ]

    return AIContext(
        risk_score=report_data["risk"]["score"],
        verdict=report_data["risk"]["verdict"],
        findings=findings,
    )
