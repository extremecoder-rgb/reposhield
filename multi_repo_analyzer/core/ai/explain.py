# core/ai/explain.py
# Purpose:
# Generate human-readable explanations using Gemini
# without affecting detection or decisions.

from multi_repo_analyzer.core.ai.client import GeminiClient
from multi_repo_analyzer.core.ai.context_builder import build_ai_context
from multi_repo_analyzer.core.ai.output_sanitizer import sanitize_ai_output


SYSTEM_PROMPT = """
You are a security assistant.
Your role is to EXPLAIN findings clearly and cautiously.

Rules:
- Do NOT claim malware.
- Do NOT introduce new risks.
- Do NOT suggest commands or actions.
- Base explanations ONLY on the provided findings.
- If unsure, say so explicitly.
"""


def explain_report(report_data: dict) -> str:
    """
    Generate a plain-English explanation of scan results.
    """

    ai_context = build_ai_context(report_data)

    prompt = f"""
Scan verdict: {ai_context.verdict}
Risk score: {ai_context.risk_score}

Findings:
{_format_findings(ai_context.findings)}

Explain:
- Why these findings may be risky
- In beginner-friendly language
- Without speculation
"""

    client = GeminiClient()

    try:
        raw_response = client.generate(
            system_prompt=SYSTEM_PROMPT,
            user_prompt=prompt,
        )
    except Exception:
        return "AI explanation unavailable. Scan results are unaffected."

    return sanitize_ai_output(raw_response)


def _format_findings(findings) -> str:
    lines = []
    for f in findings:
        lines.append(
            f"- [{f.severity.upper()}] {f.category}: {f.message}"
        )
    return "\n".join(lines)
