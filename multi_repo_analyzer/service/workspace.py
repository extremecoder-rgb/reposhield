# multi_repo_analyzer/service/workspace.py
#
# Purpose:
# Create and manage a temporary workspace for scanning
# untrusted repositories.
#
# GUARANTEES:
# - Unique workspace per scan
# - Automatic cleanup
# - No persistence on failure

import shutil
import tempfile
from pathlib import Path
from contextlib import contextmanager


class WorkspaceError(Exception):
    """Raised when workspace creation or cleanup fails."""


@contextmanager
def temporary_workspace(prefix: str = "repo_scan_"):
    """
    Context manager that provides a temporary directory
    and guarantees cleanup.

    Usage:
        with temporary_workspace() as path:
            # use path
    """

    temp_dir = None

    try:
        temp_dir = Path(
            tempfile.mkdtemp(prefix=prefix)
        ).resolve()

        yield temp_dir

    except Exception as exc:
        raise WorkspaceError(
            f"Workspace error: {exc}"
        ) from exc

    finally:
        if temp_dir and temp_dir.exists():
            try:
                shutil.rmtree(temp_dir, ignore_errors=True)
            except Exception:
                # NEVER block cleanup failures
                pass
