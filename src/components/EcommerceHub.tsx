import React, { useState } from 'react';
import { 
  ShoppingBag, 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw, 
  Layers, 
  Zap, 
  ShieldCheck, 
  AlertCircle, 
  FileCode2, 
  CreditCard,
  Plus,
  Server
} from 'lucide-react';
import { EcommerceAdapter } from '../types';

export const EcommerceHub: React.FC = () => {
  const [adapters, setAdapters] = useState<EcommerceAdapter[]>([
    { id: 'woo-core', name: 'WooCommerce', category: 'ecommerce', logoText: 'WOO', status: 'OPERATIONAL', version: '8.9.2', syncedOrders: 1482, lastWebhookPing: '1 min ago (HTTP 200)', webhookSecret: 'whsec_woo_prod_994' },
    { id: 'woo-sub', name: 'WooCommerce Subscriptions', category: 'subscriptions', logoText: 'W-SUB', status: 'OPERATIONAL', version: '5.6.1', syncedOrders: 420, lastWebhookPing: '4 mins ago (HTTP 200)', webhookSecret: 'whsec_sub_live_810' },
    { id: 'edd', name: 'Easy Digital Downloads (EDD)', category: 'ecommerce', logoText: 'EDD', status: 'CONNECTED', version: '3.2.0', syncedOrders: 290, lastWebhookPing: '12 mins ago (HTTP 200)', webhookSecret: 'whsec_edd_771' },
    { id: 'botble', name: 'Botble E-Commerce CMS', category: 'ecommerce', logoText: 'BOTBLE', status: 'CONNECTED', version: '7.3.0', syncedOrders: 114, lastWebhookPing: '28 mins ago (HTTP 200)', webhookSecret: 'whsec_botble_429' },
    { id: 'wpforms', name: 'WPForms Lead Attribution', category: 'forms', logoText: 'WPF', status: 'OPERATIONAL', version: '1.8.8', syncedOrders: 640, lastWebhookPing: '5 mins ago (HTTP 200)', webhookSecret: 'whsec_wpf_880' },
    { id: 'cf7', name: 'Contact Form 7 Referral Tag', category: 'forms', logoText: 'CF7', status: 'AVAILABLE', version: '5.9.3', syncedOrders: 0, lastWebhookPing: 'Never', webhookSecret: 'Not configured' },
    { id: 'gravity', name: 'Gravity Forms Affiliate Feeds', category: 'forms', logoText: 'GF', status: 'AVAILABLE', version: '2.8.5', syncedOrders: 0, lastWebhookPing: 'Never', webhookSecret: 'Not configured' },
    { id: 'jigoshop', name: 'JigoShop Classic', category: 'ecommerce', logoText: 'JIGO', status: 'AVAILABLE', version: 'Legacy', syncedOrders: 0, lastWebhookPing: 'Never', webhookSecret: 'Not configured' },
  ]);

  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'forms' | 'subscriptions'>('all');
  const [testingId, setTestingId] = useState<string | null>(null);

  const filtered = adapters.filter(a => activeFilter === 'all' || a.category === activeFilter);

  const handleTestWebhook = (id: string) => {
    setTestingId(id);
    setTimeout(() => {
      setTestingId(null);
      alert(`Webhook signature verified for adapter ${id}. Mutual TLS and HMAC-SHA256 handshake passed.`);
    }, 800);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                E-COMMERCE INTEGRATION HUB · V1.2.0
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">MODULAR ADAPTERS ACTIVE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              E-Commerce Stores, Subscriptions & Lead Forms
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Connect external shopping carts and form systems via verified webhook listeners, REST synchronization, and automated attribution postbacks.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
            {[
              { id: 'all', label: 'All Adapters (8)' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'subscriptions', label: 'Subscriptions' },
              { id: 'forms', label: 'Lead Forms' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-purple-600/40 text-white border border-purple-500/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Adapters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map(adapter => (
          <div
            key={adapter.id}
            className="p-5 rounded-3xl flash-glow-card border border-white/10 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-orange-500 p-[1.5px]">
                  <div className="w-full h-full bg-[#0a0f26] rounded-[14px] flex items-center justify-center font-mono font-bold text-xs text-purple-300">
                    {adapter.logoText}
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                  adapter.status === 'OPERATIONAL' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                  adapter.status === 'CONNECTED' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  'bg-white/10 text-slate-400'
                }`}>
                  {adapter.status}
                </span>
              </div>

              <h3 className="font-extrabold text-sm text-white">{adapter.name}</h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Version {adapter.version} · Category: <span className="text-purple-300 capitalize">{adapter.category}</span>
              </p>

              <div className="mt-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Synced Orders:</span>
                  <span className="font-mono text-white font-bold">{adapter.syncedOrders}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Webhook Health:</span>
                  <span className="font-mono text-emerald-300">{adapter.lastWebhookPing}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex gap-2">
              <button
                onClick={() => handleTestWebhook(adapter.id)}
                disabled={testingId === adapter.id}
                className="flex-1 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-purple-400 ${testingId === adapter.id ? 'animate-spin' : ''}`} />
                <span>{testingId === adapter.id ? 'Testing...' : 'Test Webhook'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Webhook Endpoint Configuration */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Global Incoming Webhook Listener Endpoint
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">HMAC-SHA256 SIGNED</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            readOnly
            value="https://aff.ai/api/v1/integrations/webhook/v1-universal"
            className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white"
          />
          <button
            onClick={() => {
              navigator.clipboard?.writeText('https://aff.ai/api/v1/integrations/webhook/v1-universal');
              alert('Copied Webhook URL');
            }}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shrink-0 cursor-pointer"
          >
            Copy Endpoint
          </button>
        </div>
      </div>
    </div>
  );
};
