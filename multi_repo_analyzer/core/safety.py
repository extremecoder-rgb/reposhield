class ScanLimitExceeded(Exception):
    """Raised when a scan exceeds safe limits."""
    pass


class ScanGuard:
    """
    Enforces hard safety limits during scanning.
    This is deterministic and OS-independent.
    """

    def __init__(self, max_files: int = 10_000):
        self.max_files = max_files
        self.files_seen = 0

    def tick(self) -> None:
        self.files_seen += 1
        if self.files_seen > self.max_files:
            raise ScanLimitExceeded(
                f"Scan aborted: exceeded {self.max_files} files"
            )
