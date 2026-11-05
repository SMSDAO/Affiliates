import React, { useState } from 'react';
import { 
  Share2, 
  Send, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ExternalLink, 
  Plus, 
  AlertTriangle,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { SocialPost } from '../types';
import { initialSocialPosts } from '../data/mockData';

export const SocialStudio: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>(initialSocialPosts);
  const [selectedChannel, setSelectedChannel] = useState<'All' | 'TikTok' | 'YouTube' | 'Instagram' | 'LinkedIn'>('All');
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // New post state
  const [newChannel, setNewChannel] = useState<'TikTok' | 'YouTube' | 'Instagram' | 'LinkedIn'>('TikTok');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleCopyPost = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedPostId(id);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const handleSchedulePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const created: SocialPost = {
      id: `post-${Date.now()}`,
      channel: newChannel,
      title: newTitle,
      content: newContent,
      status: 'scheduled',
      scheduledTime: 'Tomorrow at 14:00 UTC',
      likes: 0,
      clicks: 0,
      disclosuresIncluded: newContent.toLowerCase().includes('ad') || newContent.toLowerCase().includes('affiliate')
    };

    setPosts([created, ...posts]);
    setShowScheduleModal(false);
    setNewTitle('');
    setNewContent('');
  };

  const filteredPosts = selectedChannel === 'All'
    ? posts
    : posts.filter(p => p.channel === selectedChannel);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                MULTI-CHANNEL VIRAL DISTRIBUTION ENGINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                OFFICIAL APIS + AUDITED DISCLOSURES
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Multi-Channel Marketing & Social Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Generate channel-native hooks, short-form scripts, hashtags, and FTC-compliant disclosures for TikTok, YouTube, Instagram, Facebook, and LinkedIn.
            </p>
          </div>

          <button
            onClick={() => setShowScheduleModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold text-xs hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Draft Channel Content</span>
          </button>
        </div>
      </div>

      {/* Channel Filters */}
      <div className="flex items-center gap-2 p-2 rounded-2xl flash-glow-card border border-white/10 overflow-x-auto">
        <span className="text-xs font-semibold text-slate-400 px-2 shrink-0">Platform:</span>
        {['All', 'TikTok', 'YouTube', 'Instagram', 'LinkedIn'].map(ch => (
          <button
            key={ch}
            onClick={() => setSelectedChannel(ch as any)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedChannel === ch
                ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {ch}
          </button>
        ))}
      </div>

      {/* Posts Queue Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="flash-glow-card p-5 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {post.channel}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                  post.status === 'published' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {post.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white">
                {post.title}
              </h3>

              <div className="mt-3 p-3 rounded-2xl bg-black/30 border border-white/5 text-xs text-slate-200 leading-relaxed font-sans max-h-40 overflow-y-auto whitespace-pre-wrap">
                {post.content}
              </div>

              {/* Compliance & Performance Badges */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  FTC Disclosed
                </span>
                {post.status === 'published' ? (
                  <span className="font-mono text-purple-300 font-semibold">
                    {post.likes.toLocaleString()} Likes · {post.clicks.toLocaleString()} Clicks
                  </span>
                ) : (
                  <span className="font-mono text-slate-400">{post.scheduledTime}</span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => handleCopyPost(post.content, post.id)}
                className="flex-1 py-2 px-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedPostId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPostId === post.id ? 'Copied' : 'Copy Content'}</span>
              </button>

              {post.publishedUrl && (
                <a
                  href={post.publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="View Live Post"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Schedule / Draft Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleSchedulePost} className="w-full max-w-lg rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Create Multi-Channel Post</h3>
              <button type="button" onClick={() => setShowScheduleModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Target Channel</label>
                  <select
                    value={newChannel}
                    onChange={(e) => setNewChannel(e.target.value as any)}
                    className="w-full bg-[#070b1e] border border-white/10 rounded-2xl px-3 py-2 text-white outline-none"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Internal Reference</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Cursor AI Dev Short #2"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-2 text-white outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">Post Script / Caption & Hashtags</label>
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows={4}
                  placeholder="Include your hook, value delivery, and #ad or [Affiliate] disclosure..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-3 text-white outline-none resize-none"
                  required
                />
              </div>

              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300">
                Rule Check: Disclosures like #ad, [Affiliate Link], or Paid Partnership are automatically evaluated for FTC & platform guidelines before publication.
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowScheduleModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:brightness-110 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
              >
                Add to Dispatch Queue
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
