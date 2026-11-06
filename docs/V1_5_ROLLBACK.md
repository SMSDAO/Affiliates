# SUPER AFFILIATE MANAGER AI — V1.5.0 ROLLBACK RUNBOOK
## Emergency Procedures & Backward Compatibility

### 1. Zero-Downtime Rollback Procedure
If any critical regression occurs post-deployment:
1. Revert container traffic routing to prior stable revision (V1.4.0 image tag).
2. The database schema in V1.5.0 is backward-compatible with V1.4.0.
3. Financial ledger structures and 7-stage balances remain identical across V1.4.0 and V1.5.0.

---

### 2. Feature Flags Kill-Switch
If an external affiliate network API experiences upstream outages:
* Individual network federation adapters can be set to `DEGRADED` or `DISCONNECTED` without impacting other network operations.
* The fallback manual CSV/JSON import path remains accessible.
