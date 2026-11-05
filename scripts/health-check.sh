#!/usr/bin/env bash
set -euo pipefail

echo "Checking SUPER AFFILIATE MANAGER AI Health Endpoint..."
curl -s -f http://localhost:3000/api/v1/health || {
  echo "Health check failed."
  exit 1
}
echo ""
echo "Health check succeeded: System operational."
