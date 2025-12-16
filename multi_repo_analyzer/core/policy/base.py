from abc import ABC, abstractmethod
from typing import Tuple

from .decisions import PolicyResult


class BasePolicy(ABC):
    """
    A policy decides what action to take
    based on final scan results.

    Policies do NOT detect risk.
    They decide consequences.
    """

    name: str

    @abstractmethod
    def evaluate(
        self,
        *,
        score: float,
        verdict: str,
    ) -> PolicyResult:
        """
        Decide what action to take.

        Inputs:
            score   -> final normalized risk score (0–100)
            verdict -> SAFE / CAUTION / RISKY

        Output:
            PolicyResult
        """
        raise NotImplementedError
