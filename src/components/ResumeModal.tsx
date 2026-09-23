import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
DARSHAN K S
Kumbarahalli (V), Belur, Hassan -- 573115, Karnataka, India
Phone: +91 8971638339 | Email: dharshanks98@gmail.com
LinkedIn: https://linkedin.com/in/darshan-ks-5678a830b
GitHub: https://github.com/darshem-21
Credly: https://www.credly.com/users/darshan-ks.acb1033d/badges/credly

SUMMARY
Artificial Intelligence and Data Science undergraduate with hands-on experience in Android, Flutter, Full-Stack Development, Machine Learning, Generative AI, and Data Analytics. Experienced with Kotlin, Jetpack Compose, Python, SQL, JavaScript, HTML, CSS, REST APIs, Firebase, and Gemini AI. Developed applications during a 3-month internship with a focus on practical and user-friendly solutions.

TECHNICAL SKILLS
- Languages: Python, SQL, HTML, CSS, JavaScript, Bootstrap, Kotlin, Dart
- Mobile Development: Kotlin, Flutter, Jetpack Compose, MVVM, Room Database
- Databases: Firebase, Supabase, Room Database, PostgreSQL, MySQL
- AI/ML: Machine Learning, NumPy, Pandas, TensorFlow, Matplotlib, Seaborn, Generative AI, NLP, Scikit-learn
- Tools & Platforms: Git, Android Studio, Power BI, MS Excel, Jupyter Notebook

INTERNSHIP EXPERIENCE
Android App Development using Generative AI | Feb 2026 -- May 2026
MindMatrix, Bengaluru
- Developed the Kashta-Kala Android application end-to-end using Kotlin, Jetpack Compose, Room Database, and MVVM architecture.
- Built four core modules: Design Catalog, Material Estimator, Price Quote Generator, and Portfolio, improving workflow efficiency for end users.
- Integrated Firebase and Gemini AI to enable generative features and optimized the app with an offline-first architecture for reliable performance in low-connectivity conditions.
- Collaborated using Git version control and Android Studio throughout the development lifecycle.

PROJECTS
1. Marketplace for Farmers | Flutter, Supabase, Geoapify, OpenRouter API
- Developed a full-featured Flutter marketplace application with Supabase backend for farmers to sell produce directly.
- Implemented user authentication, product listing, real-time updates, and location-based search using Geoapify.
- Integrated Generative AI via OpenRouter API to enhance product descriptions and user experience.
- Live: https://errors-hack.github.io/ | GitHub: https://github.com/darshem-21/farmers-marketplace

2. Spam / Fake Review Detection using Machine Learning | Python, Scikit-learn, NLP
- Built a fake review detection system applying NLP preprocessing and Machine Learning classification models.
- Trained and evaluated models in Jupyter Notebook using Scikit-learn to classify genuine vs. spam reviews.
- GitHub: https://github.com/darshem-21/fake-review-detection

EDUCATION
- Srinivas Institute of Technology, Mangaluru (2022 - 2026)
  Bachelor of Engineering, Artificial Intelligence and Data Science -- CGPA: 7.3/10
- B.G.S Science PU College (PCMB) (2022)
  Pre-University Course -- 66%
- Sarvodaya Education Trust (2020)
  SSLC -- 72%

