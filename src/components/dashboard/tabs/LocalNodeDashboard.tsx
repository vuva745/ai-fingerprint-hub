import { Server, CheckCircle, AlertTriangle, Activity } from "lucide-react";
import networkGlobe from "@/assets/network-globe.png";

const LocalNodeDashboard = () => {
  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">JKIA AIRPORT NODE #07</h1>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Status</span>
            <span className="px-3 py-1 bg-success/20 text-success border border-success rounded-lg text-sm font-semibold">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Latency</span>
            <span className="text-success font-semibold">0.91s</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Proofs Synced</span>
            <span className="text-primary font-semibold">4,231</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Statistics */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">LOCAL SCAN STATISTICS</h3>
            <div className="space-y-3">
              {[
                { label: "Total Scans (24 h)", value: "2,847" },
                { label: "Average Match Score", value: "98.7 %" },
                { label: "Anomalies Detected", value: "0.2 %" },
                { label: "Proof Sync Time Avg", value: "0.84 s" },
              ].map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="text-foreground font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">VERIFIED ACTIVITY</h3>
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: "Scan #482 - Fingerprint verified @ Gate B", confidence: "99.1 %", color: "text-success" },
                { icon: Activity, text: "Eyescan match detected Liveness", confidence: "99.7 %", color: "text-teal" },
                { icon: Server, text: "Proof hash 0x3fD... uploaded successfully", color: "text-primary" },
              ].map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1">
                      <div className="text-sm text-foreground">{activity.text}</div>
                      {activity.confidence && (
                        <div className="text-xs text-muted-foreground mt-1">{activity.confidence}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center Column - Network Visualization */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden" style={{ minHeight: "500px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={networkGlobe} alt="Network visualization" className="w-full h-full object-cover opacity-80" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-primary">LOCAL AI NEURAL FEED</h3>
                <span className="px-3 py-1 bg-success/20 text-success border border-success rounded-lg text-xs font-semibold">
                  LIVE
                </span>
              </div>
              
              {/* Overlay Info Cards */}
              <div className="absolute top-20 left-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 max-w-xs">
                <div className="text-xs text-muted-foreground mb-1">Lobby</div>
                <div className="text-sm font-semibold text-foreground">Activity Detected</div>
              </div>
            </div>
          </div>

          {/* Incident Snapshot */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">INCIDENT SNAPSHOT</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: AlertTriangle, label: "3 AI re-calibrations detected", color: "text-warning" },
                { icon: AlertTriangle, label: "1 false scan flagged for review", color: "text-warning" },
                { icon: CheckCircle, label: "Energy load stabilized. 79.2% - 74.6 %", color: "text-success" },
              ].map((incident, idx) => {
                const Icon = incident.icon;
                return (
                  <div key={idx} className="bg-background rounded-lg p-4 flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${incident.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-foreground">{incident.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <span>Flag Incident</span>
              </button>
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Sync Proof</span>
              </button>
            </div>
          </div>

          {/* AI Decision Matrix */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">AI DECISION MATRIX</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">BIOMETRIC TYPE</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">CONFIDENCE</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">STATUS</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">DECISION</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">PROOF</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Fingerprint", confidence: "98.9 %", status: "Pass", decision: "Match", proof: "0x84D..." },
                    { type: "Eyescan", confidence: "99.3 %", status: "Pass", decision: "Match", proof: "0x77B..." },
                    { type: "Facescan", confidence: "92.1 %", status: "Pass", decision: "Review", proof: "0x11F..." },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-3 px-3 text-sm text-foreground font-medium">{row.type}</td>
                      <td className="py-3 px-3 text-sm text-foreground">{row.confidence}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-1 bg-success/20 text-success text-xs font-semibold rounded">
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-sm text-foreground">{row.decision}</td>
                      <td className="py-3 px-3 text-sm font-mono text-primary">{row.proof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalNodeDashboard;
