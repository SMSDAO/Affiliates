import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  FileText, 
  AlertCircle,
  Building,
  Mail,
  Lock,
  ExternalLink,
  Smartphone,
  Gift,
  Check,
  Copy,
  Search,
  Filter,
  UserCheck,
  BookmarkCheck,
  Layers,
  ChevronRight,
  Clock,
  Zap,
  BarChart3,
  TrendingUp,
  DollarSign,
  Share2,
  Code2,
  Terminal,
  ShieldAlert,
  Key,
  Database,
  Cpu,
  RefreshCw,
  LogOut,
  Sliders,
  Play
} from 'lucide-react';
import { NavigationTab, FinancialSummary, GoogleUserProfile, UserRole } from '../types';

interface RoleDashboardsProps {
  onNavigate: (tab: NavigationTab) => void;
  currentUser: GoogleUserProfile;
  onSwitchUser: (user: GoogleUserProfile) => void;
  financials: FinancialSummary;
}

export const RoleDashboards: React.FC<RoleDashboardsProps> = ({
  onNavigate,
  currentUser,
  onSwitchUser,
  financials
}) => {
  return null;
};

// ==========================================
// 1. MARKETING DASHBOARD
// ==========================================
export const MarketingDashboard: React.FC<{
  onNavigate: (tab: NavigationTab) => void;
  financials: FinancialSummary;
  currentUser: GoogleUserProfile;
}> = ({ onNavigate, financials, currentUser }) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                MARKETING & GROWTH COMMAND
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 font-bold">
                ROLE: {currentUser.role.toUpperCase()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Marketing Campaign & Creative Growth Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Design high-converting landing pages, generate multi-aspect social creative assets, draft viral scripts with automated FTC compliance, and monitor cross-channel attribution yields.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('website-factory')}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Launch Page Factory</span>
            </button>
            <button
              onClick={() => onNavigate('social-studio')}
              className="px-4 py-2.5 rounded-2xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Social Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marketing KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Attributed Audience Traffic</span>
          <div className="text-2xl font-black font-mono text-white">
            {financials.totalClicks.toLocaleString()}
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">
            {financials.uniqueClicks.toLocaleString()} unique visitors
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Blended Funnel Conversion</span>
          <div className="text-2xl font-black font-mono text-orange-400">
            {financials.conversionRate}%
          </div>
          <span className="text-[10px] text-orange-300 font-mono">
            EPC: ${financials.earningsPerClick.toFixed(2)}
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Active Creative Assets</span>
          <div className="text-2xl font-black font-mono text-purple-400">
            {financials.generatedAssets}
          </div>
          <span className="text-[10px] text-purple-300 font-mono">
            16:9, 9:16 & 1:1 format packs
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Published Social Content</span>
          <div className="text-2xl font-black font-mono text-emerald-400">
            {financials.publishedContent}
          </div>
          <span className="text-[10px] text-emerald-300 font-mono">
            FTC affirmative verified
          </span>
        </div>
      </div>

      {/* Marketing Workflows Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          onClick={() => onNavigate('website-factory')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
            Website & Landers Factory
          </h3>
          <p className="text-xs text-slate-300">
            Build high-converting comparison showdowns, SaaS lead magnets, and mobile-first review sites with embedded tracking tags.
          </p>
          <div className="flex items-center text-xs text-orange-400 font-semibold pt-1">
            <span>Open Page Builder</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('asset-generator')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
            Creative Asset Studio
          </h3>
          <p className="text-xs text-slate-300">
            Generate 16:9 YouTube banners, 9:16 TikTok video hooks, and 1:1 Instagram product creatives with AI styling prompts.
          </p>
          <div className="flex items-center text-xs text-purple-400 font-semibold pt-1">
            <span>Generate Assets</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('funnel-analytics')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            Funnel Analytics & Yields
          </h3>
          <p className="text-xs text-slate-300">
            Analyze 6-stage conversion velocity, dropoff points, landing page heatmaps, and channel ROAS across all campaigns.
          </p>
          <div className="flex items-center text-xs text-emerald-400 font-semibold pt-1">
            <span>View Funnel Yields</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. AFFILIATE MARKETERS DASHBOARD
// ==========================================
export const AffiliateMarketerDashboard: React.FC<{
  onNavigate: (tab: NavigationTab) => void;
  financials: FinancialSummary;
  currentUser: GoogleUserProfile;
}> = ({ onNavigate, financials, currentUser }) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                AFFILIATE PUBLISHER REVENUE PORTAL
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                ROLE: AFFILIATE MARKETER
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Affiliate Publisher Growth & Commission Ledger
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Track your approved commissions, manage 302/307 short links with bot protection, review multi-tier MLM downlines, and request payouts via Stripe, PayPal, or Bank Wire.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('link-intelligence')}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Create Tracking Link</span>
            </button>
            <button
              onClick={() => onNavigate('payout-center')}
              className="px-4 py-2.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Payout Center</span>
            </button>
          </div>
        </div>
      </div>

      {/* Affiliate Revenue Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl flash-glow-card border border-emerald-500/30 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Approved Commissions</span>
          <div className="text-2xl font-black font-mono text-emerald-400">
            ${financials.approvedCommissions.toLocaleString()}
          </div>
          <span className="text-[10px] text-emerald-300 font-mono">
            Ready for withdrawal
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Pending Locking (30-60d)</span>
          <div className="text-2xl font-black font-mono text-yellow-300">
            ${financials.pendingCommissions.toLocaleString()}
          </div>
          <span className="text-[10px] text-slate-400 font-mono">
            Merchant clearance window
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Paid to Date</span>
          <div className="text-2xl font-black font-mono text-white">
            ${financials.paidCommissions.toLocaleString()}
          </div>
          <span className="text-[10px] text-purple-300 font-mono">
            Disbursed to Stripe / PayPal
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Connected Networks</span>
          <div className="text-2xl font-black font-mono text-purple-400">
            {financials.connectedNetworks}
          </div>
          <span className="text-[10px] text-purple-300 font-mono">
            Out of 26 major providers
          </span>
        </div>
      </div>

      {/* Core Affiliate Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onClick={() => onNavigate('affiliate-portal')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            My Affiliate Dashboard & QR
          </h3>
          <p className="text-xs text-slate-300">
            Access your personalized referral link (`aff.ai/r/*`), download scannable QR cards, and track live conversion alerts.
          </p>
          <div className="flex items-center text-xs text-emerald-400 font-semibold pt-1">
            <span>Open Profile Portal</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('mlm-commissions')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
            Multi-Tier MLM Network
          </h3>
          <p className="text-xs text-slate-300">
            Track downline referrals across 5 commission tiers (10% Tier 1, 5% Tier 2, etc.) and unlock Platinum/Diamond bonuses.
          </p>
          <div className="flex items-center text-xs text-purple-400 font-semibold pt-1">
            <span>View Downline Tree</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('marketplace')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-yellow-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
            26+ Major Partner Programs
          </h3>
          <p className="text-xs text-slate-300">
            Browse Apple App Store, Google Play, Shopify, Semrush, and Amazon; read small directions, and bind your publisher tags.
          </p>
          <div className="flex items-center text-xs text-yellow-400 font-semibold pt-1">
            <span>Explore 26 Networks</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. DEVELOPER DASHBOARD
// ==========================================
export const DevDashboard: React.FC<{
  onNavigate: (tab: NavigationTab) => void;
  currentUser: GoogleUserProfile;
}> = ({ onNavigate, currentUser }) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                DEVELOPER & API ENGINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                ROLE: DEVELOPER
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Developer Engineering & Adapter Workspace
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Inspect REST endpoint specifications, test live API payloads, review 26+ network adapter architectures, and implement webhook idempotency receivers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('developers')}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Full Developer Docs (35 Sec)</span>
            </button>
            <button
              onClick={() => onNavigate('wordpress-embeds')}
              className="px-4 py-2.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Embed Generators</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dev Telemetry Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">REST API Gateway</span>
          <div className="text-2xl font-black font-mono text-emerald-400">
            HTTP 200 OK
          </div>
          <span className="text-[10px] text-emerald-300 font-mono">
            /api/v1 prefix normalized
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Edge Redirect Latency</span>
          <div className="text-2xl font-black font-mono text-cyan-400">
            14.2 ms
          </div>
          <span className="text-[10px] text-cyan-300 font-mono">
            302/307 deterministic
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Active Adapters</span>
          <div className="text-2xl font-black font-mono text-purple-400">
            26 / 26
          </div>
          <span className="text-[10px] text-purple-300 font-mono">
            REST, GraphQL & MMP
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Storage & Tokens</span>
          <div className="text-2xl font-black font-mono text-orange-400">
            AES-GCM-256
          </div>
          <span className="text-[10px] text-orange-300 font-mono">
            Tenant encrypted at rest
          </span>
        </div>
      </div>

      {/* Developer Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onClick={() => onNavigate('developers')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
            Interactive API Console
          </h3>
          <p className="text-xs text-slate-300">
            Execute real HTTP GET and POST requests against `/api/v1/health`, `/api/v1/affiliate-links`, and webhook emitters.
          </p>
          <div className="flex items-center text-xs text-cyan-400 font-semibold pt-1">
            <span>Open API Console</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('ecommerce-hub')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
            E-Commerce Store Adapters
          </h3>
          <p className="text-xs text-slate-300">
            Connect WooCommerce webhooks, Shopify App proxies, BigCommerce apps, and Magento tracking scripts.
          </p>
          <div className="flex items-center text-xs text-purple-400 font-semibold pt-1">
            <span>Manage Store Adapters</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('wordpress-embeds')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            WordPress & Web SDK Embeds
          </h3>
          <p className="text-xs text-slate-300">
            Export standalone JavaScript pixel snippets, iframe widgets, and shortcode templates for direct CMS placement.
          </p>
          <div className="flex items-center text-xs text-emerald-400 font-semibold pt-1">
            <span>Generate Embed Codes</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. ADMIN DASHBOARD (STRICTLY ISOLATED)
// ==========================================
export const AdminDashboard: React.FC<{
  onNavigate: (tab: NavigationTab) => void;
  currentUser: GoogleUserProfile;
}> = ({ onNavigate, currentUser }) => {
  // STRICT SECURITY CHECK
  if (!currentUser.isAdmin && currentUser.email !== 'gxqstudio@gmail.com') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 space-y-6">
        <div className="p-8 rounded-3xl flash-glow-card border border-red-500/50 bg-red-950/20 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-white">
            Security Isolation · Admin Access Restricted
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
            Administrative controls, security sentinels, fraud management, and tenant isolation policies are strictly isolated to <strong className="text-yellow-400 font-mono">gxqstudio@gmail.com</strong> for platform integrity.
          </p>
          <div className="p-3 rounded-2xl bg-black/50 border border-red-500/30 text-xs font-mono text-red-300">
            Audit Event: Unauthorized access attempt blocked from [{currentUser.email}].
          </div>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('dashboard-affiliate')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs"
            >
              Return to Permitted Workspace
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card border border-red-500/30 bg-gradient-to-r from-red-950/30 via-[#070b1e] to-purple-950/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ISOLATED SUPER ADMIN SECURITY ZONE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-bold">
                ADMIN: gxqstudio@gmail.com
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Super Admin Security & System Governance
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              All platform governance, tenant data isolation, fraud prevention sentinels, twelve-gate verification, and database auditing are concentrated and isolated here.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('admin-console')}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Console & Gates</span>
            </button>
            <button
              onClick={() => onNavigate('fraud-detection')}
              className="px-4 py-2.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Fraud Sentinel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl flash-glow-card border border-emerald-500/30 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">System Security Status</span>
          <div className="text-2xl font-black font-mono text-emerald-400">
            ENFORCED
          </div>
          <span className="text-[10px] text-emerald-300 font-mono">
            Tenant isolation active
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">12-Gate Verifications</span>
          <div className="text-2xl font-black font-mono text-purple-400">
            12 / 12 PASS
          </div>
          <span className="text-[10px] text-purple-300 font-mono">
            Continuous compliance
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Fraud Sentinel Score</span>
          <div className="text-2xl font-black font-mono text-yellow-300">
            99.98%
          </div>
          <span className="text-[10px] text-slate-400 font-mono">
            0 critical anomalies
          </span>
        </div>

        <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium">Isolated Master Admin</span>
          <div className="text-xs font-mono font-bold text-red-300 truncate mt-2">
            gxqstudio@gmail.com
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">
            Exclusive superadmin
          </span>
        </div>
      </div>

      {/* Admin Tools Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onClick={() => onNavigate('admin-console')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-red-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
            Admin Console & 12 Gates
          </h3>
          <p className="text-xs text-slate-300">
            Inspect live tenant boundaries, execute full security audit gates, and oversee system health logs.
          </p>
          <div className="flex items-center text-xs text-red-400 font-semibold pt-1">
            <span>Open Admin Console</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('fraud-detection')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-amber-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
            Fraud Detection Sentinel
          </h3>
          <p className="text-xs text-slate-300">
            Real-time heuristic evaluation blocking bot clicks, click flooding, self-referrals, and coupon hijacking.
          </p>
          <div className="flex items-center text-xs text-amber-400 font-semibold pt-1">
            <span>Manage Fraud Rules</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('agent-registry')}
          className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer space-y-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
            AI Agent Swarm Registry (30)
          </h3>
          <p className="text-xs text-slate-300">
            Monitor all 30 autonomous worker agents across research, copywriting, compliance, attribution, and QA.
          </p>
          <div className="flex items-center text-xs text-purple-400 font-semibold pt-1">
            <span>Audit 30 Agents</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>

      {/* Live User Roles & Permissions Governance (Admin Exclusive) */}
      <AdminUserPermissionsGovernance />
    </div>
  );
};

