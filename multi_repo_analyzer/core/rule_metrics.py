from collections import defaultdict
from typing import Dict


class RuleMetrics:
    """
    Lightweight in-memory rule usage tracker.
    No persistence. No side effects.
    """

    def __init__(self) -> None:
        self._counts: Dict[str, int] = defaultdict(int)

    def record(self, rule_id: str) -> None:
        self._counts[rule_id] += 1

    def snapshot(self) -> Dict[str, Dict]:
        metrics = {}

        for rule_id, count in self._counts.items():
            metrics[rule_id] = {
                "fires": count,
                "stability": "stable" if count >= 3 else "experimental",
            }

        return metrics