CERTIFICATIONS
- IT Specialist -- Artificial Intelligence
- AWS Academy Graduate -- Cloud Foundations
- Google Cloud Data Analytics Certificate
- Machine Learning with Python -- IBM
- Deep Learning with TensorFlow -- IBM
- Oracle Cloud Infrastructure Foundations Associate
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar (Non-printable) */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-[#070b14] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">Curriculum Vitae / Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 lg:p-12 max-h-[80vh] overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:max-h-none print:overflow-visible">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
              Darshan K S
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Kumbarahalli (V), Belur, Hassan — 573115, Karnataka, India
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
              <span>+91 8971638339</span>
              <span>·</span>
              <a href={`mailto:${personalInfo.email}`} className="text-indigo-700 hover:underline">
                {personalInfo.email}
              </a>
              <span>·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                LinkedIn
              </a>
              <span>·</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                GitHub
              </a>
              <span>·</span>
              <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                Credly
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Summary
            </h2>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed">
              Artificial Intelligence and Data Science undergraduate with hands-on experience in Android, Flutter, Full-Stack Development, Machine Learning, Generative AI, and Data Analytics. Experienced with Kotlin, Jetpack Compose, Python, SQL, JavaScript, HTML, CSS, REST APIs, Firebase, and Gemini AI. Developed applications during a 3-month internship with a focus on practical and user-friendly solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Technical Skills
            </h2>
            <div className="text-xs text-slate-800 mt-2 space-y-1 leading-normal">
              <p><strong className="text-slate-950">Languages:</strong> Python, SQL, HTML, CSS, JavaScript, Bootstrap, Kotlin, Dart</p>
              <p><strong className="text-slate-950">Mobile Development:</strong> Kotlin, Flutter, Jetpack Compose, MVVM Architecture, Room Database</p>
              <p><strong className="text-slate-950">Databases:</strong> Firebase, Supabase, Room Database, SQLite, PostgreSQL</p>
              <p><strong className="text-slate-950">AI / ML:</strong> Machine Learning, NumPy, Pandas, TensorFlow, Matplotlib, Seaborn, Generative AI, NLP, Scikit-learn</p>
              <p><strong className="text-slate-950">Tools & Platforms:</strong> Git, Android Studio, Power BI, MS Excel, Jupyter Notebook, VS Code</p>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Internship Experience
            </h2>
            <div className="mt-2.5">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-950">
                <span>Android App Development using Generative AI</span>
                <span className="font-mono font-normal text-slate-600">Feb 2026 — May 2026</span>
              </div>
              <p className="text-xs text-indigo-700 font-semibold italic">MindMatrix, Bengaluru</p>
              <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-1.5 space-y-1 leading-relaxed">
                <li>Developed the Kashta-Kala Android application end-to-end using Kotlin, Jetpack Compose, Room Database, and MVVM architecture.</li>
                <li>Built four core modules: Design Catalog, Material Estimator, Price Quote Generator, and Portfolio, improving workflow efficiency for end users.</li>
                <li>Integrated Firebase and Gemini AI to enable generative features and optimized the app with an offline-first architecture for reliable performance in low-connectivity conditions.</li>
                <li>Collaborated using Git version control and Android Studio throughout the development lifecycle.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Projects
            </h2>
            <div className="mt-2.5 space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-950">
                  <span>Marketplace for Farmers</span>
                  <span className="font-normal text-slate-600 font-mono">Flutter, Supabase, Geoapify, OpenRouter API</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-1 space-y-1 leading-relaxed">
                  <li>Developed a full-featured Flutter marketplace application with Supabase backend for farmers to sell produce directly.</li>
                  <li>Implemented user authentication, product listing, real-time updates, and location-based search using Geoapify.</li>
                  <li>Integrated Generative AI via OpenRouter API to enhance product descriptions and user experience.</li>
                  <li className="text-indigo-700">Links: Live: https://errors-hack.github.io/ · GitHub: https://github.com/darshem-21/farmers-marketplace</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-950">
                  <span>Spam / Fake Review Detection using Machine Learning</span>
                  <span className="font-normal text-slate-600 font-mono">Python, Scikit-learn, NLP</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-1 space-y-1 leading-relaxed">
                  <li>Built a fake review detection system applying NLP preprocessing and Machine Learning classification models.</li>
                  <li>Trained and evaluated models in Jupyter Notebook using Scikit-learn to classify genuine vs. spam reviews.</li>
                  <li className="text-indigo-700">GitHub: https://github.com/darshem-21/fake-review-detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Education
            </h2>
            <div className="mt-2 space-y-2 text-xs text-slate-800">
              <div className="flex justify-between">
                <div>
                  <strong className="text-slate-950">Srinivas Institute of Technology, Mangaluru</strong>
                  <p className="text-slate-700">Bachelor of Engineering, Artificial Intelligence and Data Science</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-600">May 2026</span>
                  <p className="font-semibold text-slate-900">CGPA: 7.3 / 10</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <strong className="text-slate-950">B.G.S Science PU College (PCMB)</strong>
                  <p className="text-slate-700">Pre-University Course</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-600">2022</span>
                  <p className="font-semibold text-slate-900">66%</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <strong className="text-slate-950">Sarvodaya Education Trust</strong>
                  <p className="text-slate-700">Secondary School Leaving Certificate (SSLC)</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-600">2020</span>
                  <p className="font-semibold text-slate-900">72%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-300">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs text-slate-800 mt-2 space-y-0.5 grid sm:grid-cols-2">
              <li>IT Specialist — Artificial Intelligence</li>
              <li>AWS Academy Graduate — Cloud Foundations</li>
              <li>Google Cloud Data Analytics Certificate</li>
              <li>Machine Learning with Python — IBM</li>
              <li>Deep Learning with TensorFlow — IBM</li>
              <li>Oracle Cloud Infrastructure Foundations Associate</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
