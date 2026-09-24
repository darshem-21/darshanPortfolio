import React from 'react';
import { 
  BrainCircuit, 
  Smartphone, 
  Database, 
  BarChart3, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2,
  Code2,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Artificial Intelligence & GenAI",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      description: "Building intelligent applications powered by modern LLMs and predictive ML algorithms. Experienced in prompt engineering, Google Gemini API, OpenRouter, NLP classification, and Scikit-learn pipelines."
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      description: "Engineering fluid, responsive mobile apps using Native Android (Kotlin, Jetpack Compose) and cross-platform Flutter. Champion of MVVM architecture and offline-first Room Database implementations."
    },
    {
      title: "Full-Stack & Cloud Backends",
      icon: <Database className="w-5 h-5 text-sky-400" />,
      description: "Designing reliable cloud backends and data stores utilizing Supabase (PostgreSQL), Firebase Firestore, and RESTful APIs, backed by foundational knowledge in AWS and Google Cloud Platform."
    },
    {
      title: "Data Analytics & Storytelling",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      description: "Transforming raw data tables into strategic business intelligence using Power BI, SQL queries, Pandas, and exploratory data analysis in Jupyter to uncover actionable customer and market trends."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Background & Focus</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Engineering software at the intersection of AI, Mobile & Data
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-base">
            Artificial Intelligence and Data Science undergraduate with hands-on experience in Android, Flutter, Full-Stack Development, Machine Learning, Generative AI, and Data Analytics. Experienced with Kotlin, Jetpack Compose, Python, SQL, JavaScript, HTML, CSS, REST APIs, Firebase, and Gemini AI. Developed applications during a 3-month internship with a focus on practical and user-friendly solutions.
          </p>
        </div>

        {/* 2-Column Split: Bio + Key Numbers */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              My journey centers around practical problem-solving. During my 3-month internship at 
              <strong className="text-white font-semibold"> MindMatrix (Bengaluru)</strong>, I spearheaded the end-to-end development of 
              <strong className="text-indigo-300 font-semibold"> Kashta-Kala</strong>, a production-grade Android application combining Jetpack Compose, Room Database, and Google Gemini AI to assist artisans and carpenters with real-time quotes and material estimations.
            </p>
            <p>
              I take pride in crafting software that works reliably under real-world constraints—such as poor rural connectivity—by implementing robust offline-first caching, clean MVVM separation of concerns, and clean declarative user interfaces.
            </p>
            <p>
              Beyond mobile applications, I develop data science pipelines using Python, Scikit-learn, and NLP, as well as business intelligence dashboards with Power BI. I am constantly expanding my knowledge in modern cloud technologies and LLM integrations.
            </p>

            {/* Quiet unboxed metadata */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                B.E. AI & DS (2022–2026)
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                Intern @ MindMatrix
              </span>
            </div>
          </div>

          {/* Quick Metrics & Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <p className="text-3xl font-extrabold text-indigo-400 font-mono">7.3<span className="text-base text-slate-400">/10</span></p>
              <h3 className="text-sm font-semibold text-white mt-1">Engineering CGPA</h3>
              <p className="text-xs text-slate-400 mt-1">Srinivas Institute of Technology</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <p className="text-3xl font-extrabold text-purple-400 font-mono">6+</p>
              <h3 className="text-sm font-semibold text-white mt-1">Certifications</h3>
              <p className="text-xs text-slate-400 mt-1">AWS, Google, IBM, Oracle, Certiport</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <p className="text-3xl font-extrabold text-emerald-400 font-mono">4</p>
              <h3 className="text-sm font-semibold text-white mt-1">App Modules Built</h3>
              <p className="text-xs text-slate-400 mt-1">Catalog, Estimator, Quotes & Portfolio</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <p className="text-3xl font-extrabold text-sky-400 font-mono">2026</p>
              <h3 className="text-sm font-semibold text-white mt-1">Graduation Batch</h3>
              <p className="text-xs text-slate-400 mt-1">Open to immediate roles & internships</p>
            </div>
          </div>

        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
