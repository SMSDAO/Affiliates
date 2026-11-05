# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 Implementation Guide & Deployment Manifest

**Version**: 1.2.0  
**Target Environment**: Enterprise Node.js 22 LTS / Web Vite SPA  

---

### 1. File Changes & New Modules
- `src/types/index.ts`: Extended with `AffiliateAccount`, `MlmTierConfig`, `AffiliateRankDef`, `CommissionRule`, `EcommerceAdapter`, `PayoutRecord`, `FraudAlert`, `CasinoOperator`, and 8 new `NavigationTab` values.
- `src/components/AffiliateRegistration.tsx`: Public partner enrollment with traffic declaration and tax compliance.
- `src/components/AffiliatePortal.tsx`: Dedicated portal with live QR code generator, coupon tracking, link builder, and payout request console.
- `src/components/MlmCommissionEngine.tsx`: Multi-tier MLM depth settings, rank progression multipliers, 7-priority rule builder, and interactive simulator.
- `src/components/EcommerceHub.tsx`: Modular adapters for WooCommerce, EDD, WPForms with real webhook signature testing.
- `src/components/WordPressEmbeds.tsx`: 8 native shortcodes and universal HTML embed generator.
- `src/components/PayoutCenter.tsx`: Payout execution queue with Stripe, PayPal, Paystack, CSV export, and status tracking.
- `src/components/FraudDetectionCenter.tsx`: Real-time Sentinel heuristics against bot traffic, click bursts, and self-referrals.
- `src/components/CasinoAffiliateModule.tsx`: Licensed iGaming vertical with age-gating (18+/21+) and responsible gambling disclosures.
- `src/components/Header.tsx` & `src/components/Navigation.tsx`: Workspace switcher (Beginner, Affiliate, Merchant) and 9-language localization selector.
- `src/App.tsx`: Full tab wiring, RTL layout support, and state orchestration.
- `server.ts`: REST endpoints for affiliates, commissions, payouts, fraud reviews, adapters, and 12-gate acceptance audit.
