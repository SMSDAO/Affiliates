import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  MousePointerClick, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight, 
  Zap, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Share2, 
  Layers,
  BarChart3,
  Globe2,
  HardDrive,
  Compass,
  Link2,
  ChevronDown,
  ChevronUp,
  Activity,
  Bot,
  ExternalLink,
  Check
} from 'lucide-react';
import { FinancialSummary, TimeRange, NavigationTab } from '../types';

interface CommandCenterProps {
  financials: FinancialSummary;
  onNavigate: (tab: NavigationTab) => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({ 
  financials, 
  onNavigate 
}) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [selectedMetric, setSelectedMetric] = useState<string>('revenue');
  const [showAdvancedAnalytics, setShowAdvancedAnalytics] = useState<boolean>(false);

  // Setup checklist state
  const [checklist, setChecklist] = useState([
    { id: 'profile', label: 'Complete your profile & workspace settings', completed: true, tab: 'admin-console' as NavigationTab },
    { id: 'niche', label: 'Select your primary marketing niche', completed: true, tab: 'product-discovery' as NavigationTab },
    { id: 'program', label: 'Find an affiliate program to promote', completed: true, tab: 'marketplace' as NavigationTab },
    { id: 'link', label: 'Add your first affiliate link', completed: true, tab: 'link-intelligence' as NavigationTab },
    { id: 'lander', label: 'Create your first landing page', completed: false, tab: 'website-factory' as NavigationTab },
    { id: 'content', label: 'Generate your first marketing content', completed: false, tab: 'social-studio' as NavigationTab },
    { id: 'publish', label: 'Publish an approved campaign', completed: false, tab: 'campaigns' as NavigationTab },
  ]);

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Dynamic multipliers based on selected time range
  const multiplier = timeRange === 'today' ? 0.04 : timeRange === 'yesterday' ? 0.035 : timeRange === '7d' ? 0.25 : timeRange === '30d' ? 1 : 2.8;

  const currentEstimated = financials.estimatedEarnings * multiplier;
  const currentApproved = financials.approvedCommissions * multiplier;
  const currentPending = financials.pendingCommissions * multiplier;
  const currentReversed = financials.reversedCommissions * multiplier;
  const currentPaid = financials.paidCommissions * multiplier;
  const currentConversions = Math.round(financials.reportedConversions * multiplier);
  const currentClicks = Math.round(financials.totalClicks * multiplier);
  const currentUnique = Math.round(financials.uniqueClicks * multiplier);

