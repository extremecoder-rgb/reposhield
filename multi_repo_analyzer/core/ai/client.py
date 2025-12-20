# Purpose:
# Gemini client wrapper used ONLY for explainability.
# This client is non-critical and must never affect core scans.

import os
import logging
from typing import Optional

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

        # ✅ NEW SDK (google.genai)
        try:
            from google import genai
        except ImportError as exc:
            raise AIUnavailableError(
                "google-genai SDK not installed."
            ) from exc

        self._client = genai.Client(api_key=self.api_key)

        # ✅ Use a CURRENT, supported model
        self._model_name = "models/gemini-2.5-flash"

    def generate(self, prompt: str) -> Optional[str]:
        """
        Generate AI output.

        Returns:
            str on success
            None on failure
        """
        try:
            response = self._client.models.generate_content(
                model=self._model_name,
                contents=prompt,
            )

            if not response or not response.text:
                return None

            return response.text.strip()

        except Exception as exc:
            # NEVER propagate AI errors
            logger.warning("Gemini generation failed: %s", exc)
            return None
