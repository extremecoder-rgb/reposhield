# Purpose :-
# Safely walk a repository and build the file index.
# Hard rules enforced here:
# No .git/
# No node_modules/
# No binaries
# Max file size
# Read-only

from pathlib import Path
from typing import Dict, List
import mimetypes

from .classifier import classify_file


IGNORED_DIRS = {
    ".git",
    "node_modules",
    ".venv",
    "__pycache__",
}


DEFAULT_MAX_FILE_SIZE = 1_000_000  # 1 MB


def is_binary_file(path: Path) -> bool:
    mime_type, _ = mimetypes.guess_type(path)
    if mime_type is None:
        return True
    return not mime_type.startswith("text")


def walk_repository(
    root_path: Path,
    max_file_size: int = DEFAULT_MAX_FILE_SIZE,
) -> Dict[str, List[Path]]:
    if not root_path.exists():
        raise FileNotFoundError(f"Path does not exist: {root_path}")

    files_by_language: Dict[str, List[Path]] = {}

    for path in root_path.rglob("*"):
        if not path.is_file():
            continue

        # Ignore directories by name
        if any(part in IGNORED_DIRS for part in path.parts):
            continue

        try:
            if path.stat().st_size > max_file_size:
                continue
        except OSError:
            continue

        if is_binary_file(path):
            continue

        language = classify_file(path)
        if not language:
            continue

        files_by_language.setdefault(language, []).append(path)

    return files_by_language
