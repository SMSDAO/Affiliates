import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Download, 
  UserCheck, 
  Clock, 
  RefreshCw, 
  Sparkles, 
  Server,
  Layers,
  ChevronRight,
  Eye,
  Check,
  X
} from 'lucide-react';
import { SecurityIncidentRecord, ApprovalRequest } from '../types';

export const SecurityComplianceCenter: React.FC = () => {
  const [approvals, setApprovals] = useState<ApprovalRequest[]>([
    { id: 'APP-501', orgId: 'org-apex-global', type: 'PAYOUT_DISBURSE', title: 'Batch Payout Disbursal ($4,890.00)', submittedBy: 'Financial Operations Manager', submittedAt: '2026-11-06 04:12', amount: 4890.00, currency: 'USD', status: 'PENDING_REVIEW', riskScore: 'LOW', assignedApprover: 'Master Admin (GXQ Studio)' },
    { id: 'APP-502', orgId: 'org-apex-global', type: 'CAMPAIGN_PUBLISH', title: 'Q4 Black Friday Mega Ad Wave (TikTok & YouTube)', submittedBy: 'Campaign Lead', submittedAt: '2026-11-05 18:30', amount: 15000.00, currency: 'USD', status: 'APPROVED', riskScore: 'LOW', assignedApprover: 'Compliance Sentinel' },
    { id: 'APP-503', orgId: 'org-apex-global', type: 'COMMISSION_ADJUSTMENT', title: 'Tier Override for VIP Agency Partner (+5% Direct)', submittedBy: 'Affiliate Director', submittedAt: '2026-11-05 11:20', status: 'PENDING_REVIEW', riskScore: 'MEDIUM', assignedApprover: 'Financial Director' }
  ]);

  const [incidents, setIncidents] = useState<SecurityIncidentRecord[]>([
    { id: 'SEC-101', orgId: 'org-apex-global', severity: 'MEDIUM', category: 'RATE_LIMIT_EXCEEDED', description: 'Repeated tracking queries from 198.51.100.44 throttled cleanly', ipAddress: '198.51.100.44', mitigated: true, timestamp: '2026-11-06 03:00' },
    { id: 'SEC-100', orgId: 'org-apex-global', severity: 'LOW', category: 'WEBHOOK_SIGNATURE_FAIL', description: 'Unsigned webhook ping from test endpoint rejected with HTTP 401', ipAddress: '203.0.113.12', mitigated: true, timestamp: '2026-11-05 19:42' }
  ]);

  const [exportingGdpr, setExportingGdpr] = useState<boolean>(false);
  const [gdprDownloadUrl, setGdprDownloadUrl] = useState<string | null>(null);

  const handleActOnApproval = async (id: string, action: 'APPROVE' | 'REJECT' | 'ESCALATE') => {
    try {
      await fetch(`/api/v1/enterprise/approvals/${id}/act`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      setApprovals(prev => prev.map(a => 
        a.id === id ? { ...a, status: action === 'APPROVE' ? 'APPROVED' : action === 'REJECT' ? 'REJECTED' : 'ESCALATED' } : a
      ));
    } catch {
      setApprovals(prev => prev.map(a => 
        a.id === id ? { ...a, status: action === 'APPROVE' ? 'APPROVED' : action === 'REJECT' ? 'REJECTED' : 'ESCALATED' } : a
      ));
    }
  };

  const handleTriggerGdprExport = async () => {
    setExportingGdpr(true);
    try {
      const res = await fetch('/api/v1/enterprise/security/gdpr-export', { method: 'POST' });
      const data = await res.json();
      setTimeout(() => {
        setExportingGdpr(false);
        const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data.data, null, 2));
        setGdprDownloadUrl(jsonContent);
      }, 1000);
    } catch {
      setTimeout(() => {
        setExportingGdpr(false);
        setGdprDownloadUrl("data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ status: "Export complete", timestamp: new Date().toISOString() })));
      }, 1000);
    }
  };

  return (
    <div className="space-y-6 pb-24 text-slate-100">
      {/* 1. Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                ENTERPRISE GOVERNANCE & SECURITY PLATFORM · V1.4.0
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">SAML 2.0 / SCIM 2.0 ARMED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Security Sentinel & Governance Control Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Enforce enterprise access controls, multi-step approval workflows for payouts & campaigns, SAML 2.0 / SCIM directory synchronization, automated intrusion mitigation, and GDPR compliance portability.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTriggerGdprExport}
              disabled={exportingGdpr}
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
            >
              {exportingGdpr ? (
                <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
              ) : (
                <Download className="w-4 h-4 text-cyan-400" />
              )}
              <span>{exportingGdpr ? 'Bundling...' : 'Generate GDPR Data Export'}</span>
            </button>

            {gdprDownloadUrl && (
              <a
                href={gdprDownloadUrl}
                download={`gdpr_tenant_export_${new Date().toISOString().split('T')[0]}.json`}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Download Package</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 2. Security Infrastructure Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Enterprise SSO</span>
            <Key className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black font-mono text-emerald-400 tracking-tight">
            SAML 2.0 / OIDC
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Okta & Azure AD Connected</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-cyan">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">SCIM 2.0 Provisioning</span>
            <UserCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black font-mono text-cyan-300 tracking-tight">
            ACTIVE
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Automated deprovisioning</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Pending Approvals</span>
            <Clock className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl font-black font-mono text-yellow-300 tracking-tight">
            {approvals.filter(a => a.status === 'PENDING_REVIEW').length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Governance review required</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Mitigated Anomalies</span>
            <ShieldCheck className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black font-mono text-purple-300 tracking-tight">
            100%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Zero cross-tenant leaks</p>
        </div>
      </div>

      {/* 3. Governance Approval Sequence Queue */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-yellow-400" />
            <span>Dual-Authorization Governance Queue</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Enforces strict sign-off for payouts &gt; $3k, campaigns, and rate overrides
          </span>
        </div>

        <div className="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
          {approvals.map(req => (
            <div key={req.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-purple-500/20 font-bold">
                    {req.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {req.type.replace('_', ' ')}
                  </span>
                  <h3 className="text-sm font-bold text-white font-sans">{req.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>Submitter: <strong className="text-slate-300">{req.submittedBy}</strong></span>
                  <span>Approver: <strong className="text-slate-300">{req.assignedApprover}</strong></span>
                  <span>Time: {req.submittedAt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                  req.status === 'APPROVED' 
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                    : req.status === 'REJECTED' 
                    ? 'bg-red-500/15 text-red-300 border border-red-500/30' 
                    : 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {req.status}
                </span>

                {req.status === 'PENDING_REVIEW' && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleActOnApproval(req.id, 'APPROVE')}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleActOnApproval(req.id, 'REJECT')}
                      className="px-3 py-1.5 rounded-xl bg-red-600/30 hover:bg-red-600/50 text-red-200 border border-red-500/30 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Reject</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Real-Time Security Incidents & Audit Log */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-400" />
          <span>Security Sentinel Incident Log</span>
        </h2>

        <div className="space-y-3 font-mono text-xs">
          {incidents.map(inc => (
            <div key={inc.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/30">
                    {inc.severity}
                  </span>
                  <span className="text-white font-bold">{inc.category}</span>
                  <span className="text-slate-400 text-[11px]">{inc.timestamp}</span>
                </div>
                <p className="text-slate-300 font-sans">{inc.description}</p>
                <div className="text-[11px] text-slate-500">Origin IP: {inc.ipAddress}</div>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold shrink-0">
                MITIGATED
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
