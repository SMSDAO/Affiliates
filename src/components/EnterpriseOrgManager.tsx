import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Store, 
  ShieldCheck, 
  Globe2, 
  Users, 
  TrendingUp, 
  Plus, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  DollarSign,
  Workflow,
  Sparkles,
  Lock,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { OrganizationHierarchy, BusinessUnit, BrandEntity, StoreEntity, AffiliateProgramEntity } from '../types';

interface EnterpriseOrgManagerProps {
  onNavigate?: (tab: any) => void;
}

export const EnterpriseOrgManager: React.FC<EnterpriseOrgManagerProps> = ({ onNavigate }) => {
  const [selectedOrgId, setSelectedOrgId] = useState<string>('org-apex-global');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('all');
  const [showAddUnitModal, setShowAddUnitModal] = useState<boolean>(false);
  const [newUnitName, setNewUnitName] = useState<string>('');
  const [newUnitCode, setNewUnitCode] = useState<string>('');
  const [newUnitBudget, setNewUnitBudget] = useState<string>('150000');

  // Multi-tenant organization state
  const [organizations, setOrganizations] = useState<OrganizationHierarchy[]>([
    {
      id: 'org-apex-global',
      name: 'Apex Global Commerce Enterprise',
      tier: 'Enterprise',
      primaryCurrency: 'USD',
      supportedCurrencies: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'SGD'],
      activeRegions: ['North America', 'Europe (EU)', 'Asia-Pacific (APAC)', 'Latin America (LATAM)'],
      businessUnits: [
        { id: 'bu-saas', orgId: 'org-apex-global', name: 'Cloud & AI SaaS Division', code: 'BU-SAAS-01', leadAdmin: 'elena.rostova@apex.io', allocatedBudget: 250000, brandsCount: 4, status: 'ACTIVE' },
        { id: 'bu-retail', orgId: 'org-apex-global', name: 'Direct Consumer Retail Group', code: 'BU-RETAIL-02', leadAdmin: 'marcus.vance@apex.io', allocatedBudget: 180000, brandsCount: 6, status: 'ACTIVE' },
        { id: 'bu-fintech', orgId: 'org-apex-global', name: 'Financial Services & FX Division', code: 'BU-FIN-03', leadAdmin: 'amina.almansoor@apex.io', allocatedBudget: 320000, brandsCount: 3, status: 'ACTIVE' }
      ],
      brands: [
        { id: 'br-jasper', orgId: 'org-apex-global', unitId: 'bu-saas', name: 'Jasper AI Suites', niche: 'AI Software & Automation', primaryColor: '#a855f7', activeProgramsCount: 3, status: 'ACTIVE' },
        { id: 'br-cursor', orgId: 'org-apex-global', unitId: 'bu-saas', name: 'Cursor AI IDE Pro', niche: 'Developer Productivity', primaryColor: '#3b82f6', activeProgramsCount: 2, status: 'ACTIVE' },
        { id: 'br-nordic', orgId: 'org-apex-global', unitId: 'bu-retail', name: 'Nordic Essentials', niche: 'Health & Sustainable Living', primaryColor: '#22c55e', activeProgramsCount: 2, status: 'ACTIVE' },
        { id: 'br-luxe', orgId: 'org-apex-global', unitId: 'bu-retail', name: 'Aura Luxe Timepieces', niche: 'Luxury Goods', primaryColor: '#f59e0b', activeProgramsCount: 2, status: 'ACTIVE' }
      ],
      stores: [
        { id: 'st-woo-01', orgId: 'org-apex-global', brandId: 'br-jasper', name: 'Jasper Pro Global Hub', platform: 'WooCommerce', storeUrl: 'https://store.jasper.ai', currency: 'USD', syncedProductsCount: 84, healthStatus: 'HEALTHY' },
        { id: 'st-shop-02', orgId: 'org-apex-global', brandId: 'br-nordic', name: 'Nordic Direct Shopify', platform: 'Shopify', storeUrl: 'https://nordicessentials.com', currency: 'EUR', syncedProductsCount: 142, healthStatus: 'HEALTHY' },
        { id: 'st-edd-03', orgId: 'org-apex-global', brandId: 'br-cursor', name: 'Cursor IDE Digital Downloads', platform: 'EDD', storeUrl: 'https://downloads.cursor.com', currency: 'USD', syncedProductsCount: 26, healthStatus: 'HEALTHY' }
      ],
      programs: [
        { id: 'prog-01', orgId: 'org-apex-global', brandId: 'br-jasper', name: 'Jasper AI Vanguard Partners', commissionType: 'RevShare', defaultRate: '30% Lifetime', activeAffiliatesCount: 840, autoApprove: false, approvalWorkflowRequired: true },
        { id: 'prog-02', orgId: 'org-apex-global', brandId: 'br-nordic', name: 'Nordic Wellness VIP Collective', commissionType: 'CPA', defaultRate: '$45 per First Order', activeAffiliatesCount: 420, autoApprove: true, approvalWorkflowRequired: false },
        { id: 'prog-03', orgId: 'org-apex-global', brandId: 'br-cursor', name: 'Dev Tools Global Advocates', commissionType: 'Hybrid', defaultRate: '20% + $25 Bounty', activeAffiliatesCount: 610, autoApprove: false, approvalWorkflowRequired: true }
      ],
      totalAffiliates: 1870,
      monthlyGmv: 4280000,
      customDomain: 'partners.apexcommerce.io',
      createdAt: '2026-01-15'
    }
  ]);

  const activeOrg = organizations.find(o => o.id === selectedOrgId) || organizations[0];
  const filteredBrands = selectedUnitId === 'all' 
    ? activeOrg.brands 
    : activeOrg.brands.filter(b => b.unitId === selectedUnitId);

  const handleCreateBusinessUnit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUnitName.trim() || !newUnitCode.trim()) return;
    const newUnit: BusinessUnit = {
      id: `bu-${Date.now()}`,
      orgId: activeOrg.id,
      name: newUnitName.trim(),
      code: newUnitCode.trim().toUpperCase(),
      leadAdmin: 'admin@apexcommerce.io',
      allocatedBudget: parseFloat(newUnitBudget) || 100000,
      brandsCount: 0,
      status: 'ACTIVE'
    };
    setOrganizations(prev => prev.map(o => o.id === activeOrg.id ? { ...o, businessUnits: [...o.businessUnits, newUnit] } : o));
    setNewUnitName('');
    setNewUnitCode('');
    setShowAddUnitModal(false);
  };

  return (
    <div className="space-y-6 pb-24 text-slate-100">
      {/* 1. Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                ENTERPRISE MULTI-TENANT HIERARCHY · V1.4.0
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">CROSS-TENANT ISOLATION ENFORCED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Organization Governance
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Hierarchical Single-Source-of-Truth architecture managing multiple business units, brands, online stores, affiliate programs, and international regions with strict server-enforced tenant boundaries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowAddUnitModal(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create Business Unit</span>
            </button>
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span className="font-mono font-semibold">{activeOrg.activeRegions.length} Active Regions</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hierarchy Telemetry Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-purple">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Business Units</span>
            <Building2 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">
            {activeOrg.businessUnits.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Autonomous divisions</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-orange">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Managed Brands</span>
            <Layers className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">
            {activeOrg.brands.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Distinct product lines</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-green">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Connected Stores</span>
            <Store className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight">
            {activeOrg.stores.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">WooCommerce & Shopify feeds</p>
        </div>

        <div className="p-5 rounded-3xl flash-glow-card border border-white/10 glow-yellow">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Monthly Org GMV</span>
            <DollarSign className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl font-black font-mono text-yellow-300 tracking-tight">
            ${(activeOrg.monthlyGmv / 1000000).toFixed(2)}M
          </div>
          <p className="text-[11px] text-slate-400 mt-1">{activeOrg.totalAffiliates} Total Affiliates</p>
        </div>
      </div>

      {/* 3. Interactive Hierarchy Visualizer */}
      <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-purple-400" />
              <span>Multi-Level Structural Hierarchy</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Organization → Business Units → Brands → Stores → Affiliate Programs
            </p>
          </div>

          {/* Business Unit Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
            <button
              onClick={() => setSelectedUnitId('all')}
              className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                selectedUnitId === 'all' 
                  ? 'bg-purple-600/40 text-white border border-purple-500/50' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Units ({activeOrg.businessUnits.length})
            </button>
            {activeOrg.businessUnits.map(unit => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                  selectedUnitId === unit.id 
                    ? 'bg-purple-600/40 text-white border border-purple-500/50' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {unit.code}
              </button>
            ))}
          </div>
        </div>

        {/* Level 1: Business Units Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeOrg.businessUnits.map(unit => (
            <div 
              key={unit.id}
              className={`p-5 rounded-2xl border transition-all ${
                selectedUnitId === unit.id 
                  ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.25)]' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                  {unit.code}
                </span>
                <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {unit.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{unit.name}</h3>
              <p className="text-xs text-slate-400 mt-1">Lead: {unit.leadAdmin}</p>
              
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Budget:</span>
                <span className="text-yellow-300 font-bold">${unit.allocatedBudget.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Level 2: Brands & Connected Stores Matrix */}
        <div className="pt-4 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-orange-400" />
            <span>Active Enterprise Brands & Synchronized Programs ({filteredBrands.length})</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredBrands.map(brand => {
              const brandStores = activeOrg.stores.filter(s => s.brandId === brand.id);
              const brandPrograms = activeOrg.programs.filter(p => p.brandId === brand.id);

              return (
                <div key={brand.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.primaryColor }} />
                        <h4 className="text-base font-extrabold text-white">{brand.name}</h4>
                      </div>
                      <span className="text-xs text-slate-400">{brand.niche}</span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                      {brandPrograms.length} Programs Live
                    </span>
                  </div>

                  {/* Connected Stores for this Brand */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Synchronized Commerce Stores:</span>
                    {brandStores.length === 0 ? (
                      <p className="text-xs text-slate-500 italic">No stores bound yet.</p>
                    ) : (
                      brandStores.map(store => (
                        <div key={store.id} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Store className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-slate-200 font-semibold">{store.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{store.platform}</span>
                          </div>
                          <span className="text-emerald-400 font-mono font-semibold">{store.syncedProductsCount} Products</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Active Programs for this Brand */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Affiliate Programs:</span>
                    {brandPrograms.map(prog => (
                      <div key={prog.id} className="p-2.5 rounded-xl bg-purple-500/[0.04] border border-purple-500/20 flex items-center justify-between text-xs">
                        <div>
                          <div className="text-purple-200 font-bold">{prog.name}</div>
                          <span className="text-[11px] text-slate-400">Rate: {prog.defaultRate} ({prog.commissionType})</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-white font-bold">{prog.activeAffiliatesCount}</span>
                          <span className="text-[10px] text-slate-400 block">affiliates</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Cross-Tenant Security Invariant Notice */}
      <div className="p-5 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20 flex items-start gap-3 text-xs text-slate-300">
        <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-white block mb-0.5">Strict Tenant Isolation Guard</span>
          All organization entities (Business Units, Brands, Campaigns, and Affiliates) are segregated at the database schema and API route middleware layers. Server-side validation guarantees zero cross-tenant leakage or unauthorized resource modifications.
        </div>
      </div>

      {/* Modal: Create Business Unit */}
      {showAddUnitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-3xl flash-glow-card border border-purple-500/40 space-y-4">
            <h3 className="text-lg font-bold text-white">Create New Business Unit</h3>
            <p className="text-xs text-slate-400">
              Add a new divisional boundary within {activeOrg.name} with dedicated budget allocation.
            </p>
            <form onSubmit={handleCreateBusinessUnit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Division Name</label>
                <input
                  type="text"
                  value={newUnitName}
                  onChange={e => setNewUnitName(e.target.value)}
                  placeholder="e.g. Asia-Pacific Gaming & Hospitality"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Unit Code (Uppercase)</label>
                <input
                  type="text"
                  value={newUnitCode}
                  onChange={e => setNewUnitCode(e.target.value)}
                  placeholder="e.g. BU-APAC-04"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Allocated Budget ($ USD)</label>
                <input
                  type="number"
                  value={newUnitBudget}
                  onChange={e => setNewUnitBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-purple-500 outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddUnitModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold cursor-pointer"
                >
                  Save Division
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
