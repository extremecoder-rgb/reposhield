# Purpose :-
# Define the Finding and ScanReport contracts.
# These objects are immutable facts, not logic containers.

from dataclasses import dataclass, field, asdict
from typing import Optional, Dict, List
from datetime import datetime, UTC

from .enums import Severity, Category   # ✅ ONLY local imports


@dataclass(frozen=True)
class Finding:
    id: str
    category: Optional[Category]
    severity: Optional[Severity]
    confidence: float  # 0.0 → 1.0

    file_path: str
    line_number: Optional[int]

    message: str
    why_it_matters: str
    recommendation: str

    # Step 10 metadata (safe, immutable)
    metadata: Dict[str, str] = field(default_factory=dict)

    def to_dict(self) -> dict:
        data = asdict(self)
        data["category"] = self.category.value if self.category else None
        data["severity"] = self.severity.value if self.severity else None
        return data


@dataclass
class ScanReport:
    tool_name: str
    tool_version: str
    scanned_path: str
    findings: List[Finding]

    created_at: str = field(
        default_factory=lambda: datetime.now(UTC).isoformat()
    )
