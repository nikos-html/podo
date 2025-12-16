#!/bin/bash
# Quick deploy commands for Railway

echo "🚀 Railway Deployment - PodoNova"
echo "================================"
echo ""
echo "Krok 1: Sprawdź zmiany"
git status
echo ""
echo "Krok 2: Dodaj pliki"
git add nixpacks.toml package.json railway.toml start.sh .dockerignore
echo ""
echo "Krok 3: Commit"
git commit -m "Update to Node.js 20 for Railway deployment"
echo ""
echo "Krok 4: Push"
git push origin main
echo ""
echo "✅ Gotowe! Teraz idź na Railway i deploy!"
echo "https://railway.app/"
