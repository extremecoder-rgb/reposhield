# Purpose:
# API route definitions.
# No business logic here.

from flask import Blueprint, jsonify

api_bp = Blueprint("api", __name__)


@api_bp.route("/health", methods=["GET"])
def health_check():
    """
    Health check endpoint.
    Used to verify the service is running.
    """
    return jsonify(
        {
            "status": "ok",
            "service": "multi-repo-analyzer",
        }
    )
