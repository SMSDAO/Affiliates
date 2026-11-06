# SUPER AFFILIATE MANAGER AI — V1.4.0 ENTERPRISE API PLATFORM
**Release Classification: ULTIMATE ENTERPRISE / PRODUCTION**  
**API Specification: RESTful JSON / OpenAPI 3.1 Compatible**

---

## 1. Authentication & Security
- **Bearer Token / API Key:** Pass in `Authorization: Bearer <apiKey>` header.
- **HMAC Signatures:** All outbound webhooks include `X-SAM-Signature-256` computed using the organization's webhook secret.
- **Rate Limits:** 120 requests/minute per tenant tier; bursts up to 300 req/min for Enterprise tier.

---

## 2. Core Endpoint Index

### System & Health
- `GET /api/v1/health`: Returns version, gates passed, tenant isolation status, and financial balances.

### Multi-Tenancy & Governance
- `GET /api/v1/enterprise/organizations`: List organization hierarchy, business units, brands, and stores.
- `POST /api/v1/enterprise/organizations`: Provision new business unit or store within tenant.
- `GET /api/v1/enterprise/approvals`: List pending dual-authorization governance requests.
- `POST /api/v1/enterprise/approvals/:id/act`: Approve, reject, or escalate request.

### White-Label & Custom Domains
- `GET /api/v1/enterprise/white-label`: Get active white-label branding configuration.
- `POST /api/v1/enterprise/white-label/verify-domain`: Probe CNAME DNS resolution and provision TLS.

### Agency & Client Management
- `GET /api/v1/enterprise/agency/clients`: Retrieve agency client list and revenue breakdown.
- `POST /api/v1/enterprise/agency/clients`: Onboard new client workspace.

### Event Workflows & Automation
- `GET /api/v1/enterprise/workflows`: List active workflow rules and execution counts.
- `POST /api/v1/enterprise/workflows/trigger`: Manually trigger or simulate workflow pipeline.

### Financials & Payouts
- `GET /api/v1/commissions/ledger`: Query 7-stage financial ledger entries.
- `POST /api/v1/payouts/create`: Create idempotent payout request.
- `POST /api/v1/payouts/reconcile`: Reconcile provider settlement.
- `POST /api/v1/ecommerce/webhook`: Ingest store order webhook.
