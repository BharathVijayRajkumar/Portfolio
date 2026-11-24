import React from 'react';
import { X, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] rounded-2xl border border-white/20 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="relative h-60 bg-slate-900 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-slate-300">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Key Metric Highlight */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-sm font-medium text-emerald-300">
                Key Performance Benchmark: <strong>{project.metrics}</strong>
              </span>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Decisions */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span>Engineering Highlights</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Engineered with strict component modularity and reactive state management.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Implemented secure API communication, input validation, and resilient error recovery.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Optimized build bundle size and network payload for fast first-contentful-paint (FCP).</span>
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Technologies & Tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-surface-light text-cyan-300 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-neon-cyan transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
