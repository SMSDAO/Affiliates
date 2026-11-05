# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 Merchant & Program Administrator Guide

### 1. Program Setup & Store Connection
- **Store Adapters**: Navigate to **Store Integrations** (`/ecommerce-hub`) and connect your WooCommerce, EDD, or form systems.
- **Webhook Listener**: Copy your signed HMAC-SHA256 endpoint and paste it into WooCommerce Settings -> Advanced -> Webhooks.
- **Attribution Policy**: Configure First-Click or Last-Click attribution with 30-to-90 day cookie windows.

### 2. Commission Rule Precedence
- Configure commission rates using the **Deterministic 7-Priority Rule Builder** (`/mlm-commissions`).
- Priority resolves cleanly: Affiliate Overrides > Product Rules > Category Rules > Campaign Rules > Store Defaults > Rank Multipliers > Baseline.

### 3. Fraud Mitigation
- Review suspicious traffic in the **Fraud Sentinel** (`/fraud-detection`).
- Inspect AI risk scores and evidence logs before approving holds or reversals.
- Reverse fraudulent conversions with a single click to restore program balance.
