# core/ai/output_sanitizer.py
# Purpose:
# Sanitize AI-generated text before showing it to users.
# This is the FINAL safety gate in the AI pipeline.

import re


FORBIDDEN_PATTERNS = [
    r"http[s]?://",        # URLs
    r"\b(run|execute)\b",  # Commands
    r"\bmalware\b",        # Absolute claims
    r"\bdefinitely\b",
    r"\bguaranteed\b",
]


def sanitize_ai_output(text: str, max_length: int = 800) -> str:
    """
    Enforce safety rules on AI-generated text.
    """

    if not text:
        return "AI explanation unavailable."

    sanitized = text

    for pattern in FORBIDDEN_PATTERNS:
        sanitized = re.sub(
            pattern,
            "[redacted]",
            sanitized,
            flags=re.IGNORECASE,
        )

    # Hard length cap (prevents rambling / cost spikes)
    sanitized = sanitized.strip()
    if len(sanitized) > max_length:
        sanitized = sanitized[:max_length].rstrip() + "…"

    return sanitized
