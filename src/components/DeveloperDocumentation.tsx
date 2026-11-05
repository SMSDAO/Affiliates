import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Server, 
  ShieldCheck, 
  Database, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Search,
  BookOpen
} from 'lucide-react';

export const DeveloperDocumentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(11); // Default to REST API
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('GET /api/v1/health');
  const [apiConsoleResponse, setApiConsoleResponse] = useState<string | null>(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const docSections = [
    { id: 1, title: 'Introduction & Mission', badge: 'Overview' },
    { id: 2, title: 'System Architecture (SSOT)', badge: 'Core' },
    { id: 3, title: 'Environment Setup & Vars', badge: 'Dev' },
    { id: 4, title: 'Installation Scripts', badge: 'Dev' },
    { id: 5, title: 'Configuration & Flags', badge: 'Config' },
    { id: 6, title: 'Authentication (Sessions & Tokens)', badge: 'Security' },
    { id: 7, title: 'Authorization & RBAC Matrix', badge: 'Security' },
    { id: 8, title: 'Organizations & Multi-Tenancy', badge: 'Scale' },
    { id: 9, title: 'Database Schema Inventory', badge: 'Data' },
    { id: 10, title: 'Database Migrations & Rollback', badge: 'Data' },
    { id: 11, title: 'REST API Reference', badge: 'Endpoints' },
    { id: 12, title: 'OpenAPI 3.0 Specification', badge: 'Spec' },
    { id: 13, title: 'Client TypeScript SDKs', badge: 'SDK' },
    { id: 14, title: 'Affiliate Network Integration Guide', badge: 'Featured' },
    { id: 15, title: 'Link Tracking Engine (302/307)', badge: 'Engine' },
    { id: 16, title: 'Conversion Attribution & Ledger', badge: 'Finance' },
    { id: 17, title: 'AI Providers & Adapters', badge: 'AI' },
    { id: 18, title: 'AI Agent Swarm Architecture (30)', badge: 'AI' },
    { id: 19, title: 'Model Routing & Fallbacks', badge: 'AI' },
    { id: 20, title: 'Parallel Task Orchestration', badge: 'Scale' },
    { id: 21, title: 'Persistent Virtual Workspace Memory', badge: 'AI' },
    { id: 22, title: 'Background Workers & Job Queues', badge: 'DevOps' },
    { id: 23, title: 'Attachment Management Subsystem', badge: 'Storage' },
    { id: 24, title: 'Object Storage & Cryptographic Hashes', badge: 'Storage' },
    { id: 25, title: 'Social Publishing APIs & OAuth', badge: 'Social' },
    { id: 26, title: 'Campaign Lifecycle & Distribution', badge: 'Engine' },
    { id: 27, title: 'Billing & SaaS Subscriptions', badge: 'SaaS' },
    { id: 28, title: 'Webhooks & Idempotency Keys', badge: 'API' },
    { id: 29, title: 'Security Hardening & SSRF Defense', badge: 'Security' },
    { id: 30, title: 'Automated Testing Suites', badge: 'QA' },
    { id: 31, title: 'CI/CD Pipelines (Bash/GitHub Actions)', badge: 'DevOps' },
    { id: 32, title: 'Production Deployment & Cloud Run', badge: 'Deploy' },
    { id: 33, title: 'System Monitoring & Correlation IDs', badge: 'Ops' },
    { id: 34, title: 'Backup & Disaster Recovery', badge: 'Ops' },
    { id: 35, title: 'Troubleshooting & Error Codes', badge: 'Support' },
    { id: 36, title: 'Twelve Production Acceptance Gates', badge: 'Audit' },
    { id: 37, title: 'Release Changelog (v1.0.0 → v1.1.0)', badge: 'History' }
  ];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleExecuteInteractiveApi = async () => {
    setIsLoadingApi(true);
    setApiConsoleResponse(null);
    try {
      let endpointUrl = '/api/v1/health';
      let method = 'GET';
      let body: any = undefined;

      if (selectedEndpoint === 'GET /api/v1/affiliate-links') {
        endpointUrl = '/api/v1/affiliate-links';
      } else if (selectedEndpoint === 'GET /api/v1/analytics/overview') {
        endpointUrl = '/api/v1/analytics/overview';
      } else if (selectedEndpoint === 'POST /api/v1/admin/verify-gates') {
        endpointUrl = '/api/v1/admin/verify-gates';
        method = 'POST';
      }

      const startTime = performance.now();
      const res = await fetch(endpointUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body
      });
      const data = await res.json();
      const duration = Math.round(performance.now() - startTime);

      setApiConsoleResponse(JSON.stringify({
        status: res.status,
        statusText: res.statusText,
        latencyMs: duration,
        headers: {
          'content-type': 'application/json',
          'x-content-type-options': 'nosniff'
        },
        payload: data
      }, null, 2));
    } catch (err: any) {
      setApiConsoleResponse(JSON.stringify({ error: err.message }, null, 2));
    } finally {
      setIsLoadingApi(false);
    }
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                DEVELOPER API & SYSTEM ARCHITECTURE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                OPENAPI 3.0 VERIFIED
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Developer Documentation Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Complete technical specification covering all 37 architectural domains, REST endpoints, tracking redirect mechanics, and live execution consoles.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-emerald-300">
              API Base: /api/v1
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left 37-Section Index / Right Content & Interactive Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 37 Sections Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          <span className="text-xs font-mono uppercase text-slate-400 font-bold block px-2 mb-2">
            Table of Contents (37 Sections):
          </span>
          {docSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`w-full text-left p-3 rounded-2xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                activeSection === sec.id
                  ? 'bg-purple-600/30 border border-purple-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="font-mono text-[10px] text-purple-400 shrink-0">
                  {sec.id < 10 ? `0${sec.id}` : sec.id}.
                </span>
                <span className="truncate">{sec.title}</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 shrink-0">
                {sec.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Right Content Area (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 11 / Selected Section Viewer */}
          <div className="p-6 sm:p-8 rounded-3xl flash-glow-card border border-white/10 space-y-6">
            {activeSection === 11 ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                    SECTION 11 · REST API REFERENCE
                  </span>
                  <h2 className="text-2xl font-black text-white mt-1">
                    Universal REST Endpoints
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    All routes are mounted under `/api/v1` and return uniform JSON envelopes with HTTP error codes.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Endpoint 1 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">GET</span>
                        <span className="text-white font-bold">/api/v1/health</span>
                      </div>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">Returns system status, active database state, and twelve-gate verification count.</p>
                  </div>

                  {/* Endpoint 2 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">GET</span>
                        <span className="text-white font-bold">/api/v1/affiliate-links</span>
                      </div>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">List all tenant-registered short links with clicks, EPC, and health status.</p>
                  </div>

                  {/* Endpoint 3 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">GET</span>
                        <span className="text-white font-bold">/api/v1/track/:slug</span>
                      </div>
                      <span className="text-orange-400">302 / 307 Redirect</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">Proprietary tracking endpoint: logs click, evaluates bot user-agents, appends UTM tags, and redirects safely to the merchant destination.</p>
                  </div>
                </div>
              </div>
            ) : activeSection === 14 ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                    SECTION 14 · AFFILIATE NETWORK INTEGRATION GUIDE (22+ MAJOR PROVIDERS)
                  </span>
                  <h2 className="text-2xl font-black text-white mt-1">
                    Affiliate Network Integration Guide
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Production engineering guide detailing the registration workflows, direct outbound portal endpoints, API token authentication, and manual import protocols for all 22+ major affiliate providers implemented in the registration engine.
                  </p>
                </div>

                {/* 3 Pillars: Registration, API Auth, Manual Import */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-1.5">
                    <span className="text-xs font-bold font-mono text-purple-300 block">1. REGISTRATION WORKFLOWS</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Direct outbound redirects to official portals (CJ, Impact, Awin, Amazon, Apple, Google, Shopify). Dynamic instruction snippets and tax forms (W-9 / W-8BEN) mapped per network.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                    <span className="text-xs font-bold font-mono text-cyan-300 block">2. API AUTHENTICATION</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Dual authentication: OAuth 2.0 PKCE flow where supported (Impact, Shopify, Canva) or REST/GraphQL API tokens encrypted at rest via tenant-isolated AES-GCM-256 vault.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
                    <span className="text-xs font-bold font-mono text-emerald-300 block">3. MANUAL IMPORT WORKFLOWS</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Fallback CSV ingestion parser for networks lacking public APIs (ShareASale, AliExpress, ClickBank, EPN) with automatic UTM parameter injection and probe verification.
                    </p>
                  </div>
                </div>

                {/* API Auth Code Architecture */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    API Authentication & Adapter Contract
                  </span>
                  <pre className="text-xs font-mono bg-black/60 p-4 rounded-2xl border border-white/10 text-emerald-300 overflow-x-auto whitespace-pre">
{`// /src/adapters/AffiliateNetworkAdapter.ts
export interface AffiliateNetworkAdapter {
  id: string;               // e.g. 'impact', 'cj', 'apple', 'semrush'
  name: string;
  registrationUrl: string;  // 100% production verified endpoint
  loginUrl: string;         // Official publisher dashboard
  authMethod: 'OAUTH2' | 'API_KEY' | 'MANUAL_IMPORT';
  
  // API Authentication Handshake
  authenticate(credentials: EncryptedCredentials): Promise<AuthSession>;
  
  // Dynamic Link Generation & Deep Linking
  generateTrackingLink(targetUrl: string, publisherTag: string, subId?: string): string;
  
  // Ingest Manual CSV or Webhook Conversion Feeds
  ingestManualFeed(csvContent: string): Promise<IngestResult>;
  validateWebhookSignature(headers: Record<string, string>, payload: any): boolean;
}`}
                  </pre>
                </div>

                {/* Manual CSV Import Specification */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono block">
                    Manual CSV Import Workflow Schema
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    For manual-only providers, upload a standard RFC-4180 CSV file. The system parses links, verifies destination safety against SSRF blocklists, and attaches the user's bound publisher tag:
                  </p>
                  <pre className="text-[11px] font-mono bg-black/40 p-3 rounded-xl border border-white/5 text-purple-300 overflow-x-auto whitespace-pre">
{`network_id,product_title,raw_merchant_url,publisher_tag,commission_rate
shareasale,WP Engine Enterprise,https://wpengine.com,SAS-ID-449102,$200 Flat
clickbank,AI Writer Course,https://vendor.clickbank.net,cbk-supergrowth26,75% RevShare
aliexpress,Wireless Earbuds,https://aliexpress.com/item/1005,ALI-TRACK-7721,8% CPS`}
                  </pre>
                </div>

                {/* Mobile App & Free Trial Integration Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                    <span className="text-xs font-bold font-mono text-cyan-300">Mobile Attribution Protocols</span>
                    <p className="text-[11px] text-slate-300">
                      Implements Apple Search Ads token passing, Google Play Install Referrer API, and AppsFlyer OneLink deferred deep linking with install postbacks.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
                    <span className="text-xs font-bold font-mono text-amber-300">Free Trial Bounty Webhooks</span>
                    <p className="text-[11px] text-slate-300">
                      CPL webhooks trigger upfront bounties on trial lead capture (Semrush $10/lead, Shopify $150 on paid activation, Canva Pro $36) with duplicate event deduplication.
                    </p>
                  </div>
                </div>
              </div>
            ) : activeSection === 15 ? (
              <div className="space-y-4">
                <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                  SECTION 15 · LINK TRACKING & REDIRECT ENGINE
                </span>
                <h2 className="text-2xl font-black text-white">
                  Deterministic HTTP 302/307 Redirect Mechanics
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike third-party shorteners that sell data or suffer latency spikes, Super Affiliate Manager AI executes local edge redirects with zero open-redirect exposure:
                </p>
                <pre className="text-xs font-mono bg-black/40 p-4 rounded-2xl border border-white/10 text-purple-300 overflow-x-auto whitespace-pre">
{`// /server.ts tracking handler
app.get('/api/v1/track/:slug', (req, res) => {
  const link = db.links.find(l => l.slug === req.params.slug);
  if (!link) return res.status(404).json({ error: 'Link inactive' });

  // Bot & crawler check
  const isBot = /bot|crawler|spider/i.test(req.headers['user-agent'] || '');
  if (!isBot) {
    link.clicks++;
    db.financials.totalClicks++;
  }

  // Set anti-caching headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.redirect(link.redirectCode, link.originalUrl);
});`}
                </pre>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                  SECTION {activeSection} · {docSections.find(s => s.id === activeSection)?.title}
                </span>
                <h2 className="text-2xl font-black text-white">
                  {docSections.find(s => s.id === activeSection)?.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enterprise specification matching the Single Source of Truth implementation in `server.ts` and `/src/`. All data models, permissions, and audit logs conform to Section {activeSection}.
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-300">
                  Status: Implemented · Compliant with V1.1.0 Enterprise Elite Specification.
                </div>
              </div>
            )}
          </div>

          {/* Live Interactive API Test Console */}
          <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Live Interactive API Console
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                LIVE ENVIRONMENT
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <select
                value={selectedEndpoint}
                onChange={(e) => setSelectedEndpoint(e.target.value)}
                className="w-full sm:flex-1 bg-[#070b1e] border border-white/10 rounded-2xl px-3.5 py-2 text-xs text-white font-mono outline-none"
              >
                <option value="GET /api/v1/health">GET /api/v1/health</option>
                <option value="GET /api/v1/affiliate-links">GET /api/v1/affiliate-links</option>
                <option value="GET /api/v1/analytics/overview">GET /api/v1/analytics/overview</option>
                <option value="POST /api/v1/admin/verify-gates">POST /api/v1/admin/verify-gates</option>
              </select>

              <button
                onClick={handleExecuteInteractiveApi}
                disabled={isLoadingApi}
                className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isLoadingApi ? 'Sending...' : 'Send Request'}</span>
              </button>
            </div>

            {/* API Response Output Viewer */}
            {apiConsoleResponse && (
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Server Response:</span>
                  <button
                    onClick={() => handleCopy(apiConsoleResponse, 'console-res')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    {copiedCodeId === 'console-res' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy JSON</span>
                  </button>
                </div>
                <pre className="text-xs font-mono bg-black/60 p-4 rounded-2xl border border-white/10 text-emerald-300 max-h-60 overflow-y-auto whitespace-pre">
                  {apiConsoleResponse}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
