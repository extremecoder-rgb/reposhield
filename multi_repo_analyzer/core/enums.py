# Purpose :-
# Centralize severity and category so:
# analyzers are consistent
# scoring is deterministic
# JSON output is stable

from enum import Enum


class Severity(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Category(Enum):
    CODE_EXECUTION = "code_execution"
    OBFUSCATION = "obfuscation"
    SECRETS = "secrets"
    DEPENDENCIES = "dependencies"
    CI_CD = "ci_cd"
    CONFIGURATION = "configuration"
    NETWORK = "network"
    SUPPLY_CHAIN = "supply_chain"
