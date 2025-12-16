from multi_repo_analyzer.core.policy.result import PolicyResult


class BasePolicy:
    name: str = "base"

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        raise NotImplementedError


# -------------------------
# STANDARD POLICY
# -------------------------
class StandardPolicy(BasePolicy):
    name = "standard"

    BLOCK_SCORE = 70.0

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if score >= self.BLOCK_SCORE:
            return PolicyResult(
                policy_name=self.name,
                decision="BLOCK",
                reason="Risk score exceeds standard safety threshold",
            )

        if verdict == "CAUTION":
            return PolicyResult(
                policy_name=self.name,
                decision="WARN",
                reason="Moderate risk detected under standard policy",
            )

        return PolicyResult(
            policy_name=self.name,
            decision="ALLOW",
            reason="Risk within acceptable limits",
        )


# -------------------------
# BEGINNER POLICY
# -------------------------
class BeginnerPolicy(BasePolicy):
    name = "beginner"

    BLOCK_SCORE = 60.0

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if score >= self.BLOCK_SCORE:
            return PolicyResult(
                policy_name=self.name,
                decision="BLOCK",
                reason="Risk score exceeds beginner safety threshold",
            )

        if verdict == "CAUTION":
            return PolicyResult(
                policy_name=self.name,
                decision="WARN",
                reason="Potential risks detected under beginner policy",
            )

        return PolicyResult(
            policy_name=self.name,
            decision="ALLOW",
            reason="Risk within acceptable limits",
        )


# -------------------------
# ZERO-TRUST POLICY
# -------------------------
class ZeroTrustPolicy(BasePolicy):
    name = "zero-trust"

    BLOCK_SCORE = 40.0

    def evaluate(self, score: float, verdict: str) -> PolicyResult:
        if score >= self.BLOCK_SCORE:
            return PolicyResult(
                policy_name=self.name,
                decision="BLOCK",
                reason="Zero-trust policy blocks elevated risk by default",
            )

        return PolicyResult(
            policy_name=self.name,
            decision="WARN",
            reason="Zero-trust policy warns even for low risk",
        )
