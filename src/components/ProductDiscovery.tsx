import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Filter, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Layers,
  DollarSign
} from 'lucide-react';
import { ProductItem } from '../types';
import { initialProducts } from '../data/mockData';

interface ProductDiscoveryProps {
  onLaunchCampaignForProduct: (productName: string) => void;
}

export const ProductDiscovery: React.FC<ProductDiscoveryProps> = ({ 
  onLaunchCampaignForProduct 
}) => {
  const [products] = useState<ProductItem[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPotential, setSelectedPotential] = useState<string>('All');
  const [selectedProductDetails, setSelectedProductDetails] = useState<ProductItem | null>(null);

  const categories = ['All', 'AI Software', 'Website Hosting', 'Developer Tools', 'Ecommerce', 'Cloud Services'];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPotential = selectedPotential === 'All' || p.conversionPotential === selectedPotential;
    return matchesSearch && matchesCategory && matchesPotential;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-yellow-400 uppercase font-semibold">
                INTELLIGENT AFFILIATE PRODUCT RESEARCH
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40">
                VERIFIED COMMISSION SCHEMAS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Product Discovery Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Research and compare high-converting products with verified merchant terms, average payout per conversion, 90-day cookie durability, and audience intent analytics.
            </p>
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
            placeholder="Search AI software, hosting, dev tools..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-yellow-500/50"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <Filter className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-slate-400">Vertical:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              {categories.map(c => <option key={c} value={c} className="bg-[#0b102b]">{c}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400">Potential:</span>
            <select
              value={selectedPotential}
              onChange={(e) => setSelectedPotential(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-[#0b102b]">All Potentials</option>
              <option value="Ultra High" className="bg-[#0b102b]">Ultra High</option>
              <option value="High" className="bg-[#0b102b]">High</option>
              <option value="Medium" className="bg-[#0b102b]">Medium</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header: Title, Category & Potential Badge */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {product.name}
                  </h3>
                  <span className="text-xs text-yellow-300 font-medium">
                    {product.brand} · {product.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 shrink-0 font-bold">
                  {product.conversionPotential}
                </span>
              </div>

              <p className="text-xs text-slate-300 mt-2.5 line-clamp-2">
                {product.description}
              </p>

              {/* Verified Financial Specs */}
              <div className="mt-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Commission Rate:</span>
                  <span className="font-bold text-emerald-400">{product.commissionRate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Average Payout:</span>
                  <span className="font-mono font-semibold text-white">${product.averagePayout.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Network / Platform:</span>
                  <span className="font-mono text-purple-300">{product.network}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cookie Lifetime:</span>
                  <span className="font-mono text-orange-300">{product.cookieDuration}</span>
                </div>
              </div>

              {/* Target Audience */}
              <div className="mt-3 text-[11px] text-slate-400">
                <span className="text-slate-500 font-mono">AUDIENCE: </span>
                {product.targetAudience}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="text-[10px] text-slate-500 truncate">
                {product.verifiedTimestamp}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLaunchCampaignForProduct(product.name)}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:brightness-110 text-xs font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Build Campaign</span>
                </button>

                <a
                  href={product.officialMerchantUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
                  title="Official Merchant Website"
                >
                  <span>Site</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
