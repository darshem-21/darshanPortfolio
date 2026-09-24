import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Smartphone,
  BrainCircuit,
  Database
} from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Languages & Core": <Code2 className="w-4 h-4 text-indigo-400" />,
    "Mobile Engineering": <Smartphone className="w-4 h-4 text-purple-400" />,
    "AI, ML & Generative AI": <BrainCircuit className="w-4 h-4 text-emerald-400" />,
    "Databases, Cloud & Analytics": <Database className="w-4 h-4 text-sky-400" />
  };

  const filteredCategories = skillCategoriesData.map(cat => {
    if (activeCategory !== 'all' && cat.category !== activeCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.note && s.note.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return filteredSkills.length > 0 ? { ...cat, skills: filteredSkills } : null;
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Technical Competencies</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Tech Stack & Engineering Skills
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed text-sm sm:text-base">
              A balanced toolkit spanning modern AI pipelines, native and cross-platform mobile frameworks, relational/document databases, and cloud analytics.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Kotlin, Gemini)..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillCategoriesData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === cat.category
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {categoryIcons[cat.category]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => cat && (
            <div
              key={cat.category}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                <span className="p-2 rounded-xl bg-slate-800 border border-slate-700/60">
                  {categoryIcons[cat.category]}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{cat.category}</h3>
                  <span className="text-xs text-slate-400">{cat.skills.length} competencies</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                      <span className="text-[10px] font-mono font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {skill.level}
                      </span>
                    </div>
                    {skill.note && (
                      <p className="text-[11px] text-slate-400 mt-1.5 truncate">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner (from GitHub README badge set) */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Daily Development Environment & Platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              "Python", "Kotlin", "Flutter", "Dart", "Jetpack Compose", "Gemini AI", 
              "TensorFlow", "Scikit-Learn", "Supabase", "Firebase", "Android Studio", 
              "Google Cloud", "AWS", "Power BI", "Git", "VS Code", "Jupyter"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-lg hover:text-white hover:border-indigo-500/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
