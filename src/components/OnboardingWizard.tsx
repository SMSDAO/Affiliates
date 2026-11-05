import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Globe, 
  Share2, 
  Link2, 
  Layers, 
  Check, 
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { NavigationTab } from '../types';

interface OnboardingWizardProps {
  onComplete: () => void;
  onSkip: () => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ 
  onComplete, 
  onSkip, 
  onNavigate 
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // User selections
  const [goal, setGoal] = useState('Promote SaaS and AI software');
  const [experience, setExperience] = useState('Intermediate');
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['TikTok', 'YouTube', 'Websites and blogs']);
  const [sampleLink, setSampleLink] = useState('');
  const [campaignFocus, setCampaignFocus] = useState('Generate High-Converting Landing Page');
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const totalSteps = 6;

  const toggleChannel = (channel: string) => {
    setSelectedChannels(prev => 
      prev.includes(channel) ? prev.filter(c => c !== channel) : [...prev, channel]
    );
  };

  const handleNextStep = () => {
    if (currentStep === 5) {
      setIsSynthesizing(true);
      setTimeout(() => {
        setIsSynthesizing(false);
        setCurrentStep(6);
      }, 1500);
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Top Progress & Skip Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-mono text-purple-400 font-bold">
            STEP {currentStep} OF {totalSteps}
          </span>
          <span className="text-slate-600">·</span>
          <span>Guided Workspace Setup</span>
        </div>
        <button
          onClick={onSkip}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          Skip Setup (Explore Dashboard)
        </button>
      </div>

      {/* Visual Progress Bar */}
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <div 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          className="bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-400 h-full transition-all duration-300"
        />
      </div>

      {/* Main Wizard Card */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi space-y-6">
        {/* Step 1: Goal */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-mono text-purple-400 uppercase font-semibold">
                STEP 1: PRIMARY MARKETING OBJECTIVE
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                What is your main affiliate marketing goal?
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                This configures your default AI agent priorities, product catalogs, and dashboard layout.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Promote SaaS and AI software',
                'Promote hosting and domains',
                'Create affiliate websites & blogs',
                'Build viral short-form social campaigns',
                'Promote physical & ecommerce products',
                'Manage an existing multi-network portfolio',
                'Explore licensed gaming affiliate opportunities'
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setGoal(opt)}
                  className={`p-4 rounded-2xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                    goal === opt
                      ? 'bg-purple-600/30 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {goal === opt && <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Experience */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-mono text-orange-400 uppercase font-semibold">
                STEP 2: EXPERIENCE LEVEL
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                What is your affiliate marketing experience?
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                We adjust the AI assistance level and dashboard complexity to match your skills.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Beginner', desc: 'New to affiliate marketing; want step-by-step guidance and pre-built templates.' },
                { title: 'Intermediate', desc: 'Already registered on 1-2 networks; looking to scale content and traffic.' },
                { title: 'Professional', desc: 'Generating steady monthly commissions; want multi-channel automation and deep tracking.' },
                { title: 'Agency / Enterprise', desc: 'Managing teams, multiple clients, or enterprise brand publisher accounts.' }
              ].map((lvl) => (
                <button
                  key={lvl.title}
                  onClick={() => setExperience(lvl.title)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    experience === lvl.title
                      ? 'bg-orange-600/20 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{lvl.title}</span>
                    {experience === lvl.title && <CheckCircle2 className="w-4 h-4 text-orange-400" />}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{lvl.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Channels */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                STEP 3: MARKETING CHANNELS
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Where do you plan to promote?
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Select all channels you want the AI Marketing Studio to prepare content for.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'TikTok',
                'YouTube',
                'Instagram',
                'LinkedIn',
                'Facebook',
                'Websites and blogs',
                'Email newsletters',
                'Pinterest',
                'X (Twitter)'
              ].map((channel) => {
                const isSelected = selectedChannels.includes(channel);
                return (
                  <button
                    key={channel}
                    onClick={() => toggleChannel(channel)}
                    className={`p-3.5 rounded-2xl text-left border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{channel}</span>
                    {isSelected ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <div className="w-3.5 h-3.5 rounded-md border border-slate-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: First Link */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-mono text-blue-400 uppercase font-semibold">
                STEP 4: AFFILIATE NETWORK OR LINK
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Connect an account or paste an approved link
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                You can paste an existing tracking link right now, or explore our 15-network Partner Marketplace later.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Existing Affiliate Referral URL (Optional)
                </label>
                <input
                  type="url"
                  value={sampleLink}
                  onChange={(e) => setSampleLink(e.target.value)}
                  placeholder="https://jasper.ai?fpr=your_affiliate_id or https://hostinger.com?ref=..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500/50"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs text-slate-400">
                <span className="text-slate-300 font-semibold block">Don't have an affiliate link yet?</span>
                <p>No problem! In the next step, our AI will recommend top beginner-friendly partner programs on Impact and PartnerStack with instant sign-up portals.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Initial Action */}
        {currentStep === 5 && (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-mono text-yellow-400 uppercase font-semibold">
                STEP 5: INITIAL LAUNCH FOCUS
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                What should AI build for you first?
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Select your first automated asset output.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Generate High-Converting Landing Page', desc: 'Build a responsive comparison & review page with real tracking links.' },
                { title: 'Create TikTok & Short Video Script Package', desc: 'Hook, 30s body script, hashtags, and FTC-compliant disclosure tags.' },
                { title: 'Discover Top 5 High-Paying Affiliate Programs', desc: 'Curate programs matching your niche with 30%+ recurring revshare.' },
                { title: 'Full Multi-Channel Launch Package', desc: 'Landing page + 3 social scripts + 16:9 banner + short link.' }
              ].map((opt) => (
                <button
                  key={opt.title}
                  onClick={() => setCampaignFocus(opt.title)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    campaignFocus === opt.title
                      ? 'bg-yellow-500/20 border-yellow-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.title}</span>
                    {campaignFocus === opt.title && <CheckCircle2 className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Workspace Configured Screen */}
        {currentStep === 6 && (
          <div className="space-y-5 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-orange-500 to-yellow-400 p-[2px] mx-auto shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <div className="w-full h-full rounded-full bg-[#0a0f26] flex items-center justify-center">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">
                Workspace Successfully Configured!
              </h2>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Based on your selections ({goal} · {experience}), our 30-agent AI swarm has pre-configured your marketing dashboard and recommended programs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Target Niche:</span>
                <span className="font-semibold text-white">{goal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Marketing Channels:</span>
                <span className="font-mono text-purple-300">{selectedChannels.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">First Action:</span>
                <span className="font-semibold text-orange-300">{campaignFocus}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          {currentStep > 1 && currentStep < 6 ? (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNextStep}
            disabled={isSynthesizing}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer flex items-center gap-1.5"
          >
            {isSynthesizing ? (
              <span>Synthesizing Workspace...</span>
            ) : currentStep === 6 ? (
              <span>Launch My Workspace →</span>
            ) : (
              <>
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
