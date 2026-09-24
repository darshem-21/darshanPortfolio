import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  GitBranch, 
  GitPullRequest, 
  Star, 
  Code2, 
  Terminal,
  Activity
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const GitHubStats: React.FC = () => {
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const [langsError, setLangsError] = useState(false);
  const [graphError, setGraphError] = useState(false);

  return (
    <section className="py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Open Source & Metrics</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              GitHub Activity & Code Analytics
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed text-sm sm:text-base">
              Continuous commit consistency, algorithmic contributions, and language distribution across repositories.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>github.com/{personalInfo.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Profile Views / Badge Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Live GitHub Status</p>
              <p className="text-[11px] text-slate-400">Active development & continuous learning</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={`https://komarev.com/ghpvc/?username=${personalInfo.githubUsername}&label=Profile+Views&color=6366f1&style=flat-square`}
              alt="Profile Views"
              className="h-6 rounded"
              loading="lazy"
            />
          </div>
        </div>

        {/* Dynamic GitHub Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* GitHub Stats Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center items-center overflow-hidden min-h-[220px]">
            {!statsError ? (
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${personalInfo.githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0c1220`}
                alt="Darshan's GitHub Stats"
                onError={() => setStatsError(true)}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            ) : (
              <div className="text-center p-6 space-y-2">
                <Github className="w-8 h-8 text-indigo-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">GitHub Statistics</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Active contributions in Python, Kotlin, Flutter, and Machine Learning repositories.
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-indigo-400 hover:underline"
                >
                  View live on GitHub →
                </a>
              </div>
            )}
          </div>

          {/* GitHub Streak Stats Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center items-center overflow-hidden min-h-[220px]">
            {!streakError ? (
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${personalInfo.githubUsername}&theme=tokyonight&hide_border=true&background=0c1220`}
                alt="Darshan's GitHub Streak"
                onError={() => setStreakError(true)}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            ) : (
              <div className="text-center p-6 space-y-2">
                <Star className="w-8 h-8 text-indigo-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Contribution Consistency</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Disciplined engineering streak with daily commits, code refactoring, and AI experiments.
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-indigo-400 hover:underline"
                >
                  View streak on GitHub →
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Top Languages and Activity Row */}
        <div className="grid md:grid-cols-12 gap-8">
          
          <div className="md:col-span-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center items-center overflow-hidden">
            {!langsError ? (
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0c1220`}
                alt="Darshan's Top Languages"
                onError={() => setLangsError(true)}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            ) : (
              <div className="text-center p-4">
                <Code2 className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300 font-semibold">Primary Repository Languages</p>
                <p className="text-xs text-slate-400 mt-1">Python · Kotlin · Dart · JavaScript · SQL</p>
              </div>
            )}
          </div>

          <div className="md:col-span-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center items-center overflow-hidden">
            {!graphError ? (
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${personalInfo.githubUsername}&theme=tokyo-night&bg_color=0c1220&hide_border=true`}
                alt="Darshan's Activity Graph"
                onError={() => setGraphError(true)}
                className="w-full h-auto"
                loading="lazy"
              />
            ) : (
              <div className="text-center p-4">
                <Terminal className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300 font-semibold">Activity Timeline</p>
                <p className="text-xs text-slate-400 mt-1">Regular code pushes, issue management, and feature commits.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
