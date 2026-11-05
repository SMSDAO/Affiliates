import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  Layers, 
  Maximize2, 
  Film, 
  Video, 
  Sliders,
  Image as ImageIcon,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface CreativeAsset {
  id: string;
  title: string;
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:3';
  category: 'Banner' | 'YouTube Thumbnail' | 'Reels / TikTok' | 'Social Post' | 'Storyboard';
  dimensions: string;
  description: string;
  promptRecipe: string;
  accentColor: string;
}

export const CreativeAssetGenerator: React.FC = () => {
  const [activeRatio, setActiveRatio] = useState<'all' | '16:9' | '9:16' | '1:1' | '4:3'>('all');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [isGeneratingNew, setIsGeneratingNew] = useState(false);

  const assets: CreativeAsset[] = [
    {
      id: 'asset-1',
      title: 'Next-Gen AI Hosting High-Impact Banner',
      aspectRatio: '16:9',
      category: 'Banner',
      dimensions: '1920 × 1080 px',
      description: 'Cinematic wide-angle view of futuristic server racks with purple and orange fiber optic lines, holographic AI metrics floating in ambient fog, commercial grade lighting.',
      promptRecipe: 'Cinematic wide-angle view of futuristic enterprise cloud data center with sleek dark titanium server chassis, glowing purple and amber neon routing lines, high-contrast studio rim lighting, 8k commercial quality, clean architectural perspective.',
      accentColor: 'from-purple-600 via-indigo-600 to-slate-900'
    },
    {
      id: 'asset-2',
      title: 'TikTok & Reels Viral Hook Storyboard',
      aspectRatio: '9:16',
      category: 'Reels / TikTok',
      dimensions: '1080 × 1920 px',
      description: 'Vertical mobile-first asset with bold neon typography: "Why 90% of developers switched in 2026", high-contrast cyber glass backdrop.',
      promptRecipe: 'Vertical 9:16 cinematic smartphone visual showing glowing code snippets reflecting on dark tempered glass, dramatic volumetric purple rim light, ultra-modern tech aesthetic, zero noise.',
      accentColor: 'from-orange-600 via-pink-600 to-purple-900'
    },
    {
      id: 'asset-3',
      title: 'YouTube Click-Through Thumbnail Engine',
      aspectRatio: '16:9',
      category: 'YouTube Thumbnail',
      dimensions: '1280 × 720 px',
      description: 'Side-by-side benchmark showdown: Hostinger NVMe vs AWS Cloud, high-contrast typography, glowing performance speedometers.',
      promptRecipe: 'Dramatic side-by-side technology comparison card, split screen with neon amber speed glow vs icy blue latency line, bold clean layout, high saturation studio contrast, 4k resolution.',
      accentColor: 'from-yellow-500 via-orange-600 to-red-900'
    },
    {
      id: 'asset-4',
      title: 'Instagram Carousel Feature Badge',
      aspectRatio: '1:1',
      category: 'Social Post',
      dimensions: '1080 × 1080 px',
      description: 'Clean square card highlighting 30% recurring commission milestone with iridescent purple-green badge and verified checkmark.',
      promptRecipe: 'Minimalist luxury square graphic of an iridescent metallic emblem floating over dark slate glass with subtle laser caustic reflections, precision geometric typography, editorial grade.',
      accentColor: 'from-emerald-600 via-teal-700 to-slate-900'
    }
  ];

  const handleCopyPrompt = (recipe: string, id: string) => {
    navigator.clipboard.writeText(recipe);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const filteredAssets = activeRatio === 'all' 
    ? assets 
    : assets.filter(a => a.aspectRatio === activeRatio);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-pink-400 uppercase font-semibold">
                AI CREATIVE ASSET FACTORY
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40">
                MULTI-FORMAT EXPORT
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Creative Asset & Banner Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Generate standardized marketing assets across standard aspect ratios (16:9, 9:16, 1:1, 4:3), export verified prompt recipes for Imagen/Midjourney/Flux, and download optimized visual artifacts.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsGeneratingNew(true);
                setTimeout(() => setIsGeneratingNew(false), 1200);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold text-xs hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
            >
              <Sparkles className={`w-4 h-4 ${isGeneratingNew ? 'animate-spin' : ''}`} />
              <span>{isGeneratingNew ? 'Generating Variations...' : 'Generate New Variation'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Aspect Ratio Filter Strip */}
      <div className="flex items-center gap-2 p-2 rounded-2xl flash-glow-card border border-white/10 overflow-x-auto">
        <span className="text-xs font-semibold text-slate-400 px-2 shrink-0">Aspect Ratio:</span>
        {[
          { id: 'all', label: 'All Formats' },
          { id: '16:9', label: '16:9 (Hero / YouTube)' },
          { id: '9:16', label: '9:16 (TikTok / Reels)' },
          { id: '1:1', label: '1:1 (Square / Feed)' },
          { id: '4:3', label: '4:3 (Card / Review)' }
        ].map(r => (
          <button
            key={r.id}
            onClick={() => setActiveRatio(r.id as any)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeRatio === r.id
                ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="flash-glow-card rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Canvas Card */}
            <div className={`p-6 bg-gradient-to-br ${asset.accentColor} relative overflow-hidden flex flex-col justify-between min-h-[200px]`}>
              {/* Neon corner rim lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 font-bold">
                  {asset.aspectRatio} · {asset.dimensions}
                </span>
                <span className="text-xs font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-xl backdrop-blur-md">
                  {asset.category}
                </span>
              </div>

              <div className="relative z-10 my-4">
                <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                  {asset.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-md line-clamp-2">
                  {asset.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-white/70 relative z-10 pt-2 border-t border-white/10">
                <span>Asset ID: {asset.id}</span>
                <span className="font-mono">8K Ready · RGB Neon</span>
              </div>
            </div>

            {/* Prompt Recipe & Export Controls */}
            <div className="p-5 space-y-3 bg-[#0a0f26]/80 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-1">
                  Verified Diffusion / Imagen Prompt:
                </span>
                <p className="text-slate-300 font-mono text-[11px] bg-black/30 p-2.5 rounded-xl border border-white/5 line-clamp-3">
                  {asset.promptRecipe}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => handleCopyPrompt(asset.promptRecipe, asset.id)}
                  className="flex-1 py-2 px-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPromptId === asset.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPromptId === asset.id ? 'Prompt Copied' : 'Copy Prompt Recipe'}</span>
                </button>

                <button
                  onClick={() => {
                    alert(`Downloading production raster ${asset.dimensions} for ${asset.title}`);
                  }}
                  className="py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Download SVG</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
