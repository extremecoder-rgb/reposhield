# Purpose :-
# Define the Analyzer contract.
# Every analyzer:
# has a name
# declares supported languages
# receives a ScanContext
# returns list[Finding]

from abc import ABC, abstractmethod
from typing import List, Set

from multi_repo_analyzer.core import Finding, ScanContext


class Analyzer(ABC):
    """
    Base class for all analyzers.

    Analyzers must be:
    - deterministic
    - side-effect free
    - read-only
    """

    name: str
    supported_languages: Set[str]

    @abstractmethod
    def analyze(self, context: ScanContext) -> List[Finding]:
        """
        Perform analysis and return a list of Findings.

        This method must NEVER raise.
        """
        raise NotImplementedError
