from dataclasses import dataclass


@dataclass(frozen=True)
class PolicyResult:
    policy_name: str
    decision: str  # ALLOW | WARN | BLOCK
    reason: str
