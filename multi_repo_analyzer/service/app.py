from flask import Flask
from flask_cors import CORS

from multi_repo_analyzer.service.routes import api_bp


def create_app() -> Flask:
    app = Flask(__name__)

    # Enable CORS for frontend
    CORS(
        app,
        resources={r"/*": {"origins": [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
        ]}},
    )

    # Register API routes
    app.register_blueprint(api_bp)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=8000, debug=True)
