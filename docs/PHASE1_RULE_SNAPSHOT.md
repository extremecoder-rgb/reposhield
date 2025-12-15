# Phase 1 Rule Snapshot

## Static Code Analyzer
- Detects os.system
- Detects eval / exec
- AST confirmation for dangerous calls

## Obfuscation Analyzer
- Base64 payload detection
- High-entropy strings
- Minified code heuristics

## Secrets Analyzer
- High-entropy secrets
- Known API key patterns

## Dependency Analyzer
- postinstall hooks
- setup.py execution
- remote downloads

## CI/CD Analyzer
- Unpinned GitHub Actions
- Secrets in CI scripts
- Arbitrary shell execution
