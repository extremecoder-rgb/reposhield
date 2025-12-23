# Purpose:
# Safely fetch a public GitHub repository to a temporary directory.
#
# This module:
# - Validates GitHub URLs
# - Performs a shallow clone
# - Does NOT execute code
# - Does NOT touch the engine

import re
import shutil
import subprocess
import tempfile
from pathlib import Path


GITHUB_REPO_REGEX = re.compile(
    r"^https://github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/?$"
)


class InvalidGitHubRepo(Exception):
    """Raised when a GitHub repo URL is invalid or unsupported."""


def clone_public_repo(repo_url: str) -> Path:
    """
    Clone a public GitHub repository into a temporary directory.

    Returns:
        Path to the cloned repository.

    Raises:
        InvalidGitHubRepo
        RuntimeError on clone failure
    """

    if not GITHUB_REPO_REGEX.match(repo_url):
        raise InvalidGitHubRepo("Invalid or unsupported GitHub repository URL.")

    temp_dir = Path(tempfile.mkdtemp(prefix="repo_scan_"))

    try:
        result = subprocess.run(
            [
                "git",
                "clone",
                "--depth",
                "1",
                repo_url,
                str(temp_dir),
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE,
            timeout=300,
            check=False,
        )

        if result.returncode != 0:
            raise RuntimeError(
                f"Git clone failed: {result.stderr.decode(errors='ignore')}"
            )

        return temp_dir

    except Exception:
        # Cleanup on failure
        shutil.rmtree(temp_dir, ignore_errors=True)
        raise
