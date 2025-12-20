# Purpose:
# Centralized prompt templates for AI explainability.
# Prompts must be deterministic, bounded, and non-authoritative.


SYSTEM_PROMPT = """
You are a security assistant explaining static analysis results.
You must NOT:
- Invent new threats
- Claim certainty
- Provide commands or URLs
- Refer to source code directly

If information is insufficient, say so clearly.
Your role is explanatory only.
"""


def explanation_prompt(summary: str) -> str:
    """
    Prompt for explaining scan results in plain English.
    """
    return f"""
{SYSTEM_PROMPT}

Explain the following security scan results in simple terms
for a non-security developer.

Scan summary:
{summary}

Rules:
- Do not add new risks
- Do not exaggerate
- Do not give instructions that execute code
- Be calm and factual
"""
