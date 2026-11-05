import React, { useState } from 'react';
import { 
  Gamepad2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Percent, 
  Lock, 
  DollarSign, 
  Users,
  Info,
  Scale
} from 'lucide-react';
import { CasinoOperator } from '../types';

export const CasinoAffiliateModule: React.FC = () => {
  const [operators, setOperators] = useState<CasinoOperator[]>([
    {
      id: 'op-01',
      name: 'BetMGM Sportsbook & Gaming',
      jurisdiction: 'United States (NJ, MI, PA, NV)',
      licenseNumber: 'DGE-NJ-9941-R',
      commissionModel: 'CPA',
      rate: '$250.00 CPA per First-Time Deposit',
      minAge: 21,
      status: 'APPROVED',
      landingPageUrl: 'https://aff.ai/go/betmgm-licensed',
      responsibleGamblingMessage: 'Gambling problem? Call 1-800-GAMBLER. 21+ only.'
    },
    {
      id: 'op-02',
      name: 'Bet365 Global Sports & Casino',
      jurisdiction: 'United Kingdom (UKGC)',
      licenseNumber: 'UKGC-055148-R',
      commissionModel: 'REV_SHARE',
      rate: '30% Net Revenue Share (Lifetime)',
      minAge: 18,
      status: 'APPROVED',
      landingPageUrl: 'https://aff.ai/go/bet365-ukgc',
      responsibleGamblingMessage: 'BeGambleAware.org. 18+ only. Terms apply.'
    },
    {
      id: 'op-03',
      name: 'DraftKings Sportsbook & Casino',
      jurisdiction: 'United States (Multi-State)',
      licenseNumber: 'AGCO-ON-7712',
      commissionModel: 'HYBRID',
      rate: '$150 CPA + 15% Monthly Rev-Share',
      minAge: 21,
      status: 'APPROVED',
      landingPageUrl: 'https://aff.ai/go/draftkings-verified',
      responsibleGamblingMessage: 'If you or someone you know has a gambling problem, help is available. 21+ only.'
    },
    {
      id: 'op-04',
      name: 'Evolution Gaming Live Dealer Hub',
      jurisdiction: 'Malta (MGA)',
      licenseNumber: 'MGA/B2B/187/2010',
      commissionModel: 'REV_SHARE',
      rate: '25% Net Gaming Revenue',
      minAge: 18,
      status: 'APPROVED',
      landingPageUrl: 'https://aff.ai/go/evolution-mga',
      responsibleGamblingMessage: 'Play responsibly. 18+ only. mgalicense.org'
    }
  ]);

  const [ageVerified, setAgeVerified] = useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('all');

  const filtered = operators.filter(o => selectedJurisdiction === 'all' || o.jurisdiction.includes(selectedJurisdiction));

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Mandatory Safeguards Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
        <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block font-bold mb-0.5">
            Strict Gaming Regulatory Compliance & Age-Gating Notice
          </strong>
          This module is exclusively restricted to licensed, regulated sportsbooks and iGaming operators in authorized jurisdictions. Deceptive claims, guaranteed-win promises, targeting minors, and unauthorized publishing in restricted territories are strictly prohibited.
        </div>
      </div>

      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                LICENSED GAMING & CASINO VERTICAL · V1.2.0
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">JURISDICTION ISOLATED</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Casino, Sportsbook & Gaming Affiliate Network
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Discover verified CPA and lifetime revenue-share affiliate programs with regulated tier-1 operators, automated age-gating disclosures, and audit reconciliation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Jurisdiction:</span>
            <select
              value={selectedJurisdiction}
              onChange={e => setSelectedJurisdiction(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-[#090d26] border border-white/20 text-xs font-mono text-white"
            >
              <option value="all">All Jurisdictions</option>
              <option value="United States">United States (State Regulated)</option>
              <option value="United Kingdom">United Kingdom (UKGC)</option>
              <option value="Malta">Malta (MGA)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Operator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(op => (
          <div
            key={op.id}
            className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {op.commissionModel} COMMISSION
                </span>
                <span className="text-[11px] font-mono text-amber-400 font-bold border border-amber-400/30 px-2 py-0.5 rounded-lg bg-amber-400/10">
                  {op.minAge}+ AGE GATED
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white">{op.name}</h3>
              <div className="text-xs text-slate-400 mt-1 space-y-0.5">
                <div>Jurisdiction: <strong className="text-slate-200">{op.jurisdiction}</strong></div>
                <div className="font-mono text-[11px]">License: <span className="text-purple-300">{op.licenseNumber}</span></div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 mt-3">
                <span className="text-[11px] text-slate-400 block font-semibold">Compensation Terms:</span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">{op.rate}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 mt-3 text-[10px] text-slate-400 font-mono">
                {op.responsibleGamblingMessage}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-purple-300 truncate max-w-[200px]">
                {op.landingPageUrl}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(op.landingPageUrl);
                  alert(`Copied licensed tracking link for ${op.name}`);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors cursor-pointer shrink-0"
              >
                Copy Partner Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
