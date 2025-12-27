import os
from flask import Flask
from flask_cors import CORS

from multi_repo_analyzer.service.routes import api_bp
from multi_repo_analyzer.service.routes_auth import auth_bp
from multi_repo_analyzer.service.routes_payments import payments_bp
from multi_repo_analyzer.service.database.connection import init_db


def create_app() -> Flask:
    app = Flask(__name__)

    # Enable CORS
    # Allow all origins for development to prevent CORS issues
    CORS(
        app,
        resources={r"/*": {"origins": "*"}},
        supports_credentials=True
    )

    # Initialize Database
    with app.app_context():
        init_db()

    # Register API routes
    app.register_blueprint(api_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(payments_bp)

    return app

# Expose 'app' for Gunicorn
app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    # Using 0.0.0.0 to make it accessible in the cloud
    app.run(host="0.0.0.0", port=port, debug=True)