import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink,
  Linkedin,
  Github,
  Award,
  Clock,
  Sparkles,
  Send
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('Full-Time Role (2026 Batch)');

  const emailTemplates: Record<string, { subject: string; body: string }> = {
    'Full-Time Role (2026 Batch)': {
      subject: 'Job Opportunity for Darshan K S - AI & Software Engineering',
      body: 'Hi Darshan,\n\nWe came across your portfolio and would love to discuss a full-time software engineering role with our team.\n\nCompany / Role:\nLocation:\nNext Steps:'
    },
    'Internship / Research': {
      subject: 'Internship / Research Collaboration - Darshan K S',
      body: 'Hi Darshan,\n\nWe are impressed with your work in Android (Kashta-Kala), Flutter, and Machine Learning. We would love to discuss an internship or project collaboration.'
    },
    'Project Discussion': {
      subject: 'Project Inquiry / Consultation - Darshan K S',
      body: 'Hi Darshan,\n\nI have an interesting AI / mobile engineering project and wanted to discuss potential ideas.'
    },
    'General Networking': {
      subject: 'Connecting from your Portfolio - Darshan K S',
      body: 'Hi Darshan,\n\nI visited your portfolio and wanted to connect!'
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const currentTemplate = emailTemplates[selectedTopic] || emailTemplates['Full-Time Role (2026 Batch)'];
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    currentTemplate.subject
  )}&body=${encodeURIComponent(currentTemplate.body)}`;

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Connect & Collaborate</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Get in Touch
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-base">
            I am currently open to full-time AI/DS software engineering opportunities, internships, and research collaborations. Send an email directly via your email client or connect across platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white mb-2">Direct Contact Channels</h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Phone & WhatsApp</p>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors font-mono">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    Hassan — 573115, Karnataka, India
                  </p>
                </div>
              </div>

            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white mb-2">Profiles & Repositories</h3>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold">LinkedIn Profile (Darshan K S)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-200" />
                  <span className="text-xs font-semibold">GitHub (@darshem-21)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold">Credly Verified Certifications</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Email Client Dispatcher */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Direct Dispatch</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Connect via Email Client</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Click below to launch your default email client (Gmail, Outlook, Apple Mail, etc.) with pre-configured headers and inquiries.
              </p>
            </div>

            {/* Quick Topic / Preset Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Select Inquiry Topic:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.keys(emailTemplates).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-medium flex items-center justify-between ${
                      selectedTopic === topic
                        ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{topic}</span>
                    {selectedTopic === topic && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Draft Preview Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400">
                <span>To: <strong className="text-white font-sans">{personalInfo.email}</strong></span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-sans">
                  <Clock className="w-3 h-3" />
                  ~24hr response
                </span>
              </div>
              <div className="text-slate-300">
                <span className="text-slate-500">Subject: </span>
                <span className="text-indigo-300">{currentTemplate.subject}</span>
              </div>
              <div className="pt-2 text-slate-400 text-[11px] leading-relaxed whitespace-pre-line font-sans border-t border-slate-900">
                {currentTemplate.body}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={mailtoUrl}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Open in Email Client</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
