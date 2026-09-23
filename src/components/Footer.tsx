import React from 'react';
import { ArrowUp, Github, Linkedin, Award, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#050811] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Attribution */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-base font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
            >
              Darshan K S
            </a>
            <p className="mt-1 text-slate-500">
              Artificial Intelligence & Data Science Engineer · Srinivas Institute of Technology
            </p>
          </div>

          {/* Quick anchor links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-white transition-colors">
              Resume
            </button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Credly"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Award className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Darshan K S. All rights reserved.</p>
          <p className="font-mono text-[11px]">Designed & Engineered with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
