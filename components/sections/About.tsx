'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { profile, aboutRtlFlow } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/common/Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="ABOUT"
          title="Engineering Logic Into Hardware"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT - Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal>
              <PortraitFrame />
            </Reveal>
          </div>

          {/* RIGHT - About text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            {/* RTL Flow visual */}
            <Reveal delay={0.3}>
              <div className="mt-4 glass rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                  <span className="tech-label">RTL Design Flow</span>
                </div>
                <div className="flex flex-col gap-1">
                  {aboutRtlFlow.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 flex-1"
                      >
                        <div className="text-[10px] font-mono text-white/30 w-5">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-white/70 px-3 py-2 rounded-md bg-white/5 border border-white/5 flex-1">
                          {step}
                        </div>
                      </motion.div>
                      {i < aboutRtlFlow.length - 1 && (
                        <div className="text-cyan/30 ml-5">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitFrame() {
  return (
    <div className="relative group">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan/10 via-transparent to-violet/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Frame */}
      <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan/30 transition-all duration-500">
        {/* Top label bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-cyan/50">RTL DESIGN</span>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.2em] text-violet/50">FPGA</span>
        </div>

        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden bg-surface">
          <Image
            src="/images/ritun.jpeg"
            alt="Ritun Panigrahi - Electronics and Telecommunication Engineering graduate"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Subtle blue tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-violet/5 mix-blend-overlay" />

          {/* Hover label */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <div className="glass-bright rounded-lg p-3">
              <div className="font-semibold text-sm text-white">RITUN PANIGRAHI</div>
              <div className="font-mono text-[10px] tracking-wider text-cyan/60 mt-1">
                ECE • VLSI • FPGA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom label bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-black/40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-cyan/50">VLSI</span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/30">SYS:ACTIVE</span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-violet/50">EMBEDDED</span>
        </div>
      </div>

      {/* Circuit trace decorations */}
      <svg className="absolute -top-3 -left-3 w-16 h-16 pointer-events-none" viewBox="0 0 64 64" fill="none">
        <path d="M0 20 L20 20 L20 0" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
        <circle cx="20" cy="20" r="2" fill="rgba(34,211,238,0.4)" />
        <path d="M0 40 L10 40 L10 50 L0 50" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
        <circle cx="10" cy="40" r="2" fill="rgba(139,92,246,0.4)" />
      </svg>
      <svg className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none" viewBox="0 0 64 64" fill="none">
        <path d="M64 20 L44 20 L44 0" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
        <circle cx="44" cy="20" r="2" fill="rgba(139,92,246,0.4)" />
        <path d="M64 40 L54 40 L54 50 L64 50" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
        <circle cx="54" cy="40" r="2" fill="rgba(34,211,238,0.4)" />
      </svg>
    </div>
  );
}
