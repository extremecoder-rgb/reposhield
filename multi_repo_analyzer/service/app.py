# Purpose:
# Flask application entry point.
# This layer exposes the security engine via HTTP.
# It contains NO scanning logic.

from flask import Flask

from multi_repo_analyzer.service.routes import api_bp


def create_app() -> Flask:
    app = Flask(__name__)

    # Register API routes
    app.register_blueprint(api_bp)

    return app


# Allow: python -m multi_repo_analyzer.service.app
if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=8000, debug=True)
