# Purpose :-
# Define the Finding and ScanReport contracts.
# These objects are immutable facts, not logic containers.

from dataclasses import dataclass, asdict
from typing import Optional

from .enums import Severity, Category

#This is the Finding model
@dataclass(frozen=True)
class Finding:
    id: str
    category: Category
    severity: Severity
    confidence: float  # 0.0 → 1.0

    file_path: str
    line_number: Optional[int]

    message: str
    why_it_matters: str
    recommendation: str

    def to_dict(self) -> dict:
        data = asdict(self)
        data["category"] = self.category.value
        data["severity"] = self.severity.value
        return data
    
# Why this design matters
# frozen=True → analyzers cannot mutate findings
# confidence forces honesty (no false certainty)
# why_it_matters + recommendation enforce explainability


#This is the ScanReport model

from dataclasses import dataclass, field
from typing import List
from datetime import datetime


@dataclass
class ScanReport:
    tool_name: str
    tool_version: str
    scanned_path: str
    created_at: str = field(
        default_factory=lambda: datetime.utcnow().isoformat()
    )

    findings: List[Finding] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "tool": {
                "name": self.tool_name,
                "version": self.tool_version,
            },
            "scan": {
                "path": self.scanned_path,
                "created_at": self.created_at,
            },
            "findings": [f.to_dict() for f in self.findings],
        }
    

# :)
# We do not compute risk here.
# That comes later in the scoring engine.

