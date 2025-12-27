from functools import wraps
from flask import request, jsonify, g
from .jwt_handler import decode_token
from ..database.connection import get_db
from ..database.crud import get_user_by_github_id

def get_current_user_token():
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return None
    token = auth_header.split(" ")[1]
    return decode_token(token)

def optional_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        payload = get_current_user_token()
        if payload:
            db = next(get_db())
            user = get_user_by_github_id(db, int(payload.get("github_id")))
            g.user = user
        else:
            g.user = None
        return f(*args, **kwargs)
    return decorated_function

def require_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        payload = get_current_user_token()
        if not payload:
            return jsonify({"message": "Authentication required", "error": "Unauthorized"}), 401
        
        db = next(get_db())
        user = get_user_by_github_id(db, int(payload.get("github_id")))
        if not user:
             return jsonify({"message": "User not found", "error": "Unauthorized"}), 401
        
        g.user = user
        return f(*args, **kwargs)
    return decorated_function
