import React, { useState } from 'react';
import { 
  Users, 
  Link2, 
  QrCode, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  Layers, 
  Ticket, 
  ChevronRight,
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';
import { NavigationTab, AffiliateAccount } from '../types';

interface AffiliatePortalProps {
  onNavigate: (tab: NavigationTab) => void;
  affiliate?: AffiliateAccount;
}

export const AffiliatePortal: React.FC<AffiliatePortalProps> = ({
  onNavigate,
  affiliate
}) => {
  // Default affiliate profile if none passed
  const currentAffiliate: AffiliateAccount = affiliate || {
    id: 'aff-master-01',
    name: 'Elena Rostova',
    email: 'elena@creatorgrowth.io',
    referralCode: 'ELENA2026',
    referralUrl: 'https://aff.ai/r/ELENA2026',
    status: 'approved',
    rank: 'Gold',
    trafficSources: ['YouTube Reviews', 'TikTok Short Video', 'Email Newsletter'],
    country: 'United States',
    currency: 'USD',
    directAffiliatesCount: 8,
    totalClicks: 14280,
    uniqueClicks: 11450,
    leads: 680,
    confirmedOrders: 184,
    conversionRate: 1.61,
    pendingCommissions: 1240.50,
    approvedCommissions: 4890.00,
    rejectedCommissions: 95.00,
    paidCommissions: 12850.00,
    recurringCommissions: 960.00,
    taxStatus: 'W9_VERIFIED',
    payoutMethod: 'Stripe Connect',
    joinedDate: '2026-03-15'
  };

  const [activeTab, setActiveTab] = useState<'overview' | 'links' | 'coupons' | 'creatives' | 'team' | 'payouts'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [customSlug, setCustomSlug] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState([
    { id: '1', title: 'SaaS Suite Homepage Promo', url: `${currentAffiliate.referralUrl}?utm_source=youtube`, clicks: 4920, sales: 86, earnings: 2580 },
    { id: '2', title: 'AI Assistant Deep Dive', url: `${currentAffiliate.referralUrl}/ai?utm_source=tiktok`, clicks: 6180, sales: 74, earnings: 1850 },
    { id: '3', title: 'Black Friday Lifetime Deal', url: `${currentAffiliate.referralUrl}/deals?utm_source=newsletter`, clicks: 3180, sales: 24, earnings: 1420 },
  ]);

  const [withdrawalRequested, setWithdrawalRequested] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(currentAffiliate.approvedCommissions.toString());

  const handleCopyPrimary = () => {
    navigator.clipboard?.writeText(currentAffiliate.referralUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCreateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSlug) return;
    const newLink = {
      id: Date.now().toString(),
      title: customSlug.toUpperCase() + ' Campaign Link',
      url: `${currentAffiliate.referralUrl}/${customSlug.toLowerCase().replace(/[^a-z0-9-]/g, '')}`,
      clicks: 0,
      sales: 0,
      earnings: 0
    };
    setGeneratedLinks([newLink, ...generatedLinks]);
    setCustomSlug('');
  };

  const handleRequestPayout = () => {
    setWithdrawalRequested(true);
    setTimeout(() => {
      alert(`Withdrawal request of $${withdrawAmount} submitted via ${currentAffiliate.payoutMethod}. Audit ID: PAY-${Date.now()}`);
    }, 400);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Top Banner & Profile Overview */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-orange-500 to-yellow-400 p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.5)] shrink-0">
              <div className="w-full h-full bg-[#0a0f26] rounded-[14px] flex items-center justify-center font-black text-xl text-purple-300">
                {currentAffiliate.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                  DEDICATED AFFILIATE PORTAL · V1.2.0
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  ACTIVE PARTNER
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentAffiliate.name}
              </h1>
              <p className="text-xs text-slate-300">
                Partner ID: <span className="font-mono text-purple-300">{currentAffiliate.id}</span> · Member since {currentAffiliate.joinedDate} · Rank: <strong className="text-yellow-400">{currentAffiliate.rank} Partner</strong>
              </p>
            </div>
          </div>

          {/* Quick Primary Referral Link */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0 max-w-md w-full">
            <div className="flex items-center justify-between text-[11px] mb-1.5 text-slate-400">
              <span className="font-semibold text-slate-200">Your Primary Referral Link</span>
              <span className="text-emerald-400 font-mono">1.61% CR</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentAffiliate.referralUrl}
                className="w-full px-3 py-1.5 rounded-xl bg-black/40 border border-purple-500/30 text-xs font-mono text-white focus:outline-none"
              />
              <button
                onClick={handleCopyPrimary}
                className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1 shrink-0"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Portal Sub-Navigation Tabs */}
        <div className="flex items-center gap-1.5 pt-6 border-t border-white/10 mt-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Analytics' },
            { id: 'links', label: 'Links & QR Codes' },
            { id: 'coupons', label: 'Coupon Attribution' },
            { id: 'creatives', label: 'Banners & Assets' },
            { id: 'team', label: 'Sub-Affiliates (MLM)' },
            { id: 'payouts', label: 'Payout Requests & History' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-purple-600/40 text-white border border-purple-500/60 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: OVERVIEW & ANALYTICS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key KPI Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* Clicks */}
            <div className="p-4 rounded-3xl flash-glow-card border border-white/10 glow-purple">
              <span className="text-[11px] text-purple-300 font-semibold uppercase">Total Clicks</span>
              <div className="text-2xl font-black font-mono text-white mt-1">
                {currentAffiliate.totalClicks.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">{currentAffiliate.uniqueClicks.toLocaleString()} unique</p>
            </div>

            {/* Leads */}
            <div className="p-4 rounded-3xl flash-glow-card border border-white/10">
              <span className="text-[11px] text-blue-300 font-semibold uppercase">Signups / Leads</span>
              <div className="text-2xl font-black font-mono text-white mt-1">
                {currentAffiliate.leads.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Free registrations</p>
            </div>

            {/* Confirmed Orders */}
            <div className="p-4 rounded-3xl flash-glow-card border border-white/10 glow-green">
              <span className="text-[11px] text-emerald-300 font-semibold uppercase">Confirmed Sales</span>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                {currentAffiliate.confirmedOrders}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">1.61% conversion</p>
            </div>

            {/* Pending Commissions */}
            <div className="p-4 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
              <span className="text-[11px] text-yellow-300 font-semibold uppercase">Pending</span>
              <div className="text-2xl font-black font-mono text-yellow-300 mt-1">
                ${currentAffiliate.pendingCommissions.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Locking period</p>
            </div>

            {/* Approved Commissions */}
            <div className="p-4 rounded-3xl flash-glow-card border border-emerald-500/30 glow-green">
              <span className="text-[11px] text-emerald-300 font-semibold uppercase">Available Payout</span>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                ${currentAffiliate.approvedCommissions.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Ready for withdrawal</p>
            </div>

            {/* Lifetime Paid */}
            <div className="p-4 rounded-3xl flash-glow-card border border-white/10 glow-orange">
              <span className="text-[11px] text-orange-300 font-semibold uppercase">Lifetime Paid</span>
              <div className="text-2xl font-black font-mono text-orange-300 mt-1">
                ${currentAffiliate.paidCommissions.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Disbursed to date</p>
            </div>
          </div>

          {/* Rank Progression Bar */}
          <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Rank Progression: Gold Partner (Tier 3)
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-300 font-bold">
                184 / 250 Sales to Platinum (73%)
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 h-full w-[73%]" />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Bronze (0)</span>
              <span>Silver (50)</span>
              <span className="text-yellow-400 font-bold">Gold (150) ★ Current</span>
              <span>Platinum (250)</span>
              <span>Diamond (500)</span>
            </div>
          </div>

          {/* Performance by Channel & Recent Conversions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Conversion Performance by Source
              </h3>
              <div className="space-y-3">
                {[
                  { channel: 'YouTube Channel Reviews', clicks: 6840, orders: 92, rev: '$2,760.00', pct: 50 },
                  { channel: 'TikTok Short Video', clicks: 4210, orders: 54, rev: '$1,620.00', pct: 29 },
                  { channel: 'Email Newsletter', clicks: 2190, orders: 32, rev: '$960.00', pct: 17 },
                  { channel: 'Direct & Others', clicks: 1040, orders: 6, rev: '$180.00', pct: 4 },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{item.channel}</span>
                      <span className="font-mono text-emerald-400 font-bold">{item.rev}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{item.clicks.toLocaleString()} clicks · {item.orders} orders</span>
                      <span>{item.pct}% of total</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                      <div style={{ width: `${item.pct}%` }} className="bg-purple-500 h-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Postback Events */}
            <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Real-Time Verified Postback Events
              </h3>
              <div className="space-y-2.5">
                {[
                  { id: 'ORD-9921', product: 'Enterprise Cloud Suite', amount: '$149.00', comm: '$29.80', date: '12 mins ago', status: 'Approved' },
                  { id: 'ORD-9884', product: 'AI Marketing Automation Pro', amount: '$79.00', comm: '$15.80', date: '1 hour ago', status: 'Pending' },
                  { id: 'ORD-9840', product: 'Annual Developer License', amount: '$299.00', comm: '$59.80', date: '3 hours ago', status: 'Approved' },
                  { id: 'ORD-9791', product: 'Sub-Affiliate L2 Bonus', amount: '$79.00', comm: '$3.95', date: '6 hours ago', status: 'Approved' },
                  { id: 'ORD-9750', product: 'Team Seat Expansion', amount: '$120.00', comm: '$24.00', date: 'Yesterday', status: 'Approved' },
                ].map((ev, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">{ev.product}</div>
                      <div className="text-[11px] text-slate-400 font-mono">Ref: {ev.id} · {ev.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-emerald-400 font-bold">+{ev.comm}</div>
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${ev.status === 'Approved' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-yellow-500/15 text-yellow-300'}`}>
                        {ev.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LINKS & QR CODES */}
      {activeTab === 'links' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Custom Link Generator & Existing Links (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Link Builder Box */}
            <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Link2 className="w-4 h-4 text-purple-400" />
                Generate Campaign Deep Link
              </h3>
              <form onSubmit={handleCreateLink} className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-3 text-xs text-slate-400 font-mono">https://aff.ai/r/{currentAffiliate.referralCode}/</span>
                  <input
                    type="text"
                    placeholder="campaign-slug"
                    value={customSlug}
                    onChange={e => setCustomSlug(e.target.value)}
                    className="w-full pl-52 pr-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/15 focus:border-purple-400 text-xs font-mono text-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors cursor-pointer shrink-0"
                >
                  Create Link
                </button>
              </form>
            </div>

            {/* Generated Links Table */}
            <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Active Affiliate Links
              </h3>
              <div className="space-y-3">
                {generatedLinks.map(link => (
                  <div key={link.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="min-w-0">
                      <div className="font-bold text-white">{link.title}</div>
                      <div className="font-mono text-[11px] text-purple-300 truncate mt-0.5">{link.url}</div>
                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400">
                        <span>Clicks: <strong className="text-white">{link.clicks}</strong></span>
                        <span>Sales: <strong className="text-white">{link.sales}</strong></span>
                        <span>Earned: <strong className="text-emerald-400 font-mono">${link.earnings}</strong></span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(link.url);
                          alert('Copied link: ' + link.url);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive QR Code Widget (1 col) */}
          <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-5 text-center flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-orange-400" />
                  Your Affiliate QR Code
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">
                  SCAN READY
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 text-left">
                Print on physical cards, posters, trade show stands, or display on video streams for mobile scanning.
              </p>

              {/* Real SVG-based QR Code representation */}
              <div className="w-48 h-48 mx-auto p-3 rounded-2xl bg-white shadow-2xl flex items-center justify-center relative group">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                  {/* Outer Frame */}
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  {/* Position detection markers */}
                  <rect x="10" y="10" width="25" height="25" fill="#000" rx="3" />
                  <rect x="15" y="15" width="15" height="15" fill="#fff" rx="2" />
                  <rect x="18" y="18" width="9" height="9" fill="#7c3aed" rx="1" />

                  <rect x="65" y="10" width="25" height="25" fill="#000" rx="3" />
                  <rect x="70" y="15" width="15" height="15" fill="#fff" rx="2" />
                  <rect x="73" y="18" width="9" height="9" fill="#f97316" rx="1" />

                  <rect x="10" y="65" width="25" height="25" fill="#000" rx="3" />
                  <rect x="15" y="70" width="15" height="15" fill="#fff" rx="2" />
                  <rect x="18" y="73" width="9" height="9" fill="#10b981" rx="1" />

                  {/* Dynamic Mock Data Matrix */}
                  <rect x="42" y="12" width="6" height="6" fill="#000" />
                  <rect x="52" y="12" width="6" height="6" fill="#000" />
                  <rect x="42" y="24" width="6" height="6" fill="#000" />
                  <rect x="48" y="32" width="6" height="6" fill="#000" />
                  <rect x="12" y="42" width="6" height="6" fill="#000" />
                  <rect x="24" y="42" width="6" height="6" fill="#000" />
                  <rect x="36" y="42" width="6" height="6" fill="#000" />
                  <rect x="48" y="42" width="6" height="6" fill="#7c3aed" />
                  <rect x="60" y="42" width="6" height="6" fill="#000" />
                  <rect x="72" y="42" width="6" height="6" fill="#000" />
                  <rect x="84" y="42" width="6" height="6" fill="#000" />
                  <rect x="42" y="52" width="6" height="6" fill="#000" />
                  <rect x="52" y="52" width="6" height="6" fill="#000" />
                  <rect x="42" y="62" width="6" height="6" fill="#000" />
                  <rect x="62" y="62" width="6" height="6" fill="#000" />
                  <rect x="72" y="62" width="6" height="6" fill="#000" />
                  <rect x="42" y="74" width="6" height="6" fill="#000" />
                  <rect x="54" y="74" width="6" height="6" fill="#000" />
                  <rect x="64" y="74" width="6" height="6" fill="#000" />
                  <rect x="78" y="74" width="6" height="6" fill="#000" />
                  <rect x="48" y="84" width="6" height="6" fill="#000" />
                  <rect x="68" y="84" width="6" height="6" fill="#000" />
                  <rect x="82" y="84" width="6" height="6" fill="#000" />
                </svg>
              </div>

              <div className="mt-3 text-[11px] font-mono text-purple-300">
                Encodes: {currentAffiliate.referralUrl}
              </div>
            </div>

            <div className="w-full flex gap-2 pt-4 border-t border-white/10">
              <button
                onClick={() => alert('Downloaded QR Code vector image.')}
                className="flex-1 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-purple-400" />
                <span>Download SVG</span>
              </button>
              <button
                onClick={() => alert('Downloaded QR Code High-Res PNG.')}
                className="flex-1 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-orange-400" />
                <span>PNG (300 DPI)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COUPONS */}
      {activeTab === 'coupons' && (
        <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Ticket className="w-4 h-4 text-emerald-400" />
                Coupon-Based Referral Attribution
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Shoppers who enter your personalized coupon at checkout are automatically credited to your affiliate ID without clicking a link.
              </p>
            </div>
            <button
              onClick={() => alert('Coupon code request submitted to Merchant admin.')}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors"
            >
              Request Custom Code
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { code: 'ELENA20', discount: '20% OFF First Order', commission: '20% Standard', usage: '64 times', status: 'ACTIVE' },
              { code: 'CREATORVIP', discount: '15% Lifetime Discount', commission: '15% Recurring', usage: '112 times', status: 'ACTIVE' },
              { code: 'SUMMERAI', discount: '$50 Off Annual Plan', commission: '$50 Flat Payout', usage: '18 times', status: 'ACTIVE' }
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base font-black text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/30">
                    {c.code}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    {c.status}
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-white font-medium">{c.discount}</div>
                  <div className="text-slate-400">Commission: <span className="text-emerald-400 font-mono">{c.commission}</span></div>
                  <div className="text-slate-400">Redemptions: <span className="text-white font-mono">{c.usage}</span></div>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(c.code);
                    alert(`Copied coupon code ${c.code}`);
                  }}
                  className="w-full py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-semibold"
                >
                  Copy Code
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CREATIVES */}
      {activeTab === 'creatives' && (
        <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Promotional Banners & Brand Assets
            </h3>
            <span className="text-xs text-slate-400">Embed codes pre-configured with your affiliate link</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { dim: '1200 x 628 (16:9 Hero)', name: 'Cloud Platform Landscape Banner', tag: 'Web & Blog' },
              { dim: '1080 x 1920 (9:16 Vertical)', name: 'Story & Reels High-Converting Slide', tag: 'TikTok / IG' },
              { dim: '1080 x 1080 (1:1 Square)', name: 'Feature Highlights Carousel Card', tag: 'Social Feed' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="h-32 rounded-xl bg-gradient-to-tr from-purple-900/60 via-slate-900 to-orange-950/60 border border-white/10 flex flex-col items-center justify-center p-3 text-center">
                  <Sparkles className="w-6 h-6 text-purple-400 mb-1" />
                  <span className="font-bold text-xs text-white">{b.dim}</span>
                  <span className="text-[10px] text-slate-400 mt-1">{b.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{b.tag}</span>
                  <button 
                    onClick={() => alert('Copied HTML embed snippet with referral tracking.')}
                    className="text-purple-300 hover:text-white underline font-semibold text-[11px]"
                  >
                    Copy HTML Embed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SUB-AFFILIATES (MLM) */}
      {activeTab === 'team' && (
        <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-400" />
                Sub-Affiliate Team Performance (Multi-Level Tier)
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Earn 5% override commissions on Level 2 sales generated by your recruited affiliates. (Strictly sales-volume tied).
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Team Override Earnings</span>
              <div className="text-xl font-bold font-mono text-emerald-400">$648.50</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: 'Marcus Vance', ref: 'MARCUS_V', sales: 42, rev: '$126.00', rank: 'Silver' },
              { name: 'Sarah Lin', ref: 'SARAH_L', sales: 68, rev: '$204.00', rank: 'Gold' },
              { name: 'Devon Reed', ref: 'DEVON_R', sales: 18, rev: '$54.00', rank: 'Bronze' },
              { name: 'Amina Al-Mansoor', ref: 'AMINA_M', sales: 88, rev: '$264.50', rank: 'Gold' },
            ].map((sub, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{sub.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-purple-300">{sub.rank}</span>
                </div>
                <div className="text-[11px] text-slate-400">Code: <span className="font-mono text-slate-300">{sub.ref}</span></div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400">{sub.sales} sales</span>
                  <span className="font-mono text-emerald-400 font-bold">+{sub.rev}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: PAYOUTS */}
      {activeTab === 'payouts' && (
        <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/30">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Available for Withdrawal</span>
              <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
                ${currentAffiliate.approvedCommissions.toFixed(2)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Disbursement method: <strong className="text-white">{currentAffiliate.payoutMethod}</strong> · Threshold: $50.00
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={withdrawAmount}
                onChange={e => setWithdrawAmount(e.target.value)}
                className="w-32 px-3 py-2 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm"
              />
              <button
                onClick={handleRequestPayout}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-colors cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Request Payout
              </button>
            </div>
          </div>

          {/* Payment History */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Disbursement History
            </h4>
            <div className="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
              {[
                { date: 'Oct 28, 2026', id: 'PAY-8849', amount: '$4,120.00', method: 'Stripe Connect', status: 'PAID' },
                { date: 'Sep 30, 2026', id: 'PAY-7621', amount: '$3,850.00', method: 'Stripe Connect', status: 'PAID' },
                { date: 'Aug 31, 2026', id: 'PAY-6490', amount: '$2,940.00', method: 'Stripe Connect', status: 'PAID' },
                { date: 'Jul 31, 2026', id: 'PAY-5120', amount: '$1,940.00', method: 'Stripe Connect', status: 'PAID' },
              ].map((p, i) => (
                <div key={i} className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{p.amount}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{p.id} · {p.date}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                      {p.status}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1">{p.method}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
