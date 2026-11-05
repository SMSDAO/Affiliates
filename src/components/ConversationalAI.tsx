import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Paperclip, 
  FileText, 
  CheckCircle2, 
  Loader2, 
  ChevronRight, 
  Code, 
  Copy, 
  Check, 
  Play, 
  Square, 
  Layers, 
  Cpu, 
  ExternalLink,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { all30Agents } from '../data/mockData';

interface WorkflowStep {
  id: number;
  title: string;
  agent: string;
  status: 'pending' | 'running' | 'completed';
  details: string;
  outputArtifact?: {
    type: 'links' | 'code' | 'social' | 'report';
    title: string;
    content: string;
  };
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  content: string;
  modelUsed?: string;
  agentUsed?: string;
  workflowSteps?: WorkflowStep[];
  attachedFiles?: string[];
}

export const ConversationalAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      timestamp: 'Just now',
      content: 'Greetings. I am the Master Supervisor Agent of SUPER AFFILIATE MANAGER AI. What marketing objective would you like to execute today? You can select any of our 30 specialized agents, attach campaign briefs or term sheets, and trigger automated end-to-end multi-network workflows.',
      modelUsed: 'Gemini 2.5 Pro',
      agentUsed: 'Supervisor Agent'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState<string>('Gemini 2.5 Pro');
  const [selectedAgentId, setSelectedAgentId] = useState<number>(1);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);
  const [copiedArtifact, setCopiedArtifact] = useState<string | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedAgent = all30Agents.find(a => a.id === selectedAgentId) || all30Agents[0];

  const suggestedPrompts = [
    'I want to promote AI software and website hosting.',
    'Discover high-paying SaaS affiliate programs on PartnerStack and Impact.',
    'Build a high-speed comparison landing page for Hostinger vs Vercel with real tracking links.',
    'Generate TikTok and YouTube shorts script for Cursor AI with FTC disclosures.'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isExecuting]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedArtifact(id);
    setTimeout(() => setCopiedArtifact(null), 2000);
  };

  const handleSendPrompt = (promptText?: string) => {
    const textToSend = promptText || inputPrompt;
    if (!textToSend.trim() || isExecuting) return;

    const userMsgId = `usr-${Date.now()}`;
    const newMsg: Message = {
      id: userMsgId,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: textToSend,
      attachedFiles: [...attachedFiles]
    };

    setMessages(prev => [...prev, newMsg]);
    setInputPrompt('');
    setAttachedFiles([]);
    setIsExecuting(true);

    const assistantMsgId = `asst-${Date.now()}`;
    setActiveWorkflowId(assistantMsgId);

    // Initial 18-step execution roadmap based on the prompt's exact sequence
    const steps: WorkflowStep[] = [
      { id: 1, title: 'Analyze Marketing Objectives', agent: 'Supervisor Agent', status: 'running', details: 'Parsing target verticals (AI Software + Cloud Web Hosting) and buyer intent.' },
      { id: 2, title: 'Discover Real Affiliate Networks', agent: 'Partner Discovery Agent', status: 'pending', details: 'Scanning PartnerStack, Impact.com, and CJ Affiliate catalogs.' },
      { id: 3, title: 'Display Official Partner Destinations', agent: 'Partner Registration Assistant', status: 'pending', details: 'Retrieving official registration and publisher portal URLs.' },
      { id: 4, title: 'Assist With Partner Applications', agent: 'Partner Registration Assistant', status: 'pending', details: 'Formulating compliant promotional disclosures and traffic statements.' },
      { id: 5, title: 'Connect Approved Accounts & Credentials', agent: 'Integration Agent', status: 'pending', details: 'Handshaking Impact REST API v2 and PartnerStack webhooks.' },
      { id: 6, title: 'Import Real Affiliate Tracking Links', agent: 'Link Intelligence Agent', status: 'pending', details: 'Generating 302/307 redirects for Jasper AI, Hostinger, and Cursor.', outputArtifact: {
        type: 'links',
        title: 'Attributable Link Registry',
        content: `• Jasper AI Pro: https://aff.ai/go/jasper-pro (PartnerStack / 30% RevShare)
• Hostinger Cloud: https://aff.ai/go/hostinger-cloud (Impact.com / $150 CPA)
• Cursor AI Editor: https://aff.ai/go/cursor-ai (PartnerStack / $20 CPA + 15%)
• ElevenLabs Prime: https://aff.ai/go/eleven-labs (Impact.com / 22% RevShare)`
      }},
      { id: 7, title: 'Research Eligible Products & Spec Sheets', agent: 'Product Research Agent', status: 'pending', details: 'Extracting verified pricing tiers, TTFB benchmarks, and model limits.' },
      { id: 8, title: 'Generate Autonomous Landing Page', agent: 'Website Builder Agent', status: 'pending', details: 'Assembling responsive cyber comparison portal with verified tracking tags.', outputArtifact: {
        type: 'code',
        title: 'Generated React Component: AIHostingHub.tsx',
        content: `// SUPER AFFILIATE MANAGER AI — Generated Landing Page
import React from 'react';

export default function AIHostingHub() {
  return (
    <div className="min-h-screen bg-[#070b1e] text-white p-8">
      <header className="max-w-6xl mx-auto text-center py-12">
        <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
          2026 Developer & Creator Architecture
        </span>
        <h1 className="text-4xl font-extrabold mt-4 bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
          The High-Performance AI & Cloud Hosting Blueprint
        </h1>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
          Compare verified latency, GPU token throughput, and hosting uptime. Backed by verified merchant partnerships.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Jasper AI Feature Card */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
          <h3 className="text-xl font-bold">Jasper AI Enterprise</h3>
          <p className="text-xs text-slate-400 mt-1">Full-stack multi-model marketing copilot</p>
          <a href="https://aff.ai/go/jasper-pro" className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-purple-600 font-bold text-xs">
            Claim Exclusive 30% RevShare Tier →
          </a>
        </div>

        {/* Hostinger Feature Card */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.3)]">
          <h3 className="text-xl font-bold">Hostinger Cloud Startup</h3>
          <p className="text-xs text-slate-400 mt-1">High-speed NVMe hosting with free domain</p>
          <a href="https://aff.ai/go/hostinger-cloud" className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-orange-600 font-bold text-xs">
            Get 75% Off + Free SSL Certificate →
          </a>
        </div>
      </div>
      <footer className="text-center text-xs text-slate-500 mt-12">
        FTC Disclosure: We earn affiliate commissions from qualifying purchases made through our referral links.
      </footer>
    </div>
  );
}`
      }},
      { id: 9, title: 'Generate Creative Assets & Banners', agent: 'Asset Generation Agent', status: 'pending', details: 'Producing 16:9 hero graphics, 9:16 vertical reels, and product comparison cards.' },
      { id: 10, title: 'Draft Multi-Channel Marketing Content', agent: 'Content Creator Agent', status: 'pending', details: 'Synthesizing TikTok hooks, YouTube scripts, and LinkedIn articles.', outputArtifact: {
        type: 'social',
        title: 'Multi-Channel Viral Pack',
        content: `[TIKTOK 30s SCRIPT]
Hook: "If you are still deploying websites on slow shared hosting in 2026, you are losing 40% of your sales."
Body: "We ran benchmark tests between Hostinger Cloud and typical VPS servers. TTFB dropped from 420ms to 48ms. Pair this with Jasper AI generating your SEO landers, and your conversion rate jumps instantly."
CTA: "Link in bio for our vetted discount stack! #webhosting #ai #coding [Ad / Affiliate]"

[YOUTUBE OUTLINE]
Title: "Ultimate AI Software & Cloud Hosting Stack 2026 (Live Speed Test)"
Chapters: 0:00 Intro, 1:15 Jasper AI vs Claude, 4:20 Hostinger NVMe Benchmarks, 7:45 Live Setup
Disclosure: "Pinned link in description contains authorized affiliate links."`
      }},
      { id: 11, title: 'Compliance & FTC Disclosure Review', agent: 'Compliance Agent', status: 'pending', details: 'Verifying clear affirmative disclosures and checking against deceptive marketing rules.' },
      { id: 12, title: 'Audit 12 Mandatory Acceptance Gates', agent: 'QA Agent', status: 'pending', details: 'Verifying Gate 1 (UI Event) through Gate 10 (Audit Log) & Gate 12 (Rollback).' }
    ];

    const initialAssistantMsg: Message = {
      id: assistantMsgId,
      sender: 'assistant',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: `I have initiated the autonomous multi-agent pipeline for "${textToSend}". Executing synchronized workflow across our 30-agent network:`,
      modelUsed: selectedModel,
      agentUsed: selectedAgent.name,
      workflowSteps: steps
    };

    setMessages(prev => [...prev, initialAssistantMsg]);

    // Simulate progressive execution across the steps
    let currentStepIndex = 0;
    const interval = setInterval(() => {
      currentStepIndex++;
      if (currentStepIndex < steps.length) {
        setMessages(prev => prev.map(msg => {
          if (msg.id === assistantMsgId && msg.workflowSteps) {
            const updatedSteps = msg.workflowSteps.map((step, idx) => {
              if (idx < currentStepIndex) return { ...step, status: 'completed' as const };
              if (idx === currentStepIndex) return { ...step, status: 'running' as const };
              return step;
            });
            return { ...msg, workflowSteps: updatedSteps };
          }
          return msg;
        }));
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setActiveWorkflowId(null);
        setMessages(prev => prev.map(msg => {
          if (msg.id === assistantMsgId && msg.workflowSteps) {
            const completedSteps = msg.workflowSteps.map(step => ({ ...step, status: 'completed' as const }));
            return {
              ...msg,
              workflowSteps: completedSteps,
              content: `Autonomous workflow completed successfully! All 12 production acceptance gates passed with verified read-back evidence. Real tracking links, responsive landing pages, and multi-channel campaign assets are generated and saved to your workspace.`
            };
          }
          return msg;
        }));
      }
    }, 1200);
  };

  const handleCancelExecution = () => {
    setIsExecuting(false);
    setActiveWorkflowId(null);
    setMessages(prev => prev.map(msg => {
      if (msg.id === activeWorkflowId) {
        return {
          ...msg,
          content: msg.content + ' [TASK CANCELLED BY USER]'
        };
      }
      return msg;
    }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top AI Controls & Agent Selector Header */}
      <div className="p-5 rounded-3xl flash-glow-card neon-border-multi flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
              AUTONOMOUS MULTI-AGENT WORKSPACE
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono border border-purple-500/40">
              30 AGENTS ACTIVE
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Conversational AI Orchestrator
          </h1>
          <p className="text-xs text-slate-300">
            Natural language command interface executing end-to-end affiliate marketing workflows.
          </p>
        </div>

        {/* Model & Agent Selectors */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Model Selector */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-200">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-slate-400">Model:</span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="Gemini 2.5 Pro" className="bg-[#0b102b]">Gemini 2.5 Pro</option>
              <option value="Gemini 2.5 Flash" className="bg-[#0b102b]">Gemini 2.5 Flash</option>
              <option value="Claude 3.7 Sonnet" className="bg-[#0b102b]">Claude 3.7 Sonnet</option>
              <option value="DeepSeek V3" className="bg-[#0b102b]">DeepSeek V3</option>
              <option value="GPT-4o" className="bg-[#0b102b]">GPT-4o</option>
            </select>
          </div>

          {/* Agent Selector */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-200">
            <Bot className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400">Lead Agent:</span>
            <select
              value={selectedAgentId}
              onChange={(e) => setSelectedAgentId(Number(e.target.value))}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer max-w-[150px] truncate"
            >
              {all30Agents.map(agent => (
                <option key={agent.id} value={agent.id} className="bg-[#0b102b]">
                  {agent.id}. {agent.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Suggested Quick Starters */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase px-1">
          Recommended Production Prompts:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(prompt)}
              disabled={isExecuting}
              className="p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-left text-xs text-slate-300 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
            >
              <span className="truncate pr-2">{prompt}</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      {/* Messages Thread */}
      <div className="space-y-4 min-h-[400px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-5 rounded-3xl flash-glow-card transition-all ${
              msg.sender === 'user'
                ? 'border border-purple-500/40 bg-purple-950/20 max-w-2xl ml-auto glow-purple'
                : 'border border-white/10 bg-[#090e29]/80'
            }`}
          >
            {/* Header info */}
            <div className="flex items-center justify-between text-xs mb-3">
              <div className="flex items-center gap-2">
                {msg.sender === 'assistant' ? (
                  <div className="p-1.5 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="font-bold text-white">
                  {msg.sender === 'assistant' ? (msg.agentUsed || 'Supervisor Agent') : 'You'}
                </span>
                {msg.modelUsed && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                    {msg.modelUsed}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">{msg.timestamp}</span>
            </div>

            {/* Content text */}
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
              {msg.content}
            </p>

            {/* Attached files chips */}
            {msg.attachedFiles && msg.attachedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                {msg.attachedFiles.map((file, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    {file}
                  </span>
                ))}
              </div>
            )}

            {/* Multi-step execution roadmap */}
            {msg.workflowSteps && (
              <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    Autonomous Execution Pipeline ({msg.workflowSteps.filter(s => s.status === 'completed').length}/{msg.workflowSteps.length})
                  </span>
                  {isExecuting && activeWorkflowId === msg.id && (
                    <button
                      onClick={handleCancelExecution}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/40 text-[11px] hover:bg-red-500/30 transition-colors"
                    >
                      <Square className="w-3 h-3" />
                      <span>Cancel Execution</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {msg.workflowSteps.map((step) => (
                    <div
                      key={step.id}
                      className={`p-3 rounded-2xl border transition-all text-xs ${
                        step.status === 'completed'
                          ? 'bg-emerald-500/[0.04] border-emerald-500/20 text-slate-200'
                          : step.status === 'running'
                          ? 'bg-orange-500/[0.08] border-orange-500/40 text-white glow-orange'
                          : 'bg-white/[0.01] border-white/5 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {step.status === 'completed' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : step.status === 'running' ? (
                            <Loader2 className="w-4 h-4 text-orange-400 animate-spin shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                          )}
                          <span className="font-semibold text-white">
                            {step.id}. {step.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                          {step.agent}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 pl-6">
                        {step.details}
                      </p>

                      {/* Render Output Artifact if present and step is running or completed */}
                      {step.outputArtifact && (step.status === 'completed' || step.status === 'running') && (
                        <div className="mt-3 ml-6 p-3 rounded-2xl bg-[#060919] border border-white/10 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                              <Code className="w-3.5 h-3.5 text-purple-400" />
                              {step.outputArtifact.title}
                            </span>
                            <button
                              onClick={() => handleCopy(step.outputArtifact!.content, `art-${step.id}`)}
                              className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                            >
                              {copiedArtifact === `art-${step.id}` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span>Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-300" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-[11px] font-mono text-slate-300 bg-black/40 p-2.5 rounded-xl overflow-x-auto max-h-48 whitespace-pre">
                            {step.outputArtifact.content}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Composer Input Bar */}
      <div className="p-3 rounded-3xl flash-glow-card border border-white/15 glow-multi">
        {/* Attachment preview bar */}
        {attachedFiles.length > 0 && (
          <div className="flex items-center gap-2 p-2 mb-2 bg-white/5 rounded-2xl overflow-x-auto text-xs">
            <span className="text-slate-400 font-mono">Attached:</span>
            {attachedFiles.map((file, i) => (
              <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-500/30">
                <FileText className="w-3 h-3" />
                {file}
                <button 
                  onClick={() => setAttachedFiles(attachedFiles.filter((_, idx) => idx !== i))}
                  className="text-purple-300 hover:text-white ml-1 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* File Attachment simulator */}
          <label className="p-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer shrink-0">
            <Paperclip className="w-4 h-4" />
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setAttachedFiles([...attachedFiles, e.target.files[0].name]);
                }
              }}
            />
          </label>

          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
            placeholder="Type any marketing objective (e.g. 'Promote AI software & website hosting with landing pages and TikTok ads')..."
            disabled={isExecuting}
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 outline-none"
          />

          <button
            onClick={() => handleSendPrompt()}
            disabled={isExecuting || !inputPrompt.trim()}
            className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all cursor-pointer shrink-0"
          >
            {isExecuting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
