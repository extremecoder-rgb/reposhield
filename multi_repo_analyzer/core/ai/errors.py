# Purpose:
# AI-specific error types.
# These errors must NEVER break scans or policy decisions.


class AIUnavailableError(Exception):
    """
    Raised when the AI service is unavailable or disabled.
    """
    pass


class AIResponseError(Exception):
    """
    Raised when the AI returns an invalid or unsafe response.
    """
    pass
