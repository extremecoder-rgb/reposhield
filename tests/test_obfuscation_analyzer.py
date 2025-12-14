from pathlib import Path

from multi_repo_analyzer.analyzer.obfuscation import ObfuscationAnalyzer
from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.core import ScanContext


def test_obfuscation_base64_detection(tmp_path: Path):
    encoded = "aGVsbG93b3JsZA==" * 10  # long base64-like string
    file_path = tmp_path / "test.py"
    file_path.write_text(encoded)

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [file_path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(ObfuscationAnalyzer())

    findings = registry.run(context)

    assert any("encoded string" in f.message.lower() for f in findings)
