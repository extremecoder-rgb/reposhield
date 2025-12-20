# multi_repo_analyzer/service/github.py
#
# Purpose:
# Safely clone a public GitHub repository into a temporary workspace.
#
# SECURITY GUARANTEES:
# - Public repos only
# - Shallow clone
# - No credentials
# - No submodules
# - No persistence

import re
import subprocess
from pathlib import Path
from typing import Optional


class GitHubCloneError(Exception):
    """Raised when GitHub cloning fails."""


GITHUB_URL_PATTERN = re.compile(
    r"^https://github\.com/[\w\-]+/[\w\-\.]+/?$"
)


def validate_github_url(url: str) -> None:
    """
    Ensure the URL is a valid public GitHub repository.
    """
    if not GITHUB_URL_PATTERN.match(url):
        raise GitHubCloneError(
            "Invalid GitHub repository URL. "
            "Only public GitHub repos are supported."
        )


def clone_public_repo(
    repo_url: str,
    destination: Path,
    timeout_seconds: int = 30,
) -> Path:
    """
    Clone a public GitHub repository into destination.

    Returns:
        Path to the cloned repository root.
    """

    validate_github_url(repo_url)

    repo_name = repo_url.rstrip("/").split("/")[-1]
    repo_path = destination / repo_name

    command = [
        "git",
        "clone",
        "--depth", "1",
        "--no-tags",
        "--single-branch",
        "--recurse-submodules=no",
        repo_url,
        str(repo_path),
    ]

    try:
        subprocess.run(
            command,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE,
            check=True,
            timeout=timeout_seconds,
        )
    except subprocess.TimeoutExpired:
        raise GitHubCloneError(
            "GitHub clone timed out."
        )
    except subprocess.CalledProcessError as exc:
        raise GitHubCloneError(
            f"GitHub clone failed: {exc.stderr.decode(errors='ignore')}"
        )

    if not repo_path.exists():
        raise GitHubCloneError(
            "Clone completed but repository path not found."
        )

    return repo_path
