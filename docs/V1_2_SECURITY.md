# SUPER AFFILIATE MANAGER AI ENTERPRISE
## V1.2.0 Security, Privacy & Sentinel Auditing

### Security Controls
- **Tenant Isolation**: Rigid logical tenant scoping on every data record.
- **Idempotency**: Postbacks verified using cryptographic SHA-256 hashes of `{orderId, merchantId, timestamp}` to prevent duplicate earnings.
- **Credential Protection**: Zero stored raw payment cards or banking tokens. Payout accounts use provider-hosted OAuth and tokenization.
- **Bot Filtering**: Headless browser identification, Tor exit node blacklisting, and click burst rate limiting.
