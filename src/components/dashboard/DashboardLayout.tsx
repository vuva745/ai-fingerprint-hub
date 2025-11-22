import { useState } from "react";
import { 
  Fingerprint, 
  UserPlus, 
  Activity, 
  CreditCard, 
  Server, 
  Globe, 
  Shield, 
  Database,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import AIMatchAnalyzer from "./tabs/AIMatchAnalyzer";
import EnrollmentCenter from "./tabs/EnrollmentCenter";
import DevicePerformance from "./tabs/DevicePerformance";
import Finger2Pay from "./tabs/Finger2Pay";
import LocalNodeDashboard from "./tabs/LocalNodeDashboard";
import GlobalOverview from "./tabs/GlobalOverview";
import SecurityIncidentLog from "./tabs/SecurityIncidentLog";
import BlockchainLedger from "./tabs/BlockchainLedger";
import MasterAIControl from "./tabs/MasterAIControl";

const tabs = [
  { id: "ai-match", label: "AI Match Analyzer", icon: Fingerprint, component: AIMatchAnalyzer },
  { id: "enrollment", label: "Enrollment Center", icon: UserPlus, component: EnrollmentCenter },
  { id: "device", label: "Device Performance", icon: Activity, component: DevicePerformance },
  { id: "finger2pay", label: "Finger2Pay", icon: CreditCard, component: Finger2Pay },
  { id: "local-node", label: "Local Node Dashboard", icon: Server, component: LocalNodeDashboard },
  { id: "global", label: "Global Overview", icon: Globe, component: GlobalOverview },
  { id: "security", label: "Security & Incident Log", icon: Shield, component: SecurityIncidentLog },
  { id: "blockchain", label: "Blockchain Ledger", icon: Database, component: BlockchainLedger },
  { id: "master-ai", label: "Master AI Control", icon: Settings, component: MasterAIControl },
];

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("ai-match");

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || AIMatchAnalyzer;

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Vertical Sidebar Navigation */}
      <aside className="w-20 bg-sidebar border-r border-border flex flex-col items-center py-6 space-y-2">
        <div className="mb-8 text-primary text-2xl font-bold">
          <Fingerprint className="w-10 h-10" />
        </div>
        
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 relative group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              title={tab.label}
            >
              <Icon className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {tab.label}
              </div>
              
              {isActive && (
                <div className="absolute -right-1 w-1 h-8 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <ActiveComponent />
      </main>
    </div>
  );
};

export default DashboardLayout;
