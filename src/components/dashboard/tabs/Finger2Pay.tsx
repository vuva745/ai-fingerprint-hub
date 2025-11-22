import { useState } from "react";
import { CreditCard, CheckCircle, Clock, DollarSign } from "lucide-react";
import fingerprintGold from "@/assets/fingerprint-gold.png";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Finger2Pay = () => {
  const { toast } = useToast();
  const [authorized, setAuthorized] = useState(false);

  const handleAuthorize = () => {
    setAuthorized(true);
    toast({
      title: "Payment Authorized",
      description: "Transaction of $450.00 approved and logged to blockchain.",
    });
  };

  const handleBlock = () => {
    toast({
      title: "Transaction Blocked",
      description: "Payment authorization rejected and flagged for security review.",
      variant: "destructive",
    });
  };

  const transactions = [
    { id: "TX-89234", amount: 450.00, merchant: "Apple Store Dubai", time: "2 min ago", status: "completed" },
    { id: "TX-89233", amount: 125.50, merchant: "Starbucks JKIA", time: "15 min ago", status: "completed" },
    { id: "TX-89232", amount: 2340.00, merchant: "Emirates Airlines", time: "1 hour ago", status: "completed" },
    { id: "TX-89231", amount: 89.99, merchant: "Uber Nairobi", time: "3 hours ago", status: "pending" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">Finger2Pay</h1>
        <p className="text-muted-foreground">Secure biometric payment authentication</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Today's Transactions", value: "127", icon: CreditCard, color: "text-primary" },
          { label: "Total Volume", value: "$45,231", icon: DollarSign, color: "text-success" },
          { label: "Success Rate", value: "99.8%", icon: CheckCircle, color: "text-success" },
          { label: "Avg. Time", value: "1.2s", icon: Clock, color: "text-teal" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Authorization */}
        <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-primary">Payment Authorization</h2>
          
          <div className="bg-background rounded-xl p-6 flex flex-col items-center space-y-4">
            <div className="w-32 h-32">
              <img src={fingerprintGold} alt="Fingerprint scan" className="w-full h-full object-contain" />
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">$450.00</div>
              <div className="text-sm text-muted-foreground">Place finger to authorize</div>
            </div>

            <div className="w-full space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Merchant</span>
                <span className="text-foreground font-medium">Apple Store</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground font-medium">Dubai Mall</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Card</span>
                <span className="text-foreground font-medium">**** 4532</span>
              </div>
            </div>
          </div>

          <div className="bg-success/20 border border-success rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-success">Verified</div>
              <div className="text-xs text-muted-foreground">Match: 99.7%</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleAuthorize}
              disabled={authorized}
            >
              {authorized ? "AUTHORIZED" : "AUTHORIZE PAYMENT"}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-destructive text-destructive hover:bg-destructive/10"
              onClick={handleBlock}
              disabled={authorized}
            >
              BLOCK TRANSACTION
            </Button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Recent Transactions</h2>
          
          <div className="space-y-4">
            {transactions.map((tx, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{tx.merchant}</div>
                      <div className="text-sm text-muted-foreground">{tx.id} • {tx.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">${tx.amount.toFixed(2)}</div>
                    <div className={`text-xs font-semibold ${
                      tx.status === "completed" ? "text-success" : "text-warning"
                    }`}>
                      {tx.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Info */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Security Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Liveness Detection", desc: "AI-powered anti-spoofing" },
            { title: "Multi-Factor Auth", desc: "Fingerprint + PIN backup" },
            { title: "Blockchain Verified", desc: "Immutable transaction records" },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-foreground">{feature.title}</div>
                <div className="text-sm text-muted-foreground">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finger2Pay;
