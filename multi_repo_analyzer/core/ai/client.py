# Purpose:
# Gemini client wrapper used ONLY for explainability.
# This client is non-critical and must never affect core scans.

import os
import logging
from typing import Optional

from multi_repo_analyzer.core.ai.contract import AIContext
from multi_repo_analyzer.core.ai.errors import AIUnavailableError

logger = logging.getLogger(__name__)


class GeminiClient:
    """
    Safe wrapper around Gemini API.

    IMPORTANT:
    - Read-only usage
    - Best-effort only
    - Failures must degrade gracefully
    """

    def __init__(self, timeout_seconds: int = 10) -> None:
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.timeout = timeout_seconds

        if not self.api_key:
            raise AIUnavailableError(
                "GEMINI_API_KEY not set. AI features are disabled."
            )

        # Lazy import to avoid hard dependency when AI is disabled
        try:
            import google.generativeai as genai
        except ImportError as exc:
            raise AIUnavailableError(
                "Gemini SDK not installed."
            ) from exc

        genai.configure(api_key=self.api_key)
        self._model = genai.GenerativeModel("gemini-pro")

    def generate(self, prompt: str) -> Optional[str]:
        """
        Generate AI output.

        Returns:
            str on success
            None on failure
        """
        try:
            response = self._model.generate_content(
                prompt,
                request_options={"timeout": self.timeout},
            )

            if not response or not response.text:
                return None

            return response.text.strip()

        except Exception as exc:
            # NEVER propagate AI errors
            logger.warning("Gemini generation failed: %s", exc)
            return None
