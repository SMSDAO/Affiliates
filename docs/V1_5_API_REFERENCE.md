# SUPER AFFILIATE MANAGER AI — V1.5.0 API REFERENCE
## Complete Specification for V1.5.0 REST Endpoints

**Base Path**: `/api/v1`  
**Authentication**: Bearer Session Token / Google SSO Session  
**Default Header**: `Content-Type: application/json`  

---

### 1. Global Affiliate Intelligence (Module A)

#### `GET /api/v1/intelligence/insights`
Returns active neural insights across all federated networks, categorized by high-performers, declining funnels, and commission opportunities.

#### `GET /api/v1/intelligence/forecasts`
Returns statistical revenue forecasting. **Strictly distinguishes earned actuals from statistical estimates**.
* Response fields:
  * `actuals.last30DaysEarnedUSD`: Verified earned commissions.
  * `actuals.confirmedConversions`: Confirmed conversions count.
  * `forecastEstimates.projectedNext30DaysUSD`: Projected statistical revenue.
  * `forecastEstimates.assumptions`: Documented transparent assumptions.

#### `POST /api/v1/intelligence/analyze`
Executes deep neural analysis on a specific campaign or network.
* Payload: `{ campaignName: string, network: string, category: string }`

---

### 2. Autonomous Campaign Optimization (Module B)

#### `GET /api/v1/optimization/agents`
Returns the 9 specialized autonomous agents with model targets and accuracy telemetry.

#### `GET /api/v1/optimization/recommendations`
Returns actionable campaign directives awaiting review or approval.

#### `POST /api/v1/optimization/generate-brief`
Generates comprehensive creative copy, SEO metadata, CTAs, and FTC compliance pre-checks.
* Payload: `{ campaignName: string, targetAudience: string, offerType: string }`

#### `POST /api/v1/optimization/apply-recommendation`
Applies an optimization recommendation with approval gate enforcement.
* Payload: `{ recId: string, approverName: string }`

---

### 3. Global Partner Federation (Module C)

#### `GET /api/v1/federation/adapters`
Returns status of 10 federated networks: CJ, impact.com, Awin, Rakuten, PartnerStack, ClickBank, ShareASale, FlexOffers, Amazon, eBay.

#### `POST /api/v1/federation/sync/:networkKey`
Executes live product catalog feed synchronization and conversion import delta.

#### `POST /api/v1/federation/rotate-credentials/:networkKey`
Rotates API secrets and resets expiration timer to 90 days.

---

### 4. Advanced Fraud & Trust Intelligence (Module D)

#### `GET /api/v1/fraud/investigations`
Returns active forensic risk dockets and vector diagnostics.

#### `POST /api/v1/fraud/investigations/:id/action`
Executes reversible enforcement actions:
* Payload: `{ action: 'HOLD' | 'CLEAR_FALSE_POSITIVE' | 'ESCALATE', actorName: string }`

---

### 5. Enterprise BI & Revenue Intelligence (Modules E & J)

#### `GET /api/v1/bi/cohorts`
Returns monthly cohort performance with M1/M3/M6 retention rates, average customer LTV, refund rates, and net commissions.

#### `GET /api/v1/bi/executive-summary`
Returns reconciled double-entry accounting summary.

---

### 6. Global Localization & Regional Markets (Module F)

#### `GET /api/v1/localization/configs`
Returns regional settings across 8 languages, currencies, and tax jurisdictions.

#### `POST /api/v1/localization/switch-locale`
Switches active market locale and layout direction (LTR/RTL).

---

### 7. AI Agent Control Center (Module G)

#### `GET /api/v1/ai-control/models`
Returns model roster, token consumption, latency, and circuit breaker status.

#### `POST /api/v1/ai-control/update-budget`
Updates hard dollar monthly budget cap for a model target.
* Payload: `{ modelAlias: string, newBudgetUSD: number }`

---

### 8. Developer & Extension Marketplace (Module H)

#### `GET /api/v1/extensions`
Returns available sandboxed plugins and connectors.

#### `POST /api/v1/extensions/:id/install`
Toggles installation/activation of a sandboxed plugin.

---

### 9. Enterprise Reliability & Operations (Module K)

#### `GET /api/v1/reliability/metrics`
Returns microservice availability, p50/p99 latency, and cluster health.

#### `POST /api/v1/reliability/test-backup`
Simulates automated point-in-time database snapshot restoration.
