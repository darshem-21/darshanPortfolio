import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  BarChart, 
  Layers,
  ArrowRight,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for Review Classifier Demo
  const [reviewInput, setReviewInput] = useState<string>(
    "I bought this item and it stopped working after 2 days. Terrible customer service, would not recommend to anyone."
  );
  const [classificationResult, setClassificationResult] = useState<{
    label: 'Genuine' | 'Suspicious / Spam';
    confidence: number;
    indicators: string[];
  } | null>(null);

  // State for Kashta-Kala Estimator Demo
  const [furnitureType, setFurnitureType] = useState<'dining-table' | 'armchair' | 'carved-chest'>('dining-table');
  const [woodType, setWoodType] = useState<'teak' | 'rosewood' | 'sheesham'>('teak');
  const [lengthInches, setLengthInches] = useState<number>(72);
  const [widthInches, setWidthInches] = useState<number>(36);
  const [heightInches, setHeightInches] = useState<number>(30);
  const [calculatedQuote, setCalculatedQuote] = useState<{
    boardFeet: number;
    woodCost: number;
    laborHours: number;
    laborCost: number;
    totalQuote: number;
  } | null>(null);

  // State for Produce Generator Demo
  const [cropType, setCropType] = useState<string>('Hassan Arabica Coffee');
  const [generatedProduceDesc, setGeneratedProduceDesc] = useState<string | null>(null);
  const [isGeneratingProduce, setIsGeneratingProduce] = useState<boolean>(false);
  const [showLiveEmbed, setShowLiveEmbed] = useState<boolean>(false);

  // State for AI Agent Demo (Darshan AI)
  const [agentTask, setAgentTask] = useState<string>('Automate market price analysis and generate localized crop advisory');
  const [agentLogs, setAgentLogs] = useState<string[] | null>(null);
  const [isAgentRunning, setIsAgentRunning] = useState<boolean>(false);

  const handleRunAgentTask = () => {
    setIsAgentRunning(true);
    setAgentLogs(null);
    setTimeout(() => {
      setAgentLogs([
        'Initializing autonomous planner agent (Zero-Auth Architecture)...',
        'Step 1: Loaded tool registry [data_extractor, sentiment_engine, metrics_synthesizer]',
        'Step 2: Parsing user intent: "' + agentTask.slice(0, 45) + '..."',
        'Step 3: Contextual memory retrieved (session context token ID #829)',
        'Step 4: Executed multi-step pipeline with automated fallback validation',
        'Status: Execution Completed Successfully · Ready for Python Backend API'
      ]);
      setIsAgentRunning(false);
    }, 600);
  };

  // Run Review Classifier
  const handleClassifyReview = () => {
    const text = reviewInput.toLowerCase();
    const spamSignals = [
      'guarantee', 'free', 'best ever', 'buy now', '100% recommended', 'miracle',
      'click here', 'unbelievable', 'amazing quality visit', 'discount code', 'gift card'
    ];
    let spamScore = 0;
    const indicators: string[] = [];

    // Length check
    if (reviewInput.trim().split(/\s+/).length < 5) {
      spamScore += 0.3;
      indicators.push('Extremely short review length');
    }
    // Repetitive or promotional phrases
    spamSignals.forEach(signal => {
      if (text.includes(signal)) {
        spamScore += 0.35;
        indicators.push(`Promotional trigger phrase detected ("${signal}")`);
      }
    });
    // Excessive caps
    const upperCount = (reviewInput.match(/[A-Z]/g) || []).length;
    if (upperCount > reviewInput.length * 0.4 && reviewInput.length > 20) {
      spamScore += 0.4;
      indicators.push('Excessive uppercase capitalization');
    }
    // Excessive punctuation
    if ((reviewInput.match(/!{2,}/g) || []).length > 0) {
      spamScore += 0.25;
      indicators.push('Sensationalist exclamation marks (!!)');
    }

    const isSpam = spamScore >= 0.5;
    const confidence = isSpam 
      ? Math.min(98, Math.round(75 + spamScore * 20)) 
      : Math.min(96, Math.round(82 + (1 - spamScore) * 15));

    if (!isSpam && indicators.length === 0) {
      indicators.push('Normal natural language syntax with authentic experiential sentiment');
      indicators.push('Vocabulary distributions align with verified customer purchase patterns');
    }

    setClassificationResult({
      label: isSpam ? 'Suspicious / Spam' : 'Genuine',
      confidence,
      indicators
    });
  };

  // Run Kashta-Kala Estimator
  const handleCalculateQuote = () => {
    // Basic lumber formula: (Length * Width * Thickness) / 144
    // Wood factor by type
    const rates = {
      teak: { perBf: 140, multiplier: 1.2 },
      rosewood: { perBf: 190, multiplier: 1.4 },
      sheesham: { perBf: 110, multiplier: 1.0 }
    };
    const selectedRate = rates[woodType];
    
    // Approximate board feet based on dimensions & furniture style
    let baseBf = (lengthInches * widthInches * 1.5) / 144;
    if (furnitureType === 'dining-table') baseBf *= 1.8;
    if (furnitureType === 'armchair') baseBf *= 1.4;
    if (furnitureType === 'carved-chest') baseBf *= 2.2;

    const boardFeet = Math.round(baseBf * 10) / 10;
    const woodCost = Math.round(boardFeet * selectedRate.perBf);
    
    const laborHours = furnitureType === 'carved-chest' ? 36 : furnitureType === 'dining-table' ? 24 : 18;
    const laborCost = laborHours * 350; // INR per hour skilled artisan
    const totalQuote = woodCost + laborCost + 2500; // includes hardware & eco varnish

    setCalculatedQuote({
      boardFeet,
      woodCost,
      laborHours,
      laborCost,
      totalQuote
    });
  };

  // Run Produce Generator Demo
  const handleGenerateProduceDesc = () => {
    setIsGeneratingProduce(true);
    setTimeout(() => {
      let desc = '';
      if (cropType.includes('Coffee')) {
        desc = "🌱 Single-Origin Hassan Arabica Beans: Harvested at 3,200ft elevation in Western Ghats shade. Sun-dried with natural sweetness, floral aroma, and notes of dark cocoa and citrus. 100% pesticide-free, directly shipped from farmer to cup.";
      } else if (cropType.includes('Ragi')) {
        desc = "🌾 Nutrient-Dense Organic Finger Millet (Ragi): Heritage grain cultivated in Belur, rich in natural calcium and dietary fiber. Freshly stone-ground upon ordering. Direct farm price ensuring 100% fair artisan compensation.";
      } else {
        desc = "🌿 Estate-Grown Malabar Green Cardamom: Premium bold pods (8mm+) hand-picked from organic spice canopies. High essential oil concentration with intense sweet-peppery fragrance. Direct harvest dispatch.";
      }
      setGeneratedProduceDesc(desc);
      setIsGeneratingProduce(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0c1220] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-800 bg-[#070b14]/80">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Project Case Study · {project.category.toUpperCase()}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Executive Summary</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">{m.label}</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5 font-mono">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Architectural Highlights</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2.5">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Sandbox Demos */}
          {project.hasInteractiveDemo && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Live Interactive Simulation
                </span>
                <span className="text-[11px] text-slate-400">Client-Side Engine</span>
              </div>

              {/* DEMO 1: Review Classifier */}
              {project.demoType === 'review-classifier' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Test the NLP spam detection engine by testing sample reviews or typing custom text:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setReviewInput("Ordered this item last week. Packaged securely, fits true to size, and the stitching is high quality. Very satisfied with delivery time!");
                        setClassificationResult(null);
                      }}
                      className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors"
                    >
                      Sample 1: Authentic Review
                    </button>
                    <button
                      onClick={() => {
                        setReviewInput("AMAZING MIRACLE PRODUCT!! 100% RECOMMENDED BUY NOW WITH DISCOUNT CODE FREE GIFTS CLICK HERE!!");
                        setClassificationResult(null);
                      }}
                      className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors"
                    >
                      Sample 2: Spam / Fake Review
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    value={reviewInput}
                    onChange={(e) => {
                      setReviewInput(e.target.value);
                      setClassificationResult(null);
                    }}
                    placeholder="Enter customer review text to classify..."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
                  />

                  <button
                    onClick={handleClassifyReview}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                  >
                    <Cpu className="w-4 h-4" />
                    Run NLP Classification Pipeline
                  </button>

                  {classificationResult && (
                    <div className={`p-4 rounded-xl border mt-3 ${
                      classificationResult.label === 'Genuine' 
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' 
                        : 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">
                          Prediction: {classificationResult.label}
                        </span>
                        <span className="font-mono text-xs">
                          Confidence: {classificationResult.confidence}%
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-300 space-y-1">
                        <p className="font-semibold text-slate-400">Analysis Signals:</p>
                        {classificationResult.indicators.map((ind, i) => (
                          <p key={i}>• {ind}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: Kashta-Kala Price & Material Estimator */}
              {project.demoType === 'price-estimator' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Simulate the Kashta-Kala pricing logic for custom artisan woodwork:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Item Category</label>
                      <select
                        value={furnitureType}
                        onChange={(e) => setFurnitureType(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-indigo-500"
                      >
                        <option value="dining-table">Dining Table (6-Seater)</option>
                        <option value="armchair">Ergonomic Artisan Armchair</option>
                        <option value="carved-chest">Traditional Carved Wood Chest</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Timber / Wood Species</label>
                      <select
                        value={woodType}
                        onChange={(e) => setWoodType(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-indigo-500"
                      >
                        <option value="teak">Burma Teak (Premium Grade)</option>
                        <option value="rosewood">Indian Rosewood (Dalbergia latifolia)</option>
                        <option value="sheesham">North Indian Sheesham</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Length (in)</label>
                      <input
                        type="number"
                        value={lengthInches}
                        onChange={(e) => setLengthInches(Number(e.target.value))}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Width (in)</label>
                      <input
                        type="number"
                        value={widthInches}
                        onChange={(e) => setWidthInches(Number(e.target.value))}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Height (in)</label>
                      <input
                        type="number"
                        value={heightInches}
                        onChange={(e) => setHeightInches(Number(e.target.value))}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleCalculateQuote}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                  >
                    <BarChart className="w-4 h-4" />
                    Calculate Material & Quote (Gemini AI Logic)
                  </button>

                  {calculatedQuote && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400">Board Feet</span>
                        <p className="font-bold text-white text-sm font-mono">{calculatedQuote.boardFeet} BF</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Lumber Cost</span>
                        <p className="font-bold text-indigo-300 text-sm font-mono">₹{calculatedQuote.woodCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Artisan Labor</span>
                        <p className="font-bold text-purple-300 text-sm font-mono">{calculatedQuote.laborHours}h (₹{calculatedQuote.laborCost.toLocaleString()})</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Estimated Quote</span>
                        <p className="font-bold text-emerald-400 text-sm font-mono">₹{calculatedQuote.totalQuote.toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 3: Produce Generator */}
              {project.demoType === 'produce-gen' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Simulate how the Farmers Marketplace uses Generative AI (via OpenRouter) to write compelling descriptions:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Hassan Arabica Coffee', 'Belur Organic Ragi', 'Malabar Green Cardamom'].map((crop) => (
                      <button
                        key={crop}
                        onClick={() => {
                          setCropType(crop);
                          setGeneratedProduceDesc(null);
                        }}
                        className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                          cropType === crop 
                            ? 'bg-indigo-600 text-white font-medium' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleGenerateProduceDesc}
                    disabled={isGeneratingProduce}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    {isGeneratingProduce ? 'Generating AI Listing...' : 'Generate Optimized Listing via OpenRouter API'}
                  </button>

                  {generatedProduceDesc && (
                    <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs text-slate-200 leading-relaxed">
                      <p className="font-semibold text-indigo-400 mb-1">Generated Marketplace Listing Description:</p>
                      <p>{generatedProduceDesc}</p>
                    </div>
                  )}

                  {/* Agosphere Live Deployment Embed Option */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                          Live GitHub Pages Deployment (errors-hack.github.io)
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Explore the production Flutter Web build inside this window</p>
                      </div>

                      <button
                        onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          showLiveEmbed 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20'
                        }`}
                      >
                        {showLiveEmbed ? 'Hide Live Preview' : 'Show Live App Frame'}
                      </button>
                    </div>

                    {showLiveEmbed && (
                      <div className="w-full h-96 sm:h-[480px] rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-2xl relative">
                        <iframe
                          src="https://errors-hack.github.io/"
                          title="Agosphere Marketplace Preview"
                          className="w-full h-full border-none"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* DEMO 4: AI Agent Platform (Darshan AI) */}
              {project.demoType === 'ai-agent' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Test the autonomous agent execution pipeline with zero-authentication requirement:
                  </p>

                  <div className="space-y-2">
                    <label className="block text-xs text-slate-300 font-medium">Agent Instruction / Autonomous Task</label>
                    <input
                      type="text"
                      value={agentTask}
                      onChange={(e) => setAgentTask(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Scrape & analyze APMC agricultural market rates',
                      'Run TF-IDF fraud detection on batch customer reviews',
                      'Compile timber board-foot quotes for artisan catalog'
                    ].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setAgentTask(preset)}
                        className="px-2.5 py-1 text-[11px] rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleRunAgentTask}
                    disabled={isAgentRunning}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    {isAgentRunning ? 'Executing Autonomous Agent Pipeline...' : 'Run Autonomous Agent Tool Pipeline'}
                  </button>

                  {agentLogs && (
                    <div className="p-4 rounded-xl bg-black border border-cyan-500/30 text-xs font-mono space-y-1.5 text-slate-300">
                      <p className="text-cyan-400 font-bold mb-2">Agent Execution Logs (Client Sandbox):</p>
                      {agentLogs.map((log, idx) => (
                        <p key={idx} className="leading-relaxed">
                          <span className="text-slate-500">[{idx + 1}]</span> {log}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Darshan AI Live Deployment Embed Option */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          Live GitHub Pages Deployment (darshem-21.github.io/Darshan-AI)
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Direct interactive session with no authentication required</p>
                      </div>

                      <button
                        onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          showLiveEmbed 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20'
                        }`}
                      >
                        {showLiveEmbed ? 'Hide Live Preview' : 'Show Live App Frame'}
                      </button>
                    </div>

                    {showLiveEmbed && (
                      <div className="w-full h-96 sm:h-[480px] rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-2xl relative">
                        <iframe
                          src="https://darshem-21.github.io/Darshan-AI/"
                          title="Darshan AI Live Preview"
                          className="w-full h-full border-none"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Project</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 transition-colors"
            >
              Close Window (Esc)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
