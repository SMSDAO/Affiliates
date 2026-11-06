import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Layers, 
  DollarSign, 
  Sparkles, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  RefreshCw, 
  Sliders, 
  Lock, 
  Zap,
  Clock,
  ArrowRight
} from 'lucide-react';
import { AgentControlModel } from '../types';

export const AiAgentControlCenter: React.FC = () => {
  const [models, setModels] = useState<AgentControlModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState<AgentControlModel | null>(null);
  const [newBudget, setNewBudget] = useState<string>('');
  const [updatingBudget, setUpdatingBudget] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchModels = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/ai-control/models');
      const json = await res.json();
      if (json.success) setModels(json.data);
    } catch (err) {
      console.error('Failed to load AI model control roster', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleUpdateBudget = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModel || !newBudget) return;
    setUpdatingBudget(true);
    setStatusMessage(null);
    try {
      const res = await fetch('/api/v1/ai-control/update-budget', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modelAlias: selectedModel.modelAlias,
          newBudgetUSD: newBudget
        })
      });
      const json = await res.json();
      if (json.success) {
        setStatusMessage(json.message);
        setSelectedModel(null);
        setNewBudget('');
        fetchModels();
      }
    } catch (err) {
      console.error('Budget update failed', err);
    } finally {
      setUpdatingBudget(false);
    }
  };

  const totalBudget = models.reduce((acc, m) => acc + m.monthlyBudgetUSD, 0);
  const totalSpend = models.reduce((acc, m) => acc + m.currentSpendUSD, 0);
  const totalTokens = models.reduce((acc, m) => acc + m.monthlyTokensUsed, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide uppercase">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              Module G • Unified AI Agent Control & Provider Routing Center
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Multi-Provider Routing, Token Metering & Budget Guardrails
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Centralized orchestration across Google Gemini, OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and DeepSeek R1. Enforces hard dollar spend caps, latency circuit breakers, and automatic multi-tier fallback.
            </p>
          </div>
          <button
            onClick={fetchModels}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-purple-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-purple-400 ${loading ? 'animate-spin' : ''}`} />
            Sync AI Matrix
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Aggregate AI Control Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">TOTAL MONTHLY AI BUDGET</span>
          <div className="text-2xl font-black text-white">${totalBudget.toFixed(2)}</div>
          <div className="text-xs text-purple-400 font-medium">Hard spend cap enforced</div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">CURRENT SPEND (MTD)</span>
          <div className="text-2xl font-black text-emerald-300">${totalSpend.toFixed(2)}</div>
          <div className="text-xs text-slate-400 font-medium">
            {((totalSpend / (totalBudget || 1)) * 100).toFixed(1)}% of monthly budget utilized
          </div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">TOTAL TOKENS PROCESSED</span>
          <div className="text-2xl font-black text-cyan-300">
            {(totalTokens / 1000000).toFixed(1)}M Tokens
          </div>
          <div className="text-xs text-cyan-400 font-medium">Across prompt & response feeds</div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">CIRCUIT BREAKER STATUS</span>
          <div className="text-2xl font-black text-emerald-400">ALL CLOSED</div>
          <div className="text-xs text-emerald-400 font-medium">Zero degraded model endpoints</div>
        </div>
      </div>

      {/* Model Roster Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          Multi-Provider Model Roster & Live Telemetry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map(m => {
            const usagePct = Math.min(100, Math.round((m.currentSpendUSD / m.monthlyBudgetUSD) * 100));
            return (
              <div
                key={m.modelAlias}
                className="flash-glow-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{m.providerName}</h3>
                    <span className="text-xs font-mono text-purple-300 font-semibold">{m.modelAlias}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {m.status}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Monthly Budget Cap:</span>
                    <strong className="text-white">${m.monthlyBudgetUSD.toFixed(2)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Current Spend (MTD):</span>
                    <strong className="text-emerald-400">${m.currentSpendUSD.toFixed(2)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>P95 Response Latency:</span>
                    <strong className="text-cyan-400 font-mono">{m.p95LatencyMs} ms</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Circuit State:</span>
                    <strong className="text-emerald-300 font-mono">{m.circuitBreakerState}</strong>
                  </div>
                </div>

                {/* Spend Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Quota Consumption</span>
                    <span>{usagePct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all"
                      style={{ width: `${usagePct}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedModel(m);
                    setNewBudget(m.monthlyBudgetUSD.toString());
                  }}
                  className="w-full py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  Adjust Budget Cap
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budget Adjustment Modal */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="flash-glow-card max-w-md w-full p-6 rounded-3xl border border-purple-500/40 space-y-4 animate-scaleUp">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-400" />
              Adjust Spend Cap: {selectedModel.modelAlias}
            </h3>
            <p className="text-xs text-slate-400">
              Set the hard maximum monthly dollar expenditure for {selectedModel.providerName}. Invocations beyond this threshold automatically cascade to lower-cost fallback models.
            </p>

            <form onSubmit={handleUpdateBudget} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">New Monthly Budget (USD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    step="10"
                    min="10"
                    max="10000"
                    value={newBudget}
                    onChange={e => setNewBudget(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedModel(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updatingBudget}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30"
                >
                  {updatingBudget ? 'Updating...' : 'Save Spend Cap'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
