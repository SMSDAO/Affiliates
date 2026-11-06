# SUPER AFFILIATE MANAGER AI — V1.3.0 OPERATIONS MANUAL
**Release Classification: ENTERPRISE ELITE**  
**Role: Platform Engineering & Site Reliability**

---

## 1. System Architecture Overview
The platform runs as a unified Express + Vite / static server on Node.js 22 LTS, utilizing:
- **SSOT In-Memory / Database State**: Strict schema for links, click logs, financial ledgers, idempotency keys, and audit logs.
- **Client App Router**: Modular React 19 SPA with Tailwind CSS, Lucide icons, Framer Motion animations, and cyber-futuristic glassmorphism styling.
- **REST Endpoints**: `/api/v1/*` covering authentication, analytics, tracking, commissions, payouts, e-commerce, AI agents, and gate verifications.

---

## 2. Daily Operational Runbook

### Financial Reconciliation
Run daily at 00:00 UTC:
1. Query `/api/v1/commissions/ledger`.
2. Confirm the 7 segregated balance invariant:
   `Estimated = Pending + Approved + Payable + Processing + Paid - Reversed`
3. Check for any unresolved chargebacks in `reversedAmounts`.

### Payout Batching & Idempotency
- All payout requests MUST include a unique `idempotencyKey`.
- Payouts are executed via `/api/v1/payouts/create`.
- When external provider webhooks (Stripe Connect, PayPal Payouts, Paystack) respond, reconcile via `/api/v1/payouts/reconcile`.

### Fraud Monitoring
- Inspect `/src/components/FraudDetectionCenter.tsx` metrics.
- Bot traffic is filtered automatically during click tracking (`/api/v1/track/:slug`).

---

## 3. Monitoring & Alerting Endpoints
- **Liveness & Readiness**: `GET /api/v1/health`
- **12 Acceptance Gates Verification**: `GET /api/v1/admin/verify-gates`
- **Audit Logs**: `GET /api/v1/admin/audit-logs`
- **AI Agent Health**: `GET /api/v1/agents/status`
