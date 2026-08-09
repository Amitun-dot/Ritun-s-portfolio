'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { education, profileHighlights, rtlToHardwareFlow, rtlToHardwareTools, vlsiFpgaFlow } from '@/data/portfolio';
import { SectionHeading, Reveal } from '@/components/common/Reveal';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="EDUCATION" title="Academic Foundation" className="mb-16" />

        {/* Education timeline */}
        <div className="relative max-w-3xl mx-auto mb-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-violet/20 to-transparent" />
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.15}>
              <div className="relative flex mb-10 last:mb-0">
                <div className="absolute left-4 top-6 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-violet border-2 border-bg shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                </div>
                <div className="ml-12 glass rounded-xl p-6 flex-1 hover:border-violet/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-violet/50">{edu.period}</span>
                      </div>
                      <h3 className="text-base font-semibold mb-1">{edu.institution}</h3>
                      <p className="text-sm text-white/50">{edu.degree}</p>
                    </div>
                    {edu.score && (
                      <div className="text-right">
                        {edu.scoreLabel === 'CGPA' ? (
                          <AnimatedCounter value={9.11} />
                        ) : (
                          <div className="text-2xl font-bold gradient-text-cyan">{edu.score}</div>
                        )}
                        {edu.scoreLabel && (
                          <div className="text-[10px] tracking-wider uppercase text-white/40">{edu.scoreLabel}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Profile highlights */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
            {profileHighlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-4 text-center hover:border-cyan/20 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-bold gradient-text-cyan mb-1">{h.value}</div>
                <div className="text-[10px] tracking-wider uppercase text-white/40">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* From RTL to Hardware flow */}
        <Reveal>
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-2 text-center">From RTL to Hardware</h3>
            <p className="text-sm text-white/40 text-center mb-8">The complete FPGA design flow</p>
            <FlowSteps steps={rtlToHardwareFlow} tools={rtlToHardwareTools} color="cyan" />
          </div>
        </Reveal>

        {/* VLSI/FPGA flow */}
        <Reveal>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">VLSI / FPGA Flow</h3>
            <p className="text-sm text-white/40 text-center mb-8">From CMOS to hardware validation</p>
            <FlowSteps steps={vlsiFpgaFlow} color="violet" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-3xl font-bold gradient-text-cyan">
      {display.toFixed(2)}
    </div>
  );
}

function FlowSteps({ steps, tools, color = 'cyan' }: { steps: string[]; tools?: string[]; color?: 'cyan' | 'violet' }) {
  const colorClass = color === 'cyan' ? 'text-cyan' : 'text-violet';
  const bgClass = color === 'cyan' ? 'bg-cyan/5 border-cyan/20' : 'bg-violet/5 border-violet/20';

  return (
    <div className="flex flex-col items-center gap-1 max-w-2xl mx-auto">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`px-5 py-3 rounded-lg border ${bgClass} text-sm font-mono ${colorClass} w-full text-center max-w-md`}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              className={`${colorClass} text-lg my-0.5`}
            >
              ↓
            </motion.div>
          )}
        </div>
      ))}

      {tools && (
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
