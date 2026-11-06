# SUPER AFFILIATE MANAGER AI — V1.5.0 DEPLOYMENT GUIDE
## Production Build, Environment & Runbook

### 1. Build Verification
```bash
# 1. Type checking
npm run lint

# 2. Vite production build
npm run build

# 3. Acceptance test suite
bash scripts/test.sh
```

---

### 2. Runtime Environment Requirements
* **Node.js**: v22+ LTS
* **Port**: 3000
* **Process**: `tsx server.ts` (starts Express API and mounts Vite middleware in dev or serves `dist/` in prod).
* **Super Admin Configuration**: `gxqstudio@gmail.com`

---

### 3. Container & Edge Configuration
* Deployable to Google Cloud Run, AWS ECS, or Docker containers.
* Health Check Endpoint: `GET /api/v1/health` returning `productionReady: true`.
