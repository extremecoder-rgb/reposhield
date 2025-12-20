# Purpose:
# Provide a read-only, safe Q&A interface over scan results.
#
# AI is allowed to:
# - Explain findings
# - Clarify risks
# - Educate users
#
# AI is NOT allowed to:
# - Detect new threats
# - Execute code
# - Declare malware
# - Override scan verdicts

from typing import Optional

from multi_repo_analyzer.core.ai.contract import AIContext


SYSTEM_PROMPT = """
You are a security assistant answering questions about a repository scan.

STRICT RULES:
- Answer ONLY using the provided scan context.
- Do NOT invent threats, behaviors, or conclusions.
- Do NOT say something is malware.
- Do NOT provide commands or code.
- If the scan does not support a claim, say:
  "The scan does not provide enough evidence."
- Keep answers concise, neutral, and educational.
"""


DISALLOWED_QUESTION_PATTERNS = [
    "is this malware",
    "execute",
    "run this",
    "how to exploit",
    "how to attack",
    "bypass",
    "weaponize",
]


def _is_question_allowed(question: str) -> bool:
    q = question.lower()
    return not any(pattern in q for pattern in DISALLOWED_QUESTION_PATTERNS)


def build_qa_prompt(context: AIContext, question: str) -> str:
    """
    Build a constrained prompt for answering a user question
    using only sanitized scan context.
    """

    findings_lines = []
    for f in context.findings:
        findings_lines.append(
            f"- {f.category} ({f.severity}): {f.message}"
        )

    findings_text = "\n".join(findings_lines) or "No significant findings."

    return f"""
Scan Verdict: {context.verdict}
Risk Score: {context.risk_score}

Findings:
{findings_text}

User Question:
{question}

Task:
Answer the question using ONLY the scan information above.
"""


def ask_ai_about_repo(
    context: AIContext,
    question: str,
    llm_client,
) -> str:
    """
    Answer a user question about the repository scan.

    Safety guarantees:
    - Rejects unsafe questions
    - Fallback on AI failure
    - No side effects
    """

    if not _is_question_allowed(question):
        return (
            "This question cannot be answered safely. "
            "Please ask about the scan results or detected risks."
        )

    prompt = build_qa_prompt(context, question)

    try:
        response: Optional[str] = llm_client.generate_text(
            system_prompt=SYSTEM_PROMPT,
            user_prompt=prompt,
            max_tokens=250,
        )
    except Exception:
        return (
            "AI is currently unavailable. "
            "The static scan results remain authoritative."
        )

    if not response or not response.strip():
        return (
            "AI could not generate a reliable answer. "
            "Please refer to the scan report."
        )

    return response.strip()
