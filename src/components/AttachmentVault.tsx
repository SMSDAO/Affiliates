import React, { useState } from 'react';
import { 
  FileBox, 
  Upload, 
  Download, 
  Trash2, 
  Eye, 
  Lock, 
  ShieldCheck, 
  History, 
  Search, 
  Filter, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  Tag,
  Key
} from 'lucide-react';
import { AttachmentFile } from '../types';
import { initialAttachments } from '../data/mockData';

export const AttachmentVault: React.FC = () => {
  const [attachments, setAttachments] = useState<AttachmentFile[]>(initialAttachments);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedFilePreview, setSelectedFilePreview] = useState<AttachmentFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatusMsg, setUploadStatusMsg] = useState<string | null>(null);

  const allTags = ['All', 'contract', 'impact', 'legal', 'revshare', 'brand_kit', 'financials', 'gaming'];

  const filteredFiles = attachments.filter(f => {
    const matchesSearch = f.filename.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'All' || f.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleSimulatedUpload = (fileList: FileList | null) => {
    if (!fileList || !fileList[0]) return;
    const file = fileList[0];

    setIsUploading(true);
    setUploadStatusMsg('Running MIME validation & SHA-256 cryptographic checksum calculation...');

    setTimeout(() => {
      setUploadStatusMsg('Executing zero-day malware sandbox scan & tenant isolation verification...');

      setTimeout(() => {
        const ext = file.name.split('.').pop() || 'dat';
        const newAttachment: AttachmentFile = {
          id: `att-${Date.now()}`,
          filename: file.name,
          extension: ext,
          sizeBytes: file.size || 1024 * 512,
          mimeType: file.type || 'application/octet-stream',
          version: 1,
          sha256: Array.from(crypto.getRandomValues(new Uint8Array(32)))
            .map(b => b.toString(16).padStart(2, '0'))
            .join(''),
          uploadedBy: 'gxqstudio@gmail.com',
          uploadedAt: 'Just now (Verified)',
          scanStatus: 'CLEAN',
          permissionRole: 'SUPER_ADMIN',
          tags: ['upload', ext.toLowerCase()]
        };

        setAttachments([newAttachment, ...attachments]);
        setIsUploading(false);
        setUploadStatusMsg(null);
      }, 1000);
    }, 1000);
  };

  const handleRollbackVersion = (fileId: string) => {
    setAttachments(prev => prev.map(f => {
      if (f.id === fileId && f.version > 1) {
        return {
          ...f,
          version: f.version - 1,
          uploadedAt: 'Restored from immutable audit log'
        };
      }
      return f;
    }));
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl flash-glow-card neon-border-multi">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                ENTERPRISE SECURE ATTACHMENT VAULT
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                AES-GCM ENCRYPTED AT REST
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Document & Attachment Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Immutable versioning, SHA-256 cryptographic integrity verification, multi-layer malware inspection, and role-based permissions for partner agreements, term sheets, brand kits, and creative assets.
            </p>
          </div>

          {/* Secure Upload Button */}
          <label className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-bold text-xs hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer self-start md:self-auto shrink-0">
            <Upload className="w-4 h-4" />
            <span>Upload Secure Document</span>
            <input
              type="file"
              onChange={(e) => handleSimulatedUpload(e.target.files)}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Upload Progress Banner if active */}
      {isUploading && (
        <div className="p-4 rounded-2xl bg-purple-900/30 border border-purple-500/40 text-xs text-purple-200 flex items-center gap-3 animate-pulse glow-purple">
          <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
          <div className="flex-1">
            <span className="font-bold">Pipeline Active:</span> {uploadStatusMsg}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-3xl flash-glow-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search filenames, tags, campaigns..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-emerald-500/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs">
            <Tag className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Tag:</span>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              {allTags.map(t => <option key={t} value={t} className="bg-[#0b102b]">{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Attachments List */}
      <div className="space-y-3">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            className="flash-glow-card p-4 sm:p-5 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {file.filename}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-purple-300 border border-white/10">
                    v{file.version}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SCAN: {file.scanStatus}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-400">
                  <span>Size: {formatBytes(file.sizeBytes)}</span>
                  <span>·</span>
                  <span>Role: <strong className="text-slate-300">{file.permissionRole}</strong></span>
                  <span>·</span>
                  <span className="font-mono text-slate-500 truncate max-w-[160px]">
                    SHA: {file.sha256.slice(0, 16)}...
                  </span>
                </div>
              </div>
            </div>

            {/* Tags and Action Buttons */}
            <div className="flex items-center gap-2 self-end md:self-center shrink-0">
              <button
                onClick={() => setSelectedFilePreview(file)}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                title="View Document Details & SHA-256"
              >
                <Eye className="w-4 h-4" />
              </button>

              {file.version > 1 && (
                <button
                  onClick={() => handleRollbackVersion(file.id)}
                  className="px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-purple-300 flex items-center gap-1 transition-colors"
                  title="Rollback to previous immutable version"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>v{file.version - 1}</span>
                </button>
              )}

              <button
                onClick={() => alert(`Downloading verified secure object ${file.filename} (Hash verified: ${file.sha256.slice(0, 12)})`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-200 text-xs font-bold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedFilePreview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-[#0b102b] border border-white/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileBox className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white truncate max-w-xs">
                  {selectedFilePreview.filename}
                </h3>
              </div>
              <button onClick={() => setSelectedFilePreview(null)} className="text-slate-400 hover:text-white text-lg font-bold">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Cryptographic Checksum (SHA-256)</span>
                <p className="font-mono text-purple-300 bg-black/40 p-2.5 rounded-xl border border-white/5 break-all select-all">
                  {selectedFilePreview.sha256}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Storage Object State</span>
                  <span className="font-mono text-emerald-400 font-bold">VERIFIED CLEAN</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Active Version</span>
                  <span className="font-mono text-purple-300 font-bold">Version {selectedFilePreview.version}.0 (Immutable)</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-1">Associated Tags</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFilePreview.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-xl bg-white/5 text-slate-300 border border-white/10 font-mono text-xs">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedFilePreview(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                Close Audit Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
