import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Search, 
  Filter, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Code 
} from 'lucide-react';
import { AiAgentDef } from '../types';
import { all30Agents } from '../data/mockData';

export const AgentRegistry: React.FC = () => {
  const [agents, setAgents] = useState<AiAgentDef[]>(all30Agents);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAgentDetail, setSelectedAgentDetail] = useState<AiAgentDef | null>(null);

  const categories = ['All', 'Strategic', 'Marketing', 'Creative', 'Engineering', 'Compliance'];

  const filteredAgents = agents.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.systemScope.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                ENTERPRISE MULTI-AGENT SWARM REGISTRY
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                30 OF 30 AGENTS ONLINE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autonomous AI Agent Registry
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Inspect explicit roles, tool registries, system instructions, and provider routing across the 30 specialized agents orchestrating your affiliate operations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-right">
              <div className="text-slate-400">Swarm Success Rate</div>
              <div className="text-lg font-bold font-mono text-emerald-400">99.7%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-3xl flash-glow-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search agents by role, tools, scope..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-purple-500/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <Filter className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-slate-400">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              {categories.map(c => <option key={c} value={c} className="bg-[#0b102b]">{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* 30 Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgentDetail(agent)}
            className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-xs font-mono font-bold text-purple-300">
                    {agent.id < 10 ? `0${agent.id}` : agent.id}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {agent.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {agent.category}
                    </span>
                  </div>
                </div>

                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                  agent.status === 'ACTIVE'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {agent.status}
                </span>
              </div>

              <p className="text-xs text-slate-300 mt-2.5 line-clamp-2">
                {agent.role}
              </p>

              {/* Tools Strip */}
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Allowed Tools:</span>
                <div className="flex flex-wrap gap-1">
                  {agent.allowedTools.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-purple-200 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Info: Provider & Success Rate */}
            <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono text-slate-300">{agent.provider}</span>
              <span className="font-mono text-emerald-400 font-semibold">{agent.successRate}% Pass</span>
            </div>
          </div>
        ))}
      </div>

      {/* Agent Detail Modal */}
      {selectedAgentDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">
                  Agent #{selectedAgentDetail.id}: {selectedAgentDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAgentDetail(null)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Primary Role & Function</span>
                <p className="text-white font-medium text-sm">{selectedAgentDetail.role}</p>
              </div>

              <div>
                <span className="text-slate-400 block mb-0.5">System Instruction Scope</span>
                <p className="text-slate-300 bg-white/[0.03] p-3 rounded-2xl border border-white/5 font-mono text-[11px]">
                  {selectedAgentDetail.systemScope}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Assigned Model</span>
                  <span className="font-mono text-purple-300 font-bold">{selectedAgentDetail.provider}</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Success Metric</span>
                  <span className="font-mono text-emerald-400 font-bold">{selectedAgentDetail.successRate}% Success</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-1">Declared Tool Handlers</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAgentDetail.allowedTools.map((tool, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-500/30 font-mono text-xs">
                      {tool}()
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedAgentDetail(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                Close Agent Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
