# Purpose :-
# Very lightweight language classification by extension.

from pathlib import Path


EXTENSION_LANGUAGE_MAP = {
    ".py": "python",
    ".js": "javascript",
    ".ts": "javascript",
    ".sh": "bash",
    ".ps1": "powershell",
    ".yml": "config",
    ".yaml": "config",
    ".json": "config",
    ".toml": "config",
    ".ini": "config",
    ".cfg": "config",
}

def classify_file(path: Path) -> str | None:
    return EXTENSION_LANGUAGE_MAP.get(path.suffix.lower())
