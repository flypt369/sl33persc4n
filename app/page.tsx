"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, TriangleAlert as AlertTriangle, Eye, Shield, Zap, Activity, Brain, Radar, Search, ChartBar as BarChart3, Users, Globe, Lock, Clock as Unlock, Target, Cpu, Network, Hexagon, Crosshair, Gauge, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [activeModule, setActiveModule] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const scrollToModule = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const moduleWidth = container.scrollWidth / 5 // 5 modules total
      container.scrollTo({
        left: moduleWidth * index,
        behavior: 'smooth'
      })
      setActiveModule(index)
    }
  }

  const modules = [
    {
      id: 'tension',
      title: 'NARRATIVE TENSION INDEX',
      icon: Brain,
      isMain: true
    },
    {
      id: 'protocol',
      title: 'PROTOCOL INTEL',
      icon: Cpu,
      isMain: false
    },
    {
      id: 'threat',
      title: 'THREAT ASSESSMENT',
      icon: Radar,
      isMain: false
    },
    {
      id: 'network',
      title: 'NETWORK OPS',
      icon: Globe,
      isMain: false
    },
    {
      id: 'command',
      title: 'COMMAND CENTER',
      icon: Shield,
      isMain: false
    }
  ]

  return (
    <div className="min-h-screen neural-grid">
      {/* Compact Header */}
      <div className="text-center space-y-4 py-8">
        <div className="relative">
          <h1 className="eva-title text-5xl md:text-7xl">
            SLEEPERSCAN
          </h1>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-current opacity-60">
            <div className="w-full h-full border border-current transform rotate-45"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="gundam-subtitle text-lg md:text-xl max-w-3xl mx-auto">
            ADVANCED TACTICAL INTELLIGENCE SYSTEM
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="tech-readout p-2 rounded">
              <div className="flex items-center gap-2">
                <div className={`sync-indicator ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
                <span className="terminal-text text-xs font-mono">
                  {isOnline ? 'OPERATIONAL' : 'OFFLINE'}
                </span>
              </div>
            </div>
            <div className="tech-readout p-2 rounded">
              <span className="terminal-text text-xs font-mono">
                SYNC: {stats.syncRate.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Swipeable Module Container */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="swipe-container"
          onScroll={(e) => {
            const container = e.currentTarget
            const moduleWidth = container.scrollWidth / 5
            const currentModule = Math.round(container.scrollLeft / moduleWidth)
            setActiveModule(currentModule)
          }}
        >
          
          {/* Main Module - Narrative Tension Index */}
          <div className="swipe-module main-module">
            <Card className="gundam-diagonal tension-main-display h-full">
              <CardHeader className="card-header-padded pb-4">
                <CardTitle className="mecha-heading text-xl flex items-center gap-3">
                  <Brain className="h-6 w-6 status-info" />
                  NARRATIVE TENSION INDEX
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full sync-indicator"></div>
                    <span className="terminal-text text-xs">SYNC</span>
                  </div>
                </CardTitle>
                <p className="technical-text text-xs opacity-80">
                  REAL-TIME SUPPRESSION ANALYSIS
                </p>
              </CardHeader>
              
              <CardContent className="card-content-padded space-y-6">
                {/* Main Display */}
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className={`text-7xl font-display font-black ${getIndexColor(metrics.overallIndex)} data-stream`}>
                      {Math.round(metrics.overallIndex)}
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border border-current opacity-40">
                      <Crosshair className="w-full h-full" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <Badge variant="outline" className={`${getIndexColor(metrics.overallIndex)} border-current px-3 py-1`}>
                      <span className="terminal-text text-xs font-bold">{getIndexLabel(metrics.overallIndex)}</span>
                    </Badge>
                    {getTrendIcon()}
                  </div>
                  
                  <div className="max-w-xs mx-auto">
                    <Progress 
                      value={metrics.overallIndex} 
                      className="h-4 eva-progress" 
                    />
                  </div>
                </div>

                {/* Compact Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="holo-display p-3 space-y-2">
                    <div className="flex items-center gap-2 technical-text text-xs">
                      <Shield className="h-3 w-3 status-critical" />
                      <span>SUPPRESSION</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Progress value={metrics.suppressionPressure} className="flex-1 mr-2 h-2 eva-progress" />
                      <span className="terminal-text text-sm font-bold">{Math.round(metrics.suppressionPressure)}</span>
                    </div>
                  </div>

                  <div className="holo-display p-3 space-y-2">
                    <div className="flex items-center gap-2 technical-text text-xs">
                      <Zap className="h-3 w-3 status-info" />
                      <span>VELOCITY</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Progress value={metrics.narrativeVelocity} className="flex-1 mr-2 h-2 eva-progress" />
                      <span className="terminal-text text-sm font-bold">{Math.round(metrics.narrativeVelocity)}</span>
                    </div>
                  </div>

                  <div className="holo-display p-3 space-y-2">
                    <div className="flex items-center gap-2 technical-text text-xs">
                      <Target className="h-3 w-3 status-warning" />
                      <span>VARIANCE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Progress value={metrics.sourceCredibilityVariance} className="flex-1 mr-2 h-2 eva-progress" />
                      <span className="terminal-text text-sm font-bold">{Math.round(metrics.sourceCredibilityVariance)}</span>
                    </div>
                  </div>

                  <div className="holo-display p-3 space-y-2">
                    <div className="flex items-center gap-2 technical-text text-xs">
                      <Eye className="h-3 w-3 text-purple-400" />
                      <span>AWARENESS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Progress value={metrics.publicAwareness} className="flex-1 mr-2 h-2 eva-progress" />
                      <span className="terminal-text text-sm font-bold">{Math.round(metrics.publicAwareness)}</span>
                    </div>
                  </div>
                </div>

                {/* Compact Analysis */}
                <div className="tech-readout p-3 space-y-2">
                  <div className="mecha-heading text-sm flex items-center gap-2">
                    <div className="sync-indicator"></div>
                    TACTICAL ANALYSIS
                  </div>
                  <div className="technical-text text-xs leading-relaxed">
                    {metrics.overallIndex >= 70 &&
                      "⚠️ PATTERN BLUE: Coordinated suppression detected."}
                    {metrics.overallIndex >= 40 &&
                      metrics.overallIndex < 70 &&
                      "📊 PATTERN ORANGE: Moderate information pressure."}
                    {metrics.overallIndex < 40 &&
                      "✅ PATTERN GREEN: Information environment stable."}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Protocol Intelligence Module */}
          <div className="swipe-module compact-module">
            <Card className="gundam-diagonal h-full">
              <CardHeader className="card-header-padded">
                <CardTitle className="mecha-heading text-lg flex items-center gap-2">
                  <Cpu className="h-5 w-5 status-info" />
                  PROTOCOL INTEL
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-padded space-y-4">
                <div className="space-y-3">
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
                <Button className="eva-button w-full h-10">
                  <Search className="h-4 w-4 mr-2" />
                  DEEP SCAN
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Threat Assessment Module */}
          <div className="swipe-module compact-module">
            <Card className="gundam-diagonal h-full">
              <CardHeader className="card-header-padded">
                <CardTitle className="mecha-heading text-lg flex items-center gap-2">
                  <Radar className="h-5 w-5 status-warning" />
                  THREAT ASSESSMENT
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-padded space-y-4">
                <div className="space-y-3">
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
                <Button className="eva-button w-full h-10">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  THREAT MATRIX
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Network Operations Module */}
          <div className="swipe-module compact-module">
            <Card className="gundam-diagonal h-full">
              <CardHeader className="card-header-padded">
                <CardTitle className="mecha-heading text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 status-safe" />
                  NETWORK OPS
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-padded space-y-4">
                <div className="space-y-3">
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

          {/* Command Center Module */}
          <div className="swipe-module compact-module">
            <Card className="gundam-diagonal h-full">
              <CardHeader className="card-header-padded">
                <CardTitle className="mecha-heading text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 status-info" />
                  COMMAND CENTER
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-padded space-y-3">
                <Button className="eva-button w-full h-12">
                  <div className="text-center">
                    <Brain className="h-6 w-6 mx-auto mb-1" />
                    <div className="terminal-text text-xs font-bold">AI ANALYSIS</div>
                  </div>
                </Button>
                <Button className="eva-button w-full h-12">
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-1" />
                    <div className="terminal-text text-xs font-bold">SOCIAL INTEL</div>
                  </div>
                </Button>
                <Button className="eva-button w-full h-12">
                  <div className="text-center">
                    <BarChart3 className="h-6 w-6 mx-auto mb-1" />
                    <div className="terminal-text text-xs font-bold">ANALYTICS</div>
                  </div>
                </Button>
                <Button className="eva-button w-full h-12">
                  <div className="text-center">
                    <Gauge className="h-6 w-6 mx-auto mb-1" />
                    <div className="terminal-text text-xs font-bold">DIAGNOSTICS</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Left-Justified Navigation Indicators */}
        <div className="nav-indicators">
          {modules.map((_, index) => (
            <div
              key={index}
              className={`nav-indicator ${activeModule === index ? 'active' : ''}`}
              onClick={() => scrollToModule(index)}
            />
          ))}
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-4 gap-2 p-4 mt-6">
        <div className="gundam-card p-3 text-center">
          <div className="flex items-center justify-center mb-2">
            <Hexagon className="h-4 w-4 status-info mr-1" />
            <span className="technical-text text-xs">PROTOCOLS</span>
          </div>
          <div className="mecha-heading text-lg status-info">{stats.protocolsMonitored.toLocaleString()}</div>
        </div>
        
        <div className="gundam-card p-3 text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="h-4 w-4 status-warning mr-1" />
            <span className="technical-text text-xs">ALERTS</span>
          </div>
          <div className="mecha-heading text-lg status-warning">{stats.activeAlerts}</div>
        </div>
        
        <div className="gundam-card p-3 text-center">
          <div className="flex items-center justify-center mb-2">
            <BarChart3 className="h-4 w-4 status-safe mr-1" />
            <span className="technical-text text-xs">DATA</span>
          </div>
          <div className="mecha-heading text-lg status-safe">{(stats.dataPoints / 1000).toFixed(0)}K</div>
        </div>
        
        <div className="gundam-card p-3 text-center">
          <div className="flex items-center justify-center mb-2">
            <Gauge className="h-4 w-4 status-info mr-1" />
            <span className="technical-text text-xs">LOAD</span>
          </div>
          <div className="mecha-heading text-lg status-info">67%</div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="text-center py-6 border-t border-border/30">
        <div className="tech-readout inline-block p-3">
          <p className="terminal-text text-sm">
            SLEEPERSCAN v3.0.1 • NEURAL ENGINE ONLINE • 
            <span className="status-safe"> SECURE CONNECTION ESTABLISHED</span>
          </p>
          <p className="technical-text text-xs mt-1 opacity-60">
            TACTICAL INTELLIGENCE SYSTEM • NERV COMPATIBLE • PATTERN RECOGNITION ACTIVE
          </p>
        </div>
      </div>
    </div>
  )
}