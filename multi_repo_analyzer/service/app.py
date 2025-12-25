import os
from flask import Flask
from flask_cors import CORS

from multi_repo_analyzer.service.routes import api_bp


def create_app() -> Flask:
    app = Flask(__name__)

    # Enable CORS
    # In production, you should replace "*" with your actual frontend URL
    CORS(
        app,
        resources={r"/*": {"origins": "*"}},
    )

    # Register API routes
    app.register_blueprint(api_bp)

    return app

# Expose 'app' for Gunicorn
app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    # Using 0.0.0.0 to make it accessible in the cloud
    app.run(host="0.0.0.0", port=port, debug=False)
