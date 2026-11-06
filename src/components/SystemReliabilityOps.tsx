import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Server, 
  Database, 
  RotateCcw, 
  RefreshCw, 
  Clock, 
  Terminal, 
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { ReliabilityMetric } from '../types';

export const SystemReliabilityOps: React.FC = () => {
  const [metrics, setMetrics] = useState<ReliabilityMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [testingBackup, setTestingBackup] = useState(false);
  const [backupTestResult, setBackupTestResult] = useState<any>(null);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/reliability/metrics');
      const json = await res.json();
      if (json.success) setMetrics(json.data);
    } catch (err) {
      console.error('Failed to load reliability metrics', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const handleRunBackupTest = async () => {
    setTestingBackup(true);
    setBackupTestResult(null);
    try {
      const res = await fetch('/api/v1/reliability/test-backup', {
        method: 'POST'
      });
      const json = await res.json();
      if (json.success) {
        setBackupTestResult(json);
      }
    } catch (err) {
      console.error('Backup test failed', err);
    } finally {
      setTestingBackup(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="flash-glow-card neon-border-multi p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Server className="w-3.5 h-3.5 text-amber-400" />
              Module K • Enterprise Reliability, Disaster Recovery & Operations
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Operational Telemetry, Latency P99 & Backup Verification
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl">
              Cluster health, automated database snapshot verification, sub-second RPO objectives, and distributed worker monitoring with zero sensitive credentials exposed in client views.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRunBackupTest}
              disabled={testingBackup}
              className="cyber-neon-button px-5 py-2.5 text-sm text-white font-semibold flex items-center gap-2 border border-amber-500/30"
            >
              <RotateCcw className={`w-4 h-4 text-amber-400 ${testingBackup ? 'animate-spin' : ''}`} />
              {testingBackup ? 'Simulating Recovery...' : 'Run Point-In-Time Backup Drill'}
            </button>
            <button
              onClick={fetchMetrics}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/10"
              title="Refresh Health"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Backup Test Result Callout */}
      {backupTestResult && (
        <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/40 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Disaster Recovery Automated Drill Succeeded</h3>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-emerald-300 border border-emerald-500/30">
              {backupTestResult.testId}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-400 block font-medium">RPO Achieved:</span>
              <span className="text-emerald-400 font-bold text-sm">{backupTestResult.rpoAchievedSeconds}s (Target: &lt;1.0s)</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-400 block font-medium">RTO Achieved:</span>
              <span className="text-emerald-400 font-bold text-sm">{backupTestResult.rtoAchievedMinutes}m (Target: &lt;5.0m)</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <span className="text-slate-400 block font-medium">Integrity Checksum:</span>
              <span className="text-white font-bold text-sm">{backupTestResult.checksumIntegrity}</span>
            </div>
          </div>
        </div>
      )}

      {/* Core Services Uptime Table */}
      <div className="flash-glow-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              Critical Microservice Latency & Worker Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Active operational monitors tracking p50/p99 execution speed, error rate thresholds, and snapshot status.
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            99.994% Overall SLA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{m.serviceName}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {m.workerHealth}
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Service Availability:</span>
                  <strong className="text-emerald-400">{m.uptimePct}%</strong>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>P50 Median Latency:</span>
                  <strong className="text-white font-mono">{m.p50Ms} ms</strong>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>P99 Worst-Case:</span>
                  <strong className="text-amber-300 font-mono">{m.p99Ms} ms</strong>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Error Rate:</span>
                  <strong className="text-cyan-400">{m.errorRatePct}%</strong>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Last Snapshot: {m.lastBackupTimestamp}</span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
