import React from 'react';
import { Sparkles, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neon-cyan/20 flex flex-col group">
      {/* Thumbnail Banner */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent opacity-90" />

        {/* Featured Tag */}
        {project.featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-white shadow-neon-cyan">
            <Sparkles className="w-3 h-3" />
            <span>Featured Project</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
          {project.category}
        </div>

        {/* Metric Badge */}
        {project.metrics && (
          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#070a12]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="truncate">{project.metrics}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </h3>
          <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Architecture & Details</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
