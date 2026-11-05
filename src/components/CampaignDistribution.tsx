import React, { useState } from 'react';
import { 
  Target, 
  Play, 
  Pause, 
  RotateCcw, 
  TrendingUp, 
  DollarSign, 
  MousePointerClick, 
  ShieldCheck, 
  Layers, 
  Globe2, 
  ExternalLink,
  Plus,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Campaign } from '../types';
import { initialCampaigns } from '../data/mockData';

export const CampaignDistribution: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);

  const toggleCampaignStatus = (id: string) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === id) {
        return {
          ...c,
          status: c.status === 'active' ? 'paused' : 'active'
        };
      }
      return c;
    }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
                CENTRAL CAMPAIGN ORCHESTRATION ENGINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40">
                CLOSED-LOOP ATTRIBUTION
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autonomous Campaign Distribution
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Monitor multi-channel performance, manage ROAS pacing, control active distributions, and trigger automated optimization routines across all synchronized partner accounts.
            </p>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="space-y-4">
        {campaigns.map((camp) => (
          <div
            key={camp.id}
            className="flash-glow-card p-6 rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all space-y-4"
          >
            {/* Header: Name, Product & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {camp.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    camp.status === 'active' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                      : camp.status === 'optimizing'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                  }`}>
                    {camp.status.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">· ROAS {camp.roas}x</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-300">
                  <span>Product: <strong className="text-white">{camp.targetProduct}</strong></span>
                  <span className="text-slate-600">·</span>
                  <span>Network: <span className="text-purple-300">{camp.network}</span></span>
                  <span className="text-slate-600">·</span>
                  <span>Target Geos: <span className="text-orange-300 font-mono">{camp.targetGeos.join(', ')}</span></span>
                </div>
              </div>

              {/* Pause/Resume and Rollback Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleCampaignStatus(camp.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    camp.status === 'active'
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 hover:bg-yellow-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                  }`}
                >
                  {camp.status === 'active' ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause Campaign</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Resume Campaign</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => alert(`Rollback initiated for ${camp.name}: Restoring previous verified state.`)}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Rollback Campaign State"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Total Revenue</span>
                <span className="font-mono text-base font-bold text-emerald-400">
                  ${camp.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] text-slate-500 block">ROAS: {camp.roas}x</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Clicks & Leads</span>
                <span className="font-mono text-base font-bold text-white">
                  {camp.clicks.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block">Attributed volume</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Conversions</span>
                <span className="font-mono text-base font-bold text-purple-300">
                  {camp.conversions.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block">Verified postbacks</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Active Channels</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {camp.channels.map((ch, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
