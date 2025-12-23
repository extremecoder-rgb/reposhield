# Risk Scoring

Risk score is a weighted aggregation of findings.

## Formula

The score for a single finding is calculated as:

```
finding_score = severity_weight × category_weight × (confidence²)
```

- **Severity Weight**: LOW (1.0), MEDIUM (3.0), HIGH (7.0), CRITICAL (10.0)
- **Category Weight**: Categories like CODE_EXECUTION (1.5) or SUPPLY_CHAIN (1.6) carry more weight.
- **Confidence Dampening**: We use the square of confidence to dampen uncertain signals. A finding with 0.3 confidence (like a suppressed one) has only 9% of its potential impact.

Total score is normalized to a 0–100 range using a calibrated normalization factor.

## Verdict Mapping

Verdicts are behavior-first, score-second.

### If Dangerous Execution is detected:
- **≥ 40** → **RISKY** (High confidence malicious behavior)
- **< 40** → **CAUTION** (Dangerous patterns in non-critical paths)

### If NO Dangerous Execution is detected:
- **≥ 30** → **CAUTION** (Multiple suspicious patterns like obfuscation or secrets)
- **< 30** → **SAFE** (Common in legitimate repositories)

## Design Intent

- **No single finding dominates**: We cap individual finding scores.
- **Quantity Matters**: Multiple independent signals build confidence.
- **Behavior-Aware**: A repository with secrets but no execution is treated differently than one that decodes and executes code.
- **Suppression Impact**: Suppressed findings have their confidence reduced to 0.2, effectively eliminating their impact on the final score.
