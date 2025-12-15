# Purpose:
# Correlate related findings so multiple weak signals
# reinforce each other.
#
# Findings are IMMUTABLE.
# Correlation returns NEW Finding objects with adjusted confidence.

from collections import defaultdict
from typing import List

from multi_repo_analyzer.core import Finding


def correlate_findings(findings: List[Finding]) -> List[Finding]:
    by_file = defaultdict(list)
    boosted: List[Finding] = []

    for f in findings:
        by_file[f.file_path].append(f)

    for file_findings in by_file.values():
        ids = {f.id for f in file_findings}
        boost = 0.0

        # Execution + dependency install hook
        if _has(ids, "STATIC-AST-CALL") and _has(ids, "DEPENDENCY"):
            boost = max(boost, 0.15)

        # Obfuscation + execution
        if _has(ids, "OBFUSCATION") and _has(ids, "STATIC-AST-CALL"):
            boost = max(boost, 0.10)

        # Secrets + CI
        if _has(ids, "SECRETS") and _has(ids, "CICD"):
            boost = max(boost, 0.10)

        for f in file_findings:
            if boost > 0:
                boosted.append(_with_boost(f, boost))
            else:
                boosted.append(f)

    return boosted


def _has(ids: set[str], keyword: str) -> bool:
    return any(keyword in i for i in ids)


def _with_boost(finding: Finding, amount: float) -> Finding:
    new_confidence = min(1.0, round(finding.confidence + amount, 2))

    return Finding(
        id=finding.id,
        category=finding.category,
        severity=finding.severity,
        confidence=new_confidence,
        file_path=finding.file_path,
        line_number=finding.line_number,
        message=finding.message,
        why_it_matters=finding.why_it_matters,
        recommendation=finding.recommendation,
    )
