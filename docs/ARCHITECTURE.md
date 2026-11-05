# SUPER AFFILIATE MANAGER AI — SYSTEM ARCHITECTURE

## 1. High-Level Architecture Diagram (Mermaid)

```mermaid
graph TD
    Client[Web / Mobile Glassmorphism PWA] -->|HTTPS / API Requests| Server[Express + Vite Full-Stack Server]
    Server -->|Router /api/v1| Auth[RBAC & Tenant Isolation Guard]
    Auth -->|Verified Request| Logic[Autonomous Affiliate Operating System]
    
    Logic -->|Link & Tracking| Tracking[302/307 Redirect & Bot Verification Engine]
    Logic -->|AI Workflows| Swarm[30-Agent AI Swarm & Model Router]
    Logic -->|Network Handshake| Integrations[15 Affiliate Network Adapters]
    Logic -->|Storage Pipeline| Vault[Object Vault + SHA-256 Checksum Engine]
    
    Tracking -->|Audit Events| SSOT[(Single Source of Truth Database)]
    Swarm -->|Execution Evidence| SSOT
    Integrations -->|Postbacks & Commissions| SSOT
    Vault -->|Version Metadata| SSOT
```

## 2. Universal Tracking Pipeline

```
Visitor Click
  └──> /api/v1/track/:slug
        ├──> Bot & Fraud Check (User-Agent & IP Hash)
        ├──> Link Active & Destination Validation
        ├──> Click Event Persistence (Gate 7)
        ├──> Financial Aggregation Update
        ├──> UTM Parameter Normalization
        └──> HTTP 302/307 Safe Redirection to Merchant Destination
```

## 3. Persistent Virtual Memory Layers

1. **Short-Term Context**: Live conversation memory inside `/src/components/ConversationalAI.tsx`.
2. **Workspace Memory**: Tenant-isolated preferences and active campaigns.
3. **Campaign Memory**: Target products, ROAS thresholds, and publishing history.
4. **Partner Memory**: Verified affiliate accounts, OAuth tokens, and network synchronization states.
5. **Operational Evidence Memory**: Immutable ledger of the 12 Mandatory Production Acceptance Gates.
