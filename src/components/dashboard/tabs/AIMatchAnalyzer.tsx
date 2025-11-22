import fingerprintGold from "@/assets/fingerprint-gold.png";
import { CheckCircle, Circle } from "lucide-react";

const AIMatchAnalyzer = () => {
  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">AI Match Analyzer</h1>
          <p className="text-muted-foreground">Real-time biometric comparison and verification</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-card border border-border rounded-lg">
            <span className="text-sm text-muted-foreground">System Health</span>
            <div className="text-2xl font-bold text-success">98%</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section - AI Match */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-primary">AI MATCH</h2>
          
          {/* Fingerprint Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background rounded-xl p-4 flex flex-col items-center">
              <div className="text-sm text-muted-foreground mb-2">Template</div>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src={fingerprintGold} alt="Template fingerprint" className="w-full h-full object-contain opacity-60" />
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-4 flex flex-col items-center relative">
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-success text-success-foreground text-xs font-bold rounded">LIVE</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">Live Scan</div>
              <div className="w-32 h-32 flex items-center justify-center">
                <img src={fingerprintGold} alt="Live fingerprint" className="w-full h-full object-contain animate-pulse" />
              </div>
            </div>
          </div>

          {/* Confidence Matrix */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold">Confidence Matrix</h3>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Match Score</div>
                <div className="text-4xl font-bold text-primary">98.7</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Confidence</div>
                <div className="text-4xl font-bold text-primary">92.4%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Status</div>
                <div className="text-2xl font-bold text-warning">LOW</div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-foreground font-medium">AI: Fingerprint match confirmed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Audit Trail */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-primary">Audit Trail</h2>
          
          {/* Timeline */}
          <div className="space-y-4">
            {[
              { label: "Proof generated", status: "complete" },
              { label: "Verified", status: "complete" },
              { label: "Synced to Node 07", status: "current" },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {step.status === "complete" ? (
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-primary flex-shrink-0" />
                )}
                <span className={step.status === "current" ? "text-primary font-semibold" : "text-foreground"}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Verification Badge */}
          <div className="bg-background border-2 border-success rounded-2xl p-6 text-center space-y-3">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-success flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
            <div className="text-xl font-bold text-success">PROOF VERIFIED</div>
            <div className="text-sm text-muted-foreground">ON NEOCHAIN™</div>
            <CheckCircle className="w-8 h-8 mx-auto text-success" />
          </div>
        </div>
      </div>

      {/* Bottom Section - Detailed Matrix */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary">CONFIDENCE MATRIX</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Match Score</div>
            <div className="text-5xl font-bold text-primary">98.7</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">Confidence</div>
            <div className="text-5xl font-bold text-primary">92.4%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">Anomaly Risk</div>
            <div className="text-3xl font-bold text-warning">LOW</div>
          </div>
        </div>

        <div className="bg-background rounded-lg p-4 mt-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-foreground font-medium">AI: Fingerprint match confirmed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMatchAnalyzer;
