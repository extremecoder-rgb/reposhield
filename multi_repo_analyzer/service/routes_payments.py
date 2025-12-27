from flask import Blueprint, jsonify

payments_bp = Blueprint("payments", __name__, url_prefix="/payments")

@payments_bp.route("/create-checkout", methods=["POST"])
def create_checkout():
    return jsonify({"message": "Not implemented yet"})
