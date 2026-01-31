#!/bin/bash

echo "🧪 Testing Single Service Setup Locally"
echo "========================================"
echo ""

# Check if in correct directory
if [ ! -f "requirements.txt" ]; then
    echo "❌ Error: requirements.txt not found. Are you in the project root?"
    exit 1
fi

echo "✅ Found requirements.txt"

# Check if frontend directory exists
if [ ! -d "repo-frontend" ]; then
    echo "❌ Error: repo-frontend directory not found"
    exit 1
fi

echo "✅ Found repo-frontend directory"

# Build frontend
echo ""
echo "📦 Building frontend..."
cd repo-frontend
npm install
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Frontend build failed - dist folder not created"
    exit 1
fi

echo "✅ Frontend built successfully"
cd ..

# Check if backend can find frontend
echo ""
echo "🔍 Checking if backend can find frontend build..."
if [ -f "repo-frontend/dist/index.html" ]; then
    echo "✅ Backend will be able to serve frontend"
else
    echo "❌ index.html not found in dist folder"
    exit 1
fi

# Install Python dependencies
echo ""
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo ""
echo "✅ All checks passed!"
echo ""
echo "🚀 You can now run the app locally with:"
echo "   python -m multi_repo_analyzer.service.app"
echo ""
echo "📝 Or deploy to Render with the build command:"
echo "   pip install -r requirements.txt && cd repo-frontend && npm install && npm run build && cd .."
