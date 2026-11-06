import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Bell, 
  ExternalLink,
  Plus,
  RefreshCw,
  Search,
  CheckCircle2,
  ChevronDown,
  Globe,
  CreditCard,
  BookOpen,
  Code,
  Users,
  Compass,
  DollarSign,
  Lock,
  Terminal,
  BarChart3,
  TrendingUp,
  UserCheck,
  Menu,
  Target,
  Share2,
  Link2,
  Store,
  ShoppingBag,
  Building2,
  Palette,
  Briefcase,
  Workflow
} from 'lucide-react';
import { NavigationTab, WorkspaceMode, LocaleCode, GoogleUserProfile } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenNewLink: () => void;
  onOpenAiTask: () => void;
  workspaceMode?: WorkspaceMode;
  onWorkspaceModeChange?: (mode: WorkspaceMode) => void;
  currentLocale?: LocaleCode;
  onLocaleChange?: (locale: LocaleCode) => void;
  currentUser?: GoogleUserProfile;
  onOpenGoogleAuth?: () => void;
  onOpenMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab,
  onNavigate,
  onOpenNewLink, 
  onOpenAiTask,
  workspaceMode = 'merchant',
  onWorkspaceModeChange,
  currentLocale = 'en',
  onLocaleChange,
  currentUser = {
    id: 'user-admin-1',
    email: 'gxqstudio@gmail.com',
    name: 'Master Admin (GXQ Studio)',
    role: 'admin',
    chosenDashboard: 'admin',
    isAdmin: true,
    googleVerified: true,
    joinedDate: '2026-11-01'
  },
  onOpenGoogleAuth,
  onOpenMobileMenu
}) => {
  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const [showLocaleMenu, setShowLocaleMenu] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('26 Networks Synced');

  const isAdmin = currentUser.isAdmin || currentUser.email === 'gxqstudio@gmail.com';
  const userRole = isAdmin ? 'admin' : currentUser.role;

  const languages: { code: LocaleCode; label: string; flag: string }[] = [
    { code: 'en', label: 'English (US)', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية (RTL)', flag: '🇦🇪' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
  ];

  const handleSyncAll = () => {
    setIsSyncing(true);
    setSyncStatus('Syncing 26 Networks & Mobile Adapters...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('26 Networks Synced');
    }, 1200);
  };

  const currentLang = languages.find(l => l.code === currentLocale) || languages[0];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#070b1e]/85 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Top multi-color neon flash line */}
      <div className="flash-line-multi" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone & Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile Menu Hamburger Button */}
          {onOpenMobileMenu && (
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 transition-colors cursor-pointer"
              title="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-purple-400" />
            </button>
          )}

          <div 
            onClick={() => onNavigate('command-center')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-orange-500 to-yellow-400 p-[1.5px] shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0a0f26] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  SUPER AFFILIATE MANAGER AI
                </span>
                <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 border border-purple-500/40 font-bold">
                  {isAdmin ? '👑 SUPER ADMIN' : userRole.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {isAdmin 
                  ? 'All 4 Dashboards Unlocked · Marketing, Affiliates, Dev & Admin' 
                  : `Tailored Workspace for ${userRole.toUpperCase()} · Google Verified Session`}
              </p>
            </div>
          </div>
        </div>

        {/* Center Live Telemetry & Role-Tailored Dashboard Switcher */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
          {/* If Super Admin, show ALL 4 dashboards with unlocked status */}
          {isAdmin ? (
            <>
              {/* Dashboard 1: Marketing */}
              <button
                onClick={() => onNavigate('dashboard-marketing')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'dashboard-marketing' 
                    ? 'bg-orange-600/30 text-orange-200 border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3)]' 
                    : 'text-orange-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                <span>Marketing</span>
              </button>

              {/* Dashboard 2: Affiliate Marketers */}
              <button
                onClick={() => onNavigate('dashboard-affiliate')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'dashboard-affiliate' 
                    ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                    : 'text-emerald-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Affiliates</span>
              </button>

              {/* Dashboard 3: Dev */}
              <button
                onClick={() => onNavigate('dashboard-dev')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'dashboard-dev' 
                    ? 'bg-cyan-600/30 text-cyan-200 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                    : 'text-cyan-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dev & API</span>
              </button>

              {/* Dashboard 4: Admin (Isolated to gxqstudio@gmail.com) */}
              <button
                onClick={() => onNavigate('dashboard-admin')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'dashboard-admin' 
                    ? 'bg-red-600/30 text-red-200 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]' 
                    : 'text-red-300 hover:text-white hover:bg-white/5'
                }`}
                title="Super Admin Isolated Dashboard"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>Admin</span>
              </button>

              <span className="text-white/20">|</span>

              {/* V1.4.0 Enterprise Extensions */}
              <button
                onClick={() => onNavigate('enterprise-org')}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'enterprise-org' ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50' : 'text-slate-400 hover:text-white'
                }`}
                title="Enterprise Multi-Tenant Hierarchy"
              >
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Org</span>
              </button>

              <button
                onClick={() => onNavigate('white-label')}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'white-label' ? 'bg-cyan-600/30 text-cyan-200 border border-cyan-500/50' : 'text-slate-400 hover:text-white'
                }`}
                title="White-Label SaaS & Custom Domains"
              >
                <Palette className="w-3.5 h-3.5 text-cyan-400" />
                <span>White-Label</span>
              </button>

              <button
                onClick={() => onNavigate('agency-reseller')}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'agency-reseller' ? 'bg-orange-600/30 text-orange-200 border border-orange-500/50' : 'text-slate-400 hover:text-white'
                }`}
                title="Agency & Reseller Workspaces"
              >
                <Briefcase className="w-3.5 h-3.5 text-orange-400" />
                <span>Agency</span>
              </button>

              <button
                onClick={() => onNavigate('automation-engine')}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'automation-engine' ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50' : 'text-slate-400 hover:text-white'
                }`}
                title="Workflow Event Automation"
              >
                <Workflow className="w-3.5 h-3.5 text-emerald-400" />
                <span>Automate</span>
              </button>
            </>
          ) : userRole === 'marketing' ? (
            /* Tailored Top Bar for Marketing */
            <>
              <button
                onClick={() => onNavigate('dashboard-marketing')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold bg-orange-600/30 text-orange-200 border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
              >
                <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                <span>Marketing Hub</span>
              </button>
              <button
                onClick={() => onNavigate('campaigns')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'campaigns' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-purple-400" />
                <span>Campaigns</span>
              </button>
              <button
                onClick={() => onNavigate('social-studio')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'social-studio' ? 'bg-pink-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Social Studio</span>
              </button>
            </>
          ) : userRole === 'developer' ? (
            /* Tailored Top Bar for Developer */
            <>
              <button
                onClick={() => onNavigate('dashboard-dev')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold bg-cyan-600/30 text-cyan-200 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dev & API Hub</span>
              </button>
              <button
                onClick={() => onNavigate('developers')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'developers' ? 'bg-emerald-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5 text-emerald-400" />
                <span>API Docs</span>
              </button>
              <button
                onClick={() => onNavigate('ecommerce-hub')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'ecommerce-hub' ? 'bg-teal-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-teal-400" />
                <span>Adapters</span>
              </button>
            </>
          ) : (
            /* Tailored Top Bar for Affiliate */
            <>
              <button
                onClick={() => onNavigate('dashboard-affiliate')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Affiliates Hub</span>
              </button>
              <button
                onClick={() => onNavigate('link-intelligence')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'link-intelligence' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Link2 className="w-3.5 h-3.5 text-purple-400" />
                <span>My Links</span>
              </button>
              <button
                onClick={() => onNavigate('affiliate-register')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
                  activeTab === 'affiliate-register' ? 'bg-yellow-600/30 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-yellow-400" />
                <span>22+ Registry</span>
              </button>
            </>
          )}

          <span className="text-white/20">|</span>

          {/* Sync indicator */}
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="font-mono text-emerald-400 font-semibold">{syncStatus}</span>
            <button 
              onClick={handleSyncAll}
              title="Force Sync Networks & Adapters"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-purple-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right Actions & Multi-Mode Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile / Compact Dashboard Switcher Dropdown */}
          <div className="relative xl:hidden">
            <button 
              onClick={() => setShowDashboardMenu(!showDashboardMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-xs font-semibold text-purple-200"
            >
              <span>Dashboards</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {showDashboardMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#0c1230] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)] p-2 z-50">
                <div className="text-[10px] font-mono font-bold text-slate-400 px-3 py-1 uppercase">
                  Select Role Dashboard
                </div>
                <button
                  onClick={() => { onNavigate('dashboard-marketing'); setShowDashboardMenu(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs text-orange-300 hover:bg-white/5 flex items-center justify-between"
                >
                  <span>Marketing Dashboard</span>
                  <TrendingUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => { onNavigate('dashboard-affiliate'); setShowDashboardMenu(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs text-emerald-300 hover:bg-white/5 flex items-center justify-between"
                >
                  <span>Affiliate Marketers</span>
                  <DollarSign className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => { onNavigate('dashboard-dev'); setShowDashboardMenu(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs text-cyan-300 hover:bg-white/5 flex items-center justify-between"
                >
                  <span>Dev & API Dashboard</span>
                  <Terminal className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => { onNavigate('dashboard-admin'); setShowDashboardMenu(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs text-red-300 hover:bg-white/5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1">
                    <span>Admin Dashboard</span>
                    {!currentUser.isAdmin && <Lock className="w-3 h-3 text-slate-500" />}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Multilingual Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLocaleMenu(!showLocaleMenu)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200"
              title="Select Language"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline font-mono">{currentLang.code.toUpperCase()}</span>
            </button>
            {showLocaleMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0c1230] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)] p-1.5 z-50">
                <div className="text-[10px] font-mono font-bold text-slate-400 px-2 py-1 uppercase">
                  Global Localization
                </div>
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      if (onLocaleChange) onLocaleChange(lang.code);
                      setShowLocaleMenu(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${currentLocale === lang.code ? 'bg-purple-600/30 text-white font-bold' : 'text-slate-300 hover:bg-white/5'}`}
                  >
                    <span>{lang.flag} {lang.label}</span>
                    {currentLocale === lang.code && <CheckCircle2 className="w-3 h-3 text-purple-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick AI Task Button */}
          <button
            onClick={onOpenAiTask}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI Dispatch</span>
          </button>

          {/* GOOGLE PROFILE & SSO BUTTON */}
          <div className="flex items-center gap-2 pl-1">
            <button
              onClick={onOpenGoogleAuth}
              className={`flex items-center gap-2 py-1 px-2.5 rounded-2xl border transition-all cursor-pointer ${
                currentUser.isAdmin
                  ? 'bg-red-950/40 border-red-500/50 hover:bg-red-900/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08]'
              }`}
              title="Manage Google Account & Switch Role Profile"
            >
              {/* Google G Logo */}
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>

              <div className="hidden md:block text-left text-xs leading-none">
                <div className="font-semibold text-white truncate max-w-[140px]">
                  {currentUser.email}
                </div>
                <div className="text-[9px] font-mono mt-0.5">
                  {currentUser.isAdmin ? (
                    <span className="text-red-400 font-bold uppercase">SUPER ADMIN</span>
                  ) : (
                    <span className="text-emerald-400 uppercase">{currentUser.role}</span>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
