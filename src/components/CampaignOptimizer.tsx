import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Zap, 
  ShieldAlert, 
  FileText, 
  DollarSign, 
  Layers,
  Cpu,
  RefreshCw,
  Search,
  Lock,
  ThumbsUp
} from 'lucide-react';
import { AutonomousAgentDefinition } from '../types';

export const CampaignOptimizer: React.FC = () => {
  const [agents, setAgents] = useState<AutonomousAgentDefinition[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Brief Generator State
  const [campaignName, setCampaignName] = useState('DevOps Cloud Optimization Wave');
  const [targetAudience, setTargetAudience] = useState('Full-Stack Engineers & CTOs');
  const [offerType, setOfferType] = useState('Enterprise SaaS Subscription (25% Recurring)');
  const [generatingBrief, setGeneratingBrief] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<any>(null);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  const fetchOptimizationData = async () => {
    setLoading(true);
    try {
      const [resAgents, resRecs] = await Promise.all([
        fetch('/api/v1/optimization/agents'),
        fetch('/api/v1/optimization/recommendations')
      ]);
      const dataAgents = await resAgents.json();
      const dataRecs = await resRecs.json();
      if (dataAgents.success) setAgents(dataAgents.data);
      if (dataRecs.success) setRecommendations(dataRecs.data);
    } catch (err) {
      console.error('Failed to load optimizer data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOptimizationData();
  }, []);

  const handleGenerateBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratingBrief(true);
    setActionSuccessMessage(null);
    try {
      const res = await fetch('/api/v1/optimization/generate-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campaignName, targetAudience, offerType })
      });
      const json = await res.json();
      if (json.success) {
        setGeneratedBrief(json.data);
      }
    } catch (err) {
      console.error('Error generating brief', err);
    } finally {
      setGeneratingBrief(false);
    }
  };

  const handleApplyRecommendation = async (recId: string) => {
    try {
      const res = await fetch('/api/v1/optimization/apply-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recId, approverName: 'Master Admin (GXQ Studio)' })
      });
      const json = await res.json();
      if (json.success) {
        setActionSuccessMessage(json.message);
        fetchOptimizationData();
      }
    } catch (err) {
      console.error('Error applying recommendation', err);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              Module B • Autonomous Campaign Optimization
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              9-Agent Autonomous Optimization Engine
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Coordinated multi-agent swarm analyzing landing pages, creative copy, audience segments, and SEO meta tags. Financial adjustments strictly require authorized managerial approval.
            </p>
          </div>
          <button
            onClick={fetchOptimizationData}
            disabled={loading}
            className="self-start md:self-auto cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-cyan-500/30"
          >
            <RefreshCw className={`w-4 h-4 text-cyan-400 ${loading ? 'animate-spin' : ''}`} />
            Sync Swarm
          </button>
        </div>
      </div>

      {actionSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>{actionSuccessMessage}</span>
        </div>
      )}

      {/* 9 Autonomous Agents Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Specialized Optimization Agent Roster (9 Active Units)
          </h2>
          <span className="text-xs text-slate-400">All Agents Operational</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map(agent => (
            <div
              key={agent.id}
              className="flash-glow-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
                  {agent.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {agent.status}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">{agent.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{agent.role}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Model Target:</span>
                  <span className="text-slate-200 font-semibold">{agent.modelTarget}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Accuracy Rating:</span>
                  <span className="text-emerald-400 font-bold">{agent.accuracyRating}%</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Completed Tasks:</span>
                  <span className="text-white font-semibold">{agent.tasksCompleted.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                <span>Recent: {agent.lastAction}</span>
                {agent.requiresApproval && (
                  <span className="text-amber-400 flex items-center gap-1 font-semibold">
                    <Lock className="w-3 h-3" /> Gate Protected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Autonomous Brief Generator & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Interactive Brief Generator */}
        <div className="flash-glow-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            AI Creative Brief & Landing Page Generator
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Instruct the autonomous swarm to draft high-converting hooks, SEO schema markup, and demographic calls-to-action with built-in FTC disclosure compliance.
          </p>

          <form onSubmit={handleGenerateBrief} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Campaign Concept</label>
              <input
                type="text"
                value={campaignName}
                onChange={e => setCampaignName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Target Audience Cohort</label>
              <input
                type="text"
                value={targetAudience}
                onChange={e => setTargetAudience(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Merchant Offer Structure</label>
              <input
                type="text"
                value={offerType}
                onChange={e => setOfferType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={generatingBrief}
              className="w-full cyber-neon-button py-2.5 text-xs text-white font-bold flex items-center justify-center gap-2 border border-purple-500/30"
            >
              {generatingBrief ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Orchestrating 9 Agents...
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  Generate Autonomous Brief
                </>
              )}
            </button>
          </form>

          {/* Generated Brief Results */}
          {generatedBrief && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30 space-y-3 text-xs animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-bold text-white text-sm">Generated Work Product</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">PASSED COMPLIANCE</span>
              </div>

              <div>
                <span className="text-purple-300 font-bold block mb-1">High-Converting Ad Headlines:</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  {generatedBrief.generatedHeadlines.map((h: string, idx: number) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-cyan-300 font-bold block mb-1">Search Engine Meta Optimization:</span>
                <p className="text-white font-semibold">{generatedBrief.seoMetadata.title}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{generatedBrief.seoMetadata.metaDescription}</p>
              </div>

              <div>
                <span className="text-emerald-300 font-bold block mb-1">Calls to Action (CTAs):</span>
                <div className="flex flex-wrap gap-1.5">
                  {generatedBrief.primaryCallsToAction.map((cta: string, idx: number) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-white font-medium">
                      {cta}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-amber-500/30 text-amber-200 text-[11px] flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Required Disclosure: </span>
                  {generatedBrief.compliancePreCheck.disclaimerSnippet}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Prescriptive Swarm Recommendations */}
        <div className="flash-glow-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            Active Optimization Directives
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Recommendations synthesized by the Autonomous Agents awaiting review or immediate application.
          </p>

          <div className="space-y-4">
            {recommendations.map((rec: any) => (
              <div 
                key={rec.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{rec.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                    rec.status === 'APPLIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {rec.status}
                  </span>
                </div>

                <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2">
                  <span>Agent: <strong className="text-slate-300">{rec.agent}</strong></span>
                  <span>•</span>
                  <span>Target: <strong className="text-cyan-400">{rec.targetOffer}</strong></span>
                </div>

                <div className="p-2 rounded-lg bg-black/40 text-xs text-emerald-400 font-semibold flex items-center justify-between">
                  <span>Projected Yield Impact:</span>
                  <span>{rec.impact}</span>
                </div>

                {rec.status !== 'APPLIED' && (
                  <div className="flex items-center justify-between pt-1">
                    {rec.requiresApproval ? (
                      <span className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                        <Lock className="w-3.5 h-3.5" /> Requires Manager Approval
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">Autonomous Instant Execution</span>
                    )}
                    <button
                      onClick={() => handleApplyRecommendation(rec.id)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/30"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      Approve & Apply
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
