from multi_repo_analyzer.core.policy.result import PolicyResult


# -------------------------
# POLICY BASE
# -------------------------
class BasePolicy:
    name: str = "base"

    def evaluate(self, score: float, verdict: str, findings=None) -> PolicyResult:
        raise NotImplementedError


# -------------------------
# HELPER LOGIC (IMPORTANT)
# -------------------------
def has_dangerous_execution(findings) -> bool:
    """
    Hard blockers:
    - dynamic execution
    - os.system / eval / subprocess
    - decode + execute patterns
    """
    if not findings:
        return False

    dangerous_categories = {
        "code_execution",
        "command_execution",
        "dynamic_execution",
    }

    dangerous_patterns = {
        "os.system",
        "eval",
        "exec",
        "subprocess",
        "decode and execute",
    }

    for f in findings:
        category = f.get("category", "").lower()
        message = f.get("message", "").lower()

        if category in dangerous_categories:
            return True

        if any(p in message for p in dangerous_patterns):
            return True

    return False


def only_entropy_or_obfuscation(findings) -> bool:
    """
    Detect benign frontend noise:
    - high entropy
    - obfuscation
    - secrets WITHOUT execution
    """
    if not findings:
        return True

    allowed_categories = {
        "obfuscation",
        "secrets",
    }

    for f in findings:
        if f.get("category") not in allowed_categories:
            return False

    return True


# -------------------------
# STANDARD POLICY (FIXED)
# -------------------------
class StandardPolicy(BasePolicy):
    name = "standard"

    BLOCK_SCORE = 70.0

    def evaluate(self, score: float, verdict: str, findings=None) -> PolicyResult:
        # 🚨 BLOCK ONLY IF DANGEROUS BEHAVIOR EXISTS
        if has_dangerous_execution(findings):
            return PolicyResult(
                policy_name=self.name,
                decision="BLOCK",
                reason="Dangerous code execution patterns detected",
            )

        # ⚠️ HIGH SCORE BUT NO EXECUTION → WARN
        if score >= self.BLOCK_SCORE:
            return PolicyResult(
                policy_name=self.name,
                decision="WARN",
                reason="High risk score due to multiple weak signals",
            )

        return PolicyResult(
            policy_name=self.name,
            decision="ALLOW",
            reason="No dangerous execution behavior detected",
        )


# -------------------------
# BEGINNER POLICY
# -------------------------
class BeginnerPolicy(StandardPolicy):
    name = "beginner"
    BLOCK_SCORE = 60.0


# -------------------------
# ZERO TRUST POLICY
# -------------------------
class ZeroTrustPolicy(BasePolicy):
    name = "zero-trust"

    def evaluate(self, score: float, verdict: str, findings=None) -> PolicyResult:
        if has_dangerous_execution(findings):
            return PolicyResult(
                policy_name=self.name,
                decision="BLOCK",
                reason="Zero-trust policy blocks dangerous execution",
            )

        return PolicyResult(
            policy_name=self.name,
            decision="WARN",
            reason="Zero-trust policy warns even without execution",
        )
