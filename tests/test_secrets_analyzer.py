from pathlib import Path

from multi_repo_analyzer.analyzer.secrets import SecretsAnalyzer
from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.core import ScanContext


def test_secrets_analyzer_detects_api_key(tmp_path: Path):
    code = 'API_KEY = "abcd1234efgh5678ijkl"'
    file_path = tmp_path / "config.py"
    file_path.write_text(code)

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [file_path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(SecretsAnalyzer())

    findings = registry.run(context)

    assert any("secret" in f.message.lower() for f in findings)
