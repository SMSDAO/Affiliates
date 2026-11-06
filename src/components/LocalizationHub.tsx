import React, { useState, useEffect } from 'react';
import { 
  Globe2, 
  Languages, 
  DollarSign, 
  Clock, 
  FileCheck2, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  MapPin
} from 'lucide-react';
import { MarketLocalizationConfig } from '../types';

export const LocalizationHub: React.FC = () => {
  const [configs, setConfigs] = useState<MarketLocalizationConfig[]>([]);
  const [activeLocale, setActiveLocale] = useState<string>('en');
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchConfigs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/localization/configs');
      const json = await res.json();
      if (json.success) setConfigs(json.data);
    } catch (err) {
      console.error('Failed to load localization configs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  const handleSwitchLocale = async (locale: string) => {
    try {
      const res = await fetch('/api/v1/localization/switch-locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale })
      });
      const json = await res.json();
      if (json.success) {
        setActiveLocale(locale);
        setStatusMessage(json.message);
      }
    } catch (err) {
      console.error('Failed to switch market locale', err);
    }
  };

  const selectedConfig = configs.find(c => c.locale === activeLocale) || configs[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              Module F • Global Localization & Market Expansion
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              International Markets, RTL Layouts & Regional Tax Hub
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Cross-border commerce support for 8 global economic regions. Configurable VAT/GST rates, strict regulatory compliance disclosures (FTC, GDPR, LGPD, PDPA), and native Right-to-Left (RTL) orientation.
            </p>
          </div>
          <button
            onClick={fetchConfigs}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-blue-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-blue-400 ${loading ? 'animate-spin' : ''}`} />
            Sync Market Matrix
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Regional Selector Pills */}
      <div className="flex flex-wrap gap-2.5">
        {configs.map(cfg => (
          <button
            key={cfg.locale}
            onClick={() => handleSwitchLocale(cfg.locale)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeLocale === cfg.locale
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/50'
                : 'flash-glow-card text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{cfg.languageName}</span>
            {cfg.direction === 'rtl' && (
              <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 text-[10px]">RTL</span>
            )}
          </button>
        ))}
      </div>

      {/* Active Market Deep Dive Card */}
      {selectedConfig && (
        <div className={`flash-glow-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-6 ${
          selectedConfig.direction === 'rtl' ? 'text-right' : 'text-left'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold uppercase">
                  Locale Code: {selectedConfig.locale}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold">
                  Direction: {selectedConfig.direction.toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl font-black text-white mt-2">
                {selectedConfig.languageName} Market Profile
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                {selectedConfig.activeCampaignsCount} Active Campaigns
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">Primary Currency</span>
              <span className="text-lg font-bold text-white flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                {selectedConfig.currency}
              </span>
              <span className="text-[11px] text-slate-400">Authoritative FX rates locked</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">Regional Time-Zone</span>
              <span className="text-lg font-bold text-white flex items-center gap-1">
                <Clock className="w-4 h-4 text-cyan-400" />
                {selectedConfig.timeZone.split(' ')[0]}
              </span>
              <span className="text-[11px] text-slate-400">{selectedConfig.timeZone}</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">Jurisdictional Tax / VAT</span>
              <span className="text-lg font-bold text-amber-300">
                {selectedConfig.taxRatePct > 0 ? `${selectedConfig.taxRatePct}% VAT/GST` : '0% Direct B2B'}
              </span>
              <span className="text-[11px] text-slate-400">
                {selectedConfig.vatGstApplicable ? 'VAT Invoicing Enforced' : 'Sales Tax Exempt'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 font-semibold block">Layout Orientation</span>
              <span className="text-lg font-bold text-purple-300">
                {selectedConfig.direction === 'rtl' ? 'Right-To-Left (RTL)' : 'Left-To-Right (LTR)'}
              </span>
              <span className="text-[11px] text-slate-400">Auto-mirroring enabled</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 font-bold block">Regional Legal & Compliance Terms:</span>
            <div className="text-xs text-slate-300 leading-relaxed flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{selectedConfig.regionalComplianceTerms}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
