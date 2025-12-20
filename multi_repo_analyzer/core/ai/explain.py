# Purpose:
# Convert scan results into AI-generated explanations.
# This module must NEVER affect scan outcomes.

from typing import Optional

from multi_repo_analyzer.core.ai.client import GeminiClient
from multi_repo_analyzer.core.ai.contract import AIContext
from multi_repo_analyzer.core.ai.prompts import explanation_prompt
from multi_repo_analyzer.core.ai.context_builder import sanitize_ai_output


def generate_explanation(context: AIContext) -> Optional[str]:
    """
    Generate a human-readable explanation of scan results.

    Returns:
        AI explanation string or None if unavailable.
    """
    try:
        client = GeminiClient()
    except Exception:
        # AI unavailable — silently skip
        return None

    prompt = explanation_prompt(context.summary())

    raw_output = client.generate(prompt)
    if not raw_output:
        return None

    return sanitize_ai_output(raw_output)
