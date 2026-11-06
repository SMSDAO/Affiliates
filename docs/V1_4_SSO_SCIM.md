# SUPER AFFILIATE MANAGER AI — V1.4.0 SSO & SCIM 2.0 SPECIFICATION
**Release Classification: ULTIMATE ENTERPRISE / PRODUCTION**  
**Standards: SAML 2.0, OpenID Connect (OIDC), SCIM 2.0**

---

## 1. Enterprise SSO Architecture
Super Affiliate Manager AI supports corporate identity federation via SAML 2.0 and OpenID Connect (OIDC), integrating with Okta, Microsoft Azure AD, PingIdentity, and Google Workspace.

### SSO Flow:
1. User enters corporate email at `/affiliate-login`.
2. System extracts domain and looks up active identity provider (IdP) metadata.
3. User is redirected to enterprise IdP for authentication.
4. IdP issues signed SAML assertion / OIDC JWT token.
5. Platform verifies signature, binds session token, and provisions the corresponding tenant role.

---

## 2. SCIM 2.0 Directory Synchronization
SCIM 2.0 (System for Cross-domain Identity Management) automates employee provisioning and deprovisioning:
- **`POST /Users`:** Creates new team member in tenant organization.
- **`PATCH /Users/{id}`:** Updates role, department, or business unit.
- **`DELETE /Users/{id}`:** Immediately revokes access tokens and terminates active sessions upon employee departure.