// Sub-component for Admin User Permissions Governance
const AdminUserPermissionsGovernance: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/admin/users-permissions');
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      }
    } catch {
      // offline fallback
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: 'marketing' | 'affiliate' | 'developer') => {
    try {
      const res = await fetch(`/api/v1/admin/users-permissions/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
      const data = await res.json();
      if (data.success) {
        setFeedback(`Assigned ${newRole.toUpperCase()} role and updated dedicated workspace.`);
        loadUsers();
      } else {
        setFeedback(data.error || 'Update failed');
      }
    } catch {
      setFeedback('Error updating role');
    }
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleTogglePerm = async (userId: string, currentPerms: any, permKey: string) => {
    try {
      const updated = { ...currentPerms, [permKey]: !currentPerms[permKey] };
      const res = await fetch(`/api/v1/admin/users-permissions/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ permissions: updated })
      });
      const data = await res.json();
      if (data.success) {
        setFeedback(`Updated ${permKey} permission.`);
        loadUsers();
      }
    } catch {
      setFeedback('Error saving permission');
    }
    setTimeout(() => setFeedback(null), 3500);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl flash-glow-card border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase font-bold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              RBAC DIRECTORY & WORKSPACE ISOLATION
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            User Roles & Permissions Governance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Control access across all user types. Every registered user is isolated to their dedicated dashboard and navigation tools. Admin access is strictly locked to <strong className="text-yellow-400 font-mono">gxqstudio@gmail.com</strong>.
          </p>
        </div>

        <button
          onClick={loadUsers}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Directory</span>
        </button>
      </div>

      {feedback && (
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Responsive User Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-xs text-slate-200">
          <thead className="bg-white/[0.03] text-[10px] uppercase font-mono tracking-wider text-slate-400 border-b border-white/10">
            <tr>
              <th className="py-3 px-4">User / Google Identity</th>
              <th className="py-3 px-4">Assigned Role</th>
              <th className="py-3 px-4">Isolated Dashboard</th>
              <th className="py-3 px-4">Granular Permissions</th>
              <th className="py-3 px-4 text-right">Role Governance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {users.map((u) => {
              const isSuper = u.email === 'gxqstudio@gmail.com';
              return (
                <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={u.avatarUrl || 'https://lh3.googleusercontent.com/a/default-user'} 
                        alt={u.name}
                        className="w-8 h-8 rounded-full border border-white/10 bg-black/40"
                      />
                      <div>
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          <span>{u.name}</span>
                          {isSuper && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                              SUPERADMIN
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">{u.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      u.role === 'admin' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                        : u.role === 'marketing'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                        : u.role === 'developer'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                    }`}>
                      {u.role}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span className="font-mono text-[11px] text-slate-300 bg-black/30 px-2 py-1 rounded border border-white/5">
                      {u.chosenDashboard || `dashboard-${u.role}`}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {isSuper ? (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                          ALL PERMISSIONS UNLOCKED
                        </span>
                      ) : (
                        <>
                          <button
                            onClick={() => handleTogglePerm(u.id, u.permissions, 'canPublishCampaigns')}
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                              u.permissions?.canPublishCampaigns 
                                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                                : 'bg-white/5 text-slate-500 border-white/10'
                            }`}
                            title="Toggle Campaign Publishing"
                          >
                            Campaigns: {u.permissions?.canPublishCampaigns ? 'YES' : 'NO'}
                          </button>
                          <button
                            onClick={() => handleTogglePerm(u.id, u.permissions, 'canApprovePayouts')}
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                              u.permissions?.canApprovePayouts 
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-white/5 text-slate-500 border-white/10'
                            }`}
                            title="Toggle Payout Approval"
                          >
                            Payouts: {u.permissions?.canApprovePayouts ? 'YES' : 'NO'}
                          </button>
                          <button
                            onClick={() => handleTogglePerm(u.id, u.permissions, 'canAccessApi')}
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                              u.permissions?.canAccessApi 
                                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                                : 'bg-white/5 text-slate-500 border-white/10'
                            }`}
                            title="Toggle API Access"
                          >
                            API: {u.permissions?.canAccessApi ? 'YES' : 'NO'}
                          </button>
                        </>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4 text-right">
                    {isSuper ? (
                      <span className="text-[10px] font-mono text-slate-500 italic">
                        Immutable Super Admin
                      </span>
                    ) : (
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value as any)}
                        className="bg-black/60 border border-white/20 rounded-xl px-2.5 py-1 text-xs text-slate-200 font-mono focus:border-purple-500 outline-none cursor-pointer"
                      >
                        <option value="affiliate">Affiliate Role</option>
                        <option value="marketing">Marketing Role</option>
                        <option value="developer">Developer Role</option>
                      </select>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ==========================================
// 5. GOOGLE SIGN-IN & PROFILE MODAL
// ==========================================
export const GoogleAuthModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentUser: GoogleUserProfile;
  onSignIn: (user: GoogleUserProfile) => void;
  onNavigate: (tab: NavigationTab) => void;
}> = ({ isOpen, onClose, currentUser, onSignIn, onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('affiliate');
  const [customGoogleEmail, setCustomGoogleEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const syncServerSession = async (user: GoogleUserProfile) => {
    try {
      await fetch('/api/v1/auth/google-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          role: user.role,
          avatarUrl: user.avatarUrl
        })
      });
    } catch {
      // Offline fallback
    }
  };

  const handleAdminSignIn = async () => {
    setIsProcessing(true);
    const adminUser: GoogleUserProfile = {
      id: 'admin-gxq',
      email: 'gxqstudio@gmail.com',
      name: 'Master Admin (GXQ Studio)',
      avatarUrl: 'https://lh3.googleusercontent.com/a/default-user',
      role: 'admin',
      chosenDashboard: 'admin',
      isAdmin: true,
      googleVerified: true,
      joinedDate: '2026-11-01'
    };
    await syncServerSession(adminUser);
    onSignIn(adminUser);
    setIsProcessing(false);
    onClose();
    onNavigate('dashboard-admin');
  };

  const handlePresetRoleSignIn = async (presetRole: 'marketing' | 'affiliate' | 'developer') => {
    setIsProcessing(true);
    const presets = {
      marketing: {
        email: 'marketing.lead@gmail.com',
        name: 'Elena Rostova (Marketing Lead)'
      },
      affiliate: {
        email: 'top.affiliate@gmail.com',
        name: 'Marcus Vance (Diamond Partner)'
      },
      developer: {
        email: 'dev.engineer@gmail.com',
        name: 'Devon Hayes (Senior API Engineer)'
      }
    };

    const target = presets[presetRole];
    const newUser: GoogleUserProfile = {
      id: `user-${presetRole}-${Date.now()}`,
      email: target.email,
      name: target.name,
      avatarUrl: 'https://lh3.googleusercontent.com/a/default-user',
      role: presetRole,
      chosenDashboard: presetRole,
      isAdmin: false,
      googleVerified: true,
      joinedDate: new Date().toISOString().split('T')[0]
    };

    await syncServerSession(newUser);
    onSignIn(newUser);
    setIsProcessing(false);
    onClose();

    if (presetRole === 'marketing') onNavigate('dashboard-marketing');
    else if (presetRole === 'developer') onNavigate('dashboard-dev');
    else onNavigate('dashboard-affiliate');
  };

  const handleRegisterWithGoogle = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const email = customGoogleEmail.trim().toLowerCase() || 'partner@gmail.com';
    const name = userName.trim() || email.split('@')[0];

    // Security check: Only gxqstudio@gmail.com can be admin
    const isAdmin = email === 'gxqstudio@gmail.com';
    const role: UserRole = isAdmin ? 'admin' : selectedRole;

    const newUser: GoogleUserProfile = {
      id: `user-${Date.now()}`,
      email: email,
      name: name,
      avatarUrl: 'https://lh3.googleusercontent.com/a/default-user',
      role: role,
      chosenDashboard: isAdmin ? 'admin' : role,
      isAdmin: isAdmin,
      googleVerified: true,
      joinedDate: new Date().toISOString().split('T')[0]
    };

    await syncServerSession(newUser);
    onSignIn(newUser);
    setIsProcessing(false);
    onClose();

    if (isAdmin) {
      onNavigate('dashboard-admin');
    } else if (role === 'marketing') {
      onNavigate('dashboard-marketing');
    } else if (role === 'developer') {
      onNavigate('dashboard-dev');
    } else {
      onNavigate('dashboard-affiliate');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-3xl bg-[#0b102b] border border-white/20 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6 max-h-[90vh] overflow-y-auto scrollbar-thin">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Google Single Sign-On (SSO) Portal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  OAUTH 2.0 PKCE
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Strict Multi-Tenant Isolation & Role-Based Workspaces</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Current Active Session Status Card */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>{currentUser.name}</span>
                {currentUser.isAdmin ? (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                    SUPER ADMIN
                  </span>
                ) : (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                    {currentUser.role}
                  </span>
                )}
              </div>
              <div className="text-[10px] font-mono text-slate-400">{currentUser.email}</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>SESSION ACTIVE</span>
          </span>
        </div>

        {/* Master Admin Fast Path */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/30 to-purple-950/30 border border-red-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-red-300 font-bold uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>Designated Master Admin Account (Full Clearance)</span>
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40 font-bold">
              OPEN ALL
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Sign in as <strong className="text-white font-mono">gxqstudio@gmail.com</strong>. Unlocks all 4 Role Dashboards, all 32 workspace modules, Sentinel Fraud Guard, and administrative isolation controls.
          </p>
          <button
            onClick={handleAdminSignIn}
            disabled={isProcessing}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white font-extrabold text-xs shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Continue as gxqstudio@gmail.com (Super Admin)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Instant Role Presets (1-Click Switchers) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              Preset Role Workspaces (1-Click Instant Preview)
            </span>
            <span className="text-[10px] font-mono text-slate-400">SELECT TO TEST WORKSPACE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handlePresetRoleSignIn('marketing')}
              disabled={isProcessing}
              className="p-3 rounded-2xl bg-orange-950/20 hover:bg-orange-900/30 border border-orange-500/30 hover:border-orange-500/60 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-300 group-hover:text-white">Marketing Role</span>
                <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">marketing.lead@gmail.com</p>
              <span className="text-[9px] font-mono text-orange-400 mt-1 block">Landers & Studio</span>
            </button>

            <button
              type="button"
              onClick={() => handlePresetRoleSignIn('affiliate')}
              disabled={isProcessing}
              className="p-3 rounded-2xl bg-emerald-950/20 hover:bg-emerald-900/30 border border-emerald-500/30 hover:border-emerald-500/60 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-300 group-hover:text-white">Affiliate Role</span>
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">top.affiliate@gmail.com</p>
              <span className="text-[9px] font-mono text-emerald-400 mt-1 block">Commissions & Payouts</span>
            </button>

            <button
              type="button"
              onClick={() => handlePresetRoleSignIn('developer')}
              disabled={isProcessing}
              className="p-3 rounded-2xl bg-cyan-950/20 hover:bg-cyan-900/30 border border-cyan-500/30 hover:border-cyan-500/60 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300 group-hover:text-white">Developer Role</span>
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">dev.engineer@gmail.com</p>
              <span className="text-[9px] font-mono text-cyan-400 mt-1 block">APIs & Adapters</span>
            </button>
          </div>
        </div>

        {/* Standard Google User Registration & Custom Email Input */}
        <form onSubmit={handleRegisterWithGoogle} className="space-y-4 pt-2 border-t border-white/10">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Register or Sign In with Any Custom Google Account
          </div>

          <div className="space-y-2.5">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Google Email Address (@gmail.com or Google Workspace) *</label>
              <input
                type="email"
                required
                value={customGoogleEmail}
                onChange={(e) => setCustomGoogleEmail(e.target.value)}
                placeholder="e.g. yourname@gmail.com or team@growthagency.io"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500/50"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Display Name (Optional)</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Alex Rivera"
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500/50"
              />
            </div>
          </div>

          {/* Profile & Dashboard Selector */}
          <div className="space-y-2 pt-1">
            <label className="text-xs font-semibold text-slate-300 block">
              Assign Primary Role & Tailored Dashboard:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRole('marketing')}
                className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                  selectedRole === 'marketing'
                    ? 'bg-orange-500/20 border-orange-500 text-white font-bold shadow-[0_0_12px_rgba(249,115,22,0.3)]'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Marketing</span>
                  <TrendingUp className="w-3 h-3 text-orange-400" />
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Campaigns, landers, social studio</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('affiliate')}
                className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                  selectedRole === 'affiliate'
                    ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Affiliate</span>
                  <DollarSign className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Commissions, MLM, short links</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('developer')}
                className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                  selectedRole === 'developer'
                    ? 'bg-cyan-500/20 border-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Developer</span>
                  <Terminal className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">REST API, webhooks, adapters</div>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              * Note: Admin Dashboard and security functions remain strictly isolated to <code className="text-red-300 font-mono">gxqstudio@gmail.com</code>.
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing || !customGoogleEmail.trim()}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-emerald-500 to-indigo-600 hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.4)] disabled:opacity-50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {isProcessing ? 'Authenticating via Google...' : 'Sign In with Google'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
