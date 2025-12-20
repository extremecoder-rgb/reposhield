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

from multi_repo_analyzer.core.ai.contract import AIContext
from multi_repo_analyzer.core.ai.prompts import education_prompt


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
        prompt = education_prompt(
            category=finding.category,
            severity=finding.severity,
            confidence=finding.confidence,
            message=finding.message,
            why_it_matters=finding.why_it_matters,
        )

        try:
            response: Optional[str] = llm_client.generate_text(
                system_prompt=None,  # already embedded in prompt
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
