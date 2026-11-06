import React, { useState, useEffect } from 'react';
import { 
  Puzzle, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  ExternalLink, 
  Code2, 
  ShoppingBag, 
  FileText, 
  Layers,
  Sparkles
} from 'lucide-react';
import { ExtensionPlugin } from '../types';

export const ExtensionMarketplace: React.FC = () => {
  const [extensions, setExtensions] = useState<ExtensionPlugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [installingId, setInstallingId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchExtensions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/extensions');
      const json = await res.json();
      if (json.success) setExtensions(json.data);
    } catch (err) {
      console.error('Failed to load extension marketplace', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExtensions();
  }, []);

  const handleToggleInstall = async (id: string) => {
    setInstallingId(id);
    setStatusMessage(null);
    try {
      const res = await fetch(`/api/v1/extensions/${id}/install`, {
        method: 'POST'
      });
      const json = await res.json();
      if (json.success) {
        setStatusMessage(json.message);
        fetchExtensions();
      }
    } catch (err) {
      console.error('Extension installation failed', err);
    } finally {
      setInstallingId(null);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide uppercase">
              <Puzzle className="w-3.5 h-3.5 text-teal-400" />
              Module H • Developer & Extension Marketplace Ecosystem
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Sandboxed Integrations, E-Commerce Connectors & Plugins
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Extensible enterprise app store with explicit permission scopes, sandboxed runtime boundaries, and verified developer audit certifications. Never runs unrestricted external code in primary process.
            </p>
          </div>
          <button
            onClick={fetchExtensions}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-teal-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-teal-400 ${loading ? 'animate-spin' : ''}`} />
            Refresh Catalog
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Extension Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map(ext => (
          <div
            key={ext.id}
            className="flash-glow-card p-6 rounded-3xl border border-white/10 hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  {ext.category.replace('_', ' ')}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-white/5 border border-white/10 text-slate-300 font-bold">
                  v{ext.version}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{ext.name}</h3>
                <span className="text-xs text-slate-400 block mt-0.5">By {ext.developer}</span>
              </div>

              {/* Sandboxed Badge & Audit Date */}
              <div className="flex items-center gap-2 text-xs">
                {ext.sandboxed && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Sandboxed Runtime
                  </span>
                )}
                <span className="text-slate-400 text-[11px]">Audited: {ext.lastAuditDate}</span>
              </div>

              {/* Permission Scopes */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs">
                <span className="text-slate-400 font-semibold block text-[11px]">Requested Permission Scopes:</span>
                <div className="flex flex-wrap gap-1">
                  {ext.permissionScopes.map((scope, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              {/* Webhook Subscriptions */}
              {ext.webhookSubscriptions.length > 0 && (
                <div className="text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Webhooks: </span>
                  {ext.webhookSubscriptions.join(', ')}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-white/5">
              <button
                onClick={() => handleToggleInstall(ext.id)}
                disabled={installingId === ext.id}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  ext.installStatus === 'INSTALLED'
                    ? 'bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 border border-white/10'
                    : 'bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/30'
                }`}
              >
                {installingId === ext.id ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : ext.installStatus === 'INSTALLED' ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Installed (Click to Deactivate)
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    Install Sandboxed Plugin
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
