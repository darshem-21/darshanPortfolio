import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Code2,
  Smartphone,
  BrainCircuit,
  BarChart3
} from 'lucide-react';
import { projectsData } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { AgospherePreview } from './AgospherePreview.tsx';
import { Eye } from 'lucide-react';

interface ProjectsProps {
  onOpenLivePreview?: (appId: 'agosphere' | 'darshan-ai') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenLivePreview }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mobile' | 'ai-ml' | 'fullstack'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAgosphereModal, setShowAgosphereModal] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Android & Flutter' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'fullstack', label: 'Data Analytics & Cloud' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Portfolio Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed text-sm sm:text-base">
              Real-world systems spanning mobile engineering, generative artificial intelligence, Natural Language Processing, and enterprise analytics.
            </p>
          </div>

          {/* Interactive filter control tabs (functional buttons) */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Unboxed clean metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-indigo-400 font-semibold uppercase">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.tags[0]}</span>
                    {project.tags[1] && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{project.tags[1]}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.hasInteractiveDemo && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <Sparkles className="w-3 h-3" />
                        Interactive Demo
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics ribbon */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5 pt-4 border-t border-slate-800/80">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</p>
                        <p className="text-xs font-semibold text-slate-200 mt-0.5 font-mono truncate">{m.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technology list */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
                  >
                    <span>Explore Case Study & Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  {project.id === 'farmers-marketplace' && (
                    <button
                      onClick={() => onOpenLivePreview ? onOpenLivePreview('agosphere') : setShowAgosphereModal(true)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Live Preview</span>
                    </button>
                  )}

                  {project.id === 'darshan-ai' && (
                    <button
                      onClick={() => onOpenLivePreview ? onOpenLivePreview('darshan-ai') : window.open('https://darshem-21.github.io/Darshan-AI/', '_blank')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Live Preview</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Live Agosphere Flutter Web App Previewer Modal */}
      {showAgosphereModal && (
        <AgospherePreview
          isOpen={showAgosphereModal}
          onClose={() => setShowAgosphereModal(false)}
        />
      )}
    </section>
  );
};
