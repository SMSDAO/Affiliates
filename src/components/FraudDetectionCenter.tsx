import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  Search, 
  Filter, 
  ShieldCheck, 
  Activity,
  Bot,
  UserX
} from 'lucide-react';
import { FraudAlert } from '../types';

export const FraudDetectionCenter: React.FC = () => {
  const [alerts, setAlerts] = useState<FraudAlert[]>([
    {
      id: 'FRAUD-101',
      type: 'click_flooding',
      severity: 'HIGH',
      riskScore: 88,
      affiliateId: 'aff-suspicious-9',
      ipAddress: '185.220.101.5',
      description: 'Rapid click burst: 1,420 clicks detected within 12 seconds from single Tor exit node cluster.',
      evidence: 'User-Agent randomized headless Chrome. 0% mouse interaction time recorded.',
      status: 'PENDING_REVIEW',
      timestamp: '18 mins ago'
    },
    {
      id: 'FRAUD-102',
      type: 'self_referral',
      severity: 'CRITICAL',
      riskScore: 94,
      affiliateId: 'aff-user-41',
      ipAddress: '198.51.100.22',
      description: 'Matching cardholder name & billing IP between referring affiliate and purchasing customer.',
      evidence: 'Customer email: john.doe@apex.io == Affiliate payout account email.',
      status: 'PENDING_REVIEW',
      timestamp: '45 mins ago'
    },
    {
      id: 'FRAUD-103',
      type: 'coupon_abuse',
      severity: 'MEDIUM',
      riskScore: 62,
      affiliateId: 'aff-deal-site',
      ipAddress: '203.0.113.88',
      description: 'Private influencer coupon code leaked to unauthorized discount aggregator forum.',
      evidence: 'Referral source: couponcabin.com/forum with 48 redemptions in 30 minutes.',
      status: 'PENDING_REVIEW',
      timestamp: '2 hours ago'
    },
    {
      id: 'FRAUD-104',
      type: 'duplicate_conversion',
      severity: 'LOW',
      riskScore: 35,
      affiliateId: 'aff-master-01',
      ipAddress: '192.0.2.14',
      description: 'Duplicate webhook replay event received for already attributed order ORD-9921.',
      evidence: 'Idempotency key matched existing transaction. Second event blocked by SSOT filter.',
      status: 'DISMISSED',
      timestamp: '4 hours ago'
    }
  ]);

  const [filterSeverity, setFilterSeverity] = useState<string>('all');

  const filtered = alerts.filter(a => filterSeverity === 'all' || a.severity === filterSeverity);

  const handleAction = (id: string, action: 'CONFIRMED_FRAUD' | 'DISMISSED') => {
    setAlerts(prev => prev.map(a => 
      a.id === id ? { ...a, status: action } : a
    ));
    alert(`Alert ${id} updated to status: ${action}. Action committed to immutable audit ledger.`);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                FRAUD DETECTION & ATTRIBUTION INTEGRITY · V1.2.0
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">REAL-TIME SENTINEL ACTIVE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Fraud Prevention & Affiliate Control Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Detect click flooding, bot manipulation, self-referrals, and duplicate postbacks using multi-factor heuristics and AI risk scoring. All actions require human authorization before commission holds.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
            {['all', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map(sev => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase transition-all cursor-pointer ${
                  filterSeverity === sev
                    ? 'bg-red-600/40 text-white border border-red-500/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fraud Sentinel Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-red">
          <span className="text-xs font-semibold text-red-300 uppercase">Pending Review</span>
          <div className="text-3xl font-black font-mono text-red-400 mt-1">3 Incidents</div>
          <p className="text-[11px] text-slate-400 mt-1">Requiring compliance signoff</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-orange">
          <span className="text-xs font-semibold text-orange-300 uppercase">Bot Traps Blocked (24h)</span>
          <div className="text-3xl font-black font-mono text-orange-300 mt-1">1,842 Bots</div>
          <p className="text-[11px] text-slate-400 mt-1">Filtered from click analytics</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <span className="text-xs font-semibold text-emerald-300 uppercase">Protected Commissions</span>
          <div className="text-3xl font-black font-mono text-emerald-400 mt-1">$14,290.00</div>
          <p className="text-[11px] text-slate-400 mt-1">Fraudulent clawbacks prevented</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <span className="text-xs font-semibold text-purple-300 uppercase">Attribution Integrity</span>
          <div className="text-3xl font-black font-mono text-purple-300 mt-1">99.82%</div>
          <p className="text-[11px] text-slate-400 mt-1">Idempotent postback rate</p>
        </div>
      </div>

      {/* Review Queue */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 px-1">
          Active Sentinel Incident Queue
        </h3>

        <div className="space-y-3">
          {filtered.map(alert => (
            <div
              key={alert.id}
              className="p-5 rounded-3xl flash-glow-card border border-white/10 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                    alert.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                    alert.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40' :
                    'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                  }`}>
                    {alert.severity} SEVERITY
                  </span>
                  <span className="font-mono text-xs text-slate-400">ID: {alert.id} · {alert.timestamp}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Risk Score:</span>
                  <div className="px-2.5 py-0.5 rounded-lg bg-black/40 border border-white/15 text-xs font-mono font-bold text-red-400">
                    {alert.riskScore} / 100
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-white">{alert.description}</h4>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 mt-2 font-mono text-[11px] text-slate-300">
                  <span className="text-purple-400 font-bold">Evidence: </span>{alert.evidence}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                <div className="text-slate-400 font-mono">
                  Affiliate: <strong className="text-white">{alert.affiliateId}</strong> · IP: {alert.ipAddress}
                </div>

                {alert.status === 'PENDING_REVIEW' ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction(alert.id, 'DISMISSED')}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                    >
                      Dismiss (False Positive)
                    </button>
                    <button
                      onClick={() => handleAction(alert.id, 'CONFIRMED_FRAUD')}
                      className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white transition-colors cursor-pointer shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                    >
                      Confirm Fraud & Hold Commissions
                    </button>
                  </div>
                ) : (
                  <span className={`font-mono text-xs font-bold ${alert.status === 'CONFIRMED_FRAUD' ? 'text-red-400' : 'text-slate-400'}`}>
                    Status: {alert.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
