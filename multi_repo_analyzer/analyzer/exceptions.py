# Purpose : -
# Clearly separate analyzer failures from system failures.

class AnalyzerError(Exception):
    """Base exception for analyzer-related errors."""
