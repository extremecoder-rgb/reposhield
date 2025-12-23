# Rule Snapshot

## Static Code Analyzer (Python)
- **High Confidence**: AST-confirmed dangerous calls (`os.system`, `subprocess.run`, `eval`, `exec`).
- **Low Confidence**: String-level keyword detection with path-aware confidence (lower in tests/docs).

## Obfuscation Analyzer (JS, Python, Bash)
- **Base64 Detection**: Scans for long (128ch+) encoded strings.
- **Minification Heuristics**: Detects unformatted code in source paths.
- **MERN/Frontend Intelligence**: 
    - Auto-skips `dist/build/vendor` folders.
    - Specialized SVG path detection (ignores large coordinate strings).
    - Ignores `.min.js` and `.bundle.js` by default.
- **Critical Signal**: "Decode + Execute" pattern (e.g., `atob` followed by `eval`).

## Secrets Analyzer (Global)
- **Pattern Matching**: Strong regex for AWS Keys, GitHub Tokens, and generic API keys.
- **High Entropy**: Scans for high-entropy strings (32ch+).
- **Frontend Noise Reduction**: 
    - Increased entropy thresholds for React components to avoid false positives from long class names or assets.
    - Confidence penalty for findings in UI paths (`Components/`, `Pages/`, `Assets/`).

## Dependency Analyzer
- Scans for `postinstall` hooks in `package.json`.
- Detects unsafe execution in `setup.py`.
- Flags remote binary downloads during installation.

## CI/CD Analyzer
- Flags unpinned or suspicious GitHub Actions.
- Detects secrets or credentials hardcoded in CI workflows (`.github/workflows`).
- Identifies arbitrary shell execution in runner context.
