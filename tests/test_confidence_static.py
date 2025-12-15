from pathlib import Path

from multi_repo_analyzer.analyzer.static_code import StaticCodeAnalyzer
from multi_repo_analyzer.core import ScanContext


def test_os_system_in_tests_has_lower_confidence(tmp_path: Path):
    test_file = tmp_path / "tests" / "test_bad.py"
    test_file.parent.mkdir(parents=True)
    test_file.write_text("import os\nos.system('ls')")

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [test_file]},
        max_file_size=1000,
    )

    analyzer = StaticCodeAnalyzer()
    findings = analyzer.analyze(context)

    assert findings
    assert any(f.confidence < 0.8 for f in findings)
