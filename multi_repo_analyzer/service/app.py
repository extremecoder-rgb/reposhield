import os
from flask import Flask, send_from_directory
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

    # Serve React frontend in production
    frontend_dist = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'repo-frontend', 'dist')
    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_frontend(path):
        """Serve React frontend static files"""
        # If it's an API route, let Flask handle it normally
        if path.startswith('api/') or path.startswith('auth/') or path.startswith('scan') or path.startswith('payments/'):
            return app.send_static_file('404.html') if os.path.exists(os.path.join(frontend_dist, '404.html')) else ('Not Found', 404)
        
        # Check if frontend dist folder exists
        if not os.path.exists(frontend_dist):
            return f"Frontend not built. Please run: cd repo-frontend && npm run build", 500
        
        # Serve static files
        if path and os.path.exists(os.path.join(frontend_dist, path)):
            return send_from_directory(frontend_dist, path)
        
        # For SPA routing, serve index.html for all other routes
        return send_from_directory(frontend_dist, 'index.html')

    return app

# Expose 'app' for Gunicorn
app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    # Using 0.0.0.0 to make it accessible in the cloud
    app.run(host="0.0.0.0", port=port, debug=True)