from flask import Blueprint, jsonify, request

from multi_repo_analyzer.service.scan_service import (
    scan_repository as scan_repo_service,
    scan_repository_ml_obfuscation as scan_repo_ml_service
)
from multi_repo_analyzer.service.git_platforms import GitCloneError

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
        report = scan_repo_service(
            repo_url=repo_url,
            policy_name=policy,
        )
    except GitCloneError as exc:
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


@api_bp.route("/scan-ml-obfuscation", methods=["POST"])
def scan_ml_obfuscation():
    """Scan repository for obfuscation (uses same static analysis as regular scan)."""
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

    try:
        report = scan_repo_ml_service(
            repo_url=repo_url,
        )
    except GitCloneError as exc:
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