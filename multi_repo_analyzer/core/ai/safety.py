# Purpose:
# Enforce safety constraints on AI-generated output.
#
# AI output is treated as untrusted input.
# This module ensures AI explanations:
# - Do not introduce new threats
# - Do not claim certainty
# - Do not provide commands or URLs
# - Do not override scan results


import re


ABSOLUTE_CLAIMS = [
    "this is malware",
    "definitely malicious",
    "guaranteed",
    "without a doubt",
]

COMMAND_PATTERNS = [
    r"\bapt\b",
    r"\byum\b",
    r"\bpip\b",
    r"\bnpm\b",
    r"\bcurl\b",
    r"\bwget\b",
]

URL_PATTERN = r"https?://"


def sanitize_ai_output(text: str) -> str:
    """
    Sanitize AI-generated text to enforce safety rules.

    This function NEVER raises.
    It always returns safe, displayable text.
    """

    if not text or not text.strip():
        return (
            "AI explanation unavailable. "
            "Refer to the static analysis findings."
        )

    sanitized = text.strip()

    # 1. Remove absolute claims
    for phrase in ABSOLUTE_CLAIMS:
        sanitized = sanitized.replace(phrase, "may be risky")

    # 2. Remove URLs
    sanitized = re.sub(URL_PATTERN, "[link removed]", sanitized)

    # 3. Remove command-like suggestions
    for pattern in COMMAND_PATTERNS:
        sanitized = re.sub(
            pattern,
            "[command removed]",
            sanitized,
            flags=re.IGNORECASE,
        )

    # 4. Enforce non-authoritative disclaimer
    if "AI-generated" not in sanitized:
        sanitized += (
            "\n\n"
            "Note: This explanation is AI-generated and advisory only, "
            "based on static analysis results."
        )

    return sanitized
