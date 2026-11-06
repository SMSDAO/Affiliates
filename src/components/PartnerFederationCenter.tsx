import React, { useState, useEffect } from 'react';
import { 
  Network, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  ShieldCheck, 
  Key, 
  Database, 
  ShoppingBag, 
  ArrowRight, 
  Clock, 
  AlertCircle,
  FileSpreadsheet,
  UploadCloud,
  Layers
} from 'lucide-react';
import { PartnerFederationAdapter } from '../types';

export const PartnerFederationCenter: React.FC = () => {
  const [adapters, setAdapters] = useState<PartnerFederationAdapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncingKey, setSyncingKey] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchAdapters = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/federation/adapters');
      const json = await res.json();
      if (json.success) setAdapters(json.data);
    } catch (err) {
      console.error('Error fetching federation adapters', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdapters();
  }, []);

  const handleSyncNetwork = async (networkKey: string) => {
    setSyncingKey(networkKey);
    setStatusMessage(null);
    try {
      const res = await fetch(`/api/v1/federation/sync/${networkKey}`, {
        method: 'POST'
      });
      const json = await res.json();
      if (json.success) {
        setStatusMessage(`Successfully synced ${json.adapter.name}: +${json.syncedDelta.products} products & +${json.syncedDelta.conversions} conversions.`);
        fetchAdapters();
      }
    } catch (err) {
      console.error('Sync failed', err);
    } finally {
      setSyncingKey(null);
    }
  };

  const handleRotateCredentials = async (networkKey: string) => {
    try {
      const res = await fetch(`/api/v1/federation/rotate-credentials/${networkKey}`, {
        method: 'POST'
      });
      const json = await res.json();
      if (json.success) {
        setStatusMessage(json.message);
        fetchAdapters();
      }
    } catch (err) {
      console.error('Credential rotation failed', err);
    }
  };

  const totalSyncedProducts = adapters.reduce((acc, a) => acc + a.productsSyncedCount, 0);
  const totalImportedConversions = adapters.reduce((acc, a) => acc + a.conversionsImportedCount, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Network className="w-3.5 h-3.5 text-indigo-400" />
              Module C • Global Partner Federation Ecosystem
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Centralized Partner Integration & Feed Federation
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Unified adapter bridge connecting CJ, impact.com, Awin, Rakuten, PartnerStack, ClickBank, ShareASale, FlexOffers, Amazon, and eBay. Direct OAuth/API feeds with credential rotation and manual fallback import.
            </p>
          </div>
          <button
            onClick={fetchAdapters}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-indigo-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-indigo-400 ${loading ? 'animate-spin' : ''}`} />
            Refresh Connections
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Aggregate Federation Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">ACTIVE FEDERATION ADAPTERS</span>
          <div className="text-2xl font-black text-white">{adapters.length} Networks</div>
          <div className="text-xs text-emerald-400 font-medium">100% Connections Optimal</div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">FEDERATED PRODUCT CATALOG</span>
          <div className="text-2xl font-black text-indigo-300">
            {totalSyncedProducts.toLocaleString()} Items
          </div>
          <div className="text-xs text-slate-400 font-medium">Synchronized across data feeds</div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">IMPORTED CONVERSIONS</span>
          <div className="text-2xl font-black text-emerald-300">
            {totalImportedConversions.toLocaleString()} Events
          </div>
          <div className="text-xs text-emerald-400 font-medium">Direct API conversion logs</div>
        </div>

        <div className="flash-glow-card p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-semibold text-slate-400">CREDENTIAL SECURITY</span>
          <div className="text-2xl font-black text-cyan-300">Automated 90D</div>
          <div className="text-xs text-cyan-400 font-medium">Zero expired secrets</div>
        </div>
      </div>

      {/* Adapter Cards Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            Federated Network Adapters (10 Majors)
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Manual CSV/JSON Fallback Supported</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adapters.map(adapter => (
            <div
              key={adapter.id}
              className="flash-glow-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    {adapter.name}
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {adapter.authType}
                    </span>
                  </h3>
                  <span className="text-xs text-slate-400">Terms: {adapter.activeCommissionTerms}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {adapter.connectionHealth}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Catalog Feeds Synced:</span>
                  <span className="text-white font-bold text-sm">{adapter.productsSyncedCount.toLocaleString()} SKUs</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Conversions Imported:</span>
                  <span className="text-emerald-400 font-bold text-sm">{adapter.conversionsImportedCount.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Last Feed Sync:</span>
                  <span className="text-slate-300 font-semibold">{adapter.lastSyncTimestamp}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Key Rotation In:</span>
                  <span className="text-cyan-400 font-semibold">{adapter.credentialRotationDaysRemaining} Days</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <a
                  href={adapter.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  Official Portal
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRotateCredentials(adapter.networkKey)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all flex items-center gap-1 border border-white/10"
                    title="Rotate OAuth/API Secrets"
                  >
                    <Key className="w-3.5 h-3.5 text-cyan-400" />
                    Rotate Secret
                  </button>
                  <button
                    onClick={() => handleSyncNetwork(adapter.networkKey)}
                    disabled={syncingKey === adapter.networkKey}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${syncingKey === adapter.networkKey ? 'animate-spin' : ''}`} />
                    Sync Feed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
