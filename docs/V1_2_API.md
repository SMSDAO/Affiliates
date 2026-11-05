# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 API Specification & REST Contracts

**Base URL**: `/api/v1`  
**Authentication**: Bearer Token / Role-Based Access Control (RBAC)  
**Security**: Tenant-Isolated, Idempotency-Protected, HMAC-SHA256 Webhook Verification  

---

### Core V1.2.0 Endpoints

#### 1. System Health & Acceptance Gate Audit
- `GET /api/v1/health`
  - Returns server health status, ISO timestamp, database state, and verified acceptance gates.
- `GET /api/v1/admin/verify-gates` & `POST /api/v1/admin/verify-gates`
  - Executes audit on all 12 production acceptance gates.

#### 2. Affiliate Management
- `POST /api/v1/affiliates/register`
  - Registers a new affiliate with profile, traffic sources, currency, and tax declaration.
- `GET /api/v1/affiliates/portal/:id`
  - Returns live affiliate performance stats, referral codes, and available approved balance.

#### 3. Commission Engine & Calculation Simulator
- `POST /api/v1/commissions/calculate`
  - Inputs: `{ amount, category, rank, isOverride }`
  - Returns: Matched rule priority, direct commission, Level 2/3 MLM parent overrides, and net payout.

#### 4. Payouts & Disbursements
- `GET /api/v1/payouts`
  - Returns active payout requests queue.
- `POST /api/v1/payouts/request`
  - Submits a withdrawal request (enforces minimum $50.00 threshold).
- `POST /api/v1/payouts/process`
  - Executes payment via Stripe Connect, PayPal Payouts, or Paystack tokenized rail.

#### 5. Fraud Sentinel
- `GET /api/v1/fraud/alerts`
  - Lists flagged incidents (click flooding, self-referral, bot manipulation).
- `POST /api/v1/fraud/review`
  - Confirms fraud hold or dismisses false positives with immutable audit logging.

#### 6. E-Commerce & Gaming Adapters
- `GET /api/v1/ecommerce/adapters`
  - Returns status of WooCommerce, EDD, and form webhook listeners.
- `GET /api/v1/casino/operators`
  - Returns licensed casino & sportsbook operators with jurisdiction restrictions.
