import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Store,
  Link2,
  Bot,
  Globe,
  Share2,
  BarChart3,
  ShieldCheck,
  Zap,
  ChevronRight,
  Smartphone,
  Gift,
  Lock,
  Layers,
  SlidersHorizontal,
  BookmarkCheck
} from 'lucide-react';
import { NavigationTab } from '../types';
import { AFFILIATE_NETWORK_REGISTRY, AffiliateNetworkRegistryItem } from './AffiliateRegistration';

interface InteractiveUserGuideProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const InteractiveUserGuide: React.FC<InteractiveUserGuideProps> = ({ 
  onNavigate 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticleId, setActiveArticleId] = useState<string | null>('guide-connecting-networks');
  const [selectedNetworkId, setSelectedNetworkId] = useState<string>('impact');

  const categories = [
    'All',
    'Connecting Networks',
    'Getting Started',
    'Affiliate Partners',
    'Link Management',
    'AI Marketing',
    'Social Media',
    'Analytics & Revenue',
    'Enterprise & Security'
  ];

  const selectedNetwork = AFFILIATE_NETWORK_REGISTRY.find(n => n.id === selectedNetworkId) || AFFILIATE_NETWORK_REGISTRY[0];

  const articles = [
    {
      id: 'guide-connecting-networks',
      category: 'Connecting Networks',
      title: 'Connecting Networks: 22+ Major Programs Visual Guide & Account Verification',
      summary: 'Complete interactive walkthrough for registering and verifying accounts across 26 major affiliate networks, mobile app ecosystems, and free trial bounties.',
      moduleTarget: 'affiliate-register' as NavigationTab,
      moduleLabel: 'Open Registration Hub',
      isInteractiveNetworkGuide: true,
      steps: [
        'Select any affiliate network from the 22+ program selector below.',
        'Review the prerequisite documents (W-9 / W-8BEN, verified domain, or mobile app).',
        'Click the official direct "Register Now" outbound link to submit your publisher application.',
        'Once approved, locate your Publisher ID or Token in that network dashboard.',
        'Bind your ID in the Affiliate Registration Hub to activate automated deep link generation.'
      ],
      tips: 'All links are 100% verified production portals. Account approval times vary from instant (Amazon, ClickBank, Travelpayouts) to 48-72 hours (Apple, Shopify, CJ).'
    },
    {
      id: 'guide-1',
      category: 'Getting Started',
      title: 'How to Launch Your First Autonomous Campaign in 5 Minutes',
      summary: 'Learn the end-to-end workflow from selecting a niche to generating landing pages and tracking attributable links.',
      moduleTarget: 'ai-assistant' as NavigationTab,
      moduleLabel: 'Open AI Orchestrator',
      steps: [
        'Open the AI Assistant from the main navigation.',
        'Enter a simple prompt like: "I want to promote AI software and website hosting."',
        'Review the 18-step execution roadmap as the 30-agent swarm selects verified programs.',
        'Copy your generated landing page code or export your multi-channel viral pack.',
        'Check the Command Center for real-time attributable clicks and pending conversions.'
      ],
      tips: 'You can attach PDF contract agreements or term sheets to the chat composer to extract exact commission schedules.'
    },
    {
      id: 'guide-2',
      category: 'Affiliate Partners',
      title: 'Connecting 26+ Major Networks, Mobile Apps & Free Trial Bounties',
      summary: 'How to register via official portals, locate your Publisher ID, and bind it to your profile for automatic deep-link generation.',
      moduleTarget: 'marketplace' as NavigationTab,
      moduleLabel: 'Open Partner Marketplace',
      steps: [
        'Open the Affiliate Partner Marketplace to explore 26 verified networks.',
        'Filter by "Mobile Apps & CPI" for Apple, Google Play, AppsFlyer, AppLovin, or "Free Trial Bounties" for Shopify, Semrush, Canva, and HubSpot.',
        'Click "View Step-by-Step Directions" on any card to read specific approval prerequisites (media property, tax forms, traffic guidelines).',
        'Click "Register" to launch the official direct registration portal in a new tab.',
        'Once approved, click "Bind ID" on the card, paste your Publisher ID / Tag, and save directly to your profile.',
        'All campaign links and marketing redirects will immediately append your approved tag.'
      ],
      tips: 'All registration and login links are 100% official production endpoints. For detailed step-by-step instructions on all 26 networks, refer to /docs/MAJOR_AFFILIATE_PROVIDERS_DIRECTORY.md.'
    },
    {
      id: 'guide-3',
      category: 'Link Management',
      title: 'Creating Short Links (`aff.ai/go/*`) with Bot Protection',
      summary: 'How our proprietary 302/307 redirect engine preserves merchant tracking parameters while blocking crawlers.',
      moduleTarget: 'link-intelligence' as NavigationTab,
      moduleLabel: 'Open Link Intelligence',
      steps: [
        'Open Link Intelligence and click "Create Short Link".',
        'Paste your approved merchant referral URL (e.g. from PartnerStack or Impact).',
        'Define a custom memorable slug (e.g. `aff.ai/go/jasper-pro`).',
        'Configure channel UTM tags (e.g., `utm_source=tiktok`, `utm_medium=bio_link`).',
        'Test the redirect health using the Latency Probe button.'
      ],
      tips: 'All redirects are protected against open-redirect vulnerabilities and only resolve to approved, pre-registered merchant destinations.'
    },
    {
      id: 'guide-4',
      category: 'AI Marketing',
      title: 'Building High-Converting Comparison Landing Pages',
      summary: 'How to use the visual Website & Landing Page Studio to generate responsive pages with injected affiliate links.',
      moduleTarget: 'website-factory' as NavigationTab,
      moduleLabel: 'Open Website Factory',
      steps: [
        'Open Website & Landing Page Studio.',
        'Select a template: Modern Cyber AI SaaS, Hosting Showdown, or Lead Magnet.',
        'Customize headlines, primary CTA buttons, and injected referral links.',
        'Preview in Desktop (1440px) or Mobile (390px) viewports.',
        'Export production-ready React + Tailwind CSS code with one click.'
      ],
      tips: 'All generated landers automatically include compliant FTC legal disclosures in the footer.'
    },
    {
      id: 'guide-5',
      category: 'Social Media',
      title: 'Publishing Viral Short-Form Scripts with FTC Disclosures',
      summary: 'Drafting TikTok, YouTube Shorts, and Instagram scripts formatted for high retention and advertising compliance.',
      moduleTarget: 'social-studio' as NavigationTab,
      moduleLabel: 'Open Marketing Studio',
      steps: [
        'Open Multi-Channel Social Studio.',
        'Select your platform: TikTok, YouTube, Instagram, or LinkedIn.',
        'Generate hook variations, body value points, and affiliate call-to-actions.',
        'Review the automated compliance badge verifying affirmative `#ad` or `[Affiliate Link]` disclosures.',
        'Add to the dispatch queue or copy directly to your clipboard.'
      ],
      tips: 'Direct publishing through official APIs is supported where platform credentials are provided; downloadable assets are always available.'
    },
    {
      id: 'guide-6',
      category: 'Analytics & Revenue',
      title: 'Understanding the 6-Stage Financial Reporting Standard',
      summary: 'Why Super Affiliate Manager AI never classifies clicks or unconfirmed leads as revenue.',
      moduleTarget: 'command-center' as NavigationTab,
      moduleLabel: 'Open Command Center',
      steps: [
        'Stage 1 (Estimated): Funnel yield projection based on historical conversion velocity.',
        'Stage 2 (Reported): Raw postback conversion events recorded from networks.',
        'Stage 3 (Pending): Commissions held during the merchant 30-60 day lock-in window.',
        'Stage 4 (Approved): Merchant-verified earnings ready for disbursement.',
        'Stage 5 (Reversed): Deducted customer refunds or clawbacks.',
        'Stage 6 (Paid Out): Confirmed funds disbursed to your bank or crypto account.'
      ],
      tips: 'Filter by Today, 7 Days, 30 Days, or 90 Days to audit commission locking schedules.'
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.steps.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const selectedArticle = articles.find(a => a.id === activeArticleId) || articles[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                KNOWLEDGE BASE & INTERACTIVE GUIDES
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                22+ NETWORKS MAPPED
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              User Guides, Connecting Networks & Walkthroughs
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Visual, step-by-step guides for connecting 22+ major affiliate networks, launching autonomous marketing swarms, and managing compliance.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, networks..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-purple-500/50"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 p-2 rounded-2xl flash-glow-card border border-white/10 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              if (cat === 'Connecting Networks') {
                setActiveArticleId('guide-connecting-networks');
              }
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Split: Left Article List (5 cols) / Right Active Reader (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Guides List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredArticles.map((art) => {
            const isActive = art.id === selectedArticle.id;
            return (
              <div
                key={art.id}
                onClick={() => setActiveArticleId(art.id)}
                className={`p-4 rounded-3xl flash-glow-card border transition-all cursor-pointer space-y-1.5 ${
                  isActive
                    ? 'border-purple-500/80 bg-purple-950/25 shadow-[0_0_20px_rgba(168,85,247,0.3)] glow-purple'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-purple-300 font-bold uppercase">{art.category}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-purple-300' : 'text-slate-500'}`} />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {art.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Guide Reader */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl flash-glow-card border border-white/15 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                  {selectedArticle.category}
                </span>
                {selectedArticle.isInteractiveNetworkGuide && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                    22+ PROGRAMS INTERACTIVE
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {selectedArticle.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedArticle.summary}
              </p>
            </div>

            {/* If Connecting Networks interactive guide is active, render the visual 22+ program selector & walkthrough */}
            {selectedArticle.isInteractiveNetworkGuide ? (
              <div className="space-y-6 pt-2 border-t border-white/10">
                {/* 22+ Network Quick Selector Strip */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-purple-400" />
                      Select Network to View Step-by-Step Instructions:
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {AFFILIATE_NETWORK_REGISTRY.length} Programs Mapped
                    </span>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {AFFILIATE_NETWORK_REGISTRY.map((net) => {
                      const isSelected = net.id === selectedNetwork.id;
                      return (
                        <button
                          key={net.id}
                          onClick={() => setSelectedNetworkId(net.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                            isSelected
                              ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)] border border-purple-400'
                              : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:bg-white/[0.08]'
                          }`}
                        >
                          <span>{net.name}</span>
                          {net.mobileAppStores && <span className="text-[10px]">📱</span>}
                          {net.freeTrialBounty && <span className="text-[10px]">🎁</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Network Visual Walkthrough Card */}
                <div className="p-5 rounded-3xl bg-black/40 border border-purple-500/30 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div>
                      <h3 className="text-lg font-black text-white flex items-center gap-2">
                        <span>{selectedNetwork.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {selectedNetwork.connectionStatus}
                        </span>
                      </h3>
                      <p className="text-xs text-purple-300">{selectedNetwork.category}</p>
                    </div>

                    <a
                      href={selectedNetwork.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <span>Register Now (Official Portal)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Summary Snippet */}
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-mono text-[11px] uppercase">Official Summary:</strong>
                      <span>{selectedNetwork.instructionSnippet}</span>
                    </div>
                  </div>

                  {/* Step by step checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Account Registration & Verification Steps:
                    </span>
                    {selectedNetwork.fullSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-200">
                        <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-mono font-bold flex items-center justify-center shrink-0 border border-purple-500/30 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prerequisites & Verification Note */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Required Documents:</span>
                      <span className="font-semibold text-white block mt-0.5">{selectedNetwork.requiredDocuments.join(', ')}</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Approval Timeline:</span>
                      <span className="font-semibold text-emerald-400 block mt-0.5">{selectedNetwork.approvalTimeline}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">Ready to bind your account?</span>
                    <button
                      onClick={() => onNavigate('affiliate-register')}
                      className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-purple-300 font-semibold border border-purple-500/30 transition-colors flex items-center gap-1"
                    >
                      <span>Open Binding Console</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Standard guide step list */
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  Action Checklist:
                </span>
                {selectedArticle.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-mono font-bold flex items-center justify-center shrink-0 border border-purple-500/30 text-[10px]">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{st}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Pro Tips Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/20 to-blue-950/20 border border-purple-500/30 space-y-1 text-xs">
              <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider block">
                Enterprise Best Practice:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {selectedArticle.tips}
              </p>
            </div>

            {/* Bottom Action Jump */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-slate-400">
                Interactive module ready for dispatch.
              </span>
              <button
                onClick={() => onNavigate(selectedArticle.moduleTarget)}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{selectedArticle.moduleLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
