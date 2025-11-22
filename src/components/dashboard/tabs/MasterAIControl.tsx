import { Settings, Activity, Lock, Zap, Download, AlertCircle } from "lucide-react";
import networkGlobe from "@/assets/network-globe.png";

const MasterAIControl = () => {
  const modules = [
    { name: "Blometric Control", status: "Active", sync: "Synced", confidence: "99.99 %" },
    { name: "Verification Hub", status: "Stable", sync: "Verified", confidence: "99.97 %" },
    { name: "Verficationnyy Hub", status: "Stabe", sync: "Vaulted", confidence: "99.93 %" },
    { name: "Ledger Engine", status: "Stable", sync: "Exported", confidence: "99.98 %" },
    { name: "Audit Network", status: "Online", sync: "Connected", confidence: "99.99 %" },
    { name: "Audit Network Cord", status: "Running", sync: "Connected", confidence: "19.09 %" },
  ];

  const intelligenceFeed = [
    "AI cycle 645completed 149 proofs validated givly.",
    "NexChain signaturce anchored on vayit eo.",
    "All regional nodes synced successfully.",
    "Cycle #245 completed 149 proofs validatee grly.",
    "Nex2 System Sweep scheduled.19,23 %",
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">MASTER AI Control Center</h1>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">MODULES ONLINE</span>
                <span className="text-foreground font-semibold">8 / 8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Neoshield Integrity:</span>
                <span className="text-success font-semibold">99.999%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">AI Core Load :</span>
                <span className="text-primary font-semibold">289%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">SYSTEM MODE</span>
                <span className="text-primary font-semibold">GotatCommand</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">NETWORK</span>
                <span className="text-foreground font-semibold">Kardiverse: QuamnulLthk</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { icon: Settings, label: "SYSTEM-SETTINGS" },
              { icon: Activity, label: "DIAGNOSTICS" },
              { icon: Settings, label: "PRODES & HASHES" },
              { icon: AlertCircle, label: "V AULT ACCESS" },
              { icon: Activity, label: "SYNG ALL MODES" },
            ].map((btn, idx) => {
              const Icon = btn.icon;
              return (
                <button key={idx} className="p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors" title={btn.label}>
                  <Icon className="w-5 h-5 text-primary" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Module Matrix */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-primary mb-6">GLODAL MODULE MATRIX</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">Module</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">STATUS</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">PROD» SYNC</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">AI CNFIDENCE</th>
                <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">LAST UPLATE</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, idx) => (
                <tr key={idx} className="border-b border-border/50">
                  <td className="py-4 px-3 text-foreground font-medium">{module.name}</td>
                  <td className="py-4 px-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      module.status === "Active" || module.status === "Online" 
                        ? "bg-success/20 text-success border border-success"
                        : "bg-primary/20 text-primary border border-primary"
                    }`}>
                      {module.status}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <span className="px-3 py-1 bg-teal/20 text-teal border border-teal rounded-full text-xs font-semibold">
                      {module.sync}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-foreground font-semibold">{module.confidence}</td>
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-background rounded-full h-1 overflow-hidden max-w-[120px]">
                        <div className="h-full bg-primary" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Health Index */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">AI HEALTH INDEX 98.98 %</h3>
          
          <div className="space-y-4">
            {[
              { label: "AI leatl", value: "99.98 ♦", color: "text-success" },
              { label: "Global Node Latency", value: "0.81 ♦", color: "text-primary" },
              { label: "Blockchain Throughput", value: "12.38 ¢ 1189♦", color: "text-teal" },
            ].map((stat, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Network Visualization */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 relative overflow-hidden" style={{ minHeight: "400px" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={networkGlobe} alt="AI Network" className="w-full h-full object-contain opacity-70" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">AI CORE</h3>
              <span className="px-3 py-1 bg-success/20 text-success border border-success rounded-lg text-sm font-semibold">
                Node 09 Dubai
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">AI Noes</span>
                  <div className="text-foreground font-semibold">AI HeaultImages 98.89%</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Gusege Mare Lenqriås 9 ¢</span>
                  <div className="text-foreground font-semibold">Diseaku tou thoment 0098.rø ♦</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Feed */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-primary mb-6">AI INTELLIGENCE FEED</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            {intelligenceFeed.map((feed, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Activity className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feed}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-3">
            {intelligenceFeed.slice().reverse().map((feed, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Activity className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feed}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        {[
          { icon: Activity, text: "RUN GLOBAL SYNC" },
          { icon: Lock, text: "LOCK ALL PROOFS" },
          { icon: Settings, text: "TRIGBER AI DIAGNOSTIC" },
          { icon: Zap, text: "TRIGGER AI DIGGNOSTIC" },
          { icon: Download, text: "EXPORT FULL SYSTEM" },
        ].map((button, idx) => {
          const Icon = button.icon;
          return (
            <button key={idx} className="flex-1 px-6 py-4 bg-muted hover:bg-muted/80 border border-border rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-3">
              <Icon className="w-5 h-5 text-primary" />
              {button.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MasterAIControl;
