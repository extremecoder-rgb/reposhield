# Risk Scoring

Risk score is a weighted aggregation of findings.

## Formula

finding_score =
    severity_weight
  × confidence
  × category_weight

Total score is normalized to a 0–100 range.

## Verdict Mapping

- < 20 → SAFE
- 20–49 → CAUTION
- ≥ 50 → RISKY

## Design Intent

- No single finding dominates unless justified
- Correlated findings matter more than isolated ones
- Scores are stable and predictable

The score reflects *blast radius*, not intent.
