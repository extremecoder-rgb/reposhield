# Detection Rules

Rules detect *signals*, not verdicts.

A single rule can never declare a repository malicious.

## Rule Categories

- Code Execution
- Obfuscation
- Secrets
- Supply Chain
- CI/CD
- Configuration
- Network

## Rule Strength

Rules are classified as:
- Weak (string/regex)
- Strong (AST, structural)
- Contextual (path-aware)

Weak rules require correlation to become meaningful.

## Rule Guarantees

- No rule mutates repository state
- No rule executes code
- All rules provide explanations

Rules are intentionally conservative.
