#!/usr/bin/env bash
set -euo pipefail

echo "========================================="
echo "SUPER AFFILIATE MANAGER AI — BUILD PIPELINE"
echo "========================================="

echo "[1/2] Running strict TypeScript typecheck..."
npm run lint

echo "[2/2] Generating production Vite bundle..."
npm run build

echo "Build successful. Output generated in dist/."
