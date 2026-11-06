# SUPER AFFILIATE MANAGER AI — V1.4.0 MULTI-TENANCY SPECIFICATION
**Release Classification: ULTIMATE ENTERPRISE / PRODUCTION**  
**Core Invariant: Strict Server-Enforced Tenant Isolation**

---

## 1. Multi-Tenant Organization Hierarchy
Super Affiliate Manager AI structures enterprise commerce into strict hierarchical boundaries:
1. **Organization:** Top-level corporate entity holding subscription entitlements, master billing, global settings, and audit logs.
2. **Business Units (BUs):** Divisional boundaries (e.g. SaaS, Retail, Direct-to-Consumer) with independent budget caps and divisional leadership.
3. **Brands:** Specific brand identities (e.g. Jasper AI, Nordic Essentials) with distinct color themes, target audiences, and legal terms.
4. **Stores:** Connected commerce endpoints (WooCommerce, Shopify, EDD) receiving webhooks and order conversions.
5. **Affiliate Programs:** Commission structures (RevShare, CPA, Hybrid) associated with brands.
6. **Campaigns:** Multi-channel creative and traffic assets.
7. **Affiliates:** Partners enrolled into one or more programs under the organization.

---

## 2. Server-Side Tenant Isolation Invariant
- **No Client Trust:** Client requests specifying `orgId` or `tenantId` are validated against the authenticated user's session token and role permissions.
- **Cross-Tenant Access Denial:** Any API call attempting to read, update, or delete a resource belonging to a different tenant returns HTTP 403 Forbidden and logs a `UNAUTHORIZED_CROSS_TENANT` security incident in `/api/v1/enterprise/security/incidents`.
- **Database Partitioning:** All database queries require composite indexing with `orgId` as the primary partition key.
