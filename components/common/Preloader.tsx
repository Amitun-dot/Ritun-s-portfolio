'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated chip */}
            <div className="relative w-20 h-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-lg border border-cyan/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-md border border-violet/40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-sm font-bold gradient-text-cyan">RP</span>
              </div>
              {/* Chip pins */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-2 bg-cyan/40"
                  style={{
                    top: i === 0 ? '-8px' : i === 2 ? 'auto' : '50%',
                    bottom: i === 2 ? '-8px' : 'auto',
                    left: i === 1 ? '-8px' : i === 3 ? 'auto' : '50%',
                    right: i === 3 ? '-8px' : 'auto',
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-48 h-px bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan to-violet"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                Initializing Hardware
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
