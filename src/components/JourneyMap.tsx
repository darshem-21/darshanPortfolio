import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause, 
  MapPin, 
  ExternalLink, 
  ArrowDown, 
  CheckCircle2, 
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Layers,
  Send,
  Eye
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export interface QuestLevel {
  id: number;
  levelNumber: number;
  title: string;
  themeName: string;
  tagline: string;
  period: string;
  sectionId: string;
  color: {
    bg: string;
    border: string;
    glow: string;
    text: string;
    gradient: string;
  };
  stars: number;
  xpUnlocked: string[];
  loot: string;
  story: string;
  icon: 'education' | 'engineering' | 'certs' | 'internship' | 'projects' | 'summit';
}

const questLevels: QuestLevel[] = [
  {
    id: 1,
    levelNumber: 1,
    title: "The Genesis & Foundations",
    themeName: "Foundation Realm",
    tagline: "Sarvodaya Trust & B.G.S Science PU College",
    period: "2020 — 2022",
    sectionId: "education",
    color: {
      bg: "bg-emerald-500/20",
      border: "border-emerald-500",
      glow: "shadow-emerald-500/50",
      text: "text-emerald-400",
      gradient: "from-emerald-500 to-teal-600"
    },
    stars: 3,
    xpUnlocked: ["Mathematics & Calculus", "Physics & Logic", "Analytical Rigor (72% SSLC, 66% PU)"],
    loot: "Certificate of Pre-University Distinction",
    story: "Mastered fundamental analytical mathematics, science, and computing fundamentals in Karnataka, laying the essential logic groundwork for Artificial Intelligence engineering.",
    icon: 'education'
  },
  {
    id: 2,
    levelNumber: 2,
    title: "Engineering Odyssey",
    themeName: "Algorithm Academy",
    tagline: "Srinivas Institute of Technology, Mangaluru",
    period: "2022 — 2026",
    sectionId: "education",
    color: {
      bg: "bg-blue-500/20",
      border: "border-blue-500",
      glow: "shadow-blue-500/50",
      text: "text-blue-400",
      gradient: "from-blue-500 to-cyan-600"
    },
    stars: 3,
    xpUnlocked: ["Data Structures & Algorithms", "Machine Learning Foundations", "CGPA 7.3/10 Score", "Database Architecture (SQL)"],
    loot: "B.E. Candidate Status (AI & Data Science)",
    story: "Specialized in Artificial Intelligence and Data Science at SIT Mangaluru, excelling in ML algorithms, statistical computing, distributed databases, and high-performance programming.",
    icon: 'engineering'
  },
  {
    id: 3,
    levelNumber: 3,
    title: "The Credential Gauntlet",
    themeName: "Cloud & AI Vault",
    tagline: "6 Global Industry Certifications",
    period: "2024",
    sectionId: "certifications",
    color: {
      bg: "bg-amber-500/20",
      border: "border-amber-500",
      glow: "shadow-amber-500/50",
      text: "text-amber-400",
      gradient: "from-amber-500 to-orange-600"
    },
    stars: 3,
    xpUnlocked: ["AWS Cloud Foundations", "Google Cloud BigQuery", "IBM ML & Deep Learning", "Oracle Cloud Associate", "Certiport AI Specialist"],
    loot: "Verified Credly Badge Trophy Case",
    story: "Tested skills on global benchmarks, conquering rigorous enterprise certification exams from Amazon, Google, IBM, Oracle, and Pearson VUE Certiport.",
    icon: 'certs'
  },
  {
    id: 4,
    levelNumber: 4,
    title: "Industry Proving Grounds",
    themeName: "MindMatrix Fortress",
    tagline: "Kashta-Kala Android & Gemini AI Internship",
    period: "Feb 2026 — May 2026",
    sectionId: "experience",
    color: {
      bg: "bg-purple-500/20",
      border: "border-purple-500",
      glow: "shadow-purple-500/50",
      text: "text-purple-400",
      gradient: "from-purple-500 to-pink-600"
    },
    stars: 3,
    xpUnlocked: ["Kotlin & Jetpack Compose", "Gemini AI Dynamic Pricing", "Room DB Offline-First Cache", "Production MVVM Architecture"],
    loot: "Production Kashta-Kala Mobile Suite",
    story: "Shipped the complete Kashta-Kala application for rural woodwork artisans during a 3-month internship in Bengaluru, solving low-connectivity barriers with offline-first Room DB synchronization.",
    icon: 'internship'
  },
  {
    id: 5,
    levelNumber: 5,
    title: "The Innovation Forge",
    themeName: "Darshan AI & Agosphere Lab",
    tagline: "Twin Live Deployments & AI Architectures",
    period: "2025 — 2026",
    sectionId: "live-previews",
    color: {
      bg: "bg-rose-500/20",
      border: "border-rose-500",
      glow: "shadow-rose-500/50",
      text: "text-rose-400",
      gradient: "from-rose-500 to-red-600"
    },
    stars: 3,
    xpUnlocked: ["Darshan AI (Autonomous Agent)", "Zero-Auth Architecture", "Flutter Web (Agosphere)", "Supabase PostgreSQL", "TF-IDF NLP (93.4% F1)"],
    loot: "Twin Live Web Ecosystem (Darshan-AI & Agosphere)",
    story: "Shipped impactful production web systems including Darshan AI (autonomous agent web platform with zero auth friction) and Agosphere (direct farm produce marketplace).",
    icon: 'projects'
  },
  {
    id: 6,
    levelNumber: 6,
    title: "The Grand Summit",
    themeName: "Career Horizon",
    tagline: "2026 Batch Ready for Industry & Research",
    period: "Present — Future",
    sectionId: "contact",
    color: {
      bg: "bg-indigo-500/20",
      border: "border-indigo-500",
      glow: "shadow-indigo-500/50",
      text: "text-indigo-400",
      gradient: "from-indigo-500 to-violet-600"
    },
    stars: 3,
    xpUnlocked: ["Available for Full-Time Roles", "AI & Mobile Engineering", "Immediate Relocation/Remote", "High Growth Potential"],
    loot: "Offer Letter Ready · Immediate Hire",
    story: "Equipped with academic distinction, production internship experience, cloud credentials, and real apps, Darshan is ready to accelerate engineering teams worldwide.",
    icon: 'summit'
  }
];

