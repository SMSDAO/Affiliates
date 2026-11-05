import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Store, 
  Link2, 
  Globe, 
  Share2, 
  Palette, 
  ShieldCheck, 
  TrendingUp, 
  Bot, 
  ChevronRight, 
  ExternalLink,
  Zap,
  Clock,
  Play,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { NavigationTab } from '../types';

interface PublicLandingPageProps {
  onNavigate: (tab: NavigationTab) => void;
  onStartTrial: (plan: 'PRO' | 'ELITE') => void;
}

export const PublicLandingPage: React.FC<PublicLandingPageProps> = ({ 
  onNavigate, 
  onStartTrial 
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-20 text-slate-100">
      {/* Top Banner & Quick Public Nav */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span className="text-xs font-mono text-purple-300 font-semibold tracking-wide">
            PUBLIC MARKETING & COMMERCIAL PORTAL · V1.1.0 ELITE ENTERPRISE
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => onNavigate('public-pricing')}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
          >
            Pricing & Plans
          </button>
          <button
            onClick={() => onNavigate('user-guides')}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
          >
            Help Center
          </button>
          <button
            onClick={() => onNavigate('developers')}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-purple-300 hover:text-purple-200 transition-colors"
          >
            Developer API
          </button>
          <button
            onClick={() => onNavigate('command-center')}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)] hover:brightness-110 transition-all cursor-pointer"
          >
            Enter Workspace →
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto px-4 pt-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono font-bold text-purple-300">
          <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
          <span>AUTONOMOUS AFFILIATE MARKETING OPERATING SYSTEM</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Your Entire Affiliate Business.{' '}
          <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            One Intelligent Platform.
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Discover affiliate programs, manage links, create marketing assets, build landing pages, publish campaigns and track performance — all from one AI-powered workspace.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={() => onStartTrial('ELITE')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-extrabold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>START YOUR FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('command-center')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 font-bold text-sm transition-all cursor-pointer"
          >
            EXPLORE THE PLATFORM
          </button>

          <button
            onClick={() => onNavigate('onboarding')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>SEE HOW IT WORKS</span>
          </button>
        </div>

        {/* Hero Live Application Preview Card */}
        <div className="pt-8">
          <div className="flash-glow-card p-3 sm:p-5 rounded-3xl border border-white/15 glow-multi shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-left">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-slate-400 pl-2">app.superaffiliate.ai · Enterprise Command Center</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SSOT LIVE VERIFIED
              </span>
            </div>

            {/* Simulated Live UI Preview */}
            <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-purple-500/30">
                <span className="text-[11px] text-slate-400 block">Total Revenue</span>
                <span className="text-lg sm:text-2xl font-black font-mono text-white">$34,820.50</span>
                <span className="text-[10px] text-purple-300 block mt-0.5">Approved commissions</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-orange-500/30">
                <span className="text-[11px] text-slate-400 block">Attributed Clicks</span>
                <span className="text-lg sm:text-2xl font-black font-mono text-orange-400">94,820</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">71,200 unique visitors</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-emerald-500/30">
                <span className="text-[11px] text-slate-400 block">Networks Synced</span>
                <span className="text-lg sm:text-2xl font-black font-mono text-emerald-400">26 Networks</span>
                <span className="text-[10px] text-emerald-300 block mt-0.5">Apple, Google, Shopify, Semrush</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-yellow-500/30">
                <span className="text-[11px] text-slate-400 block">Autonomous Agents</span>
                <span className="text-lg sm:text-2xl font-black font-mono text-yellow-300">30 Online</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Gemini 2.5 + Claude 3.7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
            THE AFFILIATE MARKETING BOTTLENECK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Stop Managing Ten Different Tools to Run One Affiliate Business.
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Traditional affiliate marketing is broken across disconnected spreadsheets, fragile redirects, costly landing page subscriptions, and manual social posting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-3xl flash-glow-card border border-red-500/30 space-y-2">
            <h3 className="text-sm font-bold text-red-300">Disconnected Networks & Logins</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jumping between Impact, CJ, Awin, PartnerStack, and ClickBank wastes hours daily with no unified earnings ledger.
            </p>
          </div>

          <div className="p-5 rounded-3xl flash-glow-card border border-red-500/30 space-y-2">
            <h3 className="text-sm font-bold text-red-300">Spreadsheet Link Chaos</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Manual tracking links get lost, break during merchant updates, or trigger open-redirect and fraud warnings.
            </p>
          </div>

          <div className="p-5 rounded-3xl flash-glow-card border border-red-500/30 space-y-2">
            <h3 className="text-sm font-bold text-red-300">Fragmented Creative Bottlenecks</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paying $150+/mo across standalone page builders, graphic generators, and AI chat tools with no affiliate link integration.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works (5 Steps) */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
            THE 5-STEP AUTONOMOUS PIPELINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            How Super Affiliate Manager AI Works
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Transform a simple marketing goal into verified live campaigns in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {[
            { step: '01', title: 'JOIN', desc: 'Create your account and select your marketing goals in under 60 seconds.' },
            { step: '02', title: 'DISCOVER', desc: 'Explore 15 networks and verified high-paying SaaS and hosting programs.' },
            { step: '03', title: 'CONNECT', desc: 'Import approved links or connect authorized partner accounts.' },
            { step: '04', title: 'CREATE', desc: 'Let 30 AI agents build responsive landers, banners, and video scripts.' },
            { step: '05', title: 'GROW', desc: 'Publish with FTC disclosures and synchronize real verified commissions.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-400/50 transition-all space-y-2">
              <span className="text-xs font-mono font-bold text-purple-400 px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-500/30">
                STEP {item.step}
              </span>
              <h3 className="text-sm font-bold text-white tracking-wide">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Platform Features Matrix */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
            EVERYTHING INCLUDED
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Complete Enterprise Suite
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Click any module below to jump directly into the live workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 'marketplace', title: 'Affiliate Partner Marketplace', desc: '15 global networks cataloged with verified application portals and capability tags.', icon: <Store className="w-5 h-5 text-emerald-400" /> },
            { id: 'link-intelligence', title: 'Universal Link Intelligence', desc: 'Proprietary 302/307 shortener, QR visualizer, and UTM attribution engine.', icon: <Link2 className="w-5 h-5 text-blue-400" /> },
            { id: 'product-discovery', title: 'AI Product Discovery', desc: 'Verified product features, commission rates, and audience intent matrices.', icon: <TrendingUp className="w-5 h-5 text-yellow-400" /> },
            { id: 'website-factory', title: 'Website & Landing Page Builder', desc: 'Visual page editor with live preview, responsive device frames, and React export.', icon: <Globe className="w-5 h-5 text-purple-400" /> },
            { id: 'asset-generator', title: 'Creative Asset Generator', desc: '16:9, 9:16, 1:1 banners, video storyboards, and copyable diffusion recipes.', icon: <Palette className="w-5 h-5 text-pink-400" /> },
            { id: 'social-studio', title: 'Multi-Channel Social Studio', desc: 'TikTok hooks, YouTube outlines, and LinkedIn copy with FTC disclosures.', icon: <Share2 className="w-5 h-5 text-cyan-400" /> },
            { id: 'agent-registry', title: '30-Agent AI Swarm', desc: 'Specialized marketing, compliance, and coding agents with multi-provider routing.', icon: <Bot className="w-5 h-5 text-orange-400" /> },
            { id: 'attachments', title: 'Secure Attachment Vault', desc: 'SHA-256 cryptographic verification, malware scanning, and version rollback.', icon: <ShieldCheck className="w-5 h-5 text-teal-400" /> },
            { id: 'admin-console', title: 'Administration & Subscriptions', desc: 'Configurable SaaS plans, 12 production acceptance gates, and tenant isolation.', icon: <Zap className="w-5 h-5 text-red-400" /> }
          ].map((feat) => (
            <div
              key={feat.id}
              onClick={() => onNavigate(feat.id as NavigationTab)}
              className="p-5 rounded-3xl flash-glow-card border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                    {feat.icon}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <span className="text-[11px] font-semibold text-purple-400 flex items-center gap-1">
                Open Module →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Major Affiliate Networks Directory Preview */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
            PARTNER DIRECTORY & INTEGRATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Connect With 26+ Major Affiliate Networks & Mobile Apps
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Honest integration labeling: All links point to 100% verified production portals. Includes Apple App Store, Google Play, AppsFlyer, and high-converting Free Trial SaaS programs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {[
            { name: 'Apple Services', type: 'Performance Partners (iOS)', status: 'Approved' },
            { name: 'Google Play', type: 'Partner Advantage Ecosystem', status: 'Active' },
            { name: 'Shopify Affiliate', type: '$150 Bounty on Paid Plan', status: 'Connected' },
            { name: 'Semrush Affiliate', type: '$10 Trial Lead + $200 CPS', status: 'Active' },
            { name: 'Impact.com', type: 'API Integration + OAuth', status: 'Connected' },
            { name: 'PartnerStack', type: 'REST API + Webhooks', status: 'Active' },
            { name: 'CJ Affiliate', type: 'Developer GraphQL API', status: 'Connected' },
            { name: 'Canva Affiliate', type: '30-Day Pro Trial Bounty', status: 'Approved' },
            { name: 'AppsFlyer', type: 'Mobile Attribution SDK (MMP)', status: 'Approved' },
            { name: 'Amazon Associates', type: 'PA-API 5.0 Feed & Mobile', status: 'Connected' }
          ].map((net, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl flash-glow-card border border-white/10 text-xs space-y-1">
              <span className="font-bold text-white block">{net.name}</span>
              <span className="text-[10px] text-slate-400 block">{net.type}</span>
              <span className="inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                {net.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Honest Workflow Comparison */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-bold">
            WORKFLOW COMPARISON
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Traditional Workflow vs. Super Affiliate Manager AI
          </h2>
        </div>

        <div className="flash-glow-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-mono uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Capability</th>
                  <th className="py-3 px-4 text-slate-400">Traditional Workflow</th>
                  <th className="py-3 px-4 text-purple-300 font-bold">Super Affiliate Manager AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {[
                  { cap: 'Multiple Affiliate Networks', trad: 'Separate logins, tabs, and spreadsheets', sam: 'Unified partner workspace with central ledger' },
                  { cap: 'Link Management', trad: 'Cluttered spreadsheets, risk of broken links', sam: 'Central 302/307 shortener with health monitoring' },
                  { cap: 'Landing Pages', trad: 'Expensive third-party builders ($99+/mo)', sam: 'Integrated landing page factory with React code export' },
                  { cap: 'Marketing Assets', trad: 'Multiple creative subscriptions and tools', sam: 'Standardized 16:9, 9:16, 1:1 AI creative studio' },
                  { cap: 'Multi-Channel Social', trad: 'Disconnected notes and copy-paste prompts', sam: 'Channel-native scripts with automated FTC disclosures' },
                  { cap: 'AI Agent Swarm', trad: 'Generic chatbots with isolated context', sam: '30 specialized agents with persistent campaign memory' },
                  { cap: 'Financial Reporting', trad: 'Unconfirmed clicks treated as vanity stats', sam: 'Strict 6-stage audited financial ledger' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-semibold text-white">{row.cap}</td>
                    <td className="py-3 px-4 text-slate-400">{row.trad}</td>
                    <td className="py-3 px-4 text-purple-200 font-medium">{row.sam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl flash-glow-card neon-border-multi space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Your Next Affiliate Campaign Starts Here.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Stop jumping between tools. Build, manage and optimize your affiliate marketing operation from one intelligent workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onStartTrial('ELITE')}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-extrabold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all cursor-pointer"
            >
              START FREE TRIAL
            </button>
            <button
              onClick={() => onNavigate('public-pricing')}
              className="px-7 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 font-bold text-sm transition-all cursor-pointer"
            >
              VIEW TRANSPARENT PRICING
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400">
            <button onClick={() => onNavigate('legal-trust')} className="hover:text-white underline">
              Affiliate Disclosure
            </button>
            <button onClick={() => onNavigate('legal-trust')} className="hover:text-white underline">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('legal-trust')} className="hover:text-white underline">
              Terms of Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
