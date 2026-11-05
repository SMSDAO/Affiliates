# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 Deployment & Operations Guide

### Deployment Instructions
1. **Environment Setup**: Ensure Node.js 22+ and npm 10+ are active.
2. **Dependencies**: All packages installed cleanly via package.json.
3. **Build**: `npm run build` generates production Vite bundle in `dist/`.
4. **Execution**: `npm run start` or `node server.ts` starts full-stack server on port 3000.
5. **Health Verification**: `curl http://localhost:3000/api/v1/health` confirms operational status.
