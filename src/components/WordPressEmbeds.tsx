import React, { useState } from 'react';
import { 
  FileCode2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Monitor, 
  Download,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const WordPressEmbeds: React.FC = () => {
  const shortcodes = [
    { code: '[affiliate_register]', title: 'Affiliate Registration Form', desc: 'Embeds the complete public affiliate registration and agreement form.' },
    { code: '[affiliate_login]', title: 'Affiliate Portal Login', desc: 'Secure login component for registered affiliates.' },
    { code: '[affiliate_dashboard]', title: 'Full Affiliate Dashboard', desc: 'Renders the complete mobile-friendly affiliate dashboard inside WordPress pages.' },
    { code: '[affiliate_referral_links]', title: 'Referral Link Generator', desc: 'Allows affiliates to generate and copy custom deep links.' },
    { code: '[affiliate_qr_code]', title: 'Interactive QR Code Card', desc: 'Generates and downloads the affiliate’s unique referral QR code.' },
    { code: '[affiliate_statistics]', title: 'Performance Statistics Bar', desc: 'Displays real-time clicks, conversions, and conversion rates.' },
    { code: '[affiliate_payouts]', title: 'Payout Center & History', desc: 'Shows approved earnings and allows affiliates to request payouts.' },
    { code: '[affiliate_leaderboard]', title: 'Gamified Leaderboard', desc: 'Highlights top performing affiliates by verified sales.' }
  ];

  const [selectedShortcode, setSelectedShortcode] = useState(shortcodes[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                WORDPRESS SHORTCODES & EMBEDS · V1.2.0
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono text-emerald-300">PLUGIN READY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              WordPress Shortcodes & Universal Embed Package
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Drop native shortcodes into any WordPress page, post, or block theme. For non-WordPress applications, embed via lightweight Web Components or REST API.
            </p>
          </div>

          <button
            onClick={() => alert('Downloaded super-affiliate-manager-ai-wp-v1.2.0.zip integration plugin package.')}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-extrabold text-xs transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
            <Download className="w-4 h-4" />
            <span>Download WP Plugin (.zip)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shortcode Selector Menu (1 col) */}
        <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Available Shortcode Library (8)
          </h3>
          <div className="space-y-1.5">
            {shortcodes.map(s => {
              const active = selectedShortcode.code === s.code;
              return (
                <button
                  key={s.code}
                  onClick={() => setSelectedShortcode(s)}
                  className={`w-full p-3 rounded-2xl text-left transition-all flex items-center justify-between cursor-pointer border ${
                    active 
                      ? 'bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                      : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-purple-300">{s.code}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{s.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Preview & Code Generator (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-purple-400 uppercase font-bold">Selected Shortcode</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedShortcode.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedShortcode.desc}</p>
              </div>

              <button
                onClick={() => handleCopy(selectedShortcode.code)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Shortcode'}</span>
              </button>
            </div>

            {/* Code Box */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-purple-500/30 font-mono text-sm text-purple-200">
              {selectedShortcode.code}
            </div>

            {/* Non-WordPress HTML Snippet */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-1.5">
                Universal HTML Embed (Non-WordPress Sites: Webflow, Shopify, Custom HTML)
              </span>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                {`<div id="super-affiliate-portal" data-shortcode="${selectedShortcode.code}"></div>\n<script src="https://aff.ai/embed.js" async defer></script>`}
              </div>
            </div>
          </div>

          {/* Interactive Live Component Preview */}
          <div className="p-6 rounded-3xl flash-glow-card border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Monitor className="w-4 h-4 text-emerald-400" />
                Live Client-Side Rendering Preview
              </span>
              <span className="font-mono text-[11px]">CSRF & Nonce Verified</span>
            </div>

            {/* Simulated Rendered Widget */}
            <div className="p-6 rounded-2xl bg-[#090d26] border border-white/10 text-center space-y-3">
              <span className="text-xs font-mono text-purple-300 uppercase font-bold">
                Rendering {selectedShortcode.code}
              </span>
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left space-y-2">
                <div className="text-xs font-bold text-white">Widget Preview: {selectedShortcode.title}</div>
                <div className="text-[11px] text-slate-300">
                  This component dynamically executes within WordPress, validating user sessions and pulling verified live stats directly from the SSOT API.
                </div>
                <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400 font-mono">
                  <span>API Latency: 24ms</span>
                  <span className="text-emerald-400">Status: 200 OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
