# Purpose:
# Define the STRICT data contract between the core engine
# and any AI/LLM integration.
#
# This contract guarantees:
# - No raw source code is ever sent to AI
# - No secrets are exposed
# - AI cannot influence detection, scoring, or decisions

from dataclasses import dataclass
from typing import List


@dataclass(frozen=True)
class AIFinding:
    """
    A sanitized, read-only representation of a finding
    safe to share with an AI model.
    """
    id: str
    category: str
    severity: str
    confidence: float
    file_path: str
    message: str
    why_it_matters: str
    recommendation: str


@dataclass(frozen=True)
class AIContext:
    """
    The ONLY structure an AI model is allowed to see.

    This is derived exclusively from the final JSON report.
    """
    risk_score: float
    verdict: str
    findings: List[AIFinding]
