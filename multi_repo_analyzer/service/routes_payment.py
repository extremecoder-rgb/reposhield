# multi_repo_analyzer/service/routes_payment.py
"""Payment routes for premium features."""

import os
from flask import Blueprint, jsonify, request
from multi_repo_analyzer.service.payment import get_dodo_client, DodoPaymentsError

payment_bp = Blueprint("payment", __name__)

# Product ID for ML feature access (you'll need to create this in Dodo Payments dashboard)
ML_FEATURE_PRODUCT_ID = os.getenv("DODO_ML_PRODUCT_ID", "prod_ml_access")


@payment_bp.route("/create-checkout", methods=["POST"])
def create_checkout():
    """Create a checkout session for ML feature access."""
    data = request.get_json(silent=True)
    
    if not data:
        return jsonify({
            "error": "Invalid request",
            "message": "Request body must be JSON"
        }), 400
    
    customer_email = data.get("email")
    user_id = data.get("user_id")  # Optional: track which user is paying
    
    try:
        dodo_client = get_dodo_client()
        
        # Create checkout session
        session = dodo_client.create_checkout_session(
            product_id=ML_FEATURE_PRODUCT_ID,
            customer_email=customer_email,
            return_url=f"{request.host_url}payment/success",
            metadata={
                "user_id": user_id,
                "feature": "ml_scan",
            }
        )
        
        return jsonify({
            "session_id": session["session_id"],
            "checkout_url": session["checkout_url"],
        }), 200
    
    except DodoPaymentsError as e:
        return jsonify({
            "error": "Payment error",
            "message": str(e)
        }), 500
    except Exception as e:
        return jsonify({
            "error": "Server error",
            "message": str(e)
        }), 500


@payment_bp.route("/verify-payment", methods=["POST"])
def verify_payment():
    """Verify payment status for a session."""
    data = request.get_json(silent=True)
    
    if not data or "session_id" not in data:
        return jsonify({
            "error": "Invalid request",
            "message": "session_id is required"
        }), 400
    
    session_id = data["session_id"]
    
    try:
        dodo_client = get_dodo_client()
        payment_info = dodo_client.verify_payment(session_id)
        
        return jsonify({
            "paid": payment_info["paid"],
            "status": payment_info["status"],
            "customer_email": payment_info.get("customer_email"),
        }), 200
    
    except DodoPaymentsError as e:
        return jsonify({
            "error": "Payment verification error",
            "message": str(e)
        }), 500
    except Exception as e:
        return jsonify({
            "error": "Server error",
            "message": str(e)
        }), 500


@payment_bp.route("/webhook", methods=["POST"])
def payment_webhook():
    """
    Handle Dodo Payments webhooks.
    Configure this URL in your Dodo Payments dashboard.
    """
    # TODO: Implement webhook signature verification
    # TODO: Handle different event types (checkout.session.completed, etc.)
    
    data = request.get_json(silent=True)
    
    if not data:
        return jsonify({"error": "Invalid webhook payload"}), 400
    
    event_type = data.get("type")
    
    if event_type == "checkout.session.completed":
        # Payment successful
        session_data = data.get("data", {})
        session_id = session_data.get("session_id")
        customer_email = session_data.get("customer_email")
        
        # TODO: Store payment record in database
        # TODO: Grant ML access to user
        
        print(f"Payment completed: {session_id} for {customer_email}")
    
    return jsonify({"received": True}), 200
