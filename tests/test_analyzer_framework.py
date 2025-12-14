from multi_repo_analyzer.analyzer import Analyzer, AnalyzerRegistry
from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext
from pathlib import Path


class DummyAnalyzer(Analyzer):
    name = "dummy"
    supported_languages = {"python"}

    def analyze(self, context: ScanContext):
        return [
            Finding(
                id="DUMMY-001",
                category=Category.CONFIGURATION,
                severity=Severity.LOW,
                confidence=1.0,
                file_path="dummy",
                line_number=None,
                message="Dummy finding",
                why_it_matters="Test analyzer framework",
                recommendation="Remove dummy analyzer",
            )
        ]


def test_analyzer_registry_runs_analyzer(tmp_path: Path):
    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": []},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(DummyAnalyzer())

    findings = registry.run(context)

    assert len(findings) == 1
    assert findings[0].id == "DUMMY-001"
