# Confidence Model

Confidence represents **certainty**, not severity.

## Confidence Ranges

- 0.3 – 0.5 → Low confidence
- 0.6 – 0.75 → Medium confidence
- 0.8 – 1.0 → High confidence

## What Increases Confidence

- AST-level confirmation
- Execution in install or CI contexts
- Multiple correlated signals

## What Reduces Confidence

- Test files
- Utility scripts
- Common build patterns
- Isolated weak signals

## Important Rule

High severity with low confidence does NOT dominate risk.

Confidence exists to prevent false certainty.
