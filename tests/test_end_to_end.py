import json
import subprocess
import sys
from pathlib import Path


def run_scan(path: Path):
    result = subprocess.run(
        [sys.executable, "-m", "multi_repo_analyzer.cli", "scan", str(path)],
        capture_output=True,
        text=True,
    )
    return result.returncode, json.loads(result.stdout)


def test_clean_repo_is_safe():
    path = Path("tests/fixtures/clean_repo")
    code, report = run_scan(path)

    assert code == 0
    assert report["risk"]["verdict"] == "SAFE"
    assert report["findings"] == []


def test_malicious_repo_is_risky():
    path = Path("tests/fixtures/malicious_repo")
    code, report = run_scan(path)

    assert code == 2
    assert report["risk"]["verdict"] == "RISKY"
    assert len(report["findings"]) >= 3
