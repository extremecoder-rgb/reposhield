# Purpose:
# API route definitions.
# This layer handles HTTP concerns only (validation, responses).
# NO scanning logic here.

from flask import Blueprint, jsonify, request
import re

api_bp = Blueprint("api", __name__)

# Simple GitHub repo URL pattern (public repos only)
GITHUB_REPO_PATTERN = re.compile(
    r"^https://github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/?$"
)


@api_bp.route("/health", methods=["GET"])
def health_check():
    """
    Health check endpoint.
    """
    return jsonify(
        {
            "status": "ok",
            "service": "multi-repo-analyzer",
        }
    )


@api_bp.route("/scan", methods=["POST"])
def scan_repository():
    """
    Accept a GitHub repository URL and validate input.

    This endpoint DOES NOT perform scanning yet.
    """
    if not request.is_json:
        return jsonify(
            {
                "error": "Invalid request",
                "message": "Content-Type must be application/json",
            }
        ), 400

    data = request.get_json(silent=True)
    if not data or "repo_url" not in data:
        return jsonify(
            {
                "error": "Invalid request",
                "message": "Missing 'repo_url' field",
            }
        ), 400

    repo_url = data["repo_url"]

    if not isinstance(repo_url, str):
        return jsonify(
            {
                "error": "Invalid request",
                "message": "'repo_url' must be a string",
            }
        ), 400

    if not GITHUB_REPO_PATTERN.match(repo_url):
        return jsonify(
            {
                "error": "Invalid repository URL",
                "message": "Only public GitHub repository URLs are supported",
            }
        ), 400

    # ✅ Stub response (no scanning yet)
    return jsonify(
        {
            "status": "accepted",
            "repo_url": repo_url,
            "message": "Repository URL accepted for scanning",
        }
    ), 202
