# SUPER AFFILIATE MANAGER AI ENTERPRISE V1.4.0
## Centralized AI Governance, Agent Hierarchy & Operational Guardrails

### 1. Executive Summary & Architecture Overview
Super Affiliate Manager AI Enterprise V1.4.0 consolidates artificial intelligence workloads under a centralized, enterprise-grade AI Governance Engine. While legacy configurations operated isolated prompt helpers, V1.4.0 enforces hierarchical multi-agent orchestration, token and dollar-denominated spend caps, strict deterministic schema enforcement, model fallback cascades, and mandatory human-in-the-loop governance gates for high-impact commercial actions.

```
                                  ┌──────────────────────────────┐
                                  │   Enterprise Orchestrator   │
                                  └──────────────┬───────────────┘
                                                 │
            ┌────────────────────────────────────┼────────────────────────────────────┐
            ▼                                    ▼                                    ▼
┌───────────────────────┐            ┌───────────────────────┐            ┌───────────────────────┐
│ Campaign Generator    │            │ Fraud Detector        │            │ Market Trend Predictor│
│  - Creative Copies    │            │  - Click Cluster Anom │            │  - Seasonal Demand    │
│  - Ad Headlines       │            │  - Proxy/VPN Velocity │            │  - Network Arbitrage  │
│  - Landing Page Copy  │            │  - Device Fingerprint │            │  - EPC Forecasting    │
└───────────────────────┘            └───────────────────────┘            └───────────────────────┘
            │                                    │                                    │
            └────────────────────────────────────┼────────────────────────────────────┘
                                                 │
                                  ┌──────────────▼───────────────┐
                                  │   AI Governance & Policy     │
                                  │   - Budget Limits ($ / org)  │
                                  │   - Model Tier Router        │
                                  │   - Dual-Approval Gate       │
                                  │   - Audit & Prompt Logging   │
                                  └──────────────────────────────┘
```

---

### 2. The 10 Enterprise Agent Roster
The platform orchestrates 10 specialized AI agents, each scoped with minimal privilege boundaries, deterministic schema validation, and dedicated token budgets:

| Agent Identifier | Operational Domain | Model Target | Fallback Strategy | Primary Output Contract |
| :--- | :--- | :--- | :--- | :--- |
| **`AGENT_ORCHESTRATOR`** | Workflow dispatch & task graphs | Gemini 2.5 Pro / Claude 3.5 Sonnet | GPT-4o | Directed Acyclic Graph (DAG) of sub-agent tasks |
| **`AGENT_CAMPAIGN_GEN`** | Ad copy, social hooks & banners | Gemini 2.5 Flash | GPT-4o-mini | Headline array, CTA triggers, demographic targeting JSON |
| **`AGENT_FRAUD_SENTINEL`** | Real-time traffic anomaly detection | Fine-tuned Logistic / Gemini Flash | Rule-based heuristics | Anomaly risk score [0.0 - 1.0], ban recommendation |
| **`AGENT_EPC_PREDICTOR`** | Earnings per click & EPC forecast | XGBoost + Gemini Flash | Statistical rolling avg | 30-day projected EPC, confidence interval, optimal offer |
| **`AGENT_REGULATORY_AUDIT`**| FTC, GDPR & Casino compliance | Gemini 2.5 Pro | Rule-based checker | Compliance score, violation list, required disclaimers |
| **`AGENT_OFFER_MATCHER`** | Affiliate-to-Merchant match | Vector Embeddings (Text-004) | Nearest neighbor cosine | Rank-ordered recommended programs with expected yield |
| **`AGENT_PAYOUT_AUDITOR`** | Financial reconciliations | Deterministic math + GenAI audit | Strict double-entry | Reconciled ledger diff, flagged ledger anomalies |
| **`AGENT_STORE_SYNC`** | E-commerce catalog ingestion | Gemini Flash Structured Parser | Regex parser | Normalized product schema, SKU mapping, price parity |
| **`AGENT_RESELLER_INSIGHT`**| Agency & multi-brand analytics | Gemini 2.5 Pro | Summarization engine | Executive PDF/JSON report, MRR retention warnings |
| **`AGENT_SUPPORT_RESOLVER`**| Tier-1 enterprise ticket triage | Gemini 2.5 Flash | Human escalations queue| Categorized issue, suggested macro resolution, sentiment |

---

### 3. Model Routing, Cascade, & Rate Limiting

#### Dynamic Model Routing Engine
Requests are classified at ingress into three operational latency tiers:
1. **Ultra-Low Latency (<300ms)**: Fraud scoring, real-time click validation. Routed directly to edge workers or lightweight Flash models.
2. **Standard Interactive (<1.5s)**: Live UI generation, conversational triage, copy variations. Routed to Gemini 2.5 Flash with fallback to GPT-4o-mini.
3. **Deep Analytical (<8.0s)**: Historical audit reconciliations, weekly compliance scans, agency business reviews. Routed to Gemini 2.5 Pro.

```typescript
export async function routeAIInference(task: AITaskContext): Promise<AIResponse> {
  const orgBudget = await checkOrgAIBudget(task.orgId);
  if (!orgBudget.hasRemainingTokens) {
    throw new QuotaExceededError(`Org ${task.orgId} monthly AI budget exceeded ($${orgBudget.monthlySpendCapUSD})`);
  }

  const primaryModel = selectModelForTask(task.type);
  try {
    return await executeInferenceWithTimeout(primaryModel, task, 5000);
  } catch (error) {
    console.warn(`Primary model ${primaryModel} failed. Falling back to secondary cascade.`);
    return await executeInferenceWithTimeout(getFallbackModel(task.type), task, 8000);
  }
}
```

---

### 4. Organization-Level AI Spend Caps & Quota Management
1. **Hard & Soft Budget Alerts**: Each organization defines `monthlyAIBudgetUSD`. When consumption exceeds 80%, automated email alerts notify the enterprise admin. At 100%, non-essential creative agents are halted while security agents remain active under an emergency buffer.
2. **Token Metering & Billing Recharges**: Every prompt, completion, and tool execution writes a metered record to the billing ledger with token breakdown (prompt tokens, response tokens, total cost).

---

### 5. Mandatory Human-In-The-Loop (HITL) Approval Gates
Commercial decisions above predetermined enterprise thresholds cannot be autonomously executed by AI agents:
* **Campaign Budgets > $5,000 / day**: Requires manual marketing director sign-off in the Governance Center.
* **Affiliate Account Banning**: When `AGENT_FRAUD_SENTINEL` scores risk between 0.70 and 0.90, the account is placed on temporary hold pending human review rather than instantly purged. Risk scores >0.90 trigger instantaneous quarantine.
* **Commission Rate Overrides**: Any AI-recommended incentive spike requires dual-approval.

---

### 6. Regulatory & Casino Marketing Compliance
For gaming, sportsbook, and casino campaigns, `AGENT_REGULATORY_AUDIT` verifies:
* Mandatory 18+/21+ age gating and jurisdiction-specific regulatory warnings (e.g., BeGambleAware, NCPG).
* Exclusion of deceptive terms ("Guaranteed Win", "Risk-Free Free Cash").
* Full geo-fencing verification against unauthorized jurisdictions.
