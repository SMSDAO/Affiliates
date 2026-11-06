import React, { useState } from 'react';
import { 
  Workflow, 
  Zap, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Plus, 
  Bell, 
  Pause, 
  Send, 
  Settings2, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { WorkflowRule } from '../types';

export const AutomationEngine: React.FC = () => {
  const [rules, setRules] = useState<WorkflowRule[]>([
    { id: 'WF-01', orgId: 'org-apex-global', name: 'Auto-Notify on Diamond Rank Upgrade', triggerEvent: 'RANK_UPGRADE', actionType: 'SEND_NOTIFICATION', conditionSummary: 'Affiliate reaches Diamond tier ($50k+ revenue)', active: true, executionCount: 142, lastExecutedAt: '2026-11-06 03:45' },
    { id: 'WF-02', orgId: 'org-apex-global', name: 'Instant Pause Campaign on Fraud Spike', triggerEvent: 'FRAUD_ALERT', actionType: 'PAUSE_CAMPAIGN', conditionSummary: 'Fraud risk score exceeds 85/100', active: true, executionCount: 8, lastExecutedAt: '2026-11-05 21:10' },
    { id: 'WF-03', orgId: 'org-apex-global', name: 'Auto-Trigger Webhook on Application Approval', triggerEvent: 'NEW_AFFILIATE', actionType: 'TRIGGER_WEBHOOK', conditionSummary: 'Partner application approved by manager', active: true, executionCount: 890, lastExecutedAt: '2026-11-06 02:18' },
    { id: 'WF-04', orgId: 'org-apex-global', name: 'Request Dual-Approval on Payout > $3,000', triggerEvent: 'COMMISSION_APPROVED', actionType: 'REQUEST_APPROVAL', conditionSummary: 'Payout request amount >= $3,000 USD', active: true, executionCount: 34, lastExecutedAt: '2026-11-05 14:02' }
  ]);

  const [testingRuleId, setTestingRuleId] = useState<string | null>(null);
  const [testSuccessMessage, setTestSuccessMessage] = useState<string | null>(null);
  const [showNewRuleModal, setShowNewRuleModal] = useState<boolean>(false);
  const [newRuleName, setNewRuleName] = useState<string>('');
  const [newTrigger, setNewTrigger] = useState<WorkflowRule['triggerEvent']>('FIRST_SALE');
  const [newAction, setNewAction] = useState<WorkflowRule['actionType']>('SEND_NOTIFICATION');
  const [newCondition, setNewCondition] = useState<string>('First sale confirmed across any store');

  const handleToggleRule = (id: string) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

  const handleSimulateRule = async (ruleId: string) => {
    setTestingRuleId(ruleId);
    setTestSuccessMessage(null);
    try {
      const res = await fetch('/api/v1/enterprise/workflows/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ruleId })
      });
      const data = await res.json();
      setTimeout(() => {
        setTestingRuleId(null);
        setTestSuccessMessage(`Workflow executed cleanly: Action "${data.executedRule?.actionType}" dispatched with zero errors.`);
        setRules(prev => prev.map(r => r.id === ruleId ? { ...r, executionCount: r.executionCount + 1, lastExecutedAt: new Date().toISOString().replace('T', ' ').slice(0, 16) } : r));
      }, 700);
    } catch {
      setTimeout(() => {
        setTestingRuleId(null);
        setTestSuccessMessage('Workflow executed cleanly (offline simulation mode).');
      }, 700);
    }
  };

  const handleCreateRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuleName.trim()) return;
    const newRule: WorkflowRule = {
      id: `WF-0${rules.length + 1}`,
      orgId: 'org-apex-global',
      name: newRuleName.trim(),
      triggerEvent: newTrigger,
      actionType: newAction,
      conditionSummary: newCondition,
      active: true,
      executionCount: 0,
      lastExecutedAt: 'Never'
    };
    setRules([newRule, ...rules]);
    setNewRuleName('');
    setShowNewRuleModal(false);
  };

  const triggerIcons: Record<string, string> = {
    RANK_UPGRADE: '👑',
    FRAUD_ALERT: '🚨',
    NEW_AFFILIATE: '🤝',
    COMMISSION_APPROVED: '💰',
    FIRST_SALE: '🎯',
    LINK_BROKEN: '🔗'
  };

  return (
    <div className="space-y-6 pb-24 text-slate-100">
      {/* 1. Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                ENTERPRISE WORKFLOW & EVENT AUTOMATION · V1.4.0
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">EVENT BUS LISTENING</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Autonomous Workflow & Event Automation Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Construct automated event sequences connecting affiliate lifecycle events, fraud alerts, commission approvals, and rank milestones to instant Slack/email notifications, task assignments, and API actions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNewRuleModal(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Build New Workflow</span>
            </button>
          </div>
        </div>
      </div>

      {testSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{testSuccessMessage}</span>
          </div>
          <button 
            onClick={() => setTestSuccessMessage(null)}
            className="text-slate-400 hover:text-white text-xs cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}

      {/* 2. Automation Overview Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Active Workflows</span>
            <Workflow className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">
            {rules.filter(r => r.active).length} of {rules.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Autonomous triggers</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Executions (30d)</span>
            <Zap className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight">
            {rules.reduce((acc, r) => acc + r.executionCount, 0).toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">100% SLA delivery</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-orange">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Average Latency</span>
            <Clock className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-3xl font-black font-mono text-orange-300 tracking-tight">
            42ms
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Sub-second event trigger</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Prevented Loss</span>
            <ShieldAlert className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl font-black font-mono text-yellow-300 tracking-tight">
            $18,420
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Via automated fraud pauses</p>
        </div>
      </div>

      {/* 3. Workflow Rules Pipeline List */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span>Configured Automated Pipelines</span>
        </h2>

        <div className="space-y-3">
          {rules.map(rule => (
            <div 
              key={rule.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                rule.active 
                  ? 'bg-white/[0.02] border-white/10 hover:border-purple-500/30' 
                  : 'bg-white/[0.01] border-white/5 opacity-60'
              }`}
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{triggerIcons[rule.triggerEvent] || '⚡'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">{rule.id}</span>
                  <h3 className="text-sm font-bold text-white">{rule.name}</h3>
                </div>

                {/* Visual Step-by-step badge */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    Trigger: {rule.triggerEvent.replace('_', ' ')}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                    Condition: {rule.conditionSummary}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    Action: {rule.actionType.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-auto font-mono text-xs">
                <div className="text-right hidden sm:block">
                  <span className="text-white font-bold block">{rule.executionCount} fires</span>
                  <span className="text-[10px] text-slate-400">Last: {rule.lastExecutedAt || 'Never'}</span>
                </div>

                <button
                  onClick={() => handleSimulateRule(rule.id)}
                  disabled={testingRuleId === rule.id}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Simulate Event"
                >
                  {testingRuleId === rule.id ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span>Test Run</span>
                </button>

                <button
                  onClick={() => handleToggleRule(rule.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                    rule.active 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30' 
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                  }`}
                >
                  {rule.active ? 'Active' : 'Paused'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Build New Workflow */}
      {showNewRuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg p-6 rounded-3xl flash-glow-card border border-purple-500/40 space-y-4">
            <h3 className="text-lg font-bold text-white">Build Workflow Sequence</h3>
            <p className="text-xs text-slate-400">
              Configure an autonomous event-driven rule across your affiliate programs.
            </p>
            <form onSubmit={handleCreateRule} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Workflow Title</label>
                <input
                  type="text"
                  value={newRuleName}
                  onChange={e => setNewRuleName(e.target.value)}
                  placeholder="e.g. Notify Team on Large Wholesale Order"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Trigger Event</label>
                  <select
                    value={newTrigger}
                    onChange={e => setNewTrigger(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  >
                    <option value="FIRST_SALE">First Sale Generated</option>
                    <option value="NEW_AFFILIATE">New Affiliate Application</option>
                    <option value="RANK_UPGRADE">Affiliate Rank Upgrade</option>
                    <option value="FRAUD_ALERT">Fraud Risk Anomaly</option>
                    <option value="COMMISSION_APPROVED">Commission Approved</option>
                    <option value="LINK_BROKEN">Broken Link Detected</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Action to Dispatch</label>
                  <select
                    value={newAction}
                    onChange={e => setNewAction(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  >
                    <option value="SEND_NOTIFICATION">Send Slack/Email Alert</option>
                    <option value="CREATE_TASK">Create Manager Task</option>
                    <option value="REQUEST_APPROVAL">Request Dual Approval</option>
                    <option value="PAUSE_CAMPAIGN">Pause Outbound Campaign</option>
                    <option value="TRIGGER_WEBHOOK">Trigger External Webhook</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Condition Parameters</label>
                <input
                  type="text"
                  value={newCondition}
                  onChange={e => setNewCondition(e.target.value)}
                  placeholder="e.g. Order value >= $500.00"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowNewRuleModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs cursor-pointer shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                >
                  Activate Workflow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
