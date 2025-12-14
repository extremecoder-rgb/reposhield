from pathlib import Path

from multi_repo_analyzer.analyzer.static_code import StaticCodeAnalyzer
from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.core import ScanContext


def test_static_code_analyzer_detects_eval(tmp_path: Path):
    code = "eval('2 + 2')"
    file_path = tmp_path / "test.py"
    file_path.write_text(code)

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [file_path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(StaticCodeAnalyzer())

    findings = registry.run(context)

    assert any("eval" in f.message.lower() for f in findings)
