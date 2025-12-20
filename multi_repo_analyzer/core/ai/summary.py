# Purpose:
# Generate a neutral, human-readable repository risk summary
# using ONLY sanitized AIContext data.
#
# This module does NOT perform detection.
# This module does NOT influence decisions.
# This module is advisory-only.

from typing import Optional

from multi_repo_analyzer.core.ai.contract import AIContext


SYSTEM_PROMPT = """
You are a security assistant summarizing the results of a static analysis scan.

Rules you MUST follow:
- Base all statements strictly on the provided data.
- Do NOT speculate or invent new threats.
- Do NOT claim certainty (no "this is malware").
- Do NOT provide commands or instructions.
- Keep the tone neutral, factual, and beginner-friendly.
- Limit the response to 1–2 short paragraphs.
- If information is insufficient, say so explicitly.
"""


def build_repo_risk_prompt(context: AIContext) -> str:
    """
    Build a structured prompt for generating a repository-level
    risk summary based on sanitized scan results.
    """

    categories = sorted({f.category for f in context.findings})
    severities = sorted({f.severity for f in context.findings})

    findings_summary = ", ".join(categories) if categories else "no significant issues"

    return f"""
Scan Verdict: {context.verdict}
Risk Score: {context.risk_score}

Issue Categories Detected:
{findings_summary}

Severity Levels Observed:
{", ".join(severities) if severities else "none"}

Task:
Summarize the overall security posture of this repository based on the scan results.
Explain why the verdict was reached and provide a high-level recommendation.
"""


def generate_repo_summary(
    context: AIContext,
    llm_client,
) -> str:
    """
    Generate a repository risk summary using an LLM client.

    Safety guarantees:
    - Failures return a safe fallback message
    - Output is plain text only
    """

    prompt = build_repo_risk_prompt(context)

    try:
        response: Optional[str] = llm_client.generate_text(
            system_prompt=SYSTEM_PROMPT,
            user_prompt=prompt,
            max_tokens=300,
        )
    except Exception:
        return (
            "AI-generated repository summary is unavailable. "
            "The static analysis results remain authoritative."
        )

    if not response or not response.strip():
        return (
            "AI-generated repository summary is unavailable. "
            "The static analysis results remain authoritative."
        )

    return response.strip()
