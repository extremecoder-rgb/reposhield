# Confidence Model

Confidence represents **certainty**, not severity.

## Confidence Ranges

- **0.2** → **Suppressed/Benign**: Known noise (e.g., SVG paths, test data). Virtually zero impact on risk.
- **0.3 – 0.5** → **Informational**: Weak string-level signals without correlation.
- **0.6 – 0.75** → **Suspicious**: Pattern matched in source paths but lacks structural confirmation.
- **0.8 – 1.0** → **Confirmed**: AST-confirmed dangerous calls or high-signal malicious patterns.

## What Increases Confidence

- **AST-level confirmation**: Parsing code into a tree to verify actual function calls.
- **Path Context**: Code residing in `/src` or critical entry points like `setup.py`.
- **Execution in install/CI contexts**: Patterns found in files that run at install time.

## What Reduces Confidence

- **Suppression Heuristics**: Detection of SVGs, localized strings, or common frontend assets.
- **Path Context**: Detections in `/tests`, `/docs`, or UI `/components`.
- **Isolation**: Weak signals that don't correlate with other suspicious behaviors.

## Implementation Detail

The risk engine uses `confidence²` in its scoring formula. This creates a steep penalty for lower confidence findings:
- A `High` severity finding with **0.8** confidence has **64%** of its raw score.
- A `High` severity finding with **0.3** confidence has only **9%** of its raw score.