interface JourneyMapProps {
  onOpenLivePreview?: () => void;
  onOpenResume?: () => void;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ onOpenLivePreview, onOpenResume }) => {
  const [activeLevelId, setActiveLevelId] = useState<number>(4); // Default to MindMatrix internship
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [showRewardToast, setShowRewardToast] = useState<boolean>(false);

  const activeLevel = questLevels.find(l => l.id === activeLevelId) || questLevels[0];

  // Auto-play / Travel Sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveLevelId(prev => (prev >= questLevels.length ? 1 : prev + 1));
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSelectLevel = (levelId: number) => {
    setActiveLevelId(levelId);
    setShowRewardToast(true);
    setTimeout(() => setShowRewardToast(false), 2500);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey-map" className="py-24 bg-[#060913] border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Playful Candy Crush Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive Odyssey · Candy Crush Style Quest Map</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Darshan's Career & Engineering Quest Map
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
              Step through the milestones of my career journey! Click each level box to travel along the quest road, unlock experience badges, and inspect the real projects.
            </p>
          </div>

          {/* Auto-Travel Tour Button */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all shadow-md ${
                isAutoPlaying
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-amber-500/30 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
              <span>{isAutoPlaying ? 'Pause Journey' : 'Auto-Travel Map'}</span>
            </button>

            {onOpenLivePreview && (
              <button
                onClick={onOpenLivePreview}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Agosphere</span>
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Quest Layout: Left is the Candy Crush Saga Travel Road, Right is the Interactive Level Detail Card */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* SAGA MAP TRAVEL ROAD (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 sm:p-8 relative shadow-2xl backdrop-blur-sm overflow-hidden">
            
            {/* Candy Crush Map Header Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Level Map Road</span>
                  <p className="text-[11px] text-slate-400">Click any level circle to travel & open rewards</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                <span className="text-amber-400 font-bold">18/18</span>
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>ALL STARS UNLOCKED</span>
              </div>
            </div>

            {/* Travel Path Visual Container */}
            <div className="relative py-4">
              
              {/* Stepping Level Boxes along the Winding Path */}
              <div className="space-y-6 sm:space-y-8 relative z-10">
                {questLevels.map((lvl, index) => {
                  const isActive = lvl.id === activeLevelId;
                  // Alternating horizontal offsets to create that iconic Candy Crush snake / S-curve winding trail
                  const alignments = [
                    'justify-start pl-2 sm:pl-8',
                    'justify-center sm:pl-28',
                    'justify-end pr-2 sm:pr-8',
                    'justify-center sm:pr-24',
                    'justify-start pl-2 sm:pl-10',
                    'justify-center sm:pl-16'
                  ];
                  const alignClass = alignments[index % alignments.length];

                  return (
                    <div key={lvl.id} className={`flex items-center ${alignClass} relative group`}>
                      
                      {/* Dotted connector trail to next level */}
                      {index < questLevels.length - 1 && (
                        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-10 border-l-2 border-dashed border-slate-700 pointer-events-none -z-1 hidden sm:block" />
                      )}

                      {/* The Level Box Node */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleSelectLevel(lvl.id)}
                          className={`relative group/node focus:outline-none transition-all duration-300 transform ${
                            isActive ? 'scale-115 -translate-y-1' : 'hover:scale-108 hover:-translate-y-0.5'
                          }`}
                        >
                          {/* Pulsing aura for active level */}
                          {isActive && (
                            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md opacity-75 animate-pulse" />
                          )}

                          {/* Level Circle Button */}
                          <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center p-1 border-3 shadow-xl transition-colors ${
                            isActive
                              ? `bg-gradient-to-br ${lvl.color.gradient} border-white shadow-2xl ${lvl.color.glow}`
                              : `bg-slate-900 ${lvl.color.border} hover:border-white shadow-md`
                          }`}>
                            
                            {/* Level Number */}
                            <span className={`text-[10px] font-mono font-extrabold uppercase ${
                              isActive ? 'text-white/90' : 'text-slate-400'
                            }`}>
                              LVL
                            </span>
                            <span className={`text-xl sm:text-2xl font-black font-mono leading-none ${
                              isActive ? 'text-white' : 'text-slate-100'
                            }`}>
                              {lvl.levelNumber}
                            </span>

                            {/* 3 Golden Stars on top/bottom of level */}
                            <div className="flex items-center gap-0.5 mt-0.5">
                              {[...Array(lvl.stars)].map((_, sIdx) => (
                                <Star
                                  key={sIdx}
                                  className="w-2.5 h-2.5 text-amber-300 fill-amber-300 drop-shadow"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Player Character Pin Indicator */}
                          {isActive && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg animate-bounce">
                              <MapPin className="w-2.5 h-2.5 fill-current" />
                              <span>YOU ARE HERE</span>
                            </div>
                          )}
                        </button>

                        {/* Level Quick Info Box Beside Node */}
                        <div 
                          onClick={() => handleSelectLevel(lvl.id)}
                          className={`cursor-pointer p-3 sm:p-3.5 rounded-2xl border transition-all text-left max-w-xs ${
                            isActive
                              ? 'bg-slate-900 border-indigo-500/60 shadow-lg'
                              : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${lvl.color.text}`}>
                              {lvl.themeName}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">{lvl.period}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                            {lvl.title}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {lvl.tagline}
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Road Bottom Stats */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>6 of 6 Milestones Completed</span>
              </span>
              <span className="font-mono text-indigo-400">100% Progress</span>
            </div>

          </div>

          {/* ACTIVE LEVEL REWARD & STORY CARD (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="bg-[#0b101e] border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase ${activeLevel.color.bg} ${activeLevel.color.text} border border-current`}>
                    Level 0{activeLevel.levelNumber} Quest
                  </span>
                  <span className="text-xs font-mono text-slate-400">{activeLevel.period}</span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-black text-white leading-tight">
                {activeLevel.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-indigo-400 mt-1">
                {activeLevel.tagline}
              </p>

              {/* Story Narrative */}
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                {activeLevel.story}
              </p>

              {/* Unlocked XP / Competencies */}
              <div className="mt-5 space-y-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Experience & Skills Unlocked:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeLevel.xpUnlocked.map((xp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-200 border border-slate-700/80"
                    >
                      +{xp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Artifact / Loot Card */}
              <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">Loot Acquired</span>
                  <p className="text-xs font-bold text-white mt-0.5">{activeLevel.loot}</p>
                </div>
              </div>

              {/* Level Action Navigation Controls */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2.5">
                <button
                  onClick={() => handleScrollToSection(activeLevel.sectionId)}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2"
                >
                  <span>Inspect Section in Portfolio ({activeLevel.sectionId.toUpperCase()})</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    disabled={activeLevelId <= 1}
                    onClick={() => handleSelectLevel(activeLevelId - 1)}
                    className="flex-1 py-2 px-3 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 rounded-lg transition-colors border border-slate-800 flex items-center justify-center gap-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    disabled={activeLevelId >= questLevels.length}
                    onClick={() => handleSelectLevel(activeLevelId + 1)}
                    className="flex-1 py-2 px-3 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 rounded-lg transition-colors border border-slate-800 flex items-center justify-center gap-1"
                  >
                    <span>Next Level</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Travel Shortcut Links */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Quick Jump to Level:</span>
              <div className="flex items-center gap-1 font-mono">
                {questLevels.map(l => (
                  <button
                    key={l.id}
                    onClick={() => handleSelectLevel(l.id)}
                    className={`w-6 h-6 rounded-md text-[11px] font-bold transition-colors ${
                      l.id === activeLevelId ? 'bg-indigo-600 text-white' : 'bg-slate-800 hover:text-white'
                    }`}
                  >
                    {l.id}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
