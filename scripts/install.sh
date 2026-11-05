#!/usr/bin/env bash
set -euo pipefail

echo "========================================="
echo "SUPER AFFILIATE MANAGER AI — INSTALLATION"
echo "========================================="

echo "[1/3] Checking Node.js environment..."
node -v
npm -v

echo "[2/3] Installing dependencies..."
npm install

echo "[3/3] Validating TypeScript compiler..."
npm run lint

echo "Installation complete. System ready."
