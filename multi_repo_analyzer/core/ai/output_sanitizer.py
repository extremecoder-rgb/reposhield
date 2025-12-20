# Purpose:
# Sanitize AI-generated output before displaying it.


def sanitize_ai_output(text: str, max_length: int = 800) -> str:
    """
    Apply safety filters to AI output.
    """
    if not text:
        return ""

    # Remove common dangerous patterns
    blocked_tokens = ["http://", "https://", "curl ", "wget ", "sudo ", "rm -rf"]

    for token in blocked_tokens:
        text = text.replace(token, "[redacted]")

    # Truncate overly verbose responses
    if len(text) > max_length:
        text = text[:max_length].rstrip() + "..."

    return text.strip()
