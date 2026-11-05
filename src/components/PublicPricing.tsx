import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Layers, 
  Lock,
  ChevronDown
} from 'lucide-react';
import { NavigationTab } from '../types';

interface PublicPricingProps {
  onNavigate: (tab: NavigationTab) => void;
  onActivatePlan: (plan: 'FREE' | 'PRO' | 'ELITE' | 'ENTERPRISE', isTrial: boolean) => void;
  currentPlan: 'FREE' | 'PRO' | 'ELITE' | 'ENTERPRISE';
}

export const PublicPricing: React.FC<PublicPricingProps> = ({ 
  onNavigate, 
  onActivatePlan, 
  currentPlan 
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showFaqIndex, setShowFaqIndex] = useState<number | null>(null);

  const plans = [
    {
      id: 'FREE' as const,
      name: 'Free',
      monthlyPrice: 0,
      annualPricePerMonth: 0,
      tagline: 'For beginners exploring affiliate marketing fundamentals.',
      badge: 'COMMUNITY',
      trialDays: 0,
      features: [
        'Up to 5 affiliate links',
        '1 connected network or manual import',
        'Standard 302 redirect tracking',
        'Partner Marketplace directory access',
        '100 monthly AI task tokens',
        '1 active marketing campaign',
        '500 MB secure attachment vault',
        'Community documentation support'
      ],
      ctaText: 'GET STARTED FREE'
    },
    {
      id: 'PRO' as const,
      name: 'Pro',
      monthlyPrice: 29,
      annualPricePerMonth: 24, // $288 billed annually (2 months free savings)
      tagline: 'For individual affiliate marketers launching active campaigns.',
      badge: 'POPULAR FOR CREATORS',
      trialDays: 7,
      features: [
        'Up to 50 affiliate links',
        'Connect up to 5 affiliate networks',
        'Autonomous Landing Page Studio',
        'AI Product Discovery & comparison',
        'Multi-channel script generator',
        '2,500 monthly AI task tokens',
        '10 active marketing campaigns',
        '5 GB encrypted attachment vault',
        'Standard email & help center support'
      ],
      ctaText: 'START 7-DAY PRO TRIAL'
    },
    {
      id: 'ELITE' as const,
      name: 'Elite',
      monthlyPrice: 79,
      annualPricePerMonth: 65, // $780 billed annually (2 months free savings)
      tagline: 'For serious affiliate marketers, media buyers, and creators.',
      badge: 'MOST POPULAR · ACTIVE CHOICE',
      popular: true,
      trialDays: 7,
      features: [
        'Up to 500 affiliate links',
        'All 15 Affiliate Networks supported',
        'All 30 Autonomous AI Agents active',
        'Multi-provider routing (Gemini + Claude + GPT)',
        'Parallel task execution & persistent memory',
        'Multi-Channel Social Studio & FTC auditing',
        '10,000 monthly AI task tokens',
        '50 active marketing campaigns',
        '50 GB encrypted attachment vault',
        'Priority execution queue & live analytics'
      ],
      ctaText: 'START 7-DAY ELITE TRIAL'
    },
    {
      id: 'ENTERPRISE' as const,
      name: 'Enterprise',
      monthlyPrice: 199,
      annualPricePerMonth: 165, // $1,980 billed annually (2 months free savings)
      tagline: 'For affiliate agencies, publisher desks, and organizations.',
      badge: 'UNLIMITED SCALE',
      trialDays: 7,
      features: [
        'Unlimited affiliate links & campaigns',
        'All 15 networks + custom API feeds',
        'Multi-tenant organization workspaces',
        'Fine-grained RBAC & role permissions',
        'Dedicated model execution quotas',
        'Unlimited attachment storage quota',
        'Twelve Production Acceptance Gates audit',
        'Custom gaming & compliance rules (PAGCOR/EU)',
        'Dedicated onboarding engineer & SLA'
      ],
      ctaText: 'START ENTERPRISE TRIAL'
    }
  ];

  return (
    <div className="space-y-12 pb-20 text-slate-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
          TRANSPARENT ENTERPRISE PRICING
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Simple, Predictable Plans for Every Affiliate Stage
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Start with a 7-day free trial on eligible paid tiers. Cancel anytime. All plans connect directly to your Single Source of Truth workspace.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 mt-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              2 MONTHS FREE
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
        {plans.map((plan) => {
          const isCurrent = plan.id === currentPlan;
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPricePerMonth;
          return (
            <div
              key={plan.id}
              className={`p-6 rounded-3xl flash-glow-card border transition-all flex flex-col justify-between space-y-6 ${
                plan.popular 
                  ? 'border-purple-500/80 bg-purple-950/20 shadow-[0_0_30px_rgba(168,85,247,0.35)] glow-purple' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{plan.name}</span>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/10 text-slate-300 border border-white/10">
                    {plan.badge}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-mono text-white">${price}</span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>
                  {billingCycle === 'annual' && plan.monthlyPrice > 0 && (
                    <div className="text-[11px] text-emerald-400 mt-1 font-mono">
                      Billed annually (${plan.annualPricePerMonth * 12}/yr) · Save ${(plan.monthlyPrice - plan.annualPricePerMonth) * 12}
                    </div>
                  )}
                  <p className="text-xs text-slate-300 mt-2 min-h-[34px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    What's included:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onActivatePlan(plan.id, plan.trialDays > 0)}
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:brightness-110'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15'
                  }`}
                >
                  {isCurrent ? 'Current Plan' : plan.ctaText}
                </button>
                {plan.trialDays > 0 && !isCurrent && (
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    7 days free · No unexpected fees · Cancel anytime
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature & Limits Breakdown Table */}
      <div className="max-w-5xl mx-auto px-4 space-y-4 pt-8">
        <h3 className="text-xl font-bold text-white text-center">
          Comprehensive Entitlements & Usage Allowances
        </h3>
        <div className="flash-glow-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-mono uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Feature / Resource</th>
                  <th className="py-3 px-4">Free ($0)</th>
                  <th className="py-3 px-4">Pro ($29)</th>
                  <th className="py-3 px-4 text-purple-300 font-bold">Elite ($79)</th>
                  <th className="py-3 px-4 text-orange-300 font-bold">Enterprise ($199)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 font-mono text-xs">
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Monthly AI Requests</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4">2,500</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">10,000</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Autonomous Agent Swarm</td>
                  <td className="py-3 px-4">Supervisor only</td>
                  <td className="py-3 px-4">10 Agents</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">All 30 Agents</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">All 30 + Custom Agents</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Active Marketing Campaigns</td>
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">50</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Affiliate Links Managed</td>
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">500</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Attachment Storage</td>
                  <td className="py-3 px-4">500 MB</td>
                  <td className="py-3 px-4">5 GB</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">50 GB</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">Unlimited (Quota free)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-semibold text-white">Team Collaboration</td>
                  <td className="py-3 px-4">1 User</td>
                  <td className="py-3 px-4">1 User</td>
                  <td className="py-3 px-4 text-purple-300 font-bold">3 Seats</td>
                  <td className="py-3 px-4 text-orange-300 font-bold">Unlimited Seats + RBAC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="max-w-3xl mx-auto px-4 space-y-3 pt-6">
        <h3 className="text-xl font-bold text-white text-center mb-4">Frequently Asked Questions</h3>
        {[
          { q: 'How does the 7-day free trial work?', a: 'You get full access to all features of your selected plan for 7 days. If you do not wish to continue, cancel anytime in Settings with a single click before the trial ends.' },
          { q: 'Do I need my own affiliate network accounts?', a: 'Yes. You maintain full ownership of your accounts with Impact, PartnerStack, CJ, Amazon, and other networks. Super Affiliate Manager AI connects to them or allows manual link import.' },
          { q: 'Can I upgrade or downgrade at any time?', a: 'Yes. Changes take effect immediately. Upgrades are prorated, and downgrades apply at the end of your billing cycle.' }
        ].map((faq, idx) => (
          <div key={idx} className="p-4 rounded-2xl flash-glow-card border border-white/10">
            <button
              onClick={() => setShowFaqIndex(showFaqIndex === idx ? null : idx)}
              className="w-full text-left font-bold text-sm text-white flex items-center justify-between cursor-pointer"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFaqIndex === idx ? 'rotate-180 text-purple-400' : 'text-slate-400'}`} />
            </button>
            {showFaqIndex === idx && (
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
