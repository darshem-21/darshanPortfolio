import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { JourneyMap } from './components/JourneyMap.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { AgospherePreview } from './components/AgospherePreview.tsx';
import { Skills } from './components/Skills.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Education } from './components/Education.tsx';
import { GitHubStats } from './components/GitHubStats.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { Sparkles, Globe, ExternalLink } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAgosphereModalOpen, setIsAgosphereModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenLivePreview={() => setIsAgosphereModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with Chroma Key Portrait & Actions */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenLivePreview={() => setIsAgosphereModalOpen(true)}
        />

        {/* Candy Crush Style Career Quest Map Travel Animation */}
        <JourneyMap 
          onOpenLivePreview={() => setIsAgosphereModalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Background & Core Pillars */}
        <About />

        {/* MindMatrix Internship Deep Dive */}
        <Experience />

        {/* Featured Projects with Interactive Sandboxes */}
        <Projects />

        {/* Dedicated Embedded Live Preview Section for Agosphere */}
        <section className="py-20 bg-slate-950/70 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Live Production Deployment</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Agosphere Live Web App Preview
                </h2>
                <p className="text-slate-400 mt-2 text-sm sm:text-base">
                  Directly preview and interact with the live Flutter Web deployment of <strong>Agosphere (Marketplace for Farmers)</strong> hosted at <span className="text-indigo-300 font-mono">errors-hack.github.io</span>.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://errors-hack.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-md shadow-indigo-600/20"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Open errors-hack.github.io</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>
            </div>

            {/* Embedded Live Previewer */}
            <AgospherePreview embedded={true} />
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

      {/* Floating / Pop-up Live Agosphere Preview Modal */}
      <AgospherePreview
        isOpen={isAgosphereModalOpen}
        onClose={() => setIsAgosphereModalOpen(false)}
      />
    </div>
  );
}