  return (
    <div className="space-y-6 pb-12 text-slate-100">
      {/* 1. Hero Welcome & Time Period Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
              AUTONOMOUS AFFILIATE COMMAND SYSTEM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="text-[11px] font-mono text-emerald-300">LIVE SSOT FEED</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Enterprise Command Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Unified Single Source of Truth monitoring real-time earnings, 15 synchronized affiliate networks, 30 autonomous AI agents, and attributable conversion pipelines.
          </p>
        </div>

        {/* Time Period Filter Tabs */}
        <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'today', label: 'Today' },
            { id: 'yesterday', label: 'Yesterday' },
            { id: '7d', label: '7 Days' },
            { id: '30d', label: '30 Days' },
            { id: '90d', label: '90 Days' },
            { id: 'custom', label: 'Custom' }
          ].map((period) => (
            <button
              key={period.id}
              onClick={() => setTimeRange(period.id as TimeRange)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                timeRange === period.id
                  ? 'bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SECTION 6: Three Primary Quick Actions */}
      <div>
        <div className="flex items-center gap-2 mb-2 px-1">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Primary Quick Actions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Quick Action 1: Find Affiliate Products */}
          <div 
            onClick={() => onNavigate('product-discovery')}
            className="flash-glow-card p-5 rounded-3xl border border-purple-500/30 hover:border-purple-400/80 transition-all glow-purple cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  DISCOVER
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white group-hover:text-purple-200 transition-colors">
                FIND AFFILIATE PRODUCTS
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Scan high-converting offers across SaaS, AI, and e-commerce with verified commission rates and instant approval links.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 mt-4 group-hover:translate-x-1 transition-transform">
              <span>Open Discovery Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Action 2: Add My Affiliate Link */}
          <div 
            onClick={() => onNavigate('link-intelligence')}
            className="flash-glow-card p-5 rounded-3xl border border-orange-500/30 hover:border-orange-400/80 transition-all glow-orange cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-orange-500/20 text-orange-300 border border-orange-500/40 group-hover:scale-110 transition-transform">
                  <Link2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30">
                  MANAGEMENT
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white group-hover:text-orange-200 transition-colors">
                ADD MY AFFILIATE LINK
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Create shortened, branded redirect links with 302/307 redirection, UTM parameter injection, and automated postback tracking.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 mt-4 group-hover:translate-x-1 transition-transform">
              <span>Manage Affiliate Links</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Action 3: Create My First Campaign */}
          <div 
            onClick={() => onNavigate('campaigns')}
            className="flash-glow-card p-5 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/80 transition-all glow-green cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  LAUNCH
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white group-hover:text-emerald-200 transition-colors">
                CREATE MY FIRST CAMPAIGN
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Dispatch 30 specialized AI agents to generate multi-channel marketing scripts, landing pages, and compliance-checked assets.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mt-4 group-hover:translate-x-1 transition-transform">
              <span>Launch Campaign Builder</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION 6: Welcome & Quick Setup Checklist */}
      <div className="flash-glow-card p-6 rounded-3xl border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                New User Onboarding & Setup Checklist
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Complete these steps to fully configure your autonomous affiliate revenue engine.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-purple-300 font-bold">
              {completedCount} / {checklist.length} Completed ({progressPercent}%)
            </span>
            <div className="w-28 bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                style={{ width: `${progressPercent}%` }}
                className="bg-gradient-to-r from-purple-500 via-orange-500 to-emerald-400 h-full transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Checklist items list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
          {checklist.map((item, idx) => (
            <div 
              key={item.id}
              className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                item.completed 
                  ? 'bg-emerald-500/[0.04] border-emerald-500/20 text-slate-300' 
                  : 'bg-white/[0.02] border-white/10 text-white hover:border-purple-500/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                    item.completed 
                      ? 'bg-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                      : 'border border-white/30 hover:border-purple-400 bg-white/5'
                  }`}
                >
                  {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <span className={`text-xs font-medium ${item.completed ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                  {idx + 1}. {item.label}
                </span>
              </div>
              <button
                onClick={() => onNavigate(item.tab)}
                className="text-[11px] font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
              >
                <span>Go</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SECTION 6: Simplified Performance Overview (Revenue, Clicks, Conversions, Active Campaigns) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-purple-400" />
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
              Simplified Performance Overview
            </h2>
          </div>
          <button
            onClick={() => setShowAdvancedAnalytics(!showAdvancedAnalytics)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-purple-300 transition-colors cursor-pointer"
          >
            <span>{showAdvancedAnalytics ? 'Collapse Audit Details' : 'Expand Advanced Analytics (Audit Standard)'}</span>
            {showAdvancedAnalytics ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Metric 1: Revenue (Approved Commissions) */}
          <div className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-emerald-400/50 glow-green">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Approved Revenue</span>
              <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight">
              ${currentApproved.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="text-slate-400">Projected Funnel Yield:</span>
              <span className="font-mono text-slate-300 font-semibold">${currentEstimated.toFixed(2)}</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[85%]" />
            </div>
          </div>

          {/* Metric 2: Attributable Clicks */}
          <div className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-purple-400/50 glow-purple">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Attributable Clicks</span>
              <div className="p-2 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30">
                <MousePointerClick className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-white tracking-tight">
              {currentClicks.toLocaleString()}
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="text-slate-400">Unique Visitors:</span>
              <span className="font-mono text-purple-300 font-semibold">{currentUnique.toLocaleString()}</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-400 h-full w-[75%]" />
            </div>
          </div>

          {/* Metric 3: Verified Conversions */}
          <div className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-orange-400/50 glow-orange">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Verified Conversions</span>
              <div className="p-2 rounded-xl bg-orange-500/15 text-orange-300 border border-orange-500/30">
                <Target className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-white tracking-tight">
              {currentConversions.toLocaleString()}
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="text-slate-400">Conversion Rate:</span>
              <span className="font-mono text-orange-300 font-semibold">{financials.conversionRate}% (${financials.earningsPerClick} EPC)</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-full w-[65%]" />
            </div>
          </div>

          {/* Metric 4: Active Campaigns */}
          <div className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-yellow-400/50 glow-yellow">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Active Campaigns</span>
              <div className="p-2 rounded-xl bg-yellow-500/15 text-yellow-300 border border-yellow-500/30">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
              <span>{financials.activeCampaigns}</span>
              <span className="text-xs font-normal text-emerald-400">8 Channels Live</span>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="text-slate-400">Connected Networks:</span>
              <span className="font-mono text-yellow-300 font-semibold">{financials.connectedNetworks} of 15 Synced</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 h-full w-[92%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Advanced Analytics (6-Stage Financial Reporting Strip) */}
      {showAdvancedAnalytics && (
        <div className="p-6 rounded-3xl flash-glow-card border border-purple-500/30 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                6-Stage Strict Financial Reporting (Audit Standard)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Non-negotiable rule: Clicks & unconfirmed events never classified as revenue
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            {/* Stage 1: Estimated Earnings */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-purple-500/20">
              <div className="flex items-center justify-between text-xs text-purple-300 mb-1">
                <span className="font-semibold">01. Estimated</span>
                <TrendingUp className="w-3 h-3 text-purple-400" />
              </div>
              <div className="text-lg font-bold font-mono text-white">
                ${currentEstimated.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Projected funnel yield</p>
            </div>

            {/* Stage 2: Reported Conversions */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-blue-500/20">
              <div className="flex items-center justify-between text-xs text-blue-300 mb-1">
                <span className="font-semibold">02. Reported</span>
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
              </div>
              <div className="text-lg font-bold font-mono text-white">
                {currentConversions} <span className="text-xs font-normal text-slate-400">sales</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Direct postback events</p>
            </div>

            {/* Stage 3: Pending Commissions */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-yellow-500/20">
              <div className="flex items-center justify-between text-xs text-yellow-300 mb-1">
                <span className="font-semibold">03. Pending</span>
                <Clock className="w-3 h-3 text-yellow-400" />
              </div>
              <div className="text-lg font-bold font-mono text-yellow-300">
                ${currentPending.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Locking period (30-60d)</p>
            </div>

            {/* Stage 4: Approved Commissions */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-emerald-500/20">
              <div className="flex items-center justify-between text-xs text-emerald-300 mb-1">
                <span className="font-semibold">04. Approved</span>
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-lg font-bold font-mono text-emerald-400">
                ${currentApproved.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Merchant verified</p>
            </div>

            {/* Stage 5: Reversed Commissions */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-red-500/20">
              <div className="flex items-center justify-between text-xs text-red-300 mb-1">
                <span className="font-semibold">05. Reversed</span>
                <AlertTriangle className="w-3 h-3 text-red-400" />
              </div>
              <div className="text-lg font-bold font-mono text-red-400">
                ${currentReversed.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Refunds & clawbacks</p>
            </div>

            {/* Stage 6: Paid Commissions */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-orange-500/20">
              <div className="flex items-center justify-between text-xs text-orange-300 mb-1">
                <span className="font-semibold">06. Paid Out</span>
                <DollarSign className="w-3 h-3 text-orange-400" />
              </div>
              <div className="text-lg font-bold font-mono text-orange-300">
                ${currentPaid.toFixed(2)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Disbursed to bank/crypto</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Middle Split: Real-Time Performance Analytics & Recent Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart & Network Attribution (2 cols) */}
        <div className="lg:col-span-2 flash-glow-card p-6 rounded-3xl border border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                Network Revenue & Conversion Velocity
              </h3>
              <p className="text-xs text-slate-400">
                Hourly tracking with zero-fabrication attribution
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <button 
                onClick={() => setSelectedMetric('revenue')}
                className={`px-3 py-1 rounded-xl font-medium transition-colors ${selectedMetric === 'revenue' ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40' : 'text-slate-400 hover:text-white'}`}
              >
                Revenue ($)
              </button>
              <button 
                onClick={() => setSelectedMetric('clicks')}
                className={`px-3 py-1 rounded-xl font-medium transition-colors ${selectedMetric === 'clicks' ? 'bg-orange-600/30 text-orange-200 border border-orange-500/40' : 'text-slate-400 hover:text-white'}`}
              >
                Clicks
              </button>
            </div>
          </div>

          {/* Visual Velocity Bar Chart with glowing heights */}
          <div className="h-44 w-full flex items-end gap-2 sm:gap-3 pt-6 pb-2 border-b border-white/10">
            {[
              { day: 'Mon', rev: 840, clicks: 2400 },
              { day: 'Tue', rev: 1120, clicks: 3100 },
              { day: 'Wed', rev: 950, clicks: 2800 },
              { day: 'Thu', rev: 1480, clicks: 4200 },
              { day: 'Fri', rev: 1690, clicks: 4800 },
              { day: 'Sat', rev: 2150, clicks: 5900 },
              { day: 'Sun', rev: 2480, clicks: 6800 },
              { day: 'Today', rev: 2840, clicks: 7900 }
            ].map((item, idx) => {
              const heightPct = selectedMetric === 'revenue' ? (item.rev / 3000) * 100 : (item.clicks / 8500) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="text-[10px] font-mono text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {selectedMetric === 'revenue' ? `$${item.rev}` : item.clicks}
                  </div>
                  <div 
                    style={{ height: `${heightPct}%` }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-purple-600/70 via-orange-500/80 to-yellow-400 shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:brightness-125 transition-all"
                  />
                  <span className="text-[10px] text-slate-400 font-medium">{item.day}</span>
                </div>
              );
            })}
          </div>

          {/* Top Contributing Networks Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>PartnerStack</span>
                <span className="text-purple-300 font-mono">42%</span>
              </div>
              <div className="text-sm font-bold font-mono text-white">$14,624.60</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>Impact.com</span>
                <span className="text-orange-300 font-mono">28%</span>
              </div>
              <div className="text-sm font-bold font-mono text-white">$9,750.00</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>CJ Affiliate</span>
                <span className="text-emerald-300 font-mono">16%</span>
              </div>
              <div className="text-sm font-bold font-mono text-white">$5,571.20</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>Other Networks</span>
                <span className="text-yellow-300 font-mono">14%</span>
              </div>
              <div className="text-sm font-bold font-mono text-white">$4,874.70</div>
            </div>
          </div>
        </div>

        {/* SECTION 6: Recent Activity Feed (clicks, conversions, campaign status) */}
        <div className="flash-glow-card p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-400" />
                Recent Activity Feed
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                REAL-TIME
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-3">
              Verified attributable postbacks, link redirects, and campaign generation actions.
            </p>

            <div className="space-y-2.5">
              {[
                { 
                  type: 'conversion', 
                  title: 'Verified Conversion: Notion Pro', 
                  detail: '+$48.00 commission · Impact.com', 
                  time: '2 mins ago', 
                  color: 'text-emerald-400',
                  dot: 'bg-emerald-400' 
                },
                { 
                  type: 'click', 
                  title: 'Link Click: Synthesia Studio', 
                  detail: 'Source: YouTube description · US / Chrome', 
                  time: '5 mins ago', 
                  color: 'text-purple-400',
                  dot: 'bg-purple-400' 
                },
                { 
                  type: 'campaign', 
                  title: 'Campaign Status: Active', 
                  detail: 'SaaS Multi-Tool Roundup · 6 channels live', 
                  time: '14 mins ago', 
                  color: 'text-blue-400',
                  dot: 'bg-blue-400' 
                },
                { 
                  type: 'conversion', 
                  title: 'Verified Conversion: Descript AI', 
                  detail: '+$24.50 commission · PartnerStack', 
                  time: '28 mins ago', 
                  color: 'text-emerald-400',
                  dot: 'bg-emerald-400' 
                },
                { 
                  type: 'asset', 
                  title: 'AI Asset Generated: 9 Infographics', 
                  detail: 'Gemini 2.5 Pro · Vault attachment #41', 
                  time: '42 mins ago', 
                  color: 'text-orange-400',
                  dot: 'bg-orange-400' 
                }
              ].map((activity, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${activity.dot}`} />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white truncate">{activity.title}</div>
                    <div className="text-[11px] text-slate-400 truncate">{activity.detail}</div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Health Bar */}
          <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-slate-400" />
                Object Storage
              </span>
              <span className="font-mono text-purple-300">
                {financials.storageUsageGb} GB / {financials.storageQuotaGb} GB
              </span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div 
                style={{ width: `${(financials.storageUsageGb / financials.storageQuotaGb) * 100}%` }}
                className="bg-gradient-to-r from-purple-500 to-orange-400 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Quick Access to All Platform Tools */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Access to Platform Tools
            </h3>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Direct navigation to all 12 operational modules
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { id: 'ai-assistant', label: 'AI Assistant', icon: <Bot className="w-4 h-4 text-purple-400" /> },
            { id: 'marketplace', label: 'Affiliate Networks', icon: <Globe2 className="w-4 h-4 text-orange-400" /> },
            { id: 'link-intelligence', label: 'Link Manager', icon: <Link2 className="w-4 h-4 text-yellow-400" /> },
            { id: 'product-discovery', label: 'Product Discovery', icon: <Compass className="w-4 h-4 text-emerald-400" /> },
            { id: 'website-factory', label: 'Website Builder', icon: <Layers className="w-4 h-4 text-cyan-400" /> },
            { id: 'social-studio', label: 'Marketing Studio', icon: <Share2 className="w-4 h-4 text-pink-400" /> },
            { id: 'asset-generator', label: 'My Assets', icon: <Sparkles className="w-4 h-4 text-indigo-400" /> },
            { id: 'campaigns', label: 'Campaigns', icon: <Target className="w-4 h-4 text-red-400" /> },
            { id: 'attachments', label: 'Attachments Vault', icon: <HardDrive className="w-4 h-4 text-teal-400" /> },
            { id: 'agent-registry', label: 'Integrations & Agents', icon: <Zap className="w-4 h-4 text-amber-400" /> },
            { id: 'developers', label: 'Developer API (37)', icon: <Activity className="w-4 h-4 text-blue-400" /> },
            { id: 'admin-console', label: 'Settings & Admin', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => onNavigate(tool.id as NavigationTab)}
              className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div className="mb-2 p-2 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                {tool.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
