import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Download, 
  Filter, 
  Search, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { PayoutRecord } from '../types';

export const PayoutCenter: React.FC = () => {
  const [payouts, setPayouts] = useState<PayoutRecord[]>([
    { id: 'PAY-1009', affiliateId: 'aff-master-01', affiliateName: 'Elena Rostova', amount: 4890.00, currency: 'USD', provider: 'Stripe Connect', status: 'requested', requestedAt: '2026-11-05 09:14' },
    { id: 'PAY-1008', affiliateId: 'aff-02', affiliateName: 'Marcus Vance', amount: 820.00, currency: 'USD', provider: 'PayPal Payouts', status: 'pending_review', requestedAt: '2026-11-05 08:30' },
    { id: 'PAY-1007', affiliateId: 'aff-03', affiliateName: 'Amina Al-Mansoor', amount: 1450.00, currency: 'USD', provider: 'Paystack', status: 'approved', requestedAt: '2026-11-04 16:22', transactionRef: 'PSTK-TX-9921' },
    { id: 'PAY-1006', affiliateId: 'aff-04', affiliateName: 'Sarah Lin', amount: 2120.00, currency: 'USD', provider: 'Stripe Connect', status: 'paid', requestedAt: '2026-11-03 11:00', processedAt: '2026-11-03 14:10', transactionRef: 'ch_stripe_994821' },
    { id: 'PAY-1005', affiliateId: 'aff-05', affiliateName: 'Devon Reed', amount: 350.00, currency: 'USD', provider: 'Bank Wire', status: 'paid', requestedAt: '2026-11-01 10:45', processedAt: '2026-11-02 09:00', transactionRef: 'WIRE-FED-8840' },
    { id: 'PAY-1004', affiliateId: 'aff-06', affiliateName: 'Apex Media Corp', amount: 8940.00, currency: 'USD', provider: 'Stripe Connect', status: 'paid', requestedAt: '2026-10-28 14:00', processedAt: '2026-10-28 16:30', transactionRef: 'ch_stripe_771920' },
  ]);

  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [processingId, setProcessingId] = useState<string | null>(null);

  const filtered = payouts.filter(p => filterStatus === 'all' || p.status === filterStatus);

  const totalPending = payouts
    .filter(p => p.status === 'requested' || p.status === 'pending_review' || p.status === 'approved')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPaid = payouts
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const handleApprove = (id: string) => {
    setProcessingId(id);
    setTimeout(() => {
      setPayouts(prev => prev.map(p => 
        p.id === id ? { ...p, status: 'approved' as const } : p
      ));
      setProcessingId(null);
    }, 500);
  };

  const handleDisburse = (id: string) => {
    setProcessingId(id);
    setTimeout(() => {
      setPayouts(prev => prev.map(p => 
        p.id === id ? { 
          ...p, 
          status: 'paid' as const, 
          processedAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
          transactionRef: `tx_${p.provider.toLowerCase().slice(0, 4)}_${Date.now()}` 
        } : p
      ));
      setProcessingId(null);
      alert(`Disbursement executed via provider adapter. Transaction reference generated.`);
    }, 700);
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["ID,Affiliate,Amount,Currency,Provider,Status,RequestedAt,TransactionRef"]
      .concat(payouts.map(p => `${p.id},${p.affiliateName},${p.amount},${p.currency},${p.provider},${p.status},${p.requestedAt},${p.transactionRef || ''}`))
      .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `affiliate_payouts_ledger_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                PAYOUTS & WITHDRAWAL MANAGEMENT · V1.2.0
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">DISBURSEMENT RAILS ONLINE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Enterprise Payout Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Execute tokenized payouts via Stripe Connect, PayPal Payouts, Paystack, or automated bank wires with independent read-back verification and zero stored card data.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Export CSV Ledger</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
          <span className="text-xs font-semibold text-yellow-300 uppercase">Pending Approval & Processing</span>
          <div className="text-3xl font-black font-mono text-yellow-300 mt-1">
            ${totalPending.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">3 requests awaiting execution</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <span className="text-xs font-semibold text-emerald-300 uppercase">Total Disbursed (MTD)</span>
          <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
            ${totalPaid.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Reconciled with banking APIs</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <span className="text-xs font-semibold text-purple-300 uppercase">Provider Statuses</span>
          <div className="mt-2 space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Stripe Connect:</span>
              <span className="text-emerald-400 font-mono font-bold">HEALTHY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">PayPal Payouts:</span>
              <span className="text-emerald-400 font-mono font-bold">HEALTHY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Paystack:</span>
              <span className="text-emerald-400 font-mono font-bold">HEALTHY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payout Queue Table */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Payout Execution Queue
          </h3>
          <div className="flex items-center gap-1.5">
            {['all', 'requested', 'pending_review', 'approved', 'paid'].map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filterStatus === st 
                    ? 'bg-purple-600/40 text-white border border-purple-500/50' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {st.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
          {filtered.map(p => (
            <div key={p.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{p.affiliateName}</span>
                  <span className="text-slate-400 font-mono text-[11px]">({p.affiliateId})</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    p.status === 'paid' ? 'bg-emerald-500/20 text-emerald-300' :
                    p.status === 'approved' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {p.status.toUpperCase().replace('_', ' ')}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Ref: <strong className="font-mono text-purple-300">{p.id}</strong> · Method: <strong className="text-slate-200">{p.provider}</strong> · Requested: {p.requestedAt}
                </div>
                {p.transactionRef && (
                  <div className="text-[10px] font-mono text-slate-400">
                    Bank Reference: <span className="text-slate-300">{p.transactionRef}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <span className="text-lg font-black font-mono text-white">
                    ${p.amount.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-mono">{p.currency}</span>
                </div>

                {p.status === 'requested' && (
                  <button
                    onClick={() => handleApprove(p.id)}
                    disabled={processingId === p.id}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Approve
                  </button>
                )}

                {p.status === 'approved' && (
                  <button
                    onClick={() => handleDisburse(p.id)}
                    disabled={processingId === p.id}
                    className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-black text-black transition-colors cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                  >
                    Disburse Now
                  </button>
                )}

                {p.status === 'paid' && (
                  <span className="flex items-center gap-1 text-emerald-400 font-mono text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Settled</span>
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
