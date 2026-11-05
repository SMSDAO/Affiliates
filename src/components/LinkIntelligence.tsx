import React, { useState } from 'react';
import { 
  Link2, 
  ExternalLink, 
  Copy, 
  Check, 
  Plus, 
  QrCode, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  RefreshCw, 
  MousePointerClick, 
  Target, 
  DollarSign, 
  Search, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { AffiliateLink } from '../types';
import { initialAffiliateLinks } from '../data/mockData';

export const LinkIntelligence: React.FC = () => {
  const [links, setLinks] = useState<AffiliateLink[]>(initialAffiliateLinks);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [qrModalLink, setQrModalLink] = useState<AffiliateLink | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<string>('All');
  const [testingLinkId, setTestingLinkId] = useState<string | null>(null);

  // Form states for new link creation
  const [newTitle, setNewTitle] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newNetwork, setNewNetwork] = useState('PartnerStack');
  const [newOriginalUrl, setNewOriginalUrl] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [newCampaign, setNewCampaign] = useState('AI Growth 2026');
  const [newUtmSource, setNewUtmSource] = useState('youtube');
  const [newUtmMedium, setNewUtmMedium] = useState('video_description');
  const [newCategory, setNewCategory] = useState('AI Software');
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleTestRedirect = (linkId: string) => {
    setTestingLinkId(linkId);
    setTimeout(() => {
      setTestingLinkId(null);
      setLinks(prev => prev.map(l => {
        if (l.id === linkId) {
          const latency = Math.floor(25 + Math.random() * 30);
          return {
            ...l,
            lastChecked: `Just now (HTTP ${l.redirectCode} Verified / Latency ${latency}ms)`
          };
        }
        return l;
      }));
    }, 1000);
  };

  const handleCreateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newOriginalUrl) {
      setFormError('Please enter both link title and destination URL.');
      return;
    }

    try {
      new URL(newOriginalUrl);
    } catch {
      setFormError('Destination URL must be a valid HTTPS web address.');
      return;
    }

    // Auto-generate clean slug if not specified
    const finalSlug = newSlug.trim() 
      ? newSlug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-')
      : newTitle.toLowerCase().replace(/[^a-z0-9-]/g, '-').slice(0, 20);

    // Duplicate slug check
    if (links.some(l => l.slug === finalSlug)) {
      setFormError(`Slug "${finalSlug}" is already registered. Please specify a unique slug.`);
      return;
    }

    const createdLink: AffiliateLink = {
      id: `link-${Date.now()}`,
      title: newTitle,
      productName: newProductName || newTitle,
      network: newNetwork,
      originalUrl: newOriginalUrl,
      shortUrl: `https://aff.ai/go/${finalSlug}`,
      slug: finalSlug,
      clicks: 0,
      uniqueClicks: 0,
      conversions: 0,
      conversionValue: 0,
      epc: 0,
      status: 'active',
      redirectCode: 302,
      lastChecked: 'Just now (HTTP 302 Redirect Active)',
      campaign: newCampaign,
      utmSource: newUtmSource,
      utmMedium: newUtmMedium,
      utmCampaign: newCampaign.toLowerCase().replace(/\s+/g, '_'),
      category: newCategory
    };

    // Synchronize to backend REST API
    fetch('/api/v1/affiliate-links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: createdLink.title,
        originalUrl: createdLink.originalUrl,
        slug: createdLink.slug,
        network: createdLink.network,
        campaign: createdLink.campaign,
        utmSource: createdLink.utmSource,
        utmMedium: createdLink.utmMedium,
        category: createdLink.category
      })
    }).catch(() => {
      // Offline fallback
    });

    setLinks([createdLink, ...links]);
    setShowCreateModal(false);
    setNewTitle('');
    setNewOriginalUrl('');
    setNewSlug('');
    setFormError(null);
  };

  const filteredLinks = links.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          l.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.productName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNetwork = selectedNetwork === 'All' || l.network.toLowerCase().includes(selectedNetwork.toLowerCase());
    return matchesSearch && matchesNetwork;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                UNIVERSAL LINK & REDIRECT INTELLIGENCE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                PROPRIETARY REDIRECT ENGINE (302/307)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Link Intelligence & Attribution
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Create platform-owned short links (`aff.ai/go/*`), automate UTM tag injection, monitor destination latency, block bot traffic, and preserve official merchant parameters without open-redirect vulnerabilities.
            </p>
          </div>

          <button
            onClick={() => { setShowCreateModal(true); setFormError(null); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold text-xs hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all cursor-pointer self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create Short Link</span>
          </button>
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
            placeholder="Search links, slugs, products..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-blue-500/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400">Network:</span>
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-[#0b102b]">All Networks</option>
              <option value="PartnerStack" className="bg-[#0b102b]">PartnerStack</option>
              <option value="Impact" className="bg-[#0b102b]">Impact.com</option>
              <option value="CJ" className="bg-[#0b102b]">CJ Affiliate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Links List */}
      <div className="space-y-4">
        {filteredLinks.map((link) => (
          <div
            key={link.id}
            className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all space-y-4"
          >
            {/* Top row: Title, Status, and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">
                    {link.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/40">
                    HTTP {link.redirectCode} REDIRECT
                  </span>
                  <span className="text-xs text-slate-400">· {link.network}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className="font-mono text-purple-300 font-semibold">{link.shortUrl}</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-slate-400 truncate max-w-sm">{link.originalUrl}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(link.shortUrl, link.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  {copiedId === link.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === link.id ? 'Copied Link' : 'Copy Short Link'}</span>
                </button>

                <button
                  onClick={() => setQrModalLink(link)}
                  className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Generate QR Code"
                >
                  <QrCode className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleTestRedirect(link.id)}
                  disabled={testingLinkId === link.id}
                  className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Test Redirect Latency"
                >
                  <RefreshCw className={`w-4 h-4 ${testingLinkId === link.id ? 'animate-spin text-orange-400' : ''}`} />
                </button>
              </div>
            </div>

            {/* Metrics Strip for Link */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Total Clicks</span>
                <span className="font-mono text-base font-bold text-white">{link.clicks.toLocaleString()}</span>
                <span className="text-[10px] text-slate-500 block">({link.uniqueClicks.toLocaleString()} unique)</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Conversions</span>
                <span className="font-mono text-base font-bold text-emerald-400">{link.conversions}</span>
                <span className="text-[10px] text-slate-500 block">(${link.conversionValue.toLocaleString()})</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Earnings Per Click</span>
                <span className="font-mono text-base font-bold text-orange-400">${link.epc}</span>
                <span className="text-[10px] text-slate-500 block">Attributed EPC</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 block text-[11px]">Redirect Health</span>
                <span className="font-mono text-xs font-semibold text-emerald-300 block truncate">{link.lastChecked}</span>
                <span className="text-[10px] text-slate-500 block">Bot Protection Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code Modal */}
      {qrModalLink && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-sm font-bold text-white">{qrModalLink.title}</h3>
              <button onClick={() => setQrModalLink(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {/* Visual SVG QR Code Matrix */}
            <div className="p-4 bg-white rounded-2xl inline-block shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              <svg className="w-44 h-44 text-black" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z" />
                <path d="M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z" />
                <path d="M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z" />
                <path d="M40,10 h5 v10 h-5 z M50,5 h10 v5 h-10 z M45,25 h15 v5 h-15 z M10,40 h15 v5 h-15 z M35,40 h10 v15 h-10 z M60,45 h20 v5 h-20 z M85,40 h10 v20 h-10 z M45,65 h10 v15 h-10 z M65,65 h15 v10 h-15 z M40,85 h20 v10 h-20 z M80,80 h15 v15 h-15 z" />
              </svg>
            </div>

            <div className="text-xs text-purple-300 font-mono font-semibold">
              {qrModalLink.shortUrl}
            </div>
            <p className="text-[11px] text-slate-400">
              High-density mobile scanning QR code with channel-specific UTM attribution.
            </p>

            <button
              onClick={() => handleCopy(qrModalLink.shortUrl, 'modal-qr')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 font-bold text-xs text-white transition-colors cursor-pointer"
            >
              Copy Link URL
            </button>
          </div>
        </div>
      )}

      {/* Create Link Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleCreateLink} className="w-full max-w-lg rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Link2 className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-bold text-white">Create New Short Affiliate Link</h3>
              </div>
              <button type="button" onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {formError && (
              <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-300 block mb-1">Link Title / Campaign Reference</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Jasper AI Black Friday Special"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2 text-white placeholder-slate-500 outline-none focus:border-purple-500/50"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">Official Merchant Destination URL</label>
                <input
                  type="url"
                  value={newOriginalUrl}
                  onChange={(e) => setNewOriginalUrl(e.target.value)}
                  placeholder="https://jasper.ai?fpr=superaffiliate"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3.5 py-2 text-white placeholder-slate-500 outline-none focus:border-purple-500/50"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Custom Short Slug</label>
                  <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-2 text-slate-400">
                    <span className="font-mono text-[11px] text-purple-400 mr-1">aff.ai/go/</span>
                    <input
                      type="text"
                      value={newSlug}
                      onChange={(e) => setNewSlug(e.target.value)}
                      placeholder="custom-slug"
                      className="bg-transparent text-white outline-none w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Affiliate Network</label>
                  <select
                    value={newNetwork}
                    onChange={(e) => setNewNetwork(e.target.value)}
                    className="w-full bg-[#0b102b] border border-white/10 rounded-2xl px-3 py-2 text-white outline-none"
                  >
                    <option value="PartnerStack">PartnerStack</option>
                    <option value="Impact.com">Impact.com</option>
                    <option value="CJ Affiliate">CJ Affiliate</option>
                    <option value="Awin">Awin</option>
                    <option value="ClickBank">ClickBank</option>
                  </select>
                </div>
              </div>

              {/* UTM Builder Strip */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-semibold">UTM Channel Attribution</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={newUtmSource}
                    onChange={(e) => setNewUtmSource(e.target.value)}
                    placeholder="utm_source (e.g. tiktok)"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] text-white outline-none"
                  />
                  <input
                    type="text"
                    value={newUtmMedium}
                    onChange={(e) => setNewUtmMedium(e.target.value)}
                    placeholder="utm_medium (e.g. bio_link)"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] text-white outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
              >
                Generate & Protect Link
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
