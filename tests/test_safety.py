import pytest
from pathlib import Path

from multi_repo_analyzer.core.safety import ScanGuard, ScanLimitExceeded
from multi_repo_analyzer.ingest.walker import walk_repository


def test_scan_guard_triggers(tmp_path: Path):
    # create many files
    for i in range(20):
        (tmp_path / f"f{i}.py").write_text("print(1)")

    guard = ScanGuard(max_files=5)

    with pytest.raises(ScanLimitExceeded):
        walk_repository(tmp_path, guard=guard)
