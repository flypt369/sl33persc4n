"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, TriangleAlert as AlertTriangle, Eye, Shield, Zap, Activity, Brain, Radar, Search, ChartBar as BarChart3, Users, Globe, Lock, Clock as Unlock, Target, Cpu, Network, Hexagon, Crosshair, Gauge } from "lucide-react"

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
  syncRate: number
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
    uptime: "99.97%",
    syncRate: 98.7
  })

  const [isOnline, setIsOnline] = useState(true)

  // Simulate real-time updates with Eva-style fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        overallIndex: Math.max(0, Math.min(100, prev.overallIndex + (Math.random() - 0.5) * 6)),
        suppressionPressure: Math.max(0, Math.min(100, prev.suppressionPressure + (Math.random() - 0.5) * 4)),
        narrativeVelocity: Math.max(0, Math.min(100, prev.narrativeVelocity + (Math.random() - 0.5) * 8)),
        sourceCredibilityVariance: Math.max(0, Math.min(100, prev.sourceCredibilityVariance + (Math.random() - 0.5) * 3)),
        censorshipActivity: Math.max(0, Math.min(100, prev.censorshipActivity + (Math.random() - 0.5) * 5)),
        publicAwareness: Math.max(0, Math.min(100, prev.publicAwareness + (Math.random() - 0.5) * 2)),
        trend: Math.random() > 0.8 ? (Math.random() > 0.5 ? "rising" : "falling") : prev.trend,
        timestamp: new Date().toISOString(),
      }))

      setStats(prev => ({
        ...prev,
        protocolsMonitored: prev.protocolsMonitored + Math.floor(Math.random() * 2),
        activeAlerts: Math.max(0, prev.activeAlerts + Math.floor((Math.random() - 0.5) * 3)),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 500),
        syncRate: Math.max(95, Math.min(100, prev.syncRate + (Math.random() - 0.5) * 2))
      }))
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const getIndexColor = (value: number) => {
    if (value >= 80) return "status-critical"
    if (value >= 60) return "status-warning"
    if (value >= 40) return "text-yellow-400"
    return "status-safe"
  }

  const getIndexLabel = (value: number) => {
    if (value >= 80) return "PATTERN BLUE"
    if (value >= 60) return "PATTERN ORANGE"
    if (value >= 40) return "PATTERN YELLOW"
    return "PATTERN GREEN"
  }

  const getTrendIcon = () => {
    switch (metrics.trend) {
      case "rising":
        return <TrendingUp className="h-4 w-4 status-critical" />
      case "falling":
        return <TrendingDown className="h-4 w-4 status-safe" />
      default:
        return <div className="h-4 w-4 rounded-full bg-yellow-400 sync-indicator" />
    }
  }

  return (
    <div className="min-h-screen neural-grid p-4 space-y-6">
      {/* Eva-style Header */}
      <div className="text-center space-y-6 py-12">
        <div className="relative">
          <h1 className="eva-title text-7xl md:text-9xl">
            SLEEPERSCAN
          </h1>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-current opacity-60">
            <div className="w-full h-full border border-current transform rotate-45"></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="gundam-subtitle text-xl md:text-2xl max-w-4xl mx-auto">
            ADVANCED TACTICAL INTELLIGENCE SYSTEM
          </p>
          <p className="technical-text text-sm max-w-3xl mx-auto">
            REAL-TIME PROTOCOL MONITORING • NARRATIVE ANALYSIS • THREAT ASSESSMENT
          </p>
        </div>

        {/* System Status Display */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="tech-readout p-3 rounded">
            <div className="flex items-center gap-3">
              <div className={`sync-indicator ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="terminal-text text-sm font-mono">
                SYSTEM STATUS: {isOnline ? 'OPERATIONAL' : 'OFFLINE'}
              </span>
            </div>
          </div>
          <div className="tech-readout p-3 rounded">
            <span className="terminal-text text-sm font-mono">
              UPTIME: {stats.uptime} | SYNC: {stats.syncRate.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Technical Readout Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="gundam-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Hexagon className="h-6 w-6 status-info mr-2" />
              <span className="technical-text text-sm">PROTOCOLS</span>
            </div>
            <div className="mecha-heading text-3xl status-info">{stats.protocolsMonitored.toLocaleString()}</div>
            <div className="status-display mt-2 p-1">
              <span className="terminal-text text-xs">ACTIVE</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gundam-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="h-6 w-6 status-warning mr-2" />
              <span className="technical-text text-sm">ALERTS</span>
            </div>
            <div className="mecha-heading text-3xl status-warning">{stats.activeAlerts}</div>
            <div className="status-display mt-2 p-1">
              <span className="terminal-text text-xs">PRIORITY</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gundam-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <BarChart3 className="h-6 w-6 status-safe mr-2" />
              <span className="technical-text text-sm">DATA POINTS</span>
            </div>
            <div className="mecha-heading text-3xl status-safe">{(stats.dataPoints / 1000).toFixed(0)}K</div>
            <div className="status-display mt-2 p-1">
              <span className="terminal-text text-xs">STREAMING</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gundam-card">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Gauge className="h-6 w-6 status-info mr-2" />
              <span className="technical-text text-sm">NEURAL LOAD</span>
            </div>
            <div className="mecha-heading text-3xl status-info">67%</div>
            <div className="status-display mt-2 p-1">
              <span className="terminal-text text-xs">OPTIMAL</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Eva-style Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Central Tension Analysis - Eva Unit Style */}
        <div className="lg:col-span-2">
          <Card className="eva-panel p-6">
            <CardHeader className="pb-6">
              <CardTitle className="mecha-heading text-2xl flex items-center gap-4">
                <Brain className="h-7 w-7 status-info" />
                NARRATIVE TENSION INDEX
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full sync-indicator"></div>
                  <span className="terminal-text text-xs">SYNC</span>
                </div>
              </CardTitle>
              <p className="technical-text text-sm opacity-80">
                REAL-TIME INFORMATION SUPPRESSION ANALYSIS • PATTERN RECOGNITION ACTIVE
              </p>
              {metrics.timestamp && (
                <p className="terminal-text text-xs opacity-60">
                  LAST NEURAL SYNC: {new Date(metrics.timestamp).toLocaleTimeString()}
                </p>
              )}
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Main Eva-style Display */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className={`text-9xl font-display font-black ${getIndexColor(metrics.overallIndex)} data-stream`}>
                    {Math.round(metrics.overallIndex)}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border border-current opacity-40">
                    <Crosshair className="w-full h-full" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Badge variant="outline" className={`${getIndexColor(metrics.overallIndex)} border-current px-4 py-2`}>
                    <span className="terminal-text font-bold">{getIndexLabel(metrics.overallIndex)}</span>
                  </Badge>
                  {getTrendIcon()}
                </div>
                
                <div className="max-w-md mx-auto">
                  <Progress 
                    value={metrics.overallIndex} 
                    className="h-6 eva-progress" 
                  />
                </div>
              </div>

              {/* Technical Readout Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="holo-display p-4 space-y-3">
                  <div className="flex items-center gap-3 technical-text">
                    <Shield className="h-5 w-5 status-critical" />
                    <span className="font-medium">SUPPRESSION PRESSURE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.suppressionPressure} className="flex-1 mr-4 h-4 eva-progress" />
                    <span className="terminal-text text-lg font-bold">{Math.round(metrics.suppressionPressure)}</span>
                  </div>
                  <div className="status-display p-2">
                    <span className="terminal-text text-xs">
                      {metrics.suppressionPressure > 70 ? 'HIGH THREAT' : 
                       metrics.suppressionPressure > 40 ? 'MODERATE' : 'NOMINAL'}
                    </span>
                  </div>
                </div>

                <div className="holo-display p-4 space-y-3">
                  <div className="flex items-center gap-3 technical-text">
                    <Zap className="h-5 w-5 status-info" />
                    <span className="font-medium">NARRATIVE VELOCITY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.narrativeVelocity} className="flex-1 mr-4 h-4 eva-progress" />
                    <span className="terminal-text text-lg font-bold">{Math.round(metrics.narrativeVelocity)}</span>
                  </div>
                  <div className="status-display p-2">
                    <span className="terminal-text text-xs">
                      {metrics.narrativeVelocity > 70 ? 'RAPID SPREAD' : 
                       metrics.narrativeVelocity > 40 ? 'MODERATE' : 'SLOW BURN'}
                    </span>
                  </div>
                </div>

                <div className="holo-display p-4 space-y-3">
                  <div className="flex items-center gap-3 technical-text">
                    <Target className="h-5 w-5 status-warning" />
                    <span className="font-medium">SOURCE VARIANCE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.sourceCredibilityVariance} className="flex-1 mr-4 h-4 eva-progress" />
                    <span className="terminal-text text-lg font-bold">{Math.round(metrics.sourceCredibilityVariance)}</span>
                  </div>
                  <div className="status-display p-2">
                    <span className="terminal-text text-xs">
                      {metrics.sourceCredibilityVariance > 70 ? 'UNSTABLE' : 
                       metrics.sourceCredibilityVariance > 40 ? 'VARIABLE' : 'STABLE'}
                    </span>
                  </div>
                </div>

                <div className="holo-display p-4 space-y-3">
                  <div className="flex items-center gap-3 technical-text">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="font-medium">PUBLIC AWARENESS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={metrics.publicAwareness} className="flex-1 mr-4 h-4 eva-progress" />
                    <span className="terminal-text text-lg font-bold">{Math.round(metrics.publicAwareness)}</span>
                  </div>
                  <div className="status-display p-2">
                    <span className="terminal-text text-xs">
                      {metrics.publicAwareness > 70 ? 'HIGH ALERT' : 
                       metrics.publicAwareness > 40 ? 'AWARE' : 'UNAWARE'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Eva-style Analysis Terminal */}
              <div className="tech-readout p-6 space-y-4">
                <div className="mecha-heading text-lg flex items-center gap-2">
                  <div className="sync-indicator"></div>
                  TACTICAL ANALYSIS
                </div>
                <div className="technical-text leading-relaxed">
                  {metrics.overallIndex >= 70 &&
                    "⚠️ PATTERN BLUE DETECTED: Multiple information vectors showing coordinated suppression. Recommend immediate deep-scan protocols and countermeasure deployment."}
                  {metrics.overallIndex >= 40 &&
                    metrics.overallIndex < 70 &&
                    "📊 PATTERN ORANGE: Moderate information pressure detected. Some narratives experiencing delayed propagation through mainstream channels. Enhanced monitoring active."}
                  {metrics.overallIndex < 40 &&
                    "✅ PATTERN GREEN: Information environment stable. Normal narrative flow patterns observed. Maintaining baseline surveillance protocols."}
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="technical-text">CENSORSHIP ACTIVITY:</span>
                  <Badge variant="outline" className={
                    metrics.censorshipActivity > 70 ? "status-critical border-current" : 
                    metrics.censorshipActivity > 40 ? "status-warning border-current" : 
                    "status-safe border-current"
                  }>
                    <span className="terminal-text font-bold">
                      {metrics.censorshipActivity > 70 ? "CRITICAL THREAT" : 
                       metrics.censorshipActivity > 40 ? "MODERATE RISK" : 
                       "LOW RISK"}
                    </span>
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

        {/* Side Panel - Gundam-style Modules */}
        <div className="space-y-6">
          
          {/* Protocol Intelligence Module */}
          <Card className="eva-panel">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Cpu className="h-5 w-5 status-info" />
                PROTOCOL INTEL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">DeFi Protocols</span>
                  <span className="terminal-text font-bold status-safe">847</span>
                </div>
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">Social Networks</span>
                  <span className="terminal-text font-bold status-warning">234</span>
                </div>
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">News Aggregators</span>
                  <span className="terminal-text font-bold status-info">166</span>
                </div>
              </div>
              <Button className="eva-button w-full h-12">
                <Search className="h-4 w-4 mr-2" />
                INITIATE DEEP SCAN
              </Button>
            </CardContent>
          </Card>

          {/* Threat Assessment Module */}
          <Card className="eva-panel">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Radar className="h-5 w-5 status-warning" />
                THREAT ASSESSMENT
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between tech-readout p-2">
                  <span className="technical-text text-sm">Active Threats</span>
                  <Badge variant="destructive" className="status-critical border-current">
                    <span className="terminal-text font-bold">{stats.activeAlerts}</span>
                  </Badge>
                </div>
                <div className="flex items-center justify-between tech-readout p-2">
                  <span className="technical-text text-sm">Neutralized</span>
                  <Badge variant="outline" className="status-safe border-current">
                    <span className="terminal-text font-bold">156</span>
                  </Badge>
                </div>
                <div className="flex items-center justify-between tech-readout p-2">
                  <span className="technical-text text-sm">Under Analysis</span>
                  <Badge variant="outline" className="status-warning border-current">
                    <span className="terminal-text font-bold">89</span>
                  </Badge>
                </div>
              </div>
              <Button className="eva-button w-full h-12">
                <AlertTriangle className="h-4 w-4 mr-2" />
                VIEW THREAT MATRIX
              </Button>
            </CardContent>
          </Card>

          {/* Network Operations */}
          <Card className="eva-panel">
            <CardHeader>
              <CardTitle className="mecha-heading flex items-center gap-2">
                <Globe className="h-5 w-5 status-safe" />
                NETWORK OPS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">Global Nodes</span>
                  <span className="terminal-text font-bold status-safe">2,847</span>
                </div>
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">Data Streams</span>
                  <span className="terminal-text font-bold status-info">1,234</span>
                </div>
                <div className="flex justify-between items-center tech-readout p-2">
                  <span className="technical-text text-sm">Latency</span>
                  <span className="terminal-text font-bold status-safe">12ms</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="technical-text text-xs mb-2">NETWORK INTEGRITY</div>
                <Progress value={97} className="h-3 eva-progress" />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Eva-style Action Command Panel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="eva-button h-20">
          <div className="text-center">
            <Brain className="h-8 w-8 mx-auto mb-2" />
            <div className="terminal-text text-xs font-bold">AI ANALYSIS</div>
          </div>
        </Button>
        <Button className="eva-button h-20">
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="terminal-text text-xs font-bold">SOCIAL INTEL</div>
          </div>
        </Button>
        <Button className="eva-button h-20">
          <div className="text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-2" />
            <div className="terminal-text text-xs font-bold">ANALYTICS</div>
          </div>
        </Button>
        <Button className="eva-button h-20">
          <div className="text-center">
            <Shield className="h-8 w-8 mx-auto mb-2" />
            <div className="terminal-text text-xs font-bold">SECURITY</div>
          </div>
        </Button>
      </div>

      {/* Terminal Footer */}
      <div className="text-center py-8 border-t border-border/30">
        <div className="tech-readout inline-block p-4">
          <p className="terminal-text text-sm">
            SLEEPERSCAN v3.0.1 • NEURAL ENGINE ONLINE • 
            <span className="status-safe"> SECURE CONNECTION ESTABLISHED</span>
          </p>
          <p className="technical-text text-xs mt-2 opacity-60">
            TACTICAL INTELLIGENCE SYSTEM • NERV COMPATIBLE • PATTERN RECOGNITION ACTIVE
          </p>
        </div>
      </div>
    </div>
  )
}