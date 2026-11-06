import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Lock, 
  Unlock, 
  FileSearch, 
  Eye, 
  UserX, 
  History, 
  RefreshCw,
  Scale,
  Fingerprint
} from 'lucide-react';
import { FraudInvestigationCase } from '../types';

export const FraudInvestigationCenter: React.FC = () => {
  const [cases, setCases] = useState<FraudInvestigationCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCase, setSelectedCase] = useState<FraudInvestigationCase | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/fraud/investigations');
      const json = await res.json();
      if (json.success) {
        setCases(json.data);
        if (!selectedCase && json.data.length > 0) {
          setSelectedCase(json.data[0]);
        }
      }
    } catch (err) {
      console.error('Failed to load fraud investigation cases', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleCaseAction = async (caseId: string, action: 'HOLD' | 'CLEAR_FALSE_POSITIVE' | 'ESCALATE') => {
    setStatusMessage(null);
    try {
      const res = await fetch(`/api/v1/fraud/investigations/${caseId}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, actorName: 'Master Admin (gxqstudio@gmail.com)' })
      });
      const json = await res.json();
      if (json.success) {
        setStatusMessage(json.message);
        setSelectedCase(json.investigationCase);
        fetchCases();
      }
    } catch (err) {
      console.error('Case action failed', err);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold tracking-wide uppercase">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              Module D • Advanced Fraud & Trust Intelligence Center
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Risk Heuristics, Forensic Evidence & Reversible Holds
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Sentinel defense detecting cookie stuffing, bot click manipulation, repeated referral loops, and self-referrals. Strict policy: No automatic confiscation without authorized human review. All holds remain reversible.
            </p>
          </div>
          <button
            onClick={fetchCases}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-red-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-red-400 ${loading ? 'animate-spin' : ''}`} />
            Refresh Docket
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Trust & Policy Notice */}
      <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start gap-3 text-xs text-slate-300">
        <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-white">Non-Confiscation Due Process Guarantee: </span>
          Our neural risk model scores traffic anomalies from 0.00 to 1.00. High-risk activities place a <strong className="text-amber-400">reversible hold</strong> on payouts. Commissions are never permanently confiscated without human managerial sign-off and forensic log retention.
        </div>
      </div>

      {/* Main Investigation Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Case Docket List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-red-400" />
              Active Risk Docket ({cases.length})
            </span>
          </h2>

          <div className="space-y-3">
            {cases.map(c => (
              <div
                key={c.id}
                onClick={() => setSelectedCase(c)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedCase?.id === c.id
                    ? 'flash-glow-card border-red-500/60 shadow-lg shadow-red-500/20'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">{c.caseNumber}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                    c.riskLevel === 'CRITICAL' ? 'bg-red-500/20 text-red-300' :
                    c.riskLevel === 'HIGH' ? 'bg-orange-500/20 text-orange-300' :
                    c.riskLevel === 'ELEVATED' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    Risk: {(c.riskScore * 100).toFixed(0)}% • {c.riskLevel}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mt-2">{c.affiliateName}</h3>
                <p className="text-xs text-red-300/80 font-medium mt-1">Vector: {c.primaryVector.replace('_', ' ')}</p>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5 text-xs">
                  <span className="text-slate-400">Flagged Amount:</span>
                  <span className="text-white font-bold">${c.flaggedAmount.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between mt-1 text-[11px]">
                  <span className="text-slate-400">Status:</span>
                  <span className={`font-bold ${
                    c.status === 'CLEARED_FALSE_POSITIVE' ? 'text-emerald-400' :
                    c.status === 'HOLD_APPLIED' ? 'text-amber-400' :
                    'text-cyan-400'
                  }`}>
                    {c.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 2 Cols: Forensic Detail & Actions */}
        {selectedCase ? (
          <div className="lg:col-span-2 space-y-6">
            <div className="flash-glow-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">{selectedCase.caseNumber}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                      Affiliate ID: {selectedCase.affiliateId}
                    </span>
                  </div>
                  <h2 className="text-xl font-black text-white mt-1">{selectedCase.affiliateName}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold">
                    Anomaly Score: {(selectedCase.riskScore * 100).toFixed(0)}/100
                  </span>
                </div>
              </div>

              {/* Forensic Evidence Locker */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-purple-400" />
                  Forensic Evidence & Vector Diagnostics
                </h3>
                <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Identified Vector:</span>
                    <strong className="text-red-400 font-mono">{selectedCase.primaryVector}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Flagged Balance:</span>
                    <strong className="text-white">${selectedCase.flaggedAmount.toFixed(2)} USD</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Reversibility State:</span>
                    <strong className={selectedCase.isHoldReversible ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                      {selectedCase.isHoldReversible ? 'REVERSIBLE HOLD' : 'RESOLVED'}
                    </strong>
                  </div>
                  <div className="pt-2 border-t border-white/5 text-slate-300 leading-relaxed">
                    <strong className="text-slate-400 block mb-1">Evidence Summary:</strong>
                    {selectedCase.evidenceSummary}
                  </div>
                </div>
              </div>

              {/* Immutable Audit History */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-cyan-400" />
                  Immutable Case Audit Trail
                </h3>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2.5 text-xs">
                  {selectedCase.history.map((h, idx) => (
                    <div key={idx} className="flex items-start justify-between border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                      <div>
                        <span className="text-slate-200 font-medium">{h.action}</span>
                        <span className="text-slate-400 block text-[11px]">Actor: {h.actor}</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[11px]">{h.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Managerial Review & Actions */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Authorized Enforcement Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleCaseAction(selectedCase.id, 'CLEAR_FALSE_POSITIVE')}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-emerald-600/30"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Clear as False Positive (Release Funds)
                  </button>
                  <button
                    onClick={() => handleCaseAction(selectedCase.id, 'HOLD')}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-amber-600/30"
                  >
                    <Lock className="w-4 h-4" />
                    Apply Reversible Commission Hold
                  </button>
                  <button
                    onClick={() => handleCaseAction(selectedCase.id, 'ESCALATE')}
                    className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-red-700/30"
                  >
                    <UserX className="w-4 h-4" />
                    Escalate to Legal Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-2 flex items-center justify-center p-12 text-slate-500 text-sm">
            Select a case to view forensic telemetry
          </div>
        )}
      </div>
    </div>
  );
};
