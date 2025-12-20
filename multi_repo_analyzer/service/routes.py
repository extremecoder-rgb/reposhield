from flask import Blueprint, jsonify, request

from multi_repo_analyzer.service.scan_service import scan_github_repository
from multi_repo_analyzer.service.github import GitHubCloneError

api_bp = Blueprint("api", __name__)


@api_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify(
        {
            "status": "ok",
            "service": "multi-repo-analyzer",
        }
    )


@api_bp.route("/scan", methods=["POST"])
def scan_repository():
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
    policy = data.get("policy", "standard")

    try:
        report = scan_github_repository(
            repo_url=repo_url,
            policy_name=policy,
        )
    except GitHubCloneError as exc:
        return jsonify(
            {
                "error": "Clone failed",
                "message": str(exc),
            }
        ), 400
    except Exception as exc:
        return jsonify(
            {
                "error": "Scan failed",
                "message": str(exc),
            }
        ), 500

    return jsonify(report), 200
