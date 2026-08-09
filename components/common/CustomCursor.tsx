'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], [data-cursor-hover]')
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    document.addEventListener('mouseleave', () => setVisible(false));

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[150] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: hovering ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[149] pointer-events-none"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: hovering ? 1.6 : 1,
          opacity: hovering ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className={`w-9 h-9 rounded-full border ${
            hovering ? 'border-violet' : 'border-cyan'
          }`}
        />
      </motion.div>
    </>
  );
}
