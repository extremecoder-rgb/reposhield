from typing import Dict, Type

from multi_repo_analyzer.core.policy.base import BasePolicy
from multi_repo_analyzer.core.policy.decisions import PolicyResult
from multi_repo_analyzer.core.policy.profiles import (
    StandardPolicy,
    BeginnerPolicy,
    ZeroTrustPolicy,
)


class PolicyEngine:
    """
    Selects and evaluates a policy against scan results.
    """

    _POLICIES: Dict[str, Type[BasePolicy]] = {
        StandardPolicy.name: StandardPolicy,
        BeginnerPolicy.name: BeginnerPolicy,
        ZeroTrustPolicy.name: ZeroTrustPolicy,
    }

    def __init__(self, policy_name: str = "standard") -> None:
        if policy_name not in self._POLICIES:
            raise ValueError(
                f"Unknown policy '{policy_name}'. "
                f"Available: {', '.join(self._POLICIES.keys())}"
            )

        self.policy_name = policy_name
        self.policy = self._POLICIES[policy_name]()

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        """
        Evaluate scan outcome against selected policy.
        """
        return self.policy.evaluate(score=score, verdict=verdict)
