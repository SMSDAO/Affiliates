/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  NavigationTab, 
  FinancialSummary, 
  TrialState, 
  WorkspaceMode, 
  LocaleCode, 
  AffiliateAccount,
  GoogleUserProfile 
} from './types';
import { initialFinancialSummary } from './data/mockData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { CommandCenter } from './components/CommandCenter';
import { ConversationalAI } from './components/ConversationalAI';
import { PartnerMarketplace } from './components/PartnerMarketplace';
import { LinkIntelligence } from './components/LinkIntelligence';
import { ProductDiscovery } from './components/ProductDiscovery';
import { WebsiteFactory } from './components/WebsiteFactory';
import { CreativeAssetGenerator } from './components/CreativeAssetGenerator';
import { SocialStudio } from './components/SocialStudio';
import { CampaignDistribution } from './components/CampaignDistribution';
import { AgentRegistry } from './components/AgentRegistry';
import { AttachmentVault } from './components/AttachmentVault';
import { AdminConsole } from './components/AdminConsole';
import { PublicLandingPage } from './components/PublicLandingPage';
import { PublicPricing } from './components/PublicPricing';
import { OnboardingWizard } from './components/OnboardingWizard';
import { InteractiveUserGuide } from './components/InteractiveUserGuide';
import { DeveloperDocumentation } from './components/DeveloperDocumentation';
import { FunnelAnalytics } from './components/FunnelAnalytics';
import { LegalTrustPages } from './components/LegalTrustPages';

// V1.2.0 & V1.3.0 Additions
import { AffiliateRegistration } from './components/AffiliateRegistration';
import { AffiliatePortal } from './components/AffiliatePortal';
import { MlmCommissionEngine } from './components/MlmCommissionEngine';
import { EcommerceHub } from './components/EcommerceHub';
import { WordPressEmbeds } from './components/WordPressEmbeds';
import { PayoutCenter } from './components/PayoutCenter';
import { FraudDetectionCenter } from './components/FraudDetectionCenter';
import { CasinoAffiliateModule } from './components/CasinoAffiliateModule';

// V1.4.0 Ultimate Enterprise Suite
import { EnterpriseOrgManager } from './components/EnterpriseOrgManager';
import { WhiteLabelPortal } from './components/WhiteLabelPortal';
import { AgencyResellerHub } from './components/AgencyResellerHub';
import { AutomationEngine } from './components/AutomationEngine';
import { SecurityComplianceCenter } from './components/SecurityComplianceCenter';

// V1.5.0 Global Intelligence & Autonomous Ecosystem
import { GlobalIntelligenceEngine } from './components/GlobalIntelligenceEngine';
import { CampaignOptimizer } from './components/CampaignOptimizer';
import { PartnerFederationCenter } from './components/PartnerFederationCenter';
import { FraudInvestigationCenter } from './components/FraudInvestigationCenter';
import { EnterpriseBiDashboard } from './components/EnterpriseBiDashboard';
import { LocalizationHub } from './components/LocalizationHub';
import { AiAgentControlCenter } from './components/AiAgentControlCenter';
import { ExtensionMarketplace } from './components/ExtensionMarketplace';
import { SystemReliabilityOps } from './components/SystemReliabilityOps';

