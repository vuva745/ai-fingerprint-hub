import { Activity, Cpu, HardDrive, Zap } from "lucide-react";

const DevicePerformance = () => {
  const devices = [
    { id: "TAB-AX12", status: "Active", load: 23, scans: 4231, accuracy: 99.1 },
    { id: "TAB-BX09", status: "Active", load: 45, scans: 3892, accuracy: 98.7 },
    { id: "TAB-CX15", status: "Standby", load: 12, scans: 2104, accuracy: 99.3 },
    { id: "TAB-DX21", status: "Active", load: 67, scans: 5621, accuracy: 98.9 },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-primary mb-2">Device Performance</h1>
        <p className="text-muted-foreground">Monitor biometric device health and statistics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Devices", value: "12/15", icon: Activity, color: "text-success" },
          { label: "Avg CPU Load", value: "34%", icon: Cpu, color: "text-primary" },
          { label: "Total Scans Today", value: "18,423", icon: Zap, color: "text-teal" },
          { label: "System Health", value: "99.2%", icon: HardDrive, color: "text-primary" },
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

      {/* Device List */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-primary mb-6">Connected Devices</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Device ID</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">CPU Load</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Total Scans</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-mono text-foreground font-semibold">{device.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      device.status === "Active" 
                        ? "bg-success/20 text-success border border-success" 
                        : "bg-muted text-muted-foreground border border-border"
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${
                            device.load > 60 ? "bg-destructive" : device.load > 40 ? "bg-warning" : "bg-success"
                          }`}
                          style={{ width: `${device.load}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground w-12">{device.load}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-foreground font-semibold">{device.scans.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <span className="text-success font-semibold">{device.accuracy}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">24h Performance Trend</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {[45, 52, 48, 61, 58, 72, 68, 75, 71, 68, 64, 59].map((height, idx) => (
              <div key={idx} className="flex-1 bg-primary/20 rounded-t-lg relative group cursor-pointer hover:bg-primary/40 transition-colors" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-border px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {height}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Scan Distribution</h3>
          <div className="space-y-3">
            {[
              { location: "JKIA Airport", scans: 5621, percent: 35 },
              { location: "Dubai Hub", scans: 3892, percent: 24 },
              { location: "Mombasa Terminal", scans: 4231, percent: 26 },
              { location: "Nairobi Central", scans: 2410, percent: 15 },
            ].map((loc, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{loc.location}</span>
                  <span className="text-muted-foreground">{loc.scans.toLocaleString()} scans</span>
                </div>
                <div className="bg-background rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-teal" style={{ width: `${loc.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePerformance;
