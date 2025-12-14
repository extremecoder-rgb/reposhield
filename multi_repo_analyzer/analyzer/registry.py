# Purpose : -
# Central place to:
# register analyzers
# run them safely
# isolate failures
# aggregate findings
# This is the engine control loop.


from typing import List

from multi_repo_analyzer.core import Finding, ScanContext
from .base import Analyzer
from .exceptions import AnalyzerError


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
                findings.extend(analyzer_findings)
            except Exception as exc:
                # Analyzer failed — isolate it
                error_finding = Finding(
                    id="ANALYZER-ERROR",
                    category=None,  # allowed only here
                    severity=None,  # allowed only here
                    confidence=0.1,
                    file_path="<analyzer>",
                    line_number=None,
                    message=f"Analyzer '{analyzer.name}' failed",
                    why_it_matters=str(exc),
                    recommendation="Fix or disable the analyzer",
                )
                findings.append(error_finding)

        return findings
