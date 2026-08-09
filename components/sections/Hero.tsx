'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from 'lucide-react';
import { profile, heroRotatingWords, heroStats, floatingLabels } from '@/data/portfolio';
import dynamic from 'next/dynamic';

const Chip3D = dynamic(() => import('@/components/three/Chip3D'), { ssr: false });

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroRotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-12 gap-8 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="tech-label">{profile.eyebrow}</span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight"
            >
              Electronics &amp; Telecommunication Engineer
            </motion.div>

            {/* Rotating words */}
            <div className="h-10 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={wordIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl font-mono gradient-text-cyan"
                >
                  {heroRotatingWords[wordIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-white/50 max-w-xl leading-relaxed text-balance"
          >
            {profile.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-blue text-bg font-semibold text-sm hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-cyan/40 text-sm font-medium hover:bg-white/5 transition-all"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
              { icon: MessageCircle, href: profile.whatsappUrl, label: 'WhatsApp' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan hover:border-cyan/30 hover:scale-110 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-4 gap-3 pt-4 max-w-lg"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="glass rounded-lg p-3 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-xl sm:text-2xl font-bold gradient-text-cyan"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[10px] tracking-wider uppercase text-white/40 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - 3D visual */}
        <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[550px]">
          {/* Floating labels */}
          {floatingLabels.map((label, i) => {
            const positions = [
              { top: '5%', left: '10%' },
              { top: '15%', right: '5%' },
              { bottom: '20%', left: '0%' },
              { top: '50%', right: '0%' },
              { bottom: '5%', left: '20%' },
              { bottom: '40%', right: '10%' },
            ];
            return (
              <motion.div
                key={label}
                className="absolute font-mono text-[10px] tracking-[0.2em] text-cyan/40 pointer-events-none hidden sm:block"
                style={positions[i]}
                animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
              >
                {label}
              </motion.div>
            );
          })}

          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Chip3D />
          </div>

          {/* Glow behind chip */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-cyan/5 blur-3xl" />
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-cyan/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-cyan/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-cyan/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-cyan/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cyan/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
