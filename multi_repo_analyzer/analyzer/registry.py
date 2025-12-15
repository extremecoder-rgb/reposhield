# Purpose :-
# Central place to:
# register analyzers
# run them safely
# isolate failures
# aggregate findings
# attach system metadata (immutably)

from typing import List

from multi_repo_analyzer.core import Finding, ScanContext
from .base import Analyzer


class AnalyzerRegistry:
    def __init__(self) -> None:
        self._analyzers: List[Analyzer] = []

    def register(self, analyzer: Analyzer) -> None:
        self._analyzers.append(analyzer)

    def run(self, context: ScanContext) -> List[Finding]:
        findings: List[Finding] = []

        for analyzer in self._analyzers:
            try:
                analyzer_findings = analyzer.analyze(context)
            except Exception as exc:
                findings.append(
                    Finding(
                        id="ANALYZER-ERROR",
                        category=None,
                        severity=None,
                        confidence=0.1,
                        file_path="<analyzer>",
                        line_number=None,
                        message=f"Analyzer '{analyzer.name}' failed",
                        why_it_matters=str(exc),
                        recommendation="Fix or disable the analyzer",
                        metadata={"analyzer": analyzer.name},
                    )
                )
                continue

            for finding in analyzer_findings:
                enriched = Finding(
                    id=finding.id,
                    category=finding.category,
                    severity=finding.severity,
                    confidence=finding.confidence,
                    file_path=finding.file_path,
                    line_number=finding.line_number,
                    message=finding.message,
                    why_it_matters=finding.why_it_matters,
                    recommendation=finding.recommendation,
                    metadata={
                        **finding.metadata,
                        "rule_tracked": "true",
                        "analyzer": analyzer.name,
                    },
                )

                findings.append(enriched)

        return findings
