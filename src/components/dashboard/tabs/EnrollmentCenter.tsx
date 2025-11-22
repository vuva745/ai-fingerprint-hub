import fingerprintGold from "@/assets/fingerprint-gold.png";
import { CheckCircle, Circle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnrollmentCenter = () => {
  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">FINGERPRINT ENROLLMENT CENTER</h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="px-3 py-1 bg-success/20 text-success border border-success rounded-lg flex items-center gap-2">
            <Circle className="w-3 h-3 fill-success" />
            <span className="text-sm font-medium">AEI Module Active</span>
          </div>
          <span className="text-muted-foreground">0.S confidence</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Enrollment Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">ID</label>
                <input 
                  type="text" 
                  value="NEO-002918"
                  className="w-full mt-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Device-ID</label>
                <select className="w-full mt-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                  <option>TAB-AX12</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Finger</label>
              <select className="w-full mt-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                <option>Right Index</option>
              </select>
            </div>

            {/* Scanning Animation */}
            <div className="bg-background rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-64 h-64 mb-6">
                <img 
                  src={fingerprintGold} 
                  alt="Scanning fingerprint" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-primary rounded-full animate-spin" 
                       style={{ 
                         borderTopColor: 'transparent',
                         borderRightColor: 'transparent',
                         animationDuration: '3s'
                       }} 
                  />
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-xl font-semibold text-foreground">Analyzing Fingerprint...</div>
                
                <div className="space-y-1 text-left mt-4">
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">SCAN DETECTED</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Circle className="w-4 h-4" />
                    <span className="text-sm">LIVENESS CHECK</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Circle className="w-4 h-4" />
                    <span className="text-sm">PROOF STORED</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <Circle key={i} className="w-2 h-2 fill-muted-foreground text-muted-foreground" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Match Confirmation */}
            <div className="bg-background border-2 border-success rounded-lg p-4">
              <div className="text-xl font-bold text-foreground mb-2">FINGERPRINT MATCH CONFIRMED</div>
              <div className="flex gap-4 mt-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  ENROLL
                </Button>
                <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                  VALIDATE
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Status & AI Log */}
        <div className="space-y-6">
          {/* Status Panel */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">Status & AI Hints</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Circle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground">ISO 16784-2 template (Storage)</span>
              </div>
              <div className="flex items-start gap-2">
                <Circle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground">Approved liveness test: approval</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 text-warning flex-shrink-0" />
                <span className="text-foreground">Fraud alert: toi duplicate fingerp</span>
              </div>
              <div className="flex items-start gap-2">
                <Circle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground">Best practice-tips</span>
              </div>
              <div className="flex items-start gap-2">
                <Circle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground">Recommened tip. best-pracuma</span>
              </div>
            </div>
          </div>

          {/* AI Log */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">AI Log</h3>
            
            <div className="space-y-2 font-mono text-xs">
              <div className="text-muted-foreground">01.21 12.47 <span className="text-warning">15c8500</span> proplF-1.0 8</div>
              <div className="text-muted-foreground">01.21 12.47 order:1..hash: c22255</div>
              <div className="text-muted-foreground mt-4">AI event: + αc_øøɔɔøø⊕- 0 ā conn</div>
              <div className="text-foreground mt-2">AI proof hash created</div>
              <div className="text-muted-foreground mt-4">AT 72+ATF  JL TECH TI32 CED</div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-background border-2 border-success rounded-2xl p-6 text-center space-y-3">
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-success flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <div className="text-lg font-bold text-success">VERIFIED ON</div>
            <div className="text-sm text-muted-foreground">NEOCHAIN™</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCenter;
