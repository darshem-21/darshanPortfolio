import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Award, 
  ArrowRight, 
  FileText, 
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
  User,
  GraduationCap,
  Upload,
  Layers,
  Map as MapIcon,
  Eye,
  Sliders
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
  onOpenLivePreview?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenLivePreview }) => {
  const [activeCardTab, setActiveCardTab] = useState<'portrait' | 'specs'>('portrait');
  const [blendEffect, setBlendEffect] = useState<'chromakey' | 'studio' | 'neon'>('chromakey');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load any previously uploaded portrait from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('darshan_hero_portrait');
      if (saved) {
        setCustomPhotoUrl(saved);
      }
    } catch (e) {
      // localStorage fallback
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhotoUrl(result);
          try {
            localStorage.setItem('darshan_hero_portrait', result);
          } catch (err) {
            console.warn('Could not save to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Image source resolution
  // 1. Custom uploaded image (from user's upload)
  // 2. Local asset /darshan-portrait.jpg if present
  // 3. Fallback to GitHub avatar
  const displayImage = customPhotoUrl || "https://github.com/darshem-21.png";

  const scrollToJourneyMap = () => {
    const el = document.getElementById('journey-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Overview */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">{personalInfo.name}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2 block">
                {personalInfo.title}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Artificial Intelligence and Data Science undergraduate with hands-on experience in 
              <span className="text-indigo-300 font-semibold"> Android</span>, <span className="text-purple-300 font-semibold">Flutter</span>, 
              <span className="text-sky-300 font-semibold"> Full-Stack Development</span>, <span className="text-emerald-300 font-semibold">Machine Learning</span>, 
              <span className="text-pink-300 font-semibold"> Generative AI</span>, and <span className="text-amber-300 font-semibold">Data Analytics</span>. 
              Developed applications during a 3-month internship with a focus on practical and user-friendly solutions.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Hassan, Karnataka, India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                CGPA: {personalInfo.cgpa}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Intern @ MindMatrix (2026)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={scrollToJourneyMap}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
              >
                <MapIcon className="w-4 h-4 text-amber-300" />
                <span>Play Quest Map</span>
              </button>

              {onOpenLivePreview && (
                <button
                  onClick={onOpenLivePreview}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>Preview Agosphere</span>
                </button>
              )}

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>darshem-21</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/50 rounded-lg transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Credly Badges</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: CHROMA-KEY HERO FRONT CENTERPIECE */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#0a0f1d] border border-slate-800/90 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              
              {/* Card Header & Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-1.5">darshan.chroma</span>
                </div>

                <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveCardTab('portrait')}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 font-medium ${
                      activeCardTab === 'portrait'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Front Photo</span>
                  </button>
                  <button
                    onClick={() => setActiveCardTab('specs')}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 font-medium ${
                      activeCardTab === 'specs'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>

              {activeCardTab === 'portrait' ? (
                /* CHROMA-KEY PORTRAIT FRONT VIEW */
                <div className="space-y-4">
                  
                  {/* Chroma Stage Frame */}
                  <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#070b14] border border-slate-800/80 flex items-center justify-center">
                    
                    {/* Backlight Glow for Chroma Key Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={`rounded-full transition-all duration-700 blur-[80px] ${
                        blendEffect === 'chromakey'
                          ? 'w-64 h-64 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30'
                          : blendEffect === 'neon'
                          ? 'w-72 h-72 bg-gradient-to-tr from-cyan-500/30 via-indigo-600/40 to-pink-500/30'
                          : 'w-56 h-56 bg-slate-700/20'
                      }`} />
                    </div>

                    {/* Subtle Holographic Grid Lines */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

                    {/* The Chroma Key Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={displayImage}
                        alt="Darshan K S - AI & Data Science Engineer"
                        className={`w-full h-full object-contain object-bottom transition-all duration-500 ${
                          blendEffect === 'chromakey'
                            ? 'contrast-110 brightness-105 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]'
                            : blendEffect === 'neon'
                            ? 'drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]'
                            : 'rounded-xl'
                        }`}
                      />

                      {/* Bottom Gradient Fade into Canvas */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/70 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Level Tag */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LVL 6 ENGINEER</span>
                    </div>

                    {/* Photo upload / replace button trigger */}
                    <div className="absolute bottom-3 right-3 z-20">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        title="Upload/Swap Photo"
                        className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-colors shadow-lg flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Upload className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="hidden sm:inline">Swap Photo</span>
                      </button>
                    </div>

                  </div>

                  {/* Chroma Key Effect Toggles */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-indigo-400" />
                      Chroma Effect:
                    </span>
                    <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                      <button
                        onClick={() => setBlendEffect('chromakey')}
                        className={`px-2 py-0.5 rounded ${
                          blendEffect === 'chromakey' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Chroma Blend
                      </button>
                      <button
                        onClick={() => setBlendEffect('neon')}
                        className={`px-2 py-0.5 rounded ${
                          blendEffect === 'neon' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Neon Rim
                      </button>
                      <button
                        onClick={() => setBlendEffect('studio')}
                        className={`px-2 py-0.5 rounded ${
                          blendEffect === 'studio' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Studio
                      </button>
                    </div>
                  </div>

                  {/* Identity Footer */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white leading-tight">Darshan K S</p>
                      <p className="text-[11px] text-slate-400">AI & Data Science (2022–2026)</p>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                      CGPA 7.3/10
                    </span>
                  </div>

                </div>
              ) : (
                /* Terminal / Specs View */
                <div className="font-mono text-xs text-slate-300 space-y-2 py-1">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <span>$</span>
                    <span>cat developer_profile.json</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
                    <pre>{`{
  "name": "Darshan K S",
  "role": "AI & Data Science Engineer",
  "education": {
    "degree": "B.E. AI & DS (2022-2026)",
    "college": "SIT Mangaluru",
    "cgpa": "7.3/10"
  },
  "stack": {
    "mobile": ["Kotlin", "Jetpack Compose", "Flutter"],
    "ai_ml": ["Gemini AI", "Scikit-Learn", "NLP", "Pandas"],
    "backend": ["Firebase", "Supabase", "SQL", "REST"],
    "tools": ["Android Studio", "Power BI", "Git"]
  },
  "internship": "MindMatrix Bengaluru (2026)",
  "open_to_work": true
}`}</pre>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>Verified on Credly, GitHub & LinkedIn</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
