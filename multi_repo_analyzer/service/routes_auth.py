from flask import Blueprint, jsonify, request, redirect
from multi_repo_analyzer.service.auth.github_oauth import get_auth_url, get_token, get_user_info
from multi_repo_analyzer.service.auth.jwt_handler import create_access_token
from multi_repo_analyzer.service.database.connection import get_db
from multi_repo_analyzer.service.database import crud
import uuid

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

@auth_bp.route("/github/login", methods=["GET"])
def github_login():
    state = str(uuid.uuid4())
    # In a real app, store state in redis/db to verify later
    url = get_auth_url(state)
    return jsonify({"authorization_url": url, "state": state})

@auth_bp.route("/github/callback", methods=["POST"])
def github_callback():
    data = request.json
    code = data.get("code")
    state = data.get("state") # Verify this state if stored

    if not code:
        return jsonify({"message": "No code provided"}), 400

    try:
        token_data = get_token(code)
        access_token = token_data.get("access_token")
        
        user_info = get_user_info(access_token)
        
        # Save user to DB
        db = next(get_db())
        user = crud.get_user_by_github_id(db, user_info["id"])
        if not user:
            user = crud.create_user(
                db, 
                github_id=user_info["id"],
                username=user_info["login"],
                avatar_url=user_info["avatar_url"],
                email=user_info.get("email")
            )
        
        # Create app JWT
        jwt_token = create_access_token({"sub": str(user.id), "github_id": user.github_id})
        
        return jsonify({
            "access_token": jwt_token,
            "refresh_token": "dummy_refresh_token", # Implement real refresh logic
            "user": {
                "username": user.username,
                "avatar_url": user.avatar_url,
                "is_premium": user.is_premium
            }
        })
    except Exception as e:
        return jsonify({"message": str(e)}), 400

@auth_bp.route("/me", methods=["GET"])
# @require_auth  # Implement this decorator
def get_current_user():
    # Placeholder for checking auth header and getting user
    return jsonify({"message": "Me endpoint needs implementation"})
