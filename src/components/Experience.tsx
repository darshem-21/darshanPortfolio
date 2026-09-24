import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Database,
  ExternalLink,
  ChevronRight,
  Code2
} from 'lucide-react';
import { experienceData } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number>(0);

  const modules = [
    {
      title: "Design Catalog",
      tagline: "High-Resolution Artisan Visual Index",
      desc: "Curated catalog of woodwork, custom cabinetry, and traditional carving designs with dimensional blueprints, material grades, and visual specifications.",
      features: ["Filterable design styles", "Multi-angle photo view", "Room database local caching"]
    },
    {
      title: "Material Estimator",
      tagline: "Automated Lumber & Hardware Sizing",
      desc: "Mathematical sizing and estimation engine that calculates raw board feet of lumber, fasteners, adhesive quantities, and varnish volume based on custom client inputs.",
      features: ["Dynamic dimensions input", "Wastage allowance calculation", "Real-time cost updates"]
    },
    {
      title: "Price Quote Generator",
      tagline: "Gemini AI-Powered Dynamic Invoicing",
      desc: "Generative AI engine utilizing Google Gemini to synthesize client specifications, local timber market rates, labor hours, and delivery distance into instant professional PDF quotes.",
      features: ["Gemini AI prompt pipeline", "Transparent labor breakdown", "One-tap customer share"]
    },
    {
      title: "Artisan Portfolio",
      tagline: "Order Tracking & Showcase System",
      desc: "End-to-end commerce suite allowing rural craftspersons to present verified past works, testimonials, and active milestone statuses to prospective clients.",
      features: ["Verified milestone tracking", "Customer reviews", "Offline status persistence"]
    }
  ];

  const exp = experienceData[0];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Work History</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Internship Experience & Production Engineering
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-base">
            Hands-on software development experience building mission-critical mobile features, integrating generative artificial intelligence, and engineering offline-first architectures.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-xl">
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Briefcase className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium text-sm mt-0.5">{exp.company}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Description & Key Contributions */}
          <div className="py-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
                Core Responsibilities & Technical Achievements
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-300">
                {exp.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
                Applied Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Offline-First Architecture Highlight Box */}
              <div className="mt-6 p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Offline-First Architecture Highlight</span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Developed an offline-first strategy where the Room Database acts as the single source of truth for all customer orders, catalogs, and quote calculations, synchronizing bi-directionally with Firebase whenever internet connectivity is detected.
                </p>
              </div>
            </div>
          </div>

          {/* Deep-Dive into the 4 Kashta-Kala Modules */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  Kashta-Kala Application Architecture
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">Explore the 4 core functional modules engineered during the internship</p>
              </div>

              {/* Interactive module tabs */}
              <div className="flex flex-wrap gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start">
                {modules.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedModule(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      selectedModule === idx
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Module Detail Banner */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Module 0{selectedModule + 1} · {modules[selectedModule].tagline}
                </span>
                <h5 className="text-lg font-bold text-white mt-1">{modules[selectedModule].title}</h5>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {modules[selectedModule].desc}
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                <p className="text-xs font-semibold text-slate-300">Engineering Highlights:</p>
                {modules[selectedModule].features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
