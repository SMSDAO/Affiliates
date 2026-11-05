# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 Architecture Specification (SSOT)

**Release**: V1.2.0  
**Classification**: Enterprise Elite  
**Topology**: Full-Stack Node.js/Express + React SPA + Vite Middleware  

---

### 1. Three Core Business Models
1. **Merchant Affiliate Program**:
   - Merchants enroll partners, configure tiered commissions, connect WooCommerce/EDD stores, and disburse tokenized payouts.
2. **Affiliate Network Marketplace**:
   - Aggregates CJ Affiliate, Impact.com, Awin, Rakuten, PartnerStack, and ClickBank into a central ledger with verified approval states.
3. **AI Affiliate Marketing Workspace**:
   - 30 autonomous marketing agents that generate multi-channel campaigns, landing pages, and creative assets with automated FTC compliance.

---

### 2. Multi-Level Marketing (MLM) Tier Topology
- **Level 1 (Direct Referrer)**: Default 20% commission on eligible sales.
- **Level 2 (Parent Recruiter)**: Default 5% override bonus.
- **Level 3 (Grandparent Recruiter)**: Default 2% secondary override.
- **Level 4 (Senior Mentor)**: Optional 1% enterprise tier.
- **Pyramid-Proof Guardrail**: Compensation requires verified commercial orders; zero incentives for recruitment or starter packages.

---

### 3. Attribution & Tracking Pipeline
```
Customer Click / QR Scan
       │
       ▼
Universal Tracking Endpoint (/api/v1/track/:slug)
       │
       ├─► Bot & Tor Sentinel Filter
       ├─► 302/307 Redirect with UTM Parameter Injection
       ▼
Customer Store Visit & Checkout
       │
       ▼
Store Webhook (WooCommerce, EDD, WPForms, etc.)
       │
       ├─► HMAC-SHA256 Signature Verification
       ├─► Idempotency Key De-duplication
       ▼
Commission Engine Evaluation (7-Priority Rule Precedence)
       │
       ├─► Pending Commission (30-60d Lock Period)
       ├─► Refund / Reversal Sentinel
       ▼
Approved Commission Balance
       │
       ▼
Disbursement Rail (Stripe Connect, PayPal Payouts, Paystack, Wire)
```

---

### 4. 7-Priority Deterministic Commission Precedence
1. Explicit Affiliate Agreement Override
2. Product-Specific Rule
3. Category-Specific Rule
4. Campaign-Specific Rule
5. Store-Specific Rule
6. Rank-Specific Default Multiplier
7. Program Baseline Default (15-20%)
