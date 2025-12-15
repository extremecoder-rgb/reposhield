# multi_repo_analyzer/core/confidence.py

def adjust_confidence(
    base: float,
    *,
    is_test_file: bool = False,
    ast_confirmed: bool = False,
) -> float:
    """
    Adjust confidence based on context.

    Confidence means: how sure we are this indicates real security risk,
    NOT how severe the impact is.
    """

    confidence = base

    # Penalize test / example code
    if is_test_file:
        confidence -= 0.2

    # Boost if AST confirms real execution
    if ast_confirmed:
        confidence += 0.1

    # Clamp to safe bounds
    if confidence < 0.3:
        confidence = 0.3
    if confidence > 1.0:
        confidence = 1.0

    return round(confidence, 2)
