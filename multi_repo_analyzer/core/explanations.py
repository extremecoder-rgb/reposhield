from multi_repo_analyzer.core import Category


ATTACK_CONTEXT = {
    Category.CODE_EXECUTION: (
        "Attackers commonly use dynamic execution to run arbitrary commands, "
        "download payloads, or escalate privileges during install or runtime."
    ),
    Category.OBFUSCATION: (
        "Obfuscation is often used to hide malicious intent, evade detection, "
        "or delay analysis by security tools."
    ),
    Category.SECRETS: (
        "Exposed secrets can be abused to access external systems, "
        "impersonate services, or exfiltrate sensitive data."
    ),
    Category.SUPPLY_CHAIN: (
        "Supply-chain attacks abuse dependency installation hooks to execute "
        "malicious code before users are aware."
    ),
    Category.CI_CD: (
        "CI/CD pipelines are high-value targets because they often run with "
        "elevated permissions and access to secrets."
    ),
    Category.CONFIGURATION: (
        "Misconfigurations can weaken security controls and expose systems "
        "to unintended access."
    ),
    Category.NETWORK: (
        "Unauthorized network access can enable data exfiltration, "
        "command-and-control communication, or lateral movement."
    ),
}


def enrich_why_it_matters(category: Category, base: str) -> str:
    """
    Enrich a finding explanation with real-world attacker context.
    """
    context = ATTACK_CONTEXT.get(category)
    if not context:
        return base
    return f"{base} {context}"
