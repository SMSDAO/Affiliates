# SUPER AFFILIATE MANAGER AI — V1.4.0 WHITE-LABEL & CUSTOM DOMAINS
**Release Classification: ULTIMATE ENTERPRISE / PRODUCTION**  
**Component Module:** `src/components/WhiteLabelPortal.tsx`

---

## 1. Overview
The White-Label system empowers Enterprise and Agency customers to deploy completely branded affiliate portals for their partners, masking all platform branding.

---

## 2. Branding Customization Attributes
- **Brand Name & Portal Title:** Displayed on public login, registration, and dashboard headers.
- **Custom Logo & Favicon:** Injected into HTML `<head>` and header navigation bar.
- **Color Palette:** Primary and accent brand colors rendered dynamically across buttons, badges, and progress meters.
- **Dedicated Legal Terms & Privacy Policy:** Custom URLs linked directly on partner registration and footer disclaimers.
- **Support Email:** Rendered on partner error states and help widgets.

---

## 3. Custom Domain Verification Pipeline
1. **User Input:** Enterprise administrator submits subdomain (e.g. `partners.apexcommerce.io`).
2. **DNS Configuration:** Subdomain owner adds CNAME pointing to `cname.superaff.ai`.
3. **Automated Probe:** Calling `/api/v1/enterprise/white-label/verify-domain` executes a DNS resolution check.
4. **TLS Provisioning:** Upon CNAME match, Let's Encrypt 256-bit TLS certificate is requested, validated, and marked `ACTIVE`.
5. **Tenant Binding:** Incoming HTTP requests matching the host header are routed strictly to the associated organization context.
