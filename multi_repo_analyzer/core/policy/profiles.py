from multi_repo_analyzer.core.policy.base import BasePolicy
from multi_repo_analyzer.core.policy.decisions import (
    PolicyDecision,
    PolicyResult,
)


class StandardPolicy(BasePolicy):
    """
    Balanced policy for most users.
    """

    name = "standard"

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if verdict == "SAFE":
            return PolicyResult(
                decision=PolicyDecision.ALLOW,
                reason="No significant risk detected.",
            )

        if verdict == "CAUTION":
            return PolicyResult(
                decision=PolicyDecision.WARN,
                reason="Moderate risk detected. Review before proceeding.",
            )

        return PolicyResult(
            decision=PolicyDecision.BLOCK,
            reason="High-risk behavior detected.",
        )


class BeginnerPolicy(BasePolicy):
    """
    More conservative policy for less-experienced developers.
    """

    name = "beginner"

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if verdict == "SAFE":
            return PolicyResult(
                decision=PolicyDecision.ALLOW,
                reason="Repository appears safe.",
            )

        if verdict == "CAUTION":
            return PolicyResult(
                decision=PolicyDecision.WARN,
                reason=(
                    "Potential risk detected. Beginners should proceed "
                    "only if the source is trusted."
                ),
            )

        return PolicyResult(
            decision=PolicyDecision.BLOCK,
            reason=(
                "High-risk patterns detected. Blocking to protect "
                "inexperienced users."
            ),
        )


class ZeroTrustPolicy(BasePolicy):
    """
    Strictest policy — deny by default.
    """

    name = "zero-trust"

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if verdict == "SAFE":
            return PolicyResult(
                decision=PolicyDecision.ALLOW,
                reason="No risk signals detected.",
            )

        return PolicyResult(
            decision=PolicyDecision.BLOCK,
            reason=(
                "Zero-Trust policy blocks all non-safe repositories."
            ),
        )
