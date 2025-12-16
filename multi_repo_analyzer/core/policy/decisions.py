from enum import Enum
from dataclasses import dataclass


class PolicyDecision(Enum):
    ALLOW = "allow"
    WARN = "warn"
    BLOCK = "block"


@dataclass(frozen=True)
class PolicyResult:
    policy_name: str
    decision: PolicyDecision
    reason: str
