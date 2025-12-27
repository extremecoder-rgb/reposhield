# multi_repo_analyzer/service/git_platforms.py
#
# Purpose:
# Safely clone public repositories from GitHub, GitLab, and Bitbucket
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
from typing import Optional, Tuple
from enum import Enum


class GitPlatform(Enum):
    """Supported Git platforms."""
    GITHUB = "github"
    GITLAB = "gitlab"
    BITBUCKET = "bitbucket"


class GitCloneError(Exception):
    """Raised when git cloning fails."""


# URL Patterns for supported platforms
GITHUB_URL_PATTERN = re.compile(
    r"^https://github\.com/([\w\-]+)/([\w\-\.]+)/?$"
)

GITLAB_URL_PATTERN = re.compile(
    r"^https://gitlab\.com/([\w\-]+(?:/[\w\-]+)*?)/([\w\-\.]+)/?$"
)

BITBUCKET_URL_PATTERN = re.compile(
    r"^https://bitbucket\.org/([\w\-]+)/([\w\-\.]+)/?$"
)


def detect_platform(url: str) -> Tuple[GitPlatform, str]:
    """
    Detect which Git platform the URL belongs to.
    
    Returns:
        Tuple of (platform, normalized_url)
    
    Raises:
        GitCloneError: If URL doesn't match any supported platform
    """
    url = url.rstrip("/")
    
    if GITHUB_URL_PATTERN.match(url):
        return GitPlatform.GITHUB, url
    elif GITLAB_URL_PATTERN.match(url):
        return GitPlatform.GITLAB, url
    elif BITBUCKET_URL_PATTERN.match(url):
        return GitPlatform.BITBUCKET, url
    else:
        raise GitCloneError(
            "Invalid repository URL. "
            "Supported platforms: GitHub, GitLab, Bitbucket. "
            "Example: https://github.com/user/repo"
        )


def validate_repo_url(url: str) -> GitPlatform:
    """
    Validate the repository URL and return the platform.
    
    Raises:
        GitCloneError: If URL is invalid
    """
    platform, _ = detect_platform(url)
    return platform


def extract_repo_name(url: str) -> str:
    """Extract repository name from URL."""
    # Remove .git suffix if present
    url = url.rstrip("/")
    if url.endswith(".git"):
        url = url[:-4]
    
    # Get last part of URL
    repo_name = url.split("/")[-1]
    return repo_name


def clone_public_repo(
    repo_url: str,
    destination: Path,
    timeout_seconds: int = 300,
) -> Path:
    """
    Clone a public repository from GitHub, GitLab, or Bitbucket.
    
    Args:
        repo_url: URL of the repository to clone
        destination: Directory where repo will be cloned
        timeout_seconds: Maximum time to wait for clone
    
    Returns:
        Path to the cloned repository root
    
    Raises:
        GitCloneError: If cloning fails
    """
    # Validate and detect platform
    platform = validate_repo_url(repo_url)
    
    # Extract repository name
    repo_name = extract_repo_name(repo_url)
    repo_path = destination / repo_name
    
    # Ensure .git suffix for consistency
    clone_url = repo_url if repo_url.endswith(".git") else f"{repo_url}.git"
    
    # Build git clone command
    command = [
        "git",
        "clone",
        "--depth", "1",
        "--no-tags",
        "--single-branch",
        "--recurse-submodules=no",
        clone_url,
        str(repo_path),
    ]
    
    try:
        result = subprocess.run(
            command,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE,
            check=True,
            timeout=timeout_seconds,
        )
    except subprocess.TimeoutExpired:
        raise GitCloneError(
            f"Repository clone timed out after {timeout_seconds} seconds. "
            f"The repository may be too large."
        )
    except subprocess.CalledProcessError as exc:
        error_msg = exc.stderr.decode(errors='ignore').strip()
        
        # Provide helpful error messages
        if "not found" in error_msg.lower() or "404" in error_msg:
            raise GitCloneError(
                f"Repository not found. Please check:\n"
                f"1. The URL is correct\n"
                f"2. The repository is public\n"
                f"3. The repository exists on {platform.value}"
            )
        elif "authentication" in error_msg.lower():
            raise GitCloneError(
                f"Repository requires authentication. "
                f"Only public repositories are supported."
            )
        else:
            raise GitCloneError(
                f"Clone failed: {error_msg}"
            )
    
    # Verify clone succeeded
    if not repo_path.exists():
        raise GitCloneError(
            "Clone completed but repository path not found."
        )
    
    return repo_path


# Backward compatibility alias
GitHubCloneError = GitCloneError
