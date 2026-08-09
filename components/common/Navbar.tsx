'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useScrolled } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHireMe = () => {
    setMenuOpen(false);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          scrolled ? 'glass-bright shadow-lg shadow-black/20' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan/40 transition-colors">
              <span className="font-mono text-xs font-bold gradient-text-cyan">
                {profile.monogram}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 to-violet/0 group-hover:from-cyan/10 group-hover:to-violet/10 transition-all duration-300" />
            </div>
            <span className="font-semibold text-sm tracking-wide hidden sm:block">
              {profile.name.toUpperCase()}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleHireMe}
              className="group relative hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium overflow-hidden border border-cyan/30 bg-gradient-to-r from-cyan/10 to-violet/10 hover:border-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-violet/0 to-cyan/0 group-hover:from-cyan/20 group-hover:via-violet/10 group-hover:to-cyan/20 transition-all duration-500" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[99] md:hidden glass-bright border-b border-white/10"
          >
            <div className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={handleHireMe}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-cyan/30 bg-gradient-to-r from-cyan/10 to-violet/10"
              >
                Hire Me <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
