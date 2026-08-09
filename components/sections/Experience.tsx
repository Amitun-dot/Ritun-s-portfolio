'use client';

import { motion } from 'framer-motion';
import { Cpu, Building2, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading, Reveal } from '@/components/common/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="EXPERIENCE" title="Experience" className="mb-16" />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-violet/20 to-transparent sm:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.15}>
              <div className={`relative flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} mb-12`}>
                {/* Node */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-cyan border-2 border-bg shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
                </div>

                {/* Card */}
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? '' : 'sm:text-right'}`}>
                  <div className="group glass rounded-xl p-6 hover:border-cyan/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-cyan/50">
                        {exp.id}
                      </span>
                      <span className="text-[10px] text-white/30">/</span>
                      <span className="font-mono text-[10px] tracking-wider text-white/40 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
                    <div className={`flex items-center gap-2 mb-4 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                      <Building2 className="w-3.5 h-3.5 text-violet/60" />
                      <span className="text-sm text-violet/80">{exp.company}</span>
                    </div>

                    <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? '' : 'sm:text-left'}`}>
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="text-sm text-white/50 flex items-start gap-2">
                          <span className="text-cyan/40 mt-1">▸</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Circuit animation on card */}
                    <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      >
                        <Cpu className="w-5 h-5 text-cyan/30" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
