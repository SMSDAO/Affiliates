import React from 'react';
import { 
  Home, 
  Bot, 
  Store, 
  Link2, 
  Target, 
  Globe, 
  Share2, 
  Palette, 
  Compass, 
  FileBox, 
  Cpu, 
  Settings, 
  CreditCard, 
  BookOpen, 
  Code, 
  TrendingUp, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Users,
  GitFork,
  ShoppingBag,
  FileCode2,
  ShieldAlert,
  Gamepad2,
  Award,
  DollarSign,
  Terminal,
  Lock,
  LayoutDashboard,
  Menu,
  X,
  PlusCircle,
  CheckCircle2,
  Zap,
  Layers,
  ArrowRight,
  ExternalLink,
  Building2,
  Briefcase,
  Workflow,
  Brain,
  Network,
  Puzzle,
  Sliders,
  BarChart3,
  Globe2,
  Server
} from 'lucide-react';
import { NavigationTab, WorkspaceMode, GoogleUserProfile } from '../types';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  workspaceMode?: WorkspaceMode;
  currentUser?: GoogleUserProfile;
  onOpenGoogleAuth?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  mobileMenuOpen,
  setMobileMenuOpen,
  workspaceMode = 'merchant',
  currentUser,
  onOpenGoogleAuth
}) => {
  const isAdmin = currentUser?.isAdmin || currentUser?.email === 'gxqstudio@gmail.com';
  const userRole = isAdmin ? 'admin' : (currentUser?.role || 'affiliate');

  // Dedicated 4 Role Dashboards
  const roleDashboardItems: { 
    id: NavigationTab; 
    label: string; 
    shortLabel: string;
    icon: React.ReactNode; 
    badge?: string; 
    badgeColor?: string;
    glowColor?: string;
  }[] = [
    { 
      id: 'dashboard-marketing', 
      label: 'Marketing Dashboard', 
      shortLabel: 'Marketing',
      icon: <TrendingUp className="w-4 h-4 text-orange-400" />, 
      badge: 'CAMPAIGNS',
      badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      glowColor: 'shadow-[0_0_12px_rgba(249,115,22,0.4)]'
    },
    { 
      id: 'dashboard-affiliate', 
      label: 'Affiliate Marketers', 
      shortLabel: 'Affiliates',
      icon: <DollarSign className="w-4 h-4 text-emerald-400" />, 
      badge: 'MLM & PAY',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      glowColor: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]'
    },
    { 
      id: 'dashboard-dev', 
      label: 'Dev & API Dashboard', 
      shortLabel: 'Dev & API',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />, 
      badge: 'API 37',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      glowColor: 'shadow-[0_0_12px_rgba(6,182,212,0.4)]'
    },
    { 
      id: 'dashboard-admin', 
      label: 'Admin Dashboard', 
      shortLabel: 'Admin',
      icon: isAdmin ? <ShieldCheck className="w-4 h-4 text-red-400" /> : <Lock className="w-4 h-4 text-slate-500" />, 
      badge: isAdmin ? 'SUPER' : 'ISOLATED',
      badgeColor: isAdmin ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-white/5 text-slate-500 border-white/10',
      glowColor: 'shadow-[0_0_12px_rgba(239,68,68,0.4)]'
    }
  ];

  // Master All Modules Catalog (For Admin opens all)
  const adminOperationalGroups = [
    {
      groupTitle: 'Core Operations & AI',
      items: [
        { id: 'command-center' as NavigationTab, label: 'COMMAND CENTER', icon: <Home className="w-4 h-4 text-purple-400" /> },
        { id: 'ai-assistant' as NavigationTab, label: 'AI MARKETING', icon: <Bot className="w-4 h-4 text-cyan-400" />, badge: '30 AGENTS' },
        { id: 'link-intelligence' as NavigationTab, label: 'MY AFFILIATE LINKS', icon: <Link2 className="w-4 h-4 text-emerald-400" /> },
        { id: 'campaigns' as NavigationTab, label: 'CAMPAIGNS', icon: <Target className="w-4 h-4 text-orange-400" /> },
        { id: 'product-discovery' as NavigationTab, label: 'DISCOVER PRODUCTS', icon: <Compass className="w-4 h-4 text-yellow-400" />, badge: 'FEED' }
      ]
    },
    {
      groupTitle: 'Affiliate & Commissions',
      items: [
        { id: 'affiliate-portal' as NavigationTab, label: 'AFFILIATE PORTAL', icon: <Users className="w-4 h-4 text-emerald-400" />, badge: 'PROFILE' },
        { id: 'affiliate-register' as NavigationTab, label: '22+ NETWORK REGISTRY', icon: <Store className="w-4 h-4 text-purple-400" />, badge: 'SYNC' },
        { id: 'mlm-commissions' as NavigationTab, label: 'MLM & COMMISSIONS', icon: <GitFork className="w-4 h-4 text-teal-400" />, badge: 'TIERS' },
        { id: 'payout-center' as NavigationTab, label: 'PAYOUTS & WITHDRAWAL', icon: <DollarSign className="w-4 h-4 text-emerald-400" />, badge: 'RAILS' },
        { id: 'casino-affiliates' as NavigationTab, label: 'CASINO & GAMING', icon: <Gamepad2 className="w-4 h-4 text-amber-400" />, badge: '18+' },
        { id: 'marketplace' as NavigationTab, label: 'NETWORK DIRECTORY', icon: <Store className="w-4 h-4 text-indigo-400" />, badge: '26' }
      ]
    },
    {
      groupTitle: 'Creative & Landers',
      items: [
        { id: 'website-factory' as NavigationTab, label: 'LANDING PAGES', icon: <Globe className="w-4 h-4 text-blue-400" /> },
        { id: 'social-studio' as NavigationTab, label: 'MARKETING STUDIO', icon: <Share2 className="w-4 h-4 text-pink-400" /> },
        { id: 'asset-generator' as NavigationTab, label: 'CREATIVE ASSETS', icon: <Palette className="w-4 h-4 text-purple-400" /> },
        { id: 'funnel-analytics' as NavigationTab, label: 'CUSTOMER FUNNELS', icon: <TrendingUp className="w-4 h-4 text-orange-400" /> }
      ]
    },
    {
      groupTitle: 'Integration & Admin Security',
      items: [
        { id: 'fraud-detection' as NavigationTab, label: 'FRAUD SENTINEL', icon: <ShieldAlert className="w-4 h-4 text-red-400" />, badge: 'GUARD' },
        { id: 'ecommerce-hub' as NavigationTab, label: 'STORE INTEGRATIONS', icon: <ShoppingBag className="w-4 h-4 text-cyan-400" />, badge: 'WOO' },
        { id: 'wordpress-embeds' as NavigationTab, label: 'WP SHORTCODES', icon: <FileCode2 className="w-4 h-4 text-teal-400" /> },
        { id: 'attachments' as NavigationTab, label: 'ATTACHMENT VAULT', icon: <FileBox className="w-4 h-4 text-slate-300" /> },
        { id: 'agent-registry' as NavigationTab, label: 'AGENT ORCHESTRATION', icon: <Cpu className="w-4 h-4 text-violet-400" /> },
        { id: 'admin-console' as NavigationTab, label: 'SETTINGS & ADMIN', icon: <Settings className="w-4 h-4 text-red-400" />, badge: 'SUPER' }
      ]
    },
    {
      groupTitle: 'V1.4.0 Ultimate Enterprise Suite',
      items: [
        { id: 'enterprise-org' as NavigationTab, label: 'ORGANIZATION HIERARCHY', icon: <Building2 className="w-4 h-4 text-purple-400" />, badge: 'TENANT' },
        { id: 'white-label' as NavigationTab, label: 'WHITE-LABEL & DOMAINS', icon: <Palette className="w-4 h-4 text-cyan-400" />, badge: 'CUSTOM' },
        { id: 'agency-reseller' as NavigationTab, label: 'AGENCY & RESELLERS', icon: <Briefcase className="w-4 h-4 text-orange-400" />, badge: 'CLIENTS' },
        { id: 'automation-engine' as NavigationTab, label: 'EVENT WORKFLOWS', icon: <Workflow className="w-4 h-4 text-emerald-400" />, badge: 'RULES' },
        { id: 'security-compliance' as NavigationTab, label: 'SECURITY & GOVERNANCE', icon: <ShieldCheck className="w-4 h-4 text-amber-400" />, badge: 'SSO/SCIM' }
      ]
    },
    {
      groupTitle: 'V1.5.0 Global Intelligence & Autonomous Ecosystem',
      items: [
        { id: 'global-intelligence' as NavigationTab, label: 'GLOBAL INTELLIGENCE', icon: <Brain className="w-4 h-4 text-purple-400" />, badge: 'TELEMETRY' },
        { id: 'campaign-optimizer' as NavigationTab, label: 'AUTONOMOUS OPTIMIZER', icon: <Bot className="w-4 h-4 text-cyan-400" />, badge: '9 AGENTS' },
        { id: 'partner-federation' as NavigationTab, label: 'PARTNER FEDERATION', icon: <Network className="w-4 h-4 text-indigo-400" />, badge: '10 NETWORKS' },
        { id: 'fraud-investigation' as NavigationTab, label: 'FRAUD & RISK CASES', icon: <ShieldAlert className="w-4 h-4 text-red-400" />, badge: 'HOLDS' },
        { id: 'enterprise-bi' as NavigationTab, label: 'ENTERPRISE BI & LTV', icon: <BarChart3 className="w-4 h-4 text-emerald-400" />, badge: 'LEDGER' },
        { id: 'localization-hub' as NavigationTab, label: 'GLOBAL LOCALIZATION', icon: <Globe2 className="w-4 h-4 text-blue-400" />, badge: 'RTL/TAX' },
        { id: 'ai-agent-control' as NavigationTab, label: 'AI CONTROL CENTER', icon: <Sliders className="w-4 h-4 text-pink-400" />, badge: 'CAPS' },
        { id: 'extension-marketplace' as NavigationTab, label: 'PLUGIN MARKETPLACE', icon: <Puzzle className="w-4 h-4 text-teal-400" />, badge: 'STORE' },
        { id: 'system-reliability' as NavigationTab, label: 'RELIABILITY & DR OPS', icon: <Server className="w-4 h-4 text-amber-400" />, badge: 'P99/SLA' }
      ]
    },
    {
      groupTitle: 'Public & Documentation',
      items: [
        { id: 'developers' as NavigationTab, label: 'DEVELOPER API & SDK', icon: <Code className="w-4 h-4 text-emerald-400" />, badge: 'API' },
        { id: 'user-guides' as NavigationTab, label: 'USER GUIDES & DOCS', icon: <BookOpen className="w-4 h-4 text-blue-400" /> },
        { id: 'onboarding' as NavigationTab, label: 'SETUP WIZARD', icon: <Sparkles className="w-4 h-4 text-yellow-400" />, badge: 'GUIDE' },
        { id: 'public-home' as NavigationTab, label: 'PUBLIC WEBSITE', icon: <Globe className="w-4 h-4 text-purple-400" /> },
        { id: 'public-pricing' as NavigationTab, label: 'PRICING & PLANS', icon: <CreditCard className="w-4 h-4 text-orange-400" /> }
      ]
    }
  ];

  // Tailored toolchain for Marketing Role
  const marketingOperationalGroups = [
    {
      groupTitle: 'Marketing Toolchain',
      items: [
        { id: 'campaigns' as NavigationTab, label: 'CAMPAIGNS', icon: <Target className="w-4 h-4 text-orange-400" />, badge: 'ACTIVE' },
        { id: 'social-studio' as NavigationTab, label: 'MARKETING STUDIO', icon: <Share2 className="w-4 h-4 text-pink-400" /> },
        { id: 'asset-generator' as NavigationTab, label: 'CREATIVE ASSETS', icon: <Palette className="w-4 h-4 text-purple-400" /> },
        { id: 'website-factory' as NavigationTab, label: 'LANDING PAGES', icon: <Globe className="w-4 h-4 text-blue-400" /> },
        { id: 'product-discovery' as NavigationTab, label: 'DISCOVER PRODUCTS', icon: <Compass className="w-4 h-4 text-yellow-400" />, badge: 'FEED' },
        { id: 'funnel-analytics' as NavigationTab, label: 'CUSTOMER FUNNELS', icon: <TrendingUp className="w-4 h-4 text-orange-400" /> },
        { id: 'ai-assistant' as NavigationTab, label: 'AI MARKETING', icon: <Bot className="w-4 h-4 text-cyan-400" /> }
      ]
    },
    {
      groupTitle: 'General Operations',
      items: [
        { id: 'command-center' as NavigationTab, label: 'COMMAND CENTER', icon: <Home className="w-4 h-4 text-slate-300" /> },
        { id: 'link-intelligence' as NavigationTab, label: 'MY AFFILIATE LINKS', icon: <Link2 className="w-4 h-4 text-emerald-400" /> },
        { id: 'marketplace' as NavigationTab, label: 'NETWORK DIRECTORY', icon: <Store className="w-4 h-4 text-indigo-400" /> },
        { id: 'user-guides' as NavigationTab, label: 'USER GUIDES & DOCS', icon: <BookOpen className="w-4 h-4 text-blue-400" /> },
        { id: 'public-pricing' as NavigationTab, label: 'PRICING & PLANS', icon: <CreditCard className="w-4 h-4 text-orange-400" /> }
      ]
    }
  ];

  // Tailored toolchain for Affiliate Marketer Role
  const affiliateOperationalGroups = [
    {
      groupTitle: 'Affiliate & Commissions Toolchain',
      items: [
        { id: 'link-intelligence' as NavigationTab, label: 'MY AFFILIATE LINKS', icon: <Link2 className="w-4 h-4 text-emerald-400" />, badge: 'TRACK' },
        { id: 'affiliate-portal' as NavigationTab, label: 'AFFILIATE PORTAL', icon: <Users className="w-4 h-4 text-emerald-400" />, badge: 'RANK' },
        { id: 'affiliate-register' as NavigationTab, label: '22+ NETWORK REGISTRY', icon: <Store className="w-4 h-4 text-purple-400" />, badge: 'SYNC' },
        { id: 'mlm-commissions' as NavigationTab, label: 'MLM & COMMISSIONS', icon: <GitFork className="w-4 h-4 text-teal-400" />, badge: 'TIERS' },
        { id: 'payout-center' as NavigationTab, label: 'PAYOUTS & WITHDRAWAL', icon: <DollarSign className="w-4 h-4 text-emerald-400" />, badge: 'RAILS' },
        { id: 'marketplace' as NavigationTab, label: 'NETWORK DIRECTORY', icon: <Store className="w-4 h-4 text-indigo-400" />, badge: '26' },
        { id: 'casino-affiliates' as NavigationTab, label: 'CASINO & GAMING', icon: <Gamepad2 className="w-4 h-4 text-amber-400" /> }
      ]
    },
    {
      groupTitle: 'General Operations',
      items: [
        { id: 'command-center' as NavigationTab, label: 'COMMAND CENTER', icon: <Home className="w-4 h-4 text-slate-300" /> },
        { id: 'social-studio' as NavigationTab, label: 'MARKETING STUDIO', icon: <Share2 className="w-4 h-4 text-pink-400" /> },
        { id: 'asset-generator' as NavigationTab, label: 'CREATIVE ASSETS', icon: <Palette className="w-4 h-4 text-purple-400" /> },
        { id: 'user-guides' as NavigationTab, label: 'USER GUIDES & DOCS', icon: <BookOpen className="w-4 h-4 text-blue-400" /> }
      ]
    }
  ];

  // Tailored toolchain for Developer Role
  const devOperationalGroups = [
    {
      groupTitle: 'Engineering & API Toolchain',
      items: [
        { id: 'developers' as NavigationTab, label: 'DEVELOPER API & SDK', icon: <Code className="w-4 h-4 text-cyan-400" />, badge: 'API' },
        { id: 'ecommerce-hub' as NavigationTab, label: 'STORE INTEGRATIONS', icon: <ShoppingBag className="w-4 h-4 text-cyan-400" />, badge: 'WOO' },
        { id: 'wordpress-embeds' as NavigationTab, label: 'WP SHORTCODES', icon: <FileCode2 className="w-4 h-4 text-teal-400" /> },
        { id: 'attachments' as NavigationTab, label: 'ATTACHMENT VAULT', icon: <FileBox className="w-4 h-4 text-slate-300" /> },
        { id: 'agent-registry' as NavigationTab, label: 'AGENT ORCHESTRATION', icon: <Cpu className="w-4 h-4 text-violet-400" /> },
        { id: 'fraud-detection' as NavigationTab, label: 'FRAUD SENTINEL', icon: <ShieldAlert className="w-4 h-4 text-red-400" /> }
      ]
    },
    {
      groupTitle: 'General Operations',
      items: [
        { id: 'command-center' as NavigationTab, label: 'COMMAND CENTER', icon: <Home className="w-4 h-4 text-slate-300" /> },
        { id: 'link-intelligence' as NavigationTab, label: 'MY AFFILIATE LINKS', icon: <Link2 className="w-4 h-4 text-emerald-400" /> },
        { id: 'marketplace' as NavigationTab, label: 'NETWORK DIRECTORY', icon: <Store className="w-4 h-4 text-indigo-400" /> },
        { id: 'user-guides' as NavigationTab, label: 'USER GUIDES & DOCS', icon: <BookOpen className="w-4 h-4 text-blue-400" /> }
      ]
    }
  ];

  const activeGroups = isAdmin 
    ? adminOperationalGroups 
    : userRole === 'marketing'
    ? marketingOperationalGroups
    : userRole === 'developer'
    ? devOperationalGroups
    : affiliateOperationalGroups;

  // STRICT SECURITY & DASHBOARD ISOLATION:
  // Admin Dashboard is strictly visible ONLY for gxqstudio@gmail.com.
  // Each other role only sees their own dedicated dashboard.
  const visibleRoleDashboardItems = roleDashboardItems.filter((dash) => {
    if (dash.id === 'dashboard-admin') {
      return isAdmin;
    }
    if (isAdmin) return true;
    if (userRole === 'marketing') return dash.id === 'dashboard-marketing';
    if (userRole === 'developer') return dash.id === 'dashboard-dev';
    return dash.id === 'dashboard-affiliate';
  });

  // Active Bottom Tab Bar items on Mobile based on user role
  const getMobileBottomTabs = () => {
    if (isAdmin) {
      return [
        { id: 'dashboard-marketing' as NavigationTab, label: 'Marketing', icon: <TrendingUp className="w-4 h-4" />, color: 'text-orange-400' },
        { id: 'dashboard-affiliate' as NavigationTab, label: 'Affiliates', icon: <DollarSign className="w-4 h-4" />, color: 'text-emerald-400' },
        { id: 'dashboard-admin' as NavigationTab, label: 'Admin Hub', icon: <ShieldCheck className="w-5 h-5 text-white" />, isHero: true, color: 'text-red-400' },
        { id: 'dashboard-dev' as NavigationTab, label: 'Dev & API', icon: <Terminal className="w-4 h-4" />, color: 'text-cyan-400' },
        { id: 'menu' as any, label: 'All 32', icon: <Menu className="w-4 h-4" />, isMenuTrigger: true, color: 'text-purple-400' }
      ];
    }
    if (userRole === 'marketing') {
      return [
        { id: 'dashboard-marketing' as NavigationTab, label: 'Marketing', icon: <TrendingUp className="w-4 h-4" />, color: 'text-orange-400' },
        { id: 'campaigns' as NavigationTab, label: 'Campaigns', icon: <Target className="w-4 h-4" />, color: 'text-orange-300' },
        { id: 'ai-assistant' as NavigationTab, label: 'AI Dispatch', icon: <Bot className="w-5 h-5 text-white" />, isHero: true, color: 'text-purple-400' },
        { id: 'social-studio' as NavigationTab, label: 'Studio', icon: <Share2 className="w-4 h-4" />, color: 'text-pink-400' },
        { id: 'menu' as any, label: 'Modules', icon: <Menu className="w-4 h-4" />, isMenuTrigger: true, color: 'text-slate-300' }
      ];
    }
    if (userRole === 'developer') {
      return [
        { id: 'dashboard-dev' as NavigationTab, label: 'Dev Hub', icon: <Terminal className="w-4 h-4" />, color: 'text-cyan-400' },
        { id: 'developers' as NavigationTab, label: 'API Docs', icon: <Code className="w-4 h-4" />, color: 'text-cyan-300' },
        { id: 'ecommerce-hub' as NavigationTab, label: 'Adapters', icon: <ShoppingBag className="w-5 h-5 text-white" />, isHero: true, color: 'text-teal-400' },
        { id: 'wordpress-embeds' as NavigationTab, label: 'WP Codes', icon: <FileCode2 className="w-4 h-4" />, color: 'text-emerald-400' },
        { id: 'menu' as any, label: 'Modules', icon: <Menu className="w-4 h-4" />, isMenuTrigger: true, color: 'text-slate-300' }
      ];
    }
    // Default: Affiliate Marketer
    return [
      { id: 'dashboard-affiliate' as NavigationTab, label: 'Affiliates', icon: <DollarSign className="w-4 h-4" />, color: 'text-emerald-400' },
      { id: 'link-intelligence' as NavigationTab, label: 'My Links', icon: <Link2 className="w-4 h-4" />, color: 'text-emerald-300' },
      { id: 'affiliate-register' as NavigationTab, label: '22+ Sync', icon: <Store className="w-5 h-5 text-white" />, isHero: true, color: 'text-purple-400' },
      { id: 'payout-center' as NavigationTab, label: 'Payouts', icon: <DollarSign className="w-4 h-4" />, color: 'text-yellow-400' },
      { id: 'menu' as any, label: 'Modules', icon: <Menu className="w-4 h-4" />, isMenuTrigger: true, color: 'text-slate-300' }
    ];
  };

  const mobileTabs = getMobileBottomTabs();

  return (
    <>
      {/* Desktop Left Sidebar (Scrollable & Role-Structured) */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 py-5 px-3 border-r border-white/10 bg-[#060a1d]/90 backdrop-blur-2xl min-h-[calc(100vh-4rem)]">
        {/* User Identity Banner in Sidebar */}
        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold flex items-center gap-1">
              <Users className="w-3 h-3 text-purple-400" />
              <span>ACTIVE USER PROFILE</span>
            </span>
            {isAdmin ? (
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                SUPER ADMIN
              </span>
            ) : (
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                {userRole}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-sm">
              {currentUser?.name?.charAt(0) || 'G'}
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">{currentUser?.name || 'User'}</div>
              <div className="text-[10px] font-mono text-slate-400 truncate">{currentUser?.email || 'gxqstudio@gmail.com'}</div>
            </div>
          </div>
          <button
            onClick={onOpenGoogleAuth}
            className="w-full py-1.5 px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[10px] font-mono text-purple-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1"
          >
            <span>Switch Google Profile</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Role Dashboards Header */}
        <div className="px-3 pb-2 mb-2 border-b border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-wider uppercase text-purple-400 font-bold flex items-center gap-1">
            <LayoutDashboard className="w-3 h-3 text-purple-400" />
            <span>ROLE DASHBOARDS</span>
          </span>
          {isAdmin ? (
            <span className="text-[9px] font-mono text-emerald-400 font-bold">ALL UNLOCKED</span>
          ) : (
            <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">{userRole} MODE</span>
          )}
        </div>

        {/* Role Dashboard Buttons */}
        <div className="space-y-1 mb-4">
          {visibleRoleDashboardItems.map((dash) => {
            const isActive = activeTab === dash.id;
            const isUserMain = (dash.id === `dashboard-${userRole}` as NavigationTab) || (isAdmin && dash.id === 'dashboard-admin');

            return (
              <button
                key={dash.id}
                onClick={() => onTabChange(dash.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer group ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/40 to-indigo-600/40 border border-purple-500/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : isUserMain
                    ? 'bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="shrink-0">{dash.icon}</span>
                  <span className="truncate">{dash.label}</span>
                </div>
                {dash.badge && (
                  <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-md border ${dash.badgeColor || 'bg-white/5 text-slate-400 border-white/10'}`}>
                    {dash.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Operational Modules (Categorized & Scrollable) */}
        <nav className="space-y-4 overflow-y-auto max-h-[calc(100vh-22rem)] pr-1 scrollbar-thin">
          {activeGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              <div className="px-3 pb-1 pt-1 flex items-center justify-between text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                <span>{group.groupTitle}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
              </div>
              {group.items.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer group ${
                      isActive 
                        ? 'bg-purple-600/30 border border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-purple-300' : 'text-slate-400'}`}>
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-white/[0.07] text-slate-300 border border-white/10 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* ======================================================== */}
      {/* PERSISTENT MOBILE BOTTOM TAB BAR (OPTIMIZED FOR EACH USER) */}
      {/* ======================================================== */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#070b1e]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
        {/* Top Multi-Color Neon Flash Line */}
        <div className="flash-line-multi" />

        <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-between">
          {mobileTabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;

            if (tab.isHero) {
              return (
                <button
                  key={idx}
                  onClick={() => onTabChange(tab.id)}
                  className="relative -top-3.5 flex flex-col items-center justify-center cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-orange-500 to-yellow-400 p-[1.5px] shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#0a0f2b] rounded-[14px] flex items-center justify-center">
                      {tab.icon}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold mt-1 text-yellow-300">
                    {tab.label}
                  </span>
                </button>
              );
            }

            if (tab.isMenuTrigger) {
              return (
                <button
                  key={idx}
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Menu className="w-5 h-5 text-purple-400" />
                  <span className="text-[9px] font-mono font-semibold mt-0.5 text-slate-400">
                    {tab.label}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
                  isActive 
                    ? 'text-white bg-white/[0.08] shadow-[0_0_12px_rgba(168,85,247,0.3)]' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className={isActive ? tab.color : 'text-slate-400'}>
                  {tab.icon}
                </div>
                <span className={`text-[9px] font-mono font-semibold mt-0.5 truncate max-w-[60px] ${isActive ? 'text-white font-bold' : 'text-slate-400'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* ENHANCED MOBILE DRAWER (WHEN OPEN) */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex">
          <div className="w-80 max-w-[85%] bg-[#080d28] h-full p-4 overflow-y-auto space-y-4 border-r border-white/15 shadow-2xl flex flex-col">
            {/* Drawer Header with Close */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-extrabold text-sm text-white">ALL WORKSPACE MODULES</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Mobile User Profile & Google SSO Status Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Google SSO Identity</span>
                {isAdmin ? (
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">
                    SUPER ADMIN
                  </span>
                ) : (
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                    {userRole}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white p-1 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-white truncate">{currentUser?.name || 'Master Admin'}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{currentUser?.email || 'gxqstudio@gmail.com'}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenGoogleAuth) onOpenGoogleAuth();
                }}
                className="w-full py-1.5 px-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-xs font-bold text-purple-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Switch Google Profile</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Role Dashboard Switcher */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-purple-400 uppercase font-bold px-1 flex items-center justify-between">
                <span>Role Workspace</span>
                <span className="text-emerald-400">{isAdmin ? '4 Zones' : `${userRole.toUpperCase()} Zone`}</span>
              </div>
              <div className={`grid ${visibleRoleDashboardItems.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1.5`}>
                {visibleRoleDashboardItems.map((dash) => (
                  <button
                    key={dash.id}
                    onClick={() => { onTabChange(dash.id); setMobileMenuOpen(false); }}
                    className={`p-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                      activeTab === dash.id
                        ? 'bg-purple-600 text-white border-purple-400'
                        : 'bg-white/[0.03] text-slate-300 border-white/10 hover:bg-white/[0.07]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      {dash.icon}
                      <span className="font-bold text-white text-[11px] truncate">{dash.shortLabel}</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block truncate">{dash.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Categorized Modules List */}
            <div className="space-y-4 flex-1 overflow-y-auto pr-1 scrollbar-thin">
              {activeGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold px-1 pt-1">
                    {group.groupTitle}
                  </div>
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { onTabChange(item.id); setMobileMenuOpen(false); }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold transition-colors ${
                        activeTab === item.id 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {item.icon}
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Overlay dismissal click */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};
