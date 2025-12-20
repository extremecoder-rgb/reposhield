from typing import List, Tuple

from multi_repo_analyzer.core import Finding, Severity, Category


SEVERITY_WEIGHTS = {
    Severity.LOW: 1.0,
    Severity.MEDIUM: 3.0,
    Severity.HIGH: 7.0,
    Severity.CRITICAL: 10.0,
}

CATEGORY_WEIGHTS = {
    Category.CODE_EXECUTION: 1.5,
    Category.OBFUSCATION: 1.2,
    Category.SECRETS: 1.4,
    Category.SUPPLY_CHAIN: 1.6,
    Category.CI_CD: 1.3,
    Category.CONFIGURATION: 1.0,
    Category.NETWORK: 1.4,
}

MAX_SINGLE_FINDING_SCORE = 15.0
NORMALIZATION_FACTOR = 7.5


def calculate_risk(findings: List[Finding]) -> Tuple[float, str]:
    """
    Calculate calibrated risk score and behavior-aware verdict.

    Key rules:
    - Score reflects quantity and confidence
    - Verdict reflects *dangerous behavior*
    """

    total_score = 0.0
    has_execution = False

    for finding in findings:
        if finding.severity is None or finding.category is None:
            continue

        # Track dangerous behavior
        if finding.category == Category.CODE_EXECUTION:
            has_execution = True

        severity_weight = SEVERITY_WEIGHTS.get(finding.severity, 1.0)
        category_weight = CATEGORY_WEIGHTS.get(finding.category, 1.0)

        # Confidence penalty (squared = strong dampening)
        confidence_factor = finding.confidence ** 2

        raw_score = (
            severity_weight
            * category_weight
            * confidence_factor
        )

        capped = min(raw_score, MAX_SINGLE_FINDING_SCORE)
        total_score += capped

    normalized = min(total_score * NORMALIZATION_FACTOR, 100.0)
    normalized = round(normalized, 2)

    verdict = _map_verdict(normalized, has_execution)
    return normalized, verdict


def _map_verdict(score: float, has_execution: bool) -> str:
    """
    Verdict is behavior-first, score-second.
    """

    # 🚨 Only execution-capable repos can be RISKY
    if has_execution:
        if score >= 40:
            return "RISKY"
        return "CAUTION"

    # 🧠 No execution = informational risk only
    if score < 30:
        return "SAFE"

    return "CAUTION"
