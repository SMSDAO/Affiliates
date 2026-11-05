import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  HelpCircle, 
  AlertTriangle, 
  Mail, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { NavigationTab } from '../types';

interface LegalTrustPagesProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const LegalTrustPages: React.FC<LegalTrustPagesProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'disclosure' | 'terms' | 'privacy' | 'refund' | 'security' | 'contact'>('disclosure');

  return (
    <div className="space-y-6 pb-20 text-slate-100 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi text-center space-y-2">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
          TRANSPARENCY, TRUST & COMPLIANCE
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
          Legal Disclosures & Policies
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          We believe in 100% transparency. Our platform strictly adheres to FTC marketing regulations, data privacy laws (GDPR/CCPA), and ethical affiliate standards.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl flash-glow-card border border-white/10 overflow-x-auto text-xs">
        {[
          { id: 'disclosure', label: 'Affiliate Disclosure' },
          { id: 'terms', label: 'Terms of Service' },
          { id: 'privacy', label: 'Privacy Policy' },
          { id: 'refund', label: 'Refund & Cancellation' },
          { id: 'security', label: 'Security Overview' },
          { id: 'contact', label: 'Contact & Support' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === t.id
                ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card border border-white/10 space-y-6 text-xs text-slate-300 leading-relaxed">
        {activeTab === 'disclosure' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Affiliate Marketing & FTC Disclosure</h2>
            <p>
              In compliance with Federal Trade Commission (FTC) guidelines, please assume that any outbound product links generated, published, or hosted through Super Affiliate Manager AI may be affiliate links.
            </p>
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                No Guaranteed Earnings Policy:
              </span>
              <p className="text-slate-300">
                Super Affiliate Manager AI is an operational software platform. We do NOT advertise or guarantee specific income, commissions, or sales conversion rates. Affiliate marketing success depends entirely on your product selection, audience trust, content quality, and market conditions.
              </p>
            </div>
            <p>
              Users utilizing our platform to generate landing pages and social media copy must ensure their published assets contain clear, conspicuous affirmative disclosures (such as <code>#ad</code>, <code>[Affiliate Link]</code>, or <code>Paid Partnership</code>).
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Terms of Service</h2>
            <p>
              By accessing Super Affiliate Manager AI, you agree to comply with all applicable advertising, intellectual property, and consumer protection laws.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Account Ownership</strong>: You maintain full ownership of your accounts with third-party affiliate networks.</li>
              <li><strong>Prohibited Content</strong>: You may not use this platform to promote deceptive claims, malware, phishing sites, or unlicensed gambling operators.</li>
              <li><strong>Service Availability</strong>: We provide a 99.9% uptime SLA for redirect infrastructure on paid tiers.</li>
            </ul>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Privacy Policy (GDPR / CCPA Compliant)</h2>
            <p>
              Your personal data and affiliate credentials are isolated by tenant boundaries. Third-party API keys and OAuth tokens are stored encrypted using AES-GCM at rest.
            </p>
            <p>
              We do not sell personal data to third parties. Tracking events anonymize visitor IP addresses into cryptographic hashes to protect user privacy while preserving attribution integrity.
            </p>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Refund & Cancellation Policy</h2>
            <p>
              All paid tiers (Pro, Elite, Enterprise) include a 7-day free trial. If you cancel during your trial period, you will not be charged.
            </p>
            <p>
              Subscriptions can be cancelled at any time through the Settings & Admin panel. Following cancellation, your account remains active until the conclusion of your current prepaid billing cycle.
            </p>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Enterprise Security Architecture</h2>
            <p>
              Super Affiliate Manager AI enforces strict defense-in-depth protocols:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-bold text-white">Zero Open Redirects</span>
                <p className="text-slate-400">Strict URL destination validation prevents phishing or SSRF exploitation.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-bold text-white">SHA-256 Storage Integrity</span>
                <p className="text-slate-400">Every attachment is hashed and scanned before storage in isolated object buckets.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Enterprise Contact & Support Desk</h2>
            <p>
              Have questions regarding affiliate networks, custom enterprise integrations, or billing? Our team is available 24/7.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <Mail className="w-4 h-4" />
                <span className="font-mono font-bold">support@superaffiliate.ai</span>
              </div>
              <p className="text-slate-400">
                Dedicated response SLA: Under 2 hours for Elite and Enterprise tier customers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
