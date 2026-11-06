# SUPER AFFILIATE MANAGER AI — V1.3.0 ROLLBACK PROCEDURE
**Release Classification: ENTERPRISE ELITE**  
**Effective Date: November 05, 2026**

---

## 1. Rollback Trigger Criteria
Rollback to baseline (V1.2.0) must be initiated immediately if any of the following occur:
1. Health endpoint (`/api/v1/health`) returns non-200 status code for > 30 consecutive seconds.
2. Acceptance Gates audit fails any of the 12 verified gates.
3. Financial reconciliation reports ledger mismatch or floating-point variance > $0.00.
4. Security breach or unauthorized privilege escalation bypassing Super Admin isolation.

---

## 2. Rollback Execution Steps

```bash
# Step 1: Drain in-flight traffic
echo "Redirecting traffic to maintenance gateway..."

# Step 2: Checkout stable V1.2.0 git tag / commit
git checkout tags/v1.2.0-stable || git checkout HEAD~1

# Step 3: Reinstall dependencies
npm install

# Step 4: Re-build client
npm run build

# Step 5: Restart service
pm2 restart sam-server || npm run start

# Step 6: Verify health endpoint
curl -f http://localhost:3000/api/v1/health
```

---

## 3. Data Integrity & Ledger Protection
All idempotent ledger entries are persisted in the transaction log. If rollback is executed, in-flight processing payouts are preserved in the pending review queue to prevent double-disbursement.
