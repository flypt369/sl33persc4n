"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Eye, 
  Shield, 
  Zap,
  Activity,
  Brain,
  Radar,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Unlock,
  Target,
  Cpu,
  Network
} from "lucide-react"

interface TensionMetrics {
  overallIndex: number
  suppressionPressure: number
  narrativeVelocity: number
  sourceCredibilityVariance: number
  censorshipActivity: number
  publicAwareness: number
  trend: "rising" | "falling" | "stable"
  timestamp: string
}

interface RealtimeStats {
  protocolsMonitored: number
  activeAlerts: number
  dataPoints: number
  uptime: string
}

export default function SleeperScanDashboard() {
  const [metrics, setMetrics] = useState<TensionMetrics>({
    overallIndex: 42,
    suppressionPressure: 67,
    narrativeVelocity: 34,
    sourceCredibilityVariance: 78,
    censorshipActivity: 45,
    publicAwareness: 56,
    trend: "rising",
    timestamp: new Date().toISOString(),
  })

  const [stats, setStats] = useState<RealtimeStats>({
    protocolsMonitored: 1247,
    activeAlerts: 23,
    dataPoints: 892456,
    uptime: "99.97%"
  })

  const [isOnline, setIsOnline] = useState(true)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        overallIndex: Math.max(0, Math.min(100, prev.overallIndex + (Math.random() - 0.5) * 8)),
        suppressionPressure: Math.max(0, Math.min(100, prev.suppressionPressure + (Math.random() - 0.5) * 6)),
        narrativeVelocity: Math.max(0, Math.min(100, prev.narrativeVelocity + (Math.random() - 0.5) * 10)),
        sourceCredibilityVariance: Math.max(0, Math.min(100, prev.sourceCredibilityVariance + (Math.random() - 0.5) * 5)),
        censorshipActivity: Math.max(0, Math.min(100, prev.censorshipActivity + (Math.random() - 0.5) * 7)),
        publicAwareness: Math.max(0, Math.min(100, prev.publicAwareness + (Math.random() - 0.5) * 4)),
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? "rising" : "falling") : prev.trend,
        timestamp: new Date().toISOString(),
      }))

      setStats(prev => ({
        ...prev,
        protocolsMonitored: prev.protocolsMonitored + Math.floor(Math.random() * 3),
        activeAlerts: Math.max(0, prev.activeAlerts + Math.floor((Math.random() - 0.5) * 4)),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 1000),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getIndexColor = (value: number) => {
    if (value >= 80) return "status-critical"
    if (value >= 60) return "status-warning"
    if (value >= 40) return "text-yellow-400"
    return "status-safe"
  }

  const getIndexLabel = (value: number) => {
    if (value >= 80) return "EXTREME SUPPRESSION"
    if (value >= 60) return "HIGH TENSION"
    if (value >= 40) return "MODERATE TENSION"
    return "LOW TENSION"
  }

  const getTrendIcon = () => {
    switch (metrics.trend) {
      case "rising":
        return <TrendingUp className="h-4 w-4 status-critical" />
      case "falling":
        return <TrendingDown className="h-4 w-4 status-safe" />
      default:
        return <div className="h-4 w-4 rounded-full bg-yellow-400 neural-pulse" />
    }
  }

  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <h1 className="sleeper-title text-6xl md:text-8xl">
          SleeperScan
        </h1>
        <p className="sleeper-subtitle text-xl md:text-2xl max-w-3xl mx-auto">
          Advanced Intelligence & Analytics Dashboard
          <br />
          <span className="elegant-text text-base">
            Real-time protocol monitoring • Narrative tension analysis • Threat intelligence
          </span>
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'} neural-pulse`} />
            <span className="elegant-text text-sm">
              {isOnline ? 'SYSTEMS ONLINE' : 'SYSTEMS OFFLINE'}
            </span>
          </div>
          <div className="elegant-text text-sm text-muted-foreground">
            Uptime: {stats.uptime}
          </div>
        </div>
      </div>

      {/* Real-time Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="metric-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Network className="h-5 w-5 status-info mr-2" />
              <span className="elegant-text text-sm">Protocols</span>
            </div>
            <div className="mecha-heading text-2xl">{stats.protocolsMonitored.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-5 w-5 status-warning mr-2" />
              <span className="elegant-text text-sm">Active Alerts</span>
            </div>
            <div className="mecha-heading text-2xl status-warning">{stats.activeAlerts}</div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="h-5 w-5 status-safe mr-2" />
              <span className="elegant-text text-sm">Data Points</span>
            </div>
            <div className="mecha-heading text-2xl">{stats.dataPoints.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-5 w-5 status-info mr-2" />
              <span className="elegant-text text-sm">Neural Load</span>
            </div>
            <div className="mecha-heading text-2xl">67%</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Narrative Tension Index - Main Panel */}
        <div className="lg:col-span-2">
          <Card className="neon-glow mecha-panel">
            <CardHeader>
              <CardTitle className="mecha-heading text-2xl flex items-center gap-3">
                <Brain className="h-6 w-6" />
                Narrative Tension Index
              </CardTitle>
              <p className="elegant-text text-muted-foreground">
                Real-time measurement of information suppression vs. transparency pressure
              </p>
              {metrics.timestamp && (
                <p className="elegant-text text-xs text-muted-foreground">
                  Last neural sync: {new Date(metrics.timestamp).toLocaleTimeString()}
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Main Index Display */}
              <div className="text-center space-y-4">
                <div className={`text-8xl font-display font-black ${getIndexColor(metrics.overallIndex)} neural-pulse`}>
                  {Math.round(metrics.overallIndex)}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Badge variant="outline" className={`${getIndexColor(metrics.overallIndex)} border-current`}>
                    {getIndexLabel(metrics.overallIndex)}
                  </Badge>
                  {getTrendIcon()}
                </div>
                <div className="max-w-md mx-auto">
                  <Progress 
                    value={metrics.overallIndex} 
                    className="h-4 tension-progress" 
                  />
                </div>
              </div>

              {/* Component Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 holographic-border p-4 rounded-lg">
                  <div className="flex items-center gap-3 elegant-text">
                    <Shield className="h-5 w-5 status-critical" />
                    <span className="font-medium">Suppression Pressure</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.suppressionPressure} className="flex-1 mr-3 h-3 tension-progress" />
                    <span className="font-mono text-lg font-bold">{Math.round(metrics.suppressionPressure)}</span>
                  </div>
                </div>

                <div className="space-y-3 holographic-border p-4 rounded-lg">
                  <div className="flex items-center gap-3 elegant-text">
                    <Zap className="h-5 w-5 status-info" />
                    <span className="font-medium">Narrative Velocity</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.narrativeVelocity} className="flex-1 mr-3 h-3 tension-progress" />
                    <span className="font-mono text-lg font-bold">{Math.round(metrics.narrativeVelocity)}</span>
                  </div>
                </div>

                <div className="space-y-3 holographic-border p-4 rounded-lg">
                  <div className="flex items-center gap-3 elegant-text">
                    <Target className="h-5 w-5 status-warning" />
                    <span className="font-medium">Source Variance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.sourceCredibilityVariance} className="flex-1 mr-3 h-3 tension-progress" />
                    <span className="font-mono text-lg font-bold">{Math.round(metrics.sourceCredibilityVariance)}</span>
                  </div>
                </div>

                <div className="space-y-3 holographic-border p-4 rounded-lg">
                  <div className="flex items-center gap-3 elegant-text">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="font-medium">Public Awareness</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.publicAwareness} className="flex-1 mr-3 h-3 tension-progress" />
                    <span className="font-mono text-lg font-bold">{Math.round(metrics.publicAwareness)}</span>
                  </div>
                </div>
              </div>

              {/* Analysis Panel */}
              <div className="mecha-panel p-6 space-y-4">
                <div className="mecha-heading text-lg">Neural Analysis</div>
                <div className="elegant-text text-muted-foreground leading-relaxed">
                  {metrics.overallIndex >= 70 &&
                    "⚠️ High narrative tension detected. Multiple information streams showing coordinated suppression patterns. Recommend immediate deep-scan protocols."}
                  {metrics.overallIndex >= 40 &&
                    metrics.overallIndex < 70 &&
                    "📊 Moderate information pressure detected. Some narratives experiencing delayed mainstream propagation. Monitoring enhanced surveillance vectors."}
                  {metrics.overallIndex < 40 &&
                    "✅ Relatively stable information environment. Normal narrative flow patterns observed. Maintaining baseline monitoring protocols."}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="elegant-text text-muted-foreground">Censorship Activity:</span>
                  <Badge variant="outline" className={
                    metrics.censorshipActivity > 70 ? "status-critical border-current" : 
                    metrics.censorshipActivity > 40 ? "status-warning border-current" : 
                    "status-safe border-current"
                  }>
                    {metrics.censorshipActivity > 70 ? "HIGH THREAT" : 
                     metrics.censorshipActivity > 40 ? "MODERATE" : 
                     "LOW RISK"}
                  </Badge>
                  <div className="flex items-center gap-2">
                    {metrics.censorshipActivity > 50 ? 
                      <Lock className="h-4 w-4 status-critical" /> : 
                      <Unlock className="h-4 w-4 status-safe" />
                    }
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel - Intelligence Modules */}
        <div className="space-y-6">
          
          {/* Protocol Intelligence */}
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Protocol Intel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">DeFi Protocols</span>
                  <span className="font-mono font-bold status-safe">847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">Social Networks</span>
                  <span className="font-mono font-bold status-warning">234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">News Aggregators</span>
                  <span className="font-mono font-bold status-info">166</span>
                </div>
              </div>
              <Button className="cyber-button w-full">
                <Search className="h-4 w-4 mr-2" />
                Deep Scan
              </Button>
            </CardContent>
          </Card>

          {/* Threat Intelligence */}
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Radar className="h-5 w-5" />
                Threat Intel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="elegant-text text-sm">Active Threats</span>
                  <Badge variant="destructive" className="status-critical">
                    {stats.activeAlerts}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="elegant-text text-sm">Mitigated</span>
                  <Badge variant="outline" className="status-safe border-current">
                    156
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="elegant-text text-sm">Under Review</span>
                  <Badge variant="outline" className="status-warning border-current">
                    89
                  </Badge>
                </div>
              </div>
              <Button className="cyber-button w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                View Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Network Status */}
          <Card className="neon-glow">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Network Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">Global Nodes</span>
                  <span className="font-mono font-bold status-safe">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">Data Streams</span>
                  <span className="font-mono font-bold status-info">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="elegant-text text-sm">Latency</span>
                  <span className="font-mono font-bold status-safe">12ms</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="elegant-text text-xs text-muted-foreground mb-2">Network Health</div>
                <Progress value={97} className="h-2 tension-progress" />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Action Panel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="cyber-button h-16">
          <div className="text-center">
            <Brain className="h-6 w-6 mx-auto mb-1" />
            <div className="text-xs">AI Analysis</div>
          </div>
        </Button>
        <Button className="cyber-button h-16">
          <div className="text-center">
            <Users className="h-6 w-6 mx-auto mb-1" />
            <div className="text-xs">Social Intel</div>
          </div>
        </Button>
        <Button className="cyber-button h-16">
          <div className="text-center">
            <BarChart3 className="h-6 w-6 mx-auto mb-1" />
            <div className="text-xs">Analytics</div>
          </div>
        </Button>
        <Button className="cyber-button h-16">
          <div className="text-center">
            <Shield className="h-6 w-6 mx-auto mb-1" />
            <div className="text-xs">Security</div>
          </div>
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-border/30">
        <p className="elegant-text text-sm text-muted-foreground">
          SleeperScan v2.1.7 • Neural Engine Online • 
          <span className="status-safe"> Secure Connection Established</span>
        </p>
      </div>
    </div>
  )
}