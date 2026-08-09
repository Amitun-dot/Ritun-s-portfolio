'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Cpu } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { SectionHeading, Reveal } from '@/components/common/Reveal';
import ProjectVisual from '@/components/common/ProjectVisual';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Asymmetric layout: first project is large, rest alternate
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="PROJECTS" title="Technical Showcase" className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            // Make first project span 2 columns
            const isLarge = i === 0;
            const isWide = i === 3;

            return (
              <Reveal
                key={project.id}
                delay={i * 0.05}
                className={isLarge ? 'md:col-span-2 lg:col-span-2' : isWide ? 'md:col-span-2' : ''}
              >
                <ProjectCard project={project} isLarge={isLarge || isWide} onClick={() => setSelected(project)} />
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, isLarge, onClick }: { project: Project; isLarge: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      className="group relative w-full text-left glass rounded-2xl overflow-hidden hover:border-cyan/20 transition-all duration-300"
    >
      {/* Visual area */}
      <div className={`relative ${isLarge ? 'h-56 sm:h-64' : 'h-44'} bg-surface/50 overflow-hidden border-b border-white/5`}>
        <div className="absolute inset-0 circuit-grid opacity-30" />
        <ProjectVisual project={project} />

        {/* Project number */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-cyan/40">
          {project.number}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-cyan/30 transition-all">
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-3 h-3 text-violet/50" />
          <span className="tech-label text-[9px]">{project.category}</span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/45 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, isLarge ? 6 : 4).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > (isLarge ? 6 : 4) && (
            <span className="text-[9px] font-mono px-2 py-0.5 text-white/30">
              +{project.tags.length - (isLarge ? 6 : 4)}
            </span>
          )}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-bright rounded-2xl border border-white/10"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 border-b border-white/10 bg-bg/80 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] tracking-[0.2em] text-cyan/50">{project.number}</span>
              <span className="text-white/20">/</span>
              <span className="tech-label text-[9px]">{project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold pr-8">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Visual */}
          <div className="h-48 sm:h-56 rounded-xl bg-surface/50 border border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 circuit-grid opacity-30" />
            <ProjectVisual project={project} />
          </div>

          {/* Overview */}
          <div>
            <h4 className="tech-label mb-2">Overview</h4>
            <p className="text-sm text-white/55 leading-relaxed">{project.shortDescription}</p>
          </div>

          {/* Detailed description */}
          <div>
            <h4 className="tech-label mb-2">Technical Implementation</h4>
            <p className="text-sm text-white/55 leading-relaxed">{project.detailedDescription}</p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="tech-label mb-3">Architecture</h4>
            <div className="flex flex-col gap-1">
              {project.architecture.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-[10px] font-mono text-white/30 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xs font-mono text-white/60 px-3 py-2 rounded-md bg-white/5 border border-white/10 flex-1">
                      {step}
                    </div>
                  </div>
                  {i < project.architecture.length - 1 && (
                    <div className="text-cyan/30 ml-5">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="tech-label mb-3">Technical Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-white/50">
                  <span className="text-cyan/40 mt-0.5">▸</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="tech-label mb-3">Tools &amp; Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learning */}
          <div className="glass rounded-xl p-4 border-l-2 border-cyan/30">
            <h4 className="tech-label mb-2">Key Learning</h4>
            <p className="text-sm text-white/60 leading-relaxed italic">{project.keyLearning}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
