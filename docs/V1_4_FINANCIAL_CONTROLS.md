# SUPER AFFILIATE MANAGER AI — V1.4.0 FINANCIAL CONTROLS & RECONCILIATION
**Release Classification: ULTIMATE ENTERPRISE / PRODUCTION**  
**Core Invariant: 7-Stage Segregated Balance Ledger & Multi-Currency Operations**

---

## 1. Seven Segregated Balance Invariant (SSOT)
All financial figures in Super Affiliate Manager AI are strictly segregated into seven distinct balances with decimal precision:

1. **Estimated Commissions:** `$34,820.50` (Projected conversion value awaiting merchant confirmation)
2. **Pending Commissions:** `$6,450.00` (Conversions logged within active clearing/return window)
3. **Approved Commissions:** `$24,180.50` (Verified transactions ready for settlement)
4. **Payable Balances:** `$16,840.50` (Liquid affiliate balance eligible for payout request)
5. **Processing Payouts:** `$7,340.00` (In-flight provider transfers pending bank confirmation)
6. **Successfully Paid Amounts:** `$17,340.00` (Settled lifetime disbursements to affiliates)
7. **Reversed Amounts:** `$390.00` (Chargebacks, customer returns, or fraud clawbacks)

---

## 2. Multi-Currency Operations
- **Base Ledger Currency:** USD ($).
- **Supported Global Currencies:** USD, EUR, GBP, JPY, CAD, AUD, SGD.
- **Rules:**
  - Original transaction currency and amount are immutably preserved in ledger records.
  - Conversion rates are captured at transaction timestamp.
  - Payout settlements can occur in the affiliate's preferred local currency while maintaining liability accounting in the organization's base currency.

---

## 3. Accounting System Adapters
The platform generates verified period-closing export batches (`/api/v1/enterprise/accounting/export`) formatted for direct import into:
- **Intuit QuickBooks Online**
- **Xero Accounting**
- **Oracle NetSuite ERP**
