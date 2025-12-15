from pathlib import Path

from multi_repo_analyzer.analyzer.static_code import StaticCodeAnalyzer
from multi_repo_analyzer.core import ScanContext


def _get_ast_finding(findings):
    for f in findings:
        if f.id == "STATIC-AST-CALL":
            return f
    return None


def test_install_context_boosts_confidence(tmp_path: Path):
    setup_py = tmp_path / "setup.py"
    setup_py.write_text("import os\nos.system('ls')")

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [setup_py]},
        max_file_size=1000,
    )

    findings = StaticCodeAnalyzer().analyze(context)
    ast_finding = _get_ast_finding(findings)

    assert ast_finding is not None
    assert ast_finding.confidence >= 0.85


def test_low_risk_context_reduces_confidence(tmp_path: Path):
    test_file = tmp_path / "tests" / "test_bad.py"
    test_file.parent.mkdir(parents=True)
    test_file.write_text("import os\nos.system('ls')")

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [test_file]},
        max_file_size=1000,
    )

    findings = StaticCodeAnalyzer().analyze(context)
    ast_finding = _get_ast_finding(findings)

    assert ast_finding is not None
    assert ast_finding.confidence <= 0.6
