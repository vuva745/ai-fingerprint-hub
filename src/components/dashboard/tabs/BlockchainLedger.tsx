import { CheckCircle, ExternalLink, Download, Search, FileText } from "lucide-react";
import blockchainFlow from "@/assets/blockchain-flow.png";

const BlockchainLedger = () => {
  const ledgerEntries = [
    { ledger: "#1504", node: "JKIA #07", hash: "0xA91F...", timestamp: "16:11:44", status: "Locked" },
    { ledger: "#1505", node: "Dubai #09", hash: "0xC8B3...", timestamp: "16:12:52", status: "Synced" },
    { ledger: "#1506", node: "Mombasa", hash: "0xE71A...", timestamp: "16:14:01", status: "Pending" },
  ];

  const activities = [
    { text: "AI validated batch #1505 (confidence 99.97 %)", icon: "🔄" },
    { text: "Proof 0xCBa3... anchored on Node #11", icon: "✓" },
    { text: "Immutable lock confirmed – Vault 74 ative", icon: "🔒" },
    { text: "Infinity rotation 484/⁰º complete", icon: "✓" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">PROOF ARCHIVE & BLOCKCHAIN LEDGER</h1>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Total Proofs:</span>
            <span className="text-foreground font-semibold">28,084</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">Verified on NeoChain™:</span>
            <span className="text-success font-semibold">100 %</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">InteShield Uptime:</span>
            <span className="text-success font-semibold">99.99 %</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Audit Mode:</span>
            <span className="text-primary font-semibold">ON</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {[
          { icon: Download, text: "Export All Proofs" },
          { icon: CheckCircle, text: "AI Integrity Check" },
          { icon: ExternalLink, text: "NeoChain Explorer" },
          { icon: FileText, text: "Replay Audit" },
        ].map((button, idx) => {
          const Icon = button.icon;
          return (
            <button key={idx} className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{button.text}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Activity & Intelligence */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">AI Ledger Activity</h3>
            
            <div className="space-y-3">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <span className="text-lg flex-shrink-0">{activity.icon}</span>
                  <span className="text-sm text-foreground">{activity.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">IotcɔS ɔ Pmvfs</span>
                <CheckCircle className="w-4 h-4 text-success" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Vault</span>
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded border border-border bg-background" />
                  <div className="w-6 h-6 rounded border border-border bg-background" />
                  <div className="w-6 h-6 rounded border border-border bg-background" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">AI Proof Intelligence</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Top Nodes</div>
                <div className="text-foreground font-semibold">JKIA / Dubai/ Mombasa</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">AI Vetification Rate</div>
                <div className="text-2xl font-bold text-success">99.986 %</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">Proof Redundancy</div>
                <div className="text-foreground font-semibold">Triple-Mirror Vault Active</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">Average Latency</div>
                <div className="text-foreground font-semibold">0.62.s</div>
              </div>

              <button className="w-full px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                Audit Node
              </button>

              <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                View Chain Proof
              </button>
            </div>
          </div>
        </div>

        {/* Center & Right Columns - Ledger Matrix */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src={blockchainFlow} alt="Blockchain visualization" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-6">INFINITY LEDGER MATRIX</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">Ledger</th>
                      <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">Node</th>
                      <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">Proof Hash</th>
                      <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">TImestamp</th>
                      <th className="text-left py-3 px-3 text-sm font-semibold text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ledgerEntries.map((entry, idx) => (
                      <tr key={idx} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-3">
                          <span className="font-semibold text-foreground">{entry.ledger}</span>
                        </td>
                        <td className="py-4 px-3 text-foreground">{entry.node}</td>
                        <td className="py-4 px-3">
                          <span className="font-mono text-primary">{entry.hash}</span>
                        </td>
                        <td className="py-4 px-3 text-muted-foreground">{entry.timestamp}</td>
                        <td className="py-4 px-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            entry.status === "Locked" ? "bg-success/20 text-success border border-success" :
                            entry.status === "Synced" ? "bg-teal/20 text-teal border border-teal" :
                            "bg-warning/20 text-warning border border-warning"
                          }`}>
                            {entry.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground" />
                ))}
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="bg-success/10 border border-success rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-success">Integrity Verified 100% (Ledger #1506)</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Next Sweep</span>
                  <div className="text-foreground font-semibold">16:50 UTC</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Mirror Node #12</span>
                  <div className="text-success font-semibold">Active</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-1">Audit Link:</div>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-mono flex items-center gap-2">
                  https://ledger.kardiverse.ai/1506
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainLedger;
