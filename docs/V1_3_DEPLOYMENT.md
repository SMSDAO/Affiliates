# SUPER AFFILIATE MANAGER AI — V1.3.0 DEPLOYMENT GUIDE
**Release Classification: ENTERPRISE ELITE**  
**Environment: Production / Cloud Run / Node.js 22 LTS**

---

## 1. Prerequisites
- Node.js version 22.x LTS or higher
- npm version 10.x or higher
- Port 3000 exposed (HTTP)
- Environment Variables configured in `.env` (refer to `.env.example`)

---

## 2. Production Installation & Build Steps

```bash
# 1. Install production dependencies
npm install

# 2. Compile TypeScript and verify zero lint errors
npm run lint

# 3. Create optimized production client bundle
npm run build

# 4. Start production Express server
NODE_ENV=production npm run start
```

---

## 3. Containerized / Cloud Run Deployment

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

---

## 4. Verification Check
Following startup, query the health check endpoint:
```bash
curl -f http://localhost:3000/api/v1/health
```
Expected response:
```json
{
  "status": "healthy",
  "version": "1.3.0",
  "releaseChannel": "production",
  "releaseClassification": "ENTERPRISE ELITE",
  "productionReady": true,
  "gatesPassed": 12
}
```
