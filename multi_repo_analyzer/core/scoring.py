# Inputs
# Each Finding contributes risk based on:
# severity
# confidence
# category

# Output
# risk_score (0–100)
# verdict: SAFE, CAUTION, RISKY

# Severity Weights 
# LOW       → 1
# MEDIUM    → 3
# HIGH      → 7
# CRITICAL  → 10

# Category Weights 
# CODE_EXECUTION → 1.5
# OBFUSCATION   → 1.2
# SECRETS       → 1.4
# SUPPLY_CHAIN  → 1.6
# CI_CD         → 1.3
# CONFIGURATION → 1.0
# NETWORK       → 1.4


# These weights reflect blast radius, not “badness”.

# Score Formula 

# For each finding:

# finding_score =
#     severity_weight
#   × confidence
#   × category_weight


# Total score = sum of all finding scores

# Then normalize → 0–100 scale

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


def calculate_risk(findings: List[Finding]) -> Tuple[float, str]:
    """
    Calculate total risk score and verdict.

    Returns:
        (score, verdict)
    """
    total_score = 0.0

    for finding in findings:
        # Skip framework error findings
        if finding.severity is None or finding.category is None:
            continue

        severity_weight = SEVERITY_WEIGHTS.get(finding.severity, 1.0)
        category_weight = CATEGORY_WEIGHTS.get(finding.category, 1.0)

        total_score += (
            severity_weight
            * finding.confidence
            * category_weight
        )

    # Normalize (soft cap)
    normalized = min(total_score * 5, 100.0)

    verdict = _map_verdict(normalized)

    return round(normalized, 2), verdict


def _map_verdict(score: float) -> str:
    if score < 20:
        return "SAFE"
    if score < 50:
        return "CAUTION"
    return "RISKY"