// Role Dashboards & Google Auth
import { 
  MarketingDashboard, 
  AffiliateMarketerDashboard, 
  DevDashboard, 
  AdminDashboard, 
  GoogleAuthModal 
} from './components/RoleDashboards';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('command-center');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workspaceMode, setWorkspaceMode] = useState<WorkspaceMode>('merchant');
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>('en');
  const [financials, setFinancials] = useState<FinancialSummary>(initialFinancialSummary);
  const [registeredAffiliate, setRegisteredAffiliate] = useState<AffiliateAccount | undefined>(undefined);

  // Google User & Security Isolation State
  // Default master admin: gxqstudio@gmail.com
  const [currentUser, setCurrentUser] = useState<GoogleUserProfile>(() => {
    try {
      const saved = localStorage.getItem('sam_google_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.email === 'gxqstudio@gmail.com') {
          return { ...parsed, isAdmin: true, role: 'admin' as const, chosenDashboard: 'admin' as const };
        }
        return parsed;
      }
    } catch {
      // Fallback
    }
    return {
      id: 'user-admin-gxq',
      email: 'gxqstudio@gmail.com',
      name: 'Master Admin (GXQ Studio)',
      avatarUrl: 'https://lh3.googleusercontent.com/a/default-user',
      role: 'admin' as const,
      chosenDashboard: 'admin' as const,
      isAdmin: true,
      googleVerified: true,
      joinedDate: '2026-11-01'
    };
  });

  const [showGoogleAuthModal, setShowGoogleAuthModal] = useState(false);

  const [trialState, setTrialState] = useState<TrialState>({
    active: true,
    plan: 'PRO',
    daysRemaining: 6,
    startDate: '2026-11-01',
    expiresDate: '2026-11-08'
  });

  const handleSwitchUser = (newUser: GoogleUserProfile) => {
    setCurrentUser(newUser);
    try {
      localStorage.setItem('sam_google_user', JSON.stringify(newUser));
    } catch {
      // Fallback
    }
  };

  const handleSafeNavigate = (tab: NavigationTab) => {
    const isAdmin = currentUser.isAdmin || currentUser.email === 'gxqstudio@gmail.com';
    // Strict isolation guard: Only gxqstudio@gmail.com can access admin functions
    if ((tab === 'admin-console' || tab === 'fraud-detection' || tab === 'dashboard-admin') && !isAdmin) {
      setActiveTab('dashboard-admin'); // renders strict security isolation screen
      return;
    }
    setActiveTab(tab);
  };

  const handleStartTrial = (plan: 'PRO' | 'ELITE') => {
    setTrialState({
      active: true,
      plan: plan,
      daysRemaining: 7,
      startDate: new Date().toISOString().split('T')[0],
      expiresDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0]
    });
    setFinancials(prev => ({
      ...prev,
      subscriptionPlan: plan,
      trialActive: true,
      trialDaysRemaining: 7
    }));
    setActiveTab('onboarding');
  };

  const handleActivatePlan = (plan: 'FREE' | 'PRO' | 'ELITE' | 'ENTERPRISE', isTrial: boolean) => {
    setTrialState({
      active: isTrial,
      plan: plan === 'FREE' ? 'PRO' : plan,
      daysRemaining: isTrial ? 7 : 0,
      startDate: new Date().toISOString().split('T')[0],
      expiresDate: isTrial ? new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0] : '2027-11-05'
    });
    setFinancials(prev => ({
      ...prev,
      subscriptionPlan: plan,
      trialActive: isTrial,
      trialDaysRemaining: isTrial ? 7 : 0
    }));
    setActiveTab('command-center');
  };

  const handleLaunchCampaignFromProduct = (_productName: string) => {
    setActiveTab('ai-assistant');
  };

  const isRtl = currentLocale === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#050714] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Cyber futuristic multi-color ambient glow spotlights in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Purple top-left aura */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px]" />
        {/* Orange top-right aura */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-orange-500/12 rounded-full blur-[130px]" />
        {/* Emerald center aura */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px]" />
        {/* Yellow bottom-right aura */}
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px]" />
        {/* Red bottom-left aura */}
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Top Header with Google Profile & Dashboards */}
      <Header
        activeTab={activeTab}
        onNavigate={handleSafeNavigate}
        onOpenNewLink={() => handleSafeNavigate('link-intelligence')}
        onOpenAiTask={() => handleSafeNavigate('ai-assistant')}
        workspaceMode={workspaceMode}
        onWorkspaceModeChange={setWorkspaceMode}
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        currentUser={currentUser}
        onOpenGoogleAuth={() => setShowGoogleAuthModal(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Core Body Container */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto relative z-10">
        {/* Sidebar Navigation with Role Dashboards & Persistent Mobile Bottom Tabs */}
        <Navigation
          activeTab={activeTab}
          onTabChange={handleSafeNavigate}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          workspaceMode={workspaceMode}
          currentUser={currentUser}
          onOpenGoogleAuth={() => setShowGoogleAuthModal(true)}
        />

        {/* Primary Main Viewport (pb-28 on mobile for persistent bottom tab bar) */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-28 lg:pb-8 overflow-y-auto">
          {/* 4 DEDICATED ROLE DASHBOARDS */}
          {activeTab === 'dashboard-marketing' && (
            <MarketingDashboard
              onNavigate={handleSafeNavigate}
              financials={financials}
              currentUser={currentUser}
            />
          )}

          {activeTab === 'dashboard-affiliate' && (
            <AffiliateMarketerDashboard
              onNavigate={handleSafeNavigate}
              financials={financials}
              currentUser={currentUser}
            />
          )}

          {activeTab === 'dashboard-dev' && (
            <DevDashboard
              onNavigate={handleSafeNavigate}
              currentUser={currentUser}
            />
          )}

          {activeTab === 'dashboard-admin' && (
            <AdminDashboard
              onNavigate={handleSafeNavigate}
              currentUser={currentUser}
            />
          )}

          {/* Operational Workspace Tabs */}
          {activeTab === 'command-center' && (
            <CommandCenter
              financials={financials}
              onNavigate={handleSafeNavigate}
            />
          )}

          {activeTab === 'ai-assistant' && (
            <ConversationalAI />
          )}

          {activeTab === 'marketplace' && (
            <PartnerMarketplace />
          )}

          {activeTab === 'link-intelligence' && (
            <LinkIntelligence />
          )}

          {activeTab === 'product-discovery' && (
            <ProductDiscovery
              onLaunchCampaignForProduct={handleLaunchCampaignFromProduct}
            />
          )}

          {activeTab === 'website-factory' && (
            <WebsiteFactory />
          )}

          {activeTab === 'asset-generator' && (
            <CreativeAssetGenerator />
          )}

          {activeTab === 'social-studio' && (
            <SocialStudio />
          )}

          {activeTab === 'campaigns' && (
            <CampaignDistribution />
          )}

          {activeTab === 'agent-registry' && (
            <AgentRegistry />
          )}

          {activeTab === 'attachments' && (
            <AttachmentVault />
          )}

          {activeTab === 'admin-console' && (
            <AdminConsole />
          )}

          {/* V1.2.0 Growth & Commerce Engine Views */}
          {activeTab === 'affiliate-portal' && (
            <AffiliatePortal
              onNavigate={handleSafeNavigate}
              affiliate={registeredAffiliate}
            />
          )}

          {activeTab === 'affiliate-register' && (
            <AffiliateRegistration
              onNavigate={handleSafeNavigate}
              onRegistered={(aff) => {
                setRegisteredAffiliate(aff);
                setActiveTab('affiliate-portal');
              }}
            />
          )}

          {activeTab === 'mlm-commissions' && (
            <MlmCommissionEngine />
          )}

          {activeTab === 'ecommerce-hub' && (
            <EcommerceHub />
          )}

          {activeTab === 'wordpress-embeds' && (
            <WordPressEmbeds />
          )}

          {activeTab === 'payout-center' && (
            <PayoutCenter />
          )}

          {activeTab === 'fraud-detection' && (
            <FraudDetectionCenter />
          )}

          {activeTab === 'casino-affiliates' && (
            <CasinoAffiliateModule />
          )}

          {/* Public Sales & Commercial Portals */}
          {activeTab === 'public-home' && (
            <PublicLandingPage
              onNavigate={handleSafeNavigate}
              onStartTrial={handleStartTrial}
            />
          )}

          {activeTab === 'public-pricing' && (
            <PublicPricing
              onNavigate={handleSafeNavigate}
              onActivatePlan={handleActivatePlan}
              currentPlan={financials.subscriptionPlan}
            />
          )}

          {activeTab === 'onboarding' && (
            <OnboardingWizard
              onComplete={() => setActiveTab('command-center')}
              onSkip={() => setActiveTab('command-center')}
              onNavigate={handleSafeNavigate}
            />
          )}

          {activeTab === 'user-guides' && (
            <InteractiveUserGuide
              onNavigate={handleSafeNavigate}
            />
          )}

          {activeTab === 'developers' && (
            <DeveloperDocumentation />
          )}

          {activeTab === 'funnel-analytics' && (
            <FunnelAnalytics />
          )}

          {activeTab === 'legal-trust' && (
            <LegalTrustPages
              onNavigate={handleSafeNavigate}
            />
          )}

          {/* V1.4.0 Ultimate Enterprise Suite */}
          {activeTab === 'enterprise-org' && (
            <EnterpriseOrgManager onNavigate={handleSafeNavigate} />
          )}

          {activeTab === 'white-label' && (
            <WhiteLabelPortal />
          )}

          {activeTab === 'agency-reseller' && (
            <AgencyResellerHub />
          )}

          {activeTab === 'automation-engine' && (
            <AutomationEngine />
          )}

          {activeTab === 'security-compliance' && (
            <SecurityComplianceCenter />
          )}

          {/* V1.5.0 Global Intelligence & Autonomous Ecosystem */}
          {activeTab === 'global-intelligence' && (
            <GlobalIntelligenceEngine />
          )}

          {activeTab === 'campaign-optimizer' && (
            <CampaignOptimizer />
          )}

          {activeTab === 'partner-federation' && (
            <PartnerFederationCenter />
          )}

          {activeTab === 'fraud-investigation' && (
            <FraudInvestigationCenter />
          )}

          {activeTab === 'enterprise-bi' && (
            <EnterpriseBiDashboard />
          )}

          {activeTab === 'localization-hub' && (
            <LocalizationHub />
          )}

          {activeTab === 'ai-agent-control' && (
            <AiAgentControlCenter />
          )}

          {activeTab === 'extension-marketplace' && (
            <ExtensionMarketplace />
          )}

          {activeTab === 'system-reliability' && (
            <SystemReliabilityOps />
          )}
        </main>
      </div>

      {/* Google Single Sign-On & Profile Modal */}
      <GoogleAuthModal
        isOpen={showGoogleAuthModal}
        onClose={() => setShowGoogleAuthModal(false)}
        currentUser={currentUser}
        onSignIn={handleSwitchUser}
        onNavigate={handleSafeNavigate}
      />
    </div>
  );
}
