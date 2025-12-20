# Purpose:
# Generate educational explanations for detected security findings.
#
# This module helps developers understand:
# - What a finding means
# - Why it is dangerous
# - How to avoid it
#
# AI is strictly limited to the sanitized AIContext.

from typing import Dict, Optional

from multi_repo_analyzer.core.ai.contract import AIContext, AIFinding


SYSTEM_PROMPT = """
You are a security educator.

RULES:
- Explain concepts clearly for beginners.
- Do NOT invent threats or vulnerabilities.
- Do NOT provide attack steps or commands.
- Do NOT declare anything as malware.
- Use neutral, educational language.
- If information is insufficient, say so.
"""


def _build_education_prompt(finding: AIFinding) -> str:
    return f"""
Finding Type: {finding.category}
Severity: {finding.severity}
Confidence: {finding.confidence}

Finding Description:
{finding.message}

Why It Matters:
{finding.why_it_matters}

Task:
Explain the following in a safe, educational way:

1. What this security pattern is
2. How attackers commonly abuse it
3. How developers can avoid or mitigate it

Use short paragraphs. Avoid speculation.
"""


def generate_education_for_findings(
    context: AIContext,
    llm_client,
) -> Dict[str, str]:
    """
    Generate educational explanations for each finding.

    Returns:
        Dict[finding_id, explanation_text]
    """

    explanations: Dict[str, str] = {}

    for finding in context.findings:
        prompt = _build_education_prompt(finding)

        try:
            response: Optional[str] = llm_client.generate_text(
                system_prompt=SYSTEM_PROMPT,
                user_prompt=prompt,
                max_tokens=300,
            )
        except Exception:
            explanations[finding.id] = (
                "Educational explanation unavailable. "
                "Refer to the finding description."
            )
            continue

        if not response or not response.strip():
            explanations[finding.id] = (
                "Educational explanation could not be generated."
            )
            continue

        explanations[finding.id] = response.strip()

    return explanations
