import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { JourneyMap } from './components/JourneyMap.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { LIVE_APPS, LiveAppBox, LiveAppModal } from './components/LiveAppPreviews.tsx';
import { Skills } from './components/Skills.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Education } from './components/Education.tsx';
import { GitHubStats } from './components/GitHubStats.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { Sparkles, Globe, ExternalLink, Bot, ShoppingBag } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [liveModal, setLiveModal] = useState<{ isOpen: boolean; appId: 'agosphere' | 'darshan-ai' | 'both' }>({
    isOpen: false,
    appId: 'both'
  });

  const handleOpenLiveModal = (appId: 'agosphere' | 'darshan-ai' | 'both' = 'both') => {
    setLiveModal({
      isOpen: true,
      appId
    });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenLivePreview={() => handleOpenLiveModal('both')}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with Chroma Key Portrait & Actions */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenLivePreview={() => handleOpenLiveModal('both')}
        />

        {/* Candy Crush Style Career Quest Map Travel Animation */}
        <JourneyMap 
          onOpenLivePreview={() => handleOpenLiveModal('both')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Background & Core Pillars */}
        <About />

        {/* MindMatrix Internship Deep Dive */}
        <Experience />

        {/* Featured Projects with Interactive Sandboxes */}
        <Projects onOpenLivePreview={(appId) => handleOpenLiveModal(appId)} />

        {/* Dedicated Embedded Live Preview Section: 2 Live Project Previews in One Row */}
        <section id="live-previews" className="py-20 bg-slate-950/70 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2 Live Production Deployments</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Interactive Live App Previews
                </h2>
                <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
                  Interact with two live, production-deployed systems side-by-side in real-time. Experience the <strong className="text-emerald-300">Agosphere</strong> agricultural commerce platform and the zero-auth <strong className="text-cyan-300">Darshan AI</strong> autonomous agent right inside the browser.
                </p>
              </div>

              {/* Direct external links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://errors-hack.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-200 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-xl transition-colors shadow-sm"
                  title="Open Agosphere in external browser tab"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                  <span>errors-hack.github.io</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400/70" />
                </a>

                <a
                  href="https://darshem-21.github.io/Darshan-AI/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-xl transition-colors shadow-sm"
                  title="Open Darshan-AI (No Auth Required) in external browser tab"
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>darshem-21.github.io/Darshan-AI</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400/70" />
                </a>
              </div>
            </div>

            {/* In One Row: 2 Live Preview Boxes Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="h-full">
                <LiveAppBox 
                  app={LIVE_APPS[0]} 
                  onExpandFullscreen={(appId) => handleOpenLiveModal(appId)} 
                />
              </div>
              <div className="h-full">
                <LiveAppBox 
                  app={LIVE_APPS[1]} 
                  onExpandFullscreen={(appId) => handleOpenLiveModal(appId)} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Verified Credentials */}
        <Certifications />

        {/* Academic Journey */}
        <Education />

        {/* GitHub Stats & Metrics */}
        <GitHubStats />

        {/* Contact & Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable / Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating / Pop-up Live App Previews Modal (Side-by-side or Tabbed) */}
      <LiveAppModal
        isOpen={liveModal.isOpen}
        onClose={() => setLiveModal(prev => ({ ...prev, isOpen: false }))}
        initialAppId={liveModal.appId}
      />
    </div>
  );
}
