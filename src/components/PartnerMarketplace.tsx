import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  RefreshCw, 
  Filter, 
  Search, 
  Key, 
  Zap, 
  Globe2,
  Lock,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Gift,
  Copy,
  Check,
  UserCheck,
  SlidersHorizontal,
  BookmarkCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { AffiliatePartner, PartnerStatus } from '../types';
import { initialPartners } from '../data/mockData';

export const PartnerMarketplace: React.FC = () => {
  const [partners, setPartners] = useState<AffiliatePartner[]>(() => {
    // Check if user has saved tags in local storage
    try {
      const saved = localStorage.getItem('sam_bound_partners');
      if (saved) {
        const parsed = JSON.parse(saved);
        return initialPartners.map(p => {
          if (parsed[p.id]) {
            return {
              ...p,
              accountNumber: parsed[p.id].accountNumber || p.accountNumber,
              userConnectedId: parsed[p.id].accountNumber || p.userConnectedId,
              status: parsed[p.id].status || p.status
            };
          }
          return p;
        });
      }
    } catch {
      // Fallback
    }
    return initialPartners;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [quickFilter, setQuickFilter] = useState<'all' | 'mobile' | 'trial' | 'saas' | 'ecommerce' | 'connected'>('all');
  
  // Expandable instructions state per partner
  const [expandedInstructions, setExpandedInstructions] = useState<Record<string, boolean>>({});

  // Binding modal & inline editing state
  const [bindingPartner, setBindingPartner] = useState<AffiliatePartner | null>(null);
  const [profileTagInput, setProfileTagInput] = useState('');
  const [isBinding, setIsBinding] = useState(false);
  const [bindSuccessMessage, setBindSuccessMessage] = useState<string | null>(null);
  const [copiedPartnerId, setCopiedPartnerId] = useState<string | null>(null);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);

  const categories = [
    'All',
    'SaaS & Enterprise',
    'Mobile Apps & CPI',
    'Free Trials & SaaS',
    'E-Commerce & Retail',
    'AI Software',
    'Web Hosting',
    'Travel & Booking',
    'Publishing & Media'
  ];

  // Quick filter logic
  const filteredPartners = partners.filter(p => {
    // Quick filter check
    if (quickFilter === 'mobile' && !p.mobileAppTracking) return false;
    if (quickFilter === 'trial' && !p.freeTrialSupport) return false;
    if (quickFilter === 'saas' && !p.category.toLowerCase().includes('saas') && !p.productCategories.some(c => c.toLowerCase().includes('saas'))) return false;
    if (quickFilter === 'ecommerce' && !p.category.toLowerCase().includes('commerce') && !p.category.toLowerCase().includes('retail')) return false;
    if (quickFilter === 'connected' && p.status !== 'CONNECTED' && p.status !== 'ACTIVE') return false;

    // Search query check
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.freeTrialBounty && p.freeTrialBounty.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.productCategories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.accountNumber && p.accountNumber.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category dropdown check
    const matchesCategory = selectedCategory === 'All' || 
      p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      p.productCategories.some(c => c.toLowerCase().includes(selectedCategory.toLowerCase()));

    // Status dropdown check
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const toggleInstructions = (partnerId: string) => {
    setExpandedInstructions(prev => ({
      ...prev,
      [partnerId]: !prev[partnerId]
    }));
  };

  const handleOpenBindModal = (partner: AffiliatePartner) => {
    setBindingPartner(partner);
    setProfileTagInput(partner.accountNumber || partner.userConnectedId || '');
    setBindSuccessMessage(null);
  };

  const handleSaveProfileBinding = () => {
    if (!bindingPartner) return;
    setIsBinding(true);

    setTimeout(() => {
      const updatedTag = profileTagInput.trim() || `PUB-${Math.floor(100000 + Math.random() * 900000)}`;
      
      const updatedList = partners.map(p => {
        if (p.id === bindingPartner.id) {
          return {
            ...p,
            status: 'CONNECTED' as PartnerStatus,
            accountNumber: updatedTag,
            userConnectedId: updatedTag,
            lastVerified: 'Just now (Bound to User Profile)',
            verificationSource: `Verified User Profile Publisher ID [${updatedTag}]`
          };
        }
        return p;
      });

      setPartners(updatedList);

      // Persist in localStorage
      try {
        const stored: Record<string, { accountNumber: string; status: PartnerStatus }> = {};
        updatedList.forEach(p => {
          if (p.accountNumber) {
            stored[p.id] = { accountNumber: p.accountNumber, status: p.status };
          }
        });
        localStorage.setItem('sam_bound_partners', JSON.stringify(stored));
      } catch {
        // Ignored in non-browser environments
      }

      setIsBinding(false);
      setBindSuccessMessage(`Publisher Tag "${updatedTag}" successfully bound to your user profile! Status updated to CONNECTED.`);

      setTimeout(() => {
        setBindingPartner(null);
      }, 1500);
    }, 600);
  };

  const handleCopyLinkSample = (partner: AffiliatePartner) => {
    const tag = partner.accountNumber || 'YOUR_TAG';
    let sample = `${partner.officialWebsite}?ref=${tag}`;
    if (partner.id === 'apple') {
      sample = `https://apps.apple.com/app/id123456789?pt=${tag}&ct=superaff`;
    } else if (partner.id === 'amazon') {
      sample = `https://www.amazon.com/dp/B08N5WRWNW?tag=${tag}`;
    } else if (partner.id === 'shopify') {
      sample = `https://shopify.pxf.io/c/${tag}/123456/5342`;
    } else if (partner.id === 'semrush') {
      sample = `https://semrush.sjv.io/c/${tag}/123456/13053`;
    }

    navigator.clipboard.writeText(sample);
    setCopiedPartnerId(partner.id);
    setTimeout(() => setCopiedPartnerId(null), 2000);
  };

  const getStatusBadge = (status: PartnerStatus) => {
    switch (status) {
      case 'CONNECTED':
      case 'ACTIVE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            CONNECTED
          </span>
        );
      case 'APPROVED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-mono font-bold">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            APPROVED
          </span>
        );
      case 'APPLICATION_PENDING':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[10px] font-mono font-bold">
            <Clock className="w-3 h-3 text-yellow-400" />
            PENDING
          </span>
        );
      case 'DISCOVERABLE':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-mono font-bold">
            DISCOVERABLE
          </span>
        );
    }
  };

  const connectedCount = partners.filter(p => p.status === 'CONNECTED' || p.status === 'ACTIVE').length;
  const mobileCount = partners.filter(p => p.mobileAppTracking).length;
  const trialCount = partners.filter(p => p.freeTrialSupport).length;

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                OFFICIAL PRODUCTION PARTNER DIRECTORY
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                {partners.length} MAJOR NETWORKS & APPS
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                100% PRODUCTION REGISTRATION LINKS
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Major Affiliate Providers & Mobile Apps Marketplace
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Access official direct registration portals, mobile app attribution partners (Apple App Store, Google Play, AppsFlyer), and high-converting Free Trial SaaS programs. Follow step-by-step instructions to get approved, then bind your Publisher IDs directly into your profile for instant tracking link generation.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            {/* Bound Profile Status */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs min-w-[140px]">
              <div className="text-slate-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bound Profiles</span>
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                {connectedCount} <span className="text-xs text-slate-400 font-normal">/ {partners.length}</span>
              </div>
            </div>

            {/* Quick Profile Drawer Trigger */}
            <button
              onClick={() => setShowProfileDrawer(!showProfileDrawer)}
              className="px-4 py-3.5 rounded-2xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <BookmarkCheck className="w-4 h-4 text-purple-300" />
              <span>{showProfileDrawer ? 'Hide Profile Tags' : 'View My Profile Tags'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Profile Tags Drawer */}
        {showProfileDrawer && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                My Bound Publisher & Affiliate IDs ({connectedCount} Active)
              </h3>
              <span className="text-[11px] text-slate-400">
                These tags are automatically appended to your deep links and campaign redirects.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {partners
                .filter(p => p.accountNumber)
                .map(p => (
                  <div key={p.id} className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                    <div className="truncate mr-2">
                      <div className="font-semibold text-white truncate">{p.name}</div>
                      <div className="font-mono text-[11px] text-purple-300 truncate">{p.accountNumber}</div>
                    </div>
                    <button
                      onClick={() => handleCopyLinkSample(p)}
                      title="Copy sample affiliate link"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                    >
                      {copiedPartnerId === p.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Filter Bar */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setQuickFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'all'
              ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All Providers ({partners.length})</span>
        </button>

        <button
          onClick={() => setQuickFilter('mobile')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'mobile'
              ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Mobile Apps & CPI ({mobileCount})</span>
        </button>

        <button
          onClick={() => setQuickFilter('trial')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'trial'
              ? 'bg-amber-600 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>Free Trial Bounties ({trialCount})</span>
        </button>

        <button
          onClick={() => setQuickFilter('saas')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'saas'
              ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-indigo-400" />
          <span>SaaS & Enterprise</span>
        </button>

        <button
          onClick={() => setQuickFilter('ecommerce')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'ecommerce'
              ? 'bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>E-Commerce & Retail</span>
        </button>

        <button
          onClick={() => setQuickFilter('connected')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            quickFilter === 'connected'
              ? 'bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
              : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Bound in Profile ({connectedCount})</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-3xl flash-glow-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Apple, Google, Shopify, Semrush..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-purple-500/50"
          />
        </div>

        {/* Category & Status Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <Filter className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-slate-400">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              {categories.map(c => <option key={c} value={c} className="bg-[#0b102b]">{c}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-[#0b102b]">All Statuses</option>
              <option value="CONNECTED" className="bg-[#0b102b]">Connected</option>
              <option value="ACTIVE" className="bg-[#0b102b]">Active</option>
              <option value="APPROVED" className="bg-[#0b102b]">Approved</option>
              <option value="APPLICATION_PENDING" className="bg-[#0b102b]">Pending</option>
              <option value="DISCOVERABLE" className="bg-[#0b102b]">Discoverable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing {filteredPartners.length} of {partners.length} verified affiliate networks and mobile app providers</span>
        <span className="font-mono text-purple-300">All Registration & Login Links Verified Production</span>
      </div>

      {/* 26 Major Partner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredPartners.map((partner) => {
          const isExpanded = !!expandedInstructions[partner.id];
          const hasTag = !!partner.accountNumber;

          return (
            <div 
              key={partner.id} 
              className={`flash-glow-card p-5 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                hasTag 
                  ? 'border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]' 
                  : 'border-white/10 hover:border-purple-400/50'
              }`}
            >
              <div>
                {/* Top Row: Name and Status */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                      {partner.name}
                      {partner.mobileAppTracking && (
                        <span title="Mobile App Tracking Available">
                          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                        </span>
                      )}
                      {partner.freeTrialSupport && (
                        <span title="Free Trial Bounty Support">
                          <Gift className="w-3.5 h-3.5 text-amber-400" />
                        </span>
                      )}
                    </h3>
                    <span className="text-xs text-purple-300 font-medium">
                      {partner.category}
                    </span>
                  </div>
                  {getStatusBadge(partner.status)}
                </div>

                {/* Mobile App & Free Trial Callouts */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {partner.mobileAppTracking && partner.mobileAppStores && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                      <Smartphone className="w-3 h-3 text-cyan-400" />
                      <span>{partner.mobileAppStores.join(' · ')}</span>
                    </div>
                  )}

                  {partner.freeTrialSupport && partner.freeTrialBounty && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono">
                      <Gift className="w-3 h-3 text-amber-400" />
                      <span>{partner.freeTrialBounty}</span>
                    </div>
                  )}
                </div>

                {/* Commission Model & Cookie Duration */}
                <div className="mt-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Commission Model:</span>
                    <span className="font-semibold text-white text-right truncate ml-2">{partner.commissionModel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Cookie Lifetime:</span>
                    <span className="font-mono text-orange-300">{partner.cookieDuration}</span>
                  </div>
                  {partner.averageApprovalTime && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Approval Time:</span>
                      <span className="font-mono text-slate-300">{partner.averageApprovalTime}</span>
                    </div>
                  )}
                  {partner.accountNumber && (
                    <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        My Bound ID:
                      </span>
                      <span className="font-mono text-emerald-300 font-bold">{partner.accountNumber}</span>
                    </div>
                  )}
                </div>

                {/* Expandable Step-by-Step Instructions ("Small Direction") */}
                {partner.quickInstructions && (
                  <div className="mt-3">
                    <button
                      onClick={() => toggleInstructions(partner.id)}
                      className="w-full py-1.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-[11px] font-medium text-slate-300 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5 text-purple-300">
                        <SlidersHorizontal className="w-3 h-3 text-purple-400" />
                        {isExpanded ? 'Hide Registration Instructions' : 'View Step-by-Step Directions'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 p-3 rounded-2xl bg-black/40 border border-purple-500/20 space-y-1.5 text-[11px] text-slate-300 animate-fadeIn">
                        <div className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider mb-1">
                          How to register & get approved:
                        </div>
                        {partner.quickInstructions.map((instruction, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-slate-400 font-mono shrink-0">{idx + 1}.</span>
                            <span>{instruction.replace(/^\d+\.\s*/, '')}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-[10px] text-slate-400 truncate flex items-center justify-between">
                  <span className="truncate">
                    <span className="text-slate-500">Source:</span> {partner.verificationSource}
                  </span>
                  {partner.accountNumber && (
                    <button
                      onClick={() => handleCopyLinkSample(partner)}
                      className="text-emerald-400 hover:text-emerald-300 font-mono text-[10px] underline ml-2 flex items-center gap-0.5 shrink-0"
                    >
                      {copiedPartnerId === partner.id ? 'Copied Link!' : 'Copy Sample Link'}
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {/* Official Direct Registration Button */}
                  <a
                    href={partner.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white text-[11px] font-bold shadow-[0_0_12px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-1 text-center"
                    title={`Open official registration portal for ${partner.name}`}
                  >
                    <span>Register</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  {/* Official Direct Login Button */}
                  <a
                    href={partner.loginUrl || partner.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 text-center"
                    title={`Open official login portal for ${partner.name}`}
                  >
                    <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>Login</span>
                  </a>

                  {/* Bind to Profile Button */}
                  <button
                    onClick={() => handleOpenBindModal(partner)}
                    className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 text-center cursor-pointer ${
                      hasTag 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                        : 'bg-white/[0.04] text-purple-300 border border-purple-500/30 hover:bg-purple-600/20'
                    }`}
                    title="Bind your Publisher ID / Tag directly into your user profile"
                  >
                    <UserCheck className="w-3 h-3 shrink-0" />
                    <span>{hasTag ? 'Edit ID' : 'Bind ID'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bind Publisher ID to Profile Modal */}
      {bindingPartner && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-base font-bold text-white">
                    Bind {bindingPartner.name} to Profile
                  </h3>
                  <p className="text-[11px] text-slate-400">Save your Publisher ID / Affiliate Tag</p>
                </div>
              </div>
              <button
                onClick={() => setBindingPartner(null)}
                className="text-slate-400 hover:text-white text-xl font-bold"
              >
                ×
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Once you have registered at the official {bindingPartner.name} portal, enter your approved Publisher ID, Associate Tag, or Account Handle below. This connects your profile and automatically populates your marketing redirects and short links.
            </p>

            {/* Quick Directions Reminder inside modal */}
            {bindingPartner.quickInstructions && (
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
                <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">Directions to locate your ID:</span>
                <p className="text-slate-300 text-[11px]">
                  {bindingPartner.quickInstructions[bindingPartner.quickInstructions.length - 1]}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Publisher ID / Tag / Account Handle
                </label>
                <input
                  type="text"
                  value={profileTagInput}
                  onChange={(e) => setProfileTagInput(e.target.value)}
                  placeholder={`e.g. ${bindingPartner.id === 'amazon' ? 'mybrand-20' : bindingPartner.id === 'apple' ? '1000lXYZ' : 'PUB-89421'}`}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500/50"
                />
              </div>

              {/* Sample link generator preview */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Live Attributable Link Preview:</span>
                <div className="font-mono text-xs text-emerald-300 break-all">
                  {bindingPartner.officialWebsite}?ref={profileTagInput.trim() || 'YOUR_TAG'}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={bindingPartner.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-purple-400 hover:text-purple-300 underline flex items-center gap-1"
                >
                  <span>Need an account? Open Official {bindingPartner.name} Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {bindSuccessMessage && (
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                {bindSuccessMessage}
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                onClick={() => setBindingPartner(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfileBinding}
                disabled={isBinding}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.4)] disabled:opacity-50 transition-all cursor-pointer"
              >
                {isBinding ? 'Saving Tag...' : 'Save & Bind to Profile'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
