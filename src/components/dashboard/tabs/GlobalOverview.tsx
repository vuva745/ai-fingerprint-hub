import { CheckCircle, FileText, Link, Menu } from "lucide-react";
import networkGlobe from "@/assets/network-globe.png";

const GlobalOverview = () => {
  const regionalNodes = [
    { id: "JKIA Airport", status: "Active", latency: "0.79 s" },
    { id: "Mombasa Hub", latency: "0.79 s" },
    { id: "Dubai Intl", latency: "0.89 s" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">Global Biometric Overview</h1>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {[
            { label: "Global AI Confidence", value: "99.4%" },
            { label: "System Latency", value: "0.72s" },
            { label: "Total Proofs Synced Today", value: "18,423" },
            { label: "Energy Efficiency", value: "97.8%" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Regional Nodes */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Regional Nodes</h3>
            <div className="space-y-4">
              {regionalNodes.map((node, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">{node.id}</div>
                    {node.status && (
                      <div className="text-xs text-success">{node.status}</div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{node.latency}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Fingerprint AEI</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">👆</span>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-primary">99.4 %</div>
                  <div className="text-xs text-muted-foreground">0. Active</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-teal">98.9 %</div>
                  <div className="text-xs text-muted-foreground">0.3 Recalibrations</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-2xl">😊</span>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-success">99.7 %</div>
                  <div className="text-xs text-muted-foreground">0.0 Anomalies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Network Visualization */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden" style={{ minHeight: "600px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={networkGlobe} alt="Global network" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Kardiverse Neural Core</h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors">
                    Generate Global Proof Report <FileText className="inline w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors">
                    AI <Link className="inline w-4 h-4 ml-1" /> Blockchain Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Global Control Center</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">A AEI Health Index:</span>
                  <span className="text-sm font-semibold text-success">99.8% (Stable)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Network Nodes:</span>
                  <span className="text-sm font-semibold text-foreground">12 /12 Orlline</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">AEI Health index:</span>
                  <span className="text-sm font-semibold text-success">99.8 %</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Netrow Nodes:</span>
                  <span className="text-sm font-semibold text-foreground">12/17 Online</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  <span>Global Control</span>
                </button>
                <div className="px-3 py-2 bg-destructive/20 text-destructive border border-destructive rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                </div>
                <span className="text-sm font-semibold">I rtve Mode</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">AI Command Console</h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">AI Neural Core ACEIve</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Neo AyScan mdel</span>
                </div>
              </div>

              <div className="mt-4 bg-background rounded-lg p-3 border border-border">
                <div className="text-xs font-mono text-muted-foreground mb-2">Node #09 synced new proof batch – 03:41 PM</div>
                <div className="text-xs font-mono text-muted-foreground">AI Neural Core recalibrated latency –2.3%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalOverview;
