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
  CheckCircle2, 
  Sparkles,
  MapPin,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface AgospherePreviewProps {
  isOpen?: boolean;
  onClose?: () => void;
  embedded?: boolean;
}

export const AgospherePreview: React.FC<AgospherePreviewProps> = ({ 
  isOpen = true, 
  onClose,
  embedded = false 
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('mobile');
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const previewUrl = "https://errors-hack.github.io/";

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
  };

  const previewContent = (
    <div className={`flex flex-col bg-[#0b0f19] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
      isFullscreen ? 'fixed inset-4 z-50 rounded-2xl' : 'w-full'
    }`}>
      
      {/* Browser / Device Chrome Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#070a12] border-b border-slate-800">
        
        {/* Left: Window controls & title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-slate-800 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-wide">Agosphere</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE WEB APP
            </span>
          </div>
        </div>

        {/* Center: Address Bar */}
        <div className="order-3 sm:order-2 w-full sm:w-auto flex-1 max-w-md mx-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate text-slate-200">{previewUrl}</span>
            <button
              onClick={handleRefresh}
              title="Reload Frame"
              className="ml-auto text-slate-400 hover:text-white transition-colors p-0.5"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Device Viewport Controls & Actions */}
        <div className="order-2 sm:order-3 flex items-center gap-2 ml-auto sm:ml-0">
          <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'mobile' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile Device View (Flutter App)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'desktop' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Desktop Viewport"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Open in New Tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {!embedded && (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors"
              title="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Frame Container */}
      <div className={`relative bg-slate-950 flex items-center justify-center p-3 sm:p-6 overflow-hidden ${
        isFullscreen ? 'h-[calc(100vh-120px)]' : embedded ? 'h-[580px]' : 'h-[620px]'
      }`}>
        
        {/* Background glow behind phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
            <div className="w-10 h-10 border-3 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-3" />
            <p className="text-xs font-semibold text-white">Loading Agosphere Flutter Web App...</p>
            <p className="text-[11px] text-slate-400 mt-1 font-mono">Fetching from errors-hack.github.io</p>
          </div>
        )}

        {/* Actual Iframe with Device Frame */}
        <div className={`transition-all duration-300 relative ${
          deviceMode === 'mobile'
            ? 'w-[360px] sm:w-[380px] h-[540px] sm:h-[560px] rounded-[40px] border-[10px] border-slate-800 shadow-2xl bg-black overflow-hidden ring-1 ring-slate-700/60'
            : 'w-full h-full rounded-xl border border-slate-800 shadow-2xl bg-black overflow-hidden'
        }`}>
          {/* Mobile speaker notch indicator */}
          {deviceMode === 'mobile' && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
              <span className="w-10 h-1 rounded-full bg-slate-800 inline-block" />
            </div>
          )}

          <iframe
            key={refreshKey}
            src={previewUrl}
            title="Agosphere Marketplace Live Preview"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full bg-black border-none"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            loading="lazy"
          />
        </div>

      </div>

      {/* Feature summary footer banner */}
      <div className="px-5 py-3 bg-[#070a12] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built by Darshan K S & Team</span>
          </span>
          <span className="hidden sm:inline-block">·</span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400">
            Flutter Web · Supabase · Geoapify · OpenRouter
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/darshem-21/farmers-marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );

  if (embedded) {
    return previewContent;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {previewContent}
      </div>
    </div>
  );
};
