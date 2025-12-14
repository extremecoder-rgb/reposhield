import subprocess
import sys
from pathlib import Path


def test_cli_help():
    result = subprocess.run(
        [sys.executable, "-m", "multi_repo_analyzer.cli", "--help"],
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0
    assert "scan" in result.stdout
