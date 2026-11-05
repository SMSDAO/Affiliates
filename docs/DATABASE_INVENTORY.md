# DATABASE INVENTORY & SCHEMA ARCHITECTURE (SSOT)

## 1. Normalized Entity-Relationship Layout

The application utilizes a Single Source of Truth (SSOT) schema enforcing foreign keys, composite tenant indexes, and ACID transaction boundaries.

### Core Tables
1. **`users`**: User identities, usernames, email hashes, status flags.
2. **`user_profiles`**: User metadata, company, time zone, notification settings.
3. **`user_sessions`**: Secure random session tokens, device fingerprint, expiration.
4. **`organizations` / `workspaces`**: Multi-tenant boundaries with composite access keys.
5. **`roles` / `permissions` / `role_permissions`**: RBAC permissions matrix.
6. **`affiliate_networks`**: 15 certified networks with capabilities (API, OAuth, Feed, Webhooks).
7. **`partner_connections`**: Encrypted partner credentials (AES-GCM) isolated by tenant.
8. **`affiliate_links`**: Registered short links, destinations, 302/307 codes, UTM parameters.
9. **`click_events`**: Immutable visitor click events, IP hashes, bot flags, attribution.
10. **`conversion_events`**: Attributed conversion postbacks from networks.
11. **`commissions`**: Financial ledger tracking Pending, Approved, Reversed, Paid states.
12. **`attachments` / `attachment_versions`**: Secure document objects, SHA-256 hashes, malware scan statuses.
13. **`ai_agents` / `agent_runs`**: 30-agent swarm execution records, system prompts, latency logs.
14. **`audit_logs`**: Immutable audit logs verifying the Twelve Mandatory Acceptance Gates.
