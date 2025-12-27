#!/bin/bash
# Simple script to start a local web server for testing

echo "Starting local web server..."
echo ""
echo "Choose your preferred method:"
echo "1. Python 3 (recommended)"
echo "2. Node.js (http-server)"
echo "3. PHP"
echo ""
read -p "Enter choice (1-3): " choice

cd public

case $choice in
    1)
        echo "Starting Python HTTP server on http://localhost:8000"
        echo "Press Ctrl+C to stop"
        python3 -m http.server 8000
        ;;
    2)
        echo "Installing http-server (if needed)..."
        npx --yes http-server -p 8000
        ;;
    3)
        echo "Starting PHP server on http://localhost:8000"
        echo "Press Ctrl+C to stop"
        php -S localhost:8000
        ;;
    *)
        echo "Invalid choice. Using Python 3..."
        python3 -m http.server 8000
        ;;
esac

