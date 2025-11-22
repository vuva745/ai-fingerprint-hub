import { AlertTriangle, CheckCircle, Lock, FileText, Eye } from "lucide-react";
import networkGlobe from "@/assets/network-globe.png";

const SecurityIncidentLog = () => {
  const incidents = [
    { type: "critical", icon: "🔒", text: "Unautorized fiees scan", location: "11. Dubai Node OB", time: "13:15" },
    { type: "warning", icon: "👁️", text: "Sensor AEI-07 recalibratiea", time: "p1:02", detail: "↓-1.51m" },
    { type: "info", icon: "🔗", text: "NeoChain Proof accessful updateleted", time: "15:17" },
    { type: "warning", icon: "⚙️", text: "AEI Adaptive Thresholld upgraded to v 2.3", time: "15:40" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Security & Incident Log</h1>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">System Integrity</span>
                <span className="text-success font-semibold">99.9 %</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm font-semibold text-success">Critical Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Live Smt Sync</span>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">AI Review Mde</span>
            <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
              <span className="text-sm font-medium">Toggle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-success" />
          <span className="text-sm text-muted-foreground">NeoShield Integrity:</span>
          <span className="text-foreground font-semibold">99,9 %</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <span className="text-sm text-muted-foreground">Critical Alerts:</span>
          <span className="text-foreground font-semibold">3</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Export Audit Ledger:</span>
          <span className="text-foreground font-semibold">2,418</span>
        </div>
        <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors">
          AI Review Mode
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Event Feed */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">AI Security Event Feed</h3>
          
          <div className="space-y-3">
            {incidents.map((incident, idx) => (
              <div key={idx} className="bg-background rounded-lg p-3 hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{incident.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-foreground font-medium">{incident.text}</div>
                    {incident.location && (
                      <div className="text-xs text-muted-foreground mt-1">{incident.location}</div>
                    )}
                    {incident.detail && (
                      <div className="text-xs text-muted-foreground mt-1">{incident.detail}</div>
                    )}
                    <div className="text-xs text-muted-foreground mt-1">{incident.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column - Map */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden" style={{ minHeight: "500px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={networkGlobe} alt="Security map" className="w-full h-full object-cover opacity-60" />
            </div>
            
            {/* Incident Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-destructive/20 animate-ping absolute" />
                <div className="w-20 h-20 rounded-full bg-destructive flex items-center justify-center relative">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-destructive rounded-lg px-3 py-2 whitespace-nowrap">
                  <div className="text-sm font-semibold text-foreground">Dubai Node-09</div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-primary">Live Security Map</h3>
                <span className="px-3 py-1 bg-success/20 text-success border border-success rounded-lg text-xs font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  All nodes stable
                </span>
              </div>
            </div>
          </div>

          {/* Forensic Insight */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Forensic Insight</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">AI ANALYSIS:</div>
                  <div className="text-sm text-muted-foreground">Environmental brightness fluctuation</div>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">PROOF HASS:</div>
                  <div className="text-sm text-muted-foreground">Auto recallbration & multi-sensor verification</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Confidence</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono text-primary">0xAF12...</span>
                    <span className="px-2 py-1 bg-success/20 text-success text-xs rounded">NGØDM B MM</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <button className="w-full px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg text-sm font-medium transition-colors">
                    Re Analyze Incident
                  </button>
                  <button className="w-full px-4 py-2 bg-background hover:bg-muted border border-border rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Evidence Shapshot
                  </button>
                  <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors">
                    Generate Proof PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">AI Risk & Proof Timeline</h3>
              
              <div className="relative h-32 mb-6">
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1">
                  {[20, 30, 25, 40, 35, 50, 45, 60, 55, 50, 45, 40].map((height, idx) => (
                    <div key={idx} className="flex-1 relative group cursor-pointer">
                      <div 
                        className="bg-primary/30 hover:bg-primary/50 rounded-t transition-colors" 
                        style={{ height: `${height}%` }}
                      />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-card border border-border rounded px-2 py-1 text-xs font-semibold whitespace-nowrap">
                          {height}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between text-xs text-muted-foreground border-t border-border pt-2">
                <span>13:15</span>
                <span>13:12</span>
                <span>13:00</span>
                <span>13:15</span>
                <span>18:39</span>
                <span>14:16</span>
                <span>16:10</span>
                <span>14:39</span>
                <span>18:30</span>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">AEI Network: Opecitational</span>
                  <span className="text-foreground font-semibold">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next Sweep: 0.3.60 UT</span>
                  <span className="text-foreground font-semibold">UTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityIncidentLog;
