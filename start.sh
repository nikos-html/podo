#!/bin/bash
set -e

echo "🚀 Starting PodoNova website..."

# Check if build exists
if [ ! -d "frontend/build" ]; then
  echo "❌ Build folder not found!"
  echo "Building frontend..."
  cd frontend
  yarn install
  yarn build
  cd ..
fi

echo "✅ Starting server on port ${PORT:-3000}"
npx serve -s frontend/build -l ${PORT:-3000}
