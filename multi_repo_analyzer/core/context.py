# Purpose :-
# ScanContext is the shared read-only state passed to analyzers.
# No analyzer should access globals or the filesystem directly.

from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List


@dataclass(frozen=True)
class ScanContext:
    root_path: Path

    # language -> list of file paths
    files_by_language: Dict[str, List[Path]]

    # hard limits
    max_file_size: int

# This keeps analyzers:
# deterministic
# testable
# isolated