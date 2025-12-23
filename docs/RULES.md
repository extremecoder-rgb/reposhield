# Detection Rules

Rules detect *signals*, not verdicts. A single rule can never declare a repository malicious; we rely on correlation and behavior-aware policies.

## Rule Categories

- **Code Execution**: `os.system`, `eval`, `exec`, and AST-confirmed dangerous calls.
- **Obfuscation**: Base64 encoding, minification, and high-entropy detection.
- **Secrets**: Pattern matching and Shannon Entropy scanners for credentials.
- **Supply Chain**: Scans for unsafe build hooks or remote binary fetching.
- **CI/CD**: Unpinned actions and hardcoded secrets in workflows.

## Rule Strength

- **Weak**: Simple string or regex matches (e.g., `os.system` in a string).
- **Strong**: AST-structural matches (e.g., an actual `os.system()` call).
- **Contextual**: Path-aware rules that adjust findings based on where they appear (e.g., source vs components).

## New Heuristic Layers

We have implemented two critical noise-reduction layers:
1. **Frontend Isolation**: Rules automatically adjust confidence when scanning UI components (JSX/TSX) to allow common patterns like inline coordinates.
2. **SVG/Asset Guard**: Specialized logic prevents coordinate strings and large bundled assets from being flagged as malicious obfuscation.

## Rule Guarantees

- **Stateless**: Rules do not mutate the repository or host state.
- **Static**: No code is execution; we only read and parse.
- **Explainable**: Every rule result includes a justification.
