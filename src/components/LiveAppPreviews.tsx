import React, { useState } from 'react';
import { 
  Globe, 
  ExternalLink, 
  RotateCw, 
  Smartphone, 
  Monitor, 
  Maximize2, 
  Minimize2, 
  X, 
  Sparkles,
  Bot,
  ShoppingBag,
  Github,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

export interface LiveAppConfig {
  id: 'agosphere' | 'darshan-ai';
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  url: string;
  displayUrl: string;
  githubUrl: string;
  defaultDevice: 'mobile' | 'desktop';
  techStack: string[];
  keyHighlight: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

export const LIVE_APPS: LiveAppConfig[] = [
  {
    id: 'agosphere',
    title: 'Agosphere',
    tagline: 'Marketplace for Farmers · Direct Agri Commerce',
    badge: 'ONLINE · FLUTTER WEB',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    url: 'https://errors-hack.github.io/',
    displayUrl: 'errors-hack.github.io',
    githubUrl: 'https://github.com/darshem-21/farmers-marketplace',
    defaultDevice: 'mobile',
    techStack: ['Flutter Web', 'Supabase', 'Geoapify', 'OpenRouter AI'],
    keyHighlight: 'Bypasses Middlemen · Real-time Farm Produce Exchange',
    icon: ShoppingBag,
    accentColor: 'emerald'
  },
  {
    id: 'darshan-ai',
    title: 'Darshan AI',
    tagline: 'Autonomous AI Agent Platform · Tools & Memory',
    badge: 'ONLINE · NO AUTH REQUIRED',
    badgeColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
    url: 'https://darshem-21.github.io/Darshan-AI/',
    displayUrl: 'darshem-21.github.io/Darshan-AI',
    githubUrl: 'https://github.com/darshem-21/Darshan-AI',
    defaultDevice: 'desktop',
    techStack: ['React', 'TypeScript', 'AI Agents', 'Python Ready', 'Tailwind'],
    keyHighlight: 'Instant Access · Zero-Auth Barrier · Agent Workflows',
    icon: Bot,
    accentColor: 'cyan'
  }
];

interface LiveAppBoxProps {
  app: LiveAppConfig;
  onExpandFullscreen?: (appId: 'agosphere' | 'darshan-ai') => void;
  isFullscreen?: boolean;
}

export const LiveAppBox: React.FC<LiveAppBoxProps> = ({ 
  app, 
  onExpandFullscreen,
  isFullscreen = false 
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>(app.defaultDevice);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
  };

  const Icon = app.icon;

  return (
    <div className={`flex flex-col bg-[#0b0f19] border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
      isFullscreen ? 'h-full' : 'h-full hover:border-slate-700/80 hover:shadow-indigo-500/5'
    }`}>
      
      {/* Chrome Window Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 py-3 bg-[#070a12] border-b border-slate-800">
        
        {/* Left: Window Dots & App Wordmark */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-3.5 w-[1px] bg-slate-800 mx-0.5" />
          <div className="flex items-center gap-1.5">
            <Icon className={`w-3.5 h-3.5 ${app.accentColor === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`} />
            <span className="text-xs font-bold text-white tracking-wide">{app.title}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded border font-mono font-medium flex items-center gap-1 ${app.badgeColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {app.badge}
            </span>
          </div>
        </div>

        {/* Right: Viewport toggle & actions */}
        <div className="flex items-center gap-1.5">
          {/* Viewport switcher */}
          <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'mobile' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile Device View"
              aria-label="Mobile Device View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'desktop' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Desktop Viewport"
              aria-label="Desktop Viewport"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleRefresh}
            title="Reload Frame"
            aria-label="Reload Frame"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title={`Open ${app.title} in new browser tab`}
            aria-label={`Open ${app.title} in new browser tab`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {onExpandFullscreen && (
            <button
              onClick={() => onExpandFullscreen(app.id)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Expand to Fullscreen Modal"
              aria-label="Expand to Fullscreen Modal"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Address Bar Sub-Header */}
      <div className="px-4 py-2 bg-[#090d16] border-b border-slate-800/80 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 overflow-hidden w-full">
          <Globe className="w-3 h-3 text-indigo-400 shrink-0" />
          <span className="font-mono text-[11px] text-slate-300 truncate">
            {app.url}
          </span>
        </div>
        <span className="hidden sm:inline-block text-[10px] font-mono text-slate-500 shrink-0">
          {app.keyHighlight}
        </span>
      </div>

      {/* Frame Container */}
      <div className={`relative bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden ${
        isFullscreen ? 'flex-1 min-h-[500px]' : 'h-[500px] sm:h-[540px]'
      }`}>
        
        {/* Ambient background glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-20 ${
          app.accentColor === 'cyan' ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} />

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4">
            <div className={`w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mb-2.5 ${
              app.accentColor === 'cyan' ? 'border-cyan-400' : 'border-emerald-400'
            }`} />
            <p className="text-xs font-semibold text-white">Loading {app.title} Live App...</p>
            <p className="text-[11px] text-slate-400 mt-1 font-mono">{app.displayUrl}</p>
          </div>
        )}

        {/* Device Frame */}
        <div className={`transition-all duration-300 relative ${
          deviceMode === 'mobile'
            ? 'w-[300px] sm:w-[330px] h-[460px] sm:h-[490px] rounded-[36px] border-[8px] border-slate-800 shadow-2xl bg-black overflow-hidden ring-1 ring-slate-700/60'
            : 'w-full h-full rounded-xl border border-slate-800 shadow-2xl bg-black overflow-hidden'
        }`}>
          {/* Mobile phone camera / notch */}
          {deviceMode === 'mobile' && (
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-center pointer-events-none">
              <span className="w-8 h-1 rounded-full bg-slate-800 inline-block" />
            </div>
          )}

          <iframe
            key={refreshKey}
            src={app.url}
            title={`${app.title} Live Production Preview`}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full bg-black border-none"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            loading="lazy"
          />
        </div>

      </div>

      {/* Footer Details */}
      <div className="px-4 py-3 bg-[#070a12] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-1.5">
          {app.techStack.map((tech) => (
            <span 
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white font-medium inline-flex items-center gap-1 transition-colors text-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
          <span>·</span>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors text-xs"
          >
            <span>Direct Launch</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );
};

interface LiveAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAppId?: 'agosphere' | 'darshan-ai' | 'both';
}

export const LiveAppModal: React.FC<LiveAppModalProps> = ({
  isOpen,
  onClose,
  initialAppId = 'both'
}) => {
  const [selectedAppTab, setSelectedAppTab] = useState<'both' | 'agosphere' | 'darshan-ai'>(initialAppId);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-7xl h-[90vh] bg-[#070b14] border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070a12] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Live Production Deployments Showcase
              </h3>
              <p className="text-xs text-slate-400">
                Direct interactive web applications built and shipped by Darshan K S
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tab switchers */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedAppTab('both')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAppTab === 'both' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Side-by-Side (Both)
              </button>
              <button
                onClick={() => setSelectedAppTab('agosphere')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAppTab === 'agosphere' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Agosphere
              </button>
              <button
                onClick={() => setSelectedAppTab('darshan-ai')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAppTab === 'darshan-ai' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Darshan AI
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-rose-400 rounded-xl hover:bg-slate-800 transition-colors"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {selectedAppTab === 'both' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              {LIVE_APPS.map((app) => (
                <div key={app.id} className="h-full min-h-[550px]">
                  <LiveAppBox app={app} isFullscreen={true} />
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full min-h-[650px]">
              <LiveAppBox 
                app={LIVE_APPS.find(a => a.id === selectedAppTab)!} 
                isFullscreen={true} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
