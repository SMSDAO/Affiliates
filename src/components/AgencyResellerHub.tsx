import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  ShieldCheck, 
  Plus, 
  ArrowUpRight, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight,
  PieChart,
  UserCheck
} from 'lucide-react';
import { AgencyClient } from '../types';

export const AgencyResellerHub: React.FC = () => {
  const [clients, setClients] = useState<AgencyClient[]>([
    { id: 'cl-01', agencyId: 'org-apex-global', name: 'Vanguard Media Group', domain: 'vanguardmedia.com', accountManager: 'Sarah Lin', programsCount: 4, monthlySpend: 48000, commissionRevenue: 12400, status: 'ACTIVE', planTier: 'Enterprise', joinedDate: '2026-03-01' },
    { id: 'cl-02', agencyId: 'org-apex-global', name: 'Hyperion Fitness Brands', domain: 'hyperionfit.com', accountManager: 'Devon Reed', programsCount: 2, monthlySpend: 24000, commissionRevenue: 6200, status: 'ACTIVE', planTier: 'Scale', joinedDate: '2026-05-10' },
    { id: 'cl-03', agencyId: 'org-apex-global', name: 'Aetheric Software Labs', domain: 'aetheric.io', accountManager: 'Sarah Lin', programsCount: 3, monthlySpend: 62000, commissionRevenue: 18600, status: 'ACTIVE', planTier: 'Enterprise', joinedDate: '2026-01-18' },
    { id: 'cl-04', agencyId: 'org-apex-global', name: 'Krom Bio-Nutraceuticals', domain: 'kromnutra.com', accountManager: 'Elena Rostova', programsCount: 1, monthlySpend: 15000, commissionRevenue: 3750, status: 'ONBOARDING', planTier: 'Growth', joinedDate: '2026-10-15' }
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAddClientModal, setShowAddClientModal] = useState<boolean>(false);
  const [newClientName, setNewClientName] = useState<string>('');
  const [newClientDomain, setNewClientDomain] = useState<string>('');
  const [newClientManager, setNewClientManager] = useState<string>('Sarah Lin');
  const [newClientTier, setNewClientTier] = useState<'Growth' | 'Scale' | 'Enterprise'>('Scale');

  const filtered = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.accountManager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMonthlySpend = clients.reduce((acc, c) => acc + c.monthlySpend, 0);
  const totalCommissionRevenue = clients.reduce((acc, c) => acc + c.commissionRevenue, 0);
  const averageMargin = Math.round((totalCommissionRevenue / (totalMonthlySpend || 1)) * 100);

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newClientDomain) return;
    const newClient: AgencyClient = {
      id: `cl-${Date.now()}`,
      agencyId: 'org-apex-global',
      name: newClientName,
      domain: newClientDomain,
      accountManager: newClientManager,
      programsCount: 1,
      monthlySpend: 10000,
      commissionRevenue: 2500,
      status: 'ONBOARDING',
      planTier: newClientTier,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setClients([newClient, ...clients]);
    setNewClientName('');
    setNewClientDomain('');
    setShowAddClientModal(false);
  };

  const handleExportClientReport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["ID,Client Name,Domain,Account Manager,Programs,Monthly Spend,Commission Revenue,Status,Tier,Joined"]
      .concat(clients.map(c => `${c.id},${c.name},${c.domain},${c.accountManager},${c.programsCount},${c.monthlySpend},${c.commissionRevenue},${c.status},${c.planTier},${c.joinedDate}`))
      .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `agency_clients_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-24 text-slate-100">
      {/* 1. Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-bold">
                AGENCY & RESELLER SUITE · V1.4.0
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">DELEGATED CLIENT ACCESS ACTIVE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Agency & Reseller Management Workspace
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Manage multiple client organizations, assign dedicated account managers, track client-level commission revenue, and provide white-labeled reporting from a unified agency control plane.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowAddClientModal(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Onboard New Client</span>
            </button>
            <button
              onClick={handleExportClientReport}
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Export Invoices & Reports</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Agency Telemetry KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-orange">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Active Clients</span>
            <Building2 className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">
            {clients.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Managed workspaces</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Client Gross Spend</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight">
            ${totalMonthlySpend.toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Monthly managed GMV</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Agency Revenue Share</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black font-mono text-purple-300 tracking-tight">
            ${totalCommissionRevenue.toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Avg Margin: ~{averageMargin}%</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Delegated Seats</span>
            <Users className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl font-black font-mono text-yellow-300 tracking-tight">
            18
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Role-scoped personnel</p>
        </div>
      </div>

      {/* 3. Client Workspaces Directory & Telemetry Table */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span>Managed Client Organizations ({filtered.length})</span>
          </h2>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search clients or domains..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 bg-white/[0.03] border-b border-white/10">
              <tr>
                <th className="p-3 font-semibold">Client Name & Domain</th>
                <th className="p-3 font-semibold">Account Manager</th>
                <th className="p-3 font-semibold">Programs</th>
                <th className="p-3 font-semibold">Monthly Spend</th>
                <th className="p-3 font-semibold">Agency Revenue</th>
                <th className="p-3 font-semibold">Tier</th>
                <th className="p-3 font-semibold">Status</th>
                <th className="p-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {filtered.map(client => (
                <tr key={client.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3">
                    <div className="font-bold text-white text-sm font-sans">{client.name}</div>
                    <span className="text-[11px] text-cyan-400 flex items-center gap-1 font-mono">
                      {client.domain} <ExternalLink className="w-3 h-3 inline" />
                    </span>
                  </td>
                  <td className="p-3 text-slate-200 font-sans">
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                      {client.accountManager}
                    </span>
                  </td>
                  <td className="p-3 text-white font-bold">{client.programsCount} Programs</td>
                  <td className="p-3 text-slate-300">${client.monthlySpend.toLocaleString()}</td>
                  <td className="p-3 text-emerald-400 font-bold">${client.commissionRevenue.toLocaleString()}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/10 text-orange-300 border border-orange-500/30">
                      {client.planTier}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      client.status === 'ACTIVE' 
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all text-xs font-sans font-semibold cursor-pointer">
                      Open Client Hub
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Onboard Client */}
      {showAddClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-3xl flash-glow-card border border-orange-500/40 space-y-4">
            <h3 className="text-lg font-bold text-white">Onboard Client Workspace</h3>
            <p className="text-xs text-slate-400">
              Provision a delegated workspace with isolated affiliate tracking and automated reporting.
            </p>
            <form onSubmit={handleCreateClient} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Client Company Name</label>
                <input
                  type="text"
                  value={newClientName}
                  onChange={e => setNewClientName(e.target.value)}
                  placeholder="e.g. Acme Consumer Retail"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Corporate Domain</label>
                <input
                  type="text"
                  value={newClientDomain}
                  onChange={e => setNewClientDomain(e.target.value)}
                  placeholder="e.g. acme.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Assigned Account Manager</label>
                <select
                  value={newClientManager}
                  onChange={e => setNewClientManager(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-orange-500 outline-none"
                >
                  <option value="Sarah Lin">Sarah Lin (Senior Partner Lead)</option>
                  <option value="Devon Reed">Devon Reed (Campaign Strategist)</option>
                  <option value="Elena Rostova">Elena Rostova (Affiliate Executive)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Service Package Tier</label>
                <select
                  value={newClientTier}
                  onChange={e => setNewClientTier(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-orange-500 outline-none"
                >
                  <option value="Growth">Growth ($1,500/mo management fee)</option>
                  <option value="Scale">Scale ($3,500/mo + 15% revenue share)</option>
                  <option value="Enterprise">Enterprise ($7,500/mo + dedicated manager)</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddClientModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs cursor-pointer"
                >
                  Create Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
