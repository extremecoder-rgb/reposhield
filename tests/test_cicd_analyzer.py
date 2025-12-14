from pathlib import Path

from multi_repo_analyzer.analyzer.cicd import CICDAnalyzer
from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.core import ScanContext


def test_unpinned_action_detected(tmp_path: Path):
    wf = """
name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
    """
    path = tmp_path / ".github/workflows/ci.yml"
    path.parent.mkdir(parents=True)
    path.write_text(wf)

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"config": [path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(CICDAnalyzer())

    findings = registry.run(context)

    assert any("unpinned" in f.message.lower() for f in findings)
