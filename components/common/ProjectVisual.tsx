'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { type Project } from '@/data/portfolio';

export default function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  /*
   * If the project has an image, show the real project image.
   * If no image is provided, fall back to the original
   * project-specific animated visualization.
   */
  if (project.image) {
    return <ProjectImage project={project} />;
  }

  switch (project.visualType) {
    case 'riscv':
      return <RiscVDatapath architecture={project.architecture} />;

    case 'pwm':
      return <PwmWaveform />;

    case 'dsp':
      return <DspPipeline architecture={project.architecture} />;

    case 'esp32':
      return (
        <Esp32Architecture
          architecture={project.architecture}
        />
      );

    case 'radar':
      return <RadarSweep />;

    case 'recommendation':
      return (
        <RecommendationFlow
          architecture={project.architecture}
        />
      );

    case 'testing':
      return (
        <TestingDashboard
          architecture={project.architecture}
        />
      );

    default:
      return null;
  }
}

/* =========================================================
   REAL PROJECT IMAGE
========================================================= */

function ProjectImage({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-[#071018]"
    >
      {/* Project Image */}
      <motion.img
        src={project.image}
        alt={`${project.title} project`}
        className="h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />

      {/* Dark gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Cyan tint */}
      <div className="pointer-events-none absolute inset-0 bg-cyan-400/[0.025] mix-blend-screen" />

      {/* Purple tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-purple-500/[0.06]" />

      {/* Animated scan line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-cyan-400/30 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Top-left label */}
      <div className="absolute left-3 top-3 rounded-md border border-cyan-400/20 bg-black/45 px-2 py-1 backdrop-blur-md">
        <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-300/80">
          PROJECT_VISUAL
        </span>
      </div>

      {/* Top-right status */}
      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-black/45 px-2 py-1 backdrop-blur-md">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        />

        <span className="font-mono text-[9px] tracking-wider text-white/60">
          ACTIVE
        </span>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/70">
              {project.category}
            </p>

            <h3 className="font-mono text-sm font-semibold leading-tight text-white/90">
              {project.title}
            </h3>
          </div>

          <div className="hidden rounded-md border border-purple-400/20 bg-purple-400/5 px-2 py-1 sm:block">
            <span className="font-mono text-[9px] tracking-wider text-purple-300/70">
              VLSI
            </span>
          </div>
        </div>
      </div>

      {/* Futuristic corner decorations */}

      <div className="pointer-events-none absolute left-0 top-0 h-7 w-7 border-l border-t border-cyan-400/50" />

      <div className="pointer-events-none absolute right-0 top-0 h-7 w-7 border-r border-t border-purple-400/40" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-7 w-7 border-b border-l border-cyan-400/50" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-purple-400/40" />

      {/* Hover border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.06)]" />
    </motion.div>
  );
}

/* =========================================================
   FLOW DIAGRAM
========================================================= */

function FlowDiagram({
  steps,
  color = '#22d3ee',
}: {
  steps: string[];
  color?: string;
}) {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div
          key={step}
          className="flex flex-1 items-center gap-2"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: i * 0.1,
            }}
            className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center font-mono text-[10px] text-white/60 sm:text-xs"
            style={{
              borderColor: `${color}30`,
            }}
          >
            {step}
          </motion.div>

          {i < steps.length - 1 && (
            <motion.div
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="text-xs"
              style={{
                color: `${color}80`,
              }}
            >
              ↓
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   RISC-V DATAPATH
========================================================= */

function RiscVDatapath({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 340 190"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Modules */}

        {architecture.map((mod, i) => {
          const x = 20 + (i % 3) * 100;
          const y = 20 + Math.floor(i / 3) * 80;

          return (
            <g key={mod}>
              <motion.rect
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                x={x}
                y={y}
                width={70}
                height={30}
                rx={4}
                fill="rgba(34,211,238,0.05)"
                stroke="rgba(34,211,238,0.3)"
                strokeWidth={1}
              />

              <text
                x={x + 35}
                y={y + 18}
                textAnchor="middle"
                className="fill-white/60"
                style={{
                  fontSize: 7,
                  fontFamily: 'monospace',
                }}
              >
                {mod.length > 12
                  ? `${mod.substring(0, 10)}..`
                  : mod}
              </text>
            </g>
          );
        })}

        {/* Animated signal paths */}

        {[0, 1, 2, 3, 4].map((i) => {
          const x1 = 90 + (i % 2) * 100;
          const y1 = 35 + Math.floor(i / 2) * 80;
          const x2 = x1 + 30;
          const y2 = i < 3 ? y1 : y1 + 50;

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#22d3ee"
              strokeWidth={1}
              strokeDasharray="4 4"
              animate={{
                strokeDashoffset: [0, -8],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Data pulse */}

        <motion.circle
          r="2"
          fill="#22d3ee"
          animate={{
            cx: [40, 140, 240, 300],
            cy: [35, 35, 115, 115],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   PWM WAVEFORM
========================================================= */

function PwmWaveform() {
  const [duty, setDuty] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuty((d) => {
        const next =
          d + (Math.random() > 0.5 ? 10 : -10);

        return Math.max(
          20,
          Math.min(80, next)
        );
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const period = 100;
  const highWidth = (duty / 100) * period;
  const cycles = 3;

  const waveform = `M0,80 ${Array.from({
    length: cycles,
  })
    .map((_, i) => {
      const x = i * period;

      return `L${x},80
        L${x},20
        L${x + highWidth},20
        L${x + highWidth},80
        L${x + period},80`;
    })
    .join(' ')}`;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="font-mono text-[10px] tracking-wider text-white/50">
        DUTY CYCLE:{' '}
        <motion.span
          key={duty}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="font-bold text-cyan-400"
        >
          {duty}%
        </motion.span>
      </div>

      <svg
        viewBox="0 0 300 100"
        className="h-auto w-full max-w-[320px]"
        preserveAspectRatio="none"
      >
        {/* Grid */}

        {[20, 50, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="300"
            y2={y}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {/* PWM signal */}

        <motion.path
          animate={{
            d: waveform,
          }}
          transition={{
            duration: 0.5,
          }}
          stroke="#22d3ee"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Glow */}

        <motion.path
          animate={{
            d: waveform,
          }}
          transition={{
            duration: 0.5,
          }}
          stroke="#22d3ee"
          strokeWidth="3"
          fill="none"
          opacity="0.2"
          style={{
            filter: 'blur(2px)',
          }}
        />
      </svg>

      <span className="font-mono text-[9px] tracking-[0.2em] text-white/30">
        PWM OUTPUT SIGNAL
      </span>
    </div>
  );
}

/* =========================================================
   DSP PIPELINE
========================================================= */

function DspPipeline({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <FlowDiagram
        steps={
          architecture.length
            ? architecture.slice(0, 4)
            : [
                'INPUT',
                'DECIMATOR',
                'FIR',
                'INTERPOLATOR',
              ]
        }
        color="#8b5cf6"
      />
    </div>
  );
}

/* =========================================================
   ESP32 ARCHITECTURE
========================================================= */

function Esp32Architecture({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <FlowDiagram
        steps={
          architecture.length
            ? architecture.slice(0, 4)
            : [
                'DHT SENSOR',
                'ESP32',
                'Wi-Fi',
                'MQTT',
              ]
        }
        color="#22d3ee"
      />
    </div>
  );
}

/* =========================================================
   RADAR SWEEP
========================================================= */

function RadarSweep() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="h-full max-h-[220px] w-full"
      >
        {/* Radar circles */}

        {[40, 65, 90].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(34,211,238,0.15)"
            strokeWidth="1"
          />
        ))}

        {/* Cross lines */}

        <line
          x1="10"
          y1="100"
          x2="190"
          y2="100"
          stroke="rgba(34,211,238,0.1)"
        />

        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke="rgba(34,211,238,0.1)"
        />

        {/* Sweep */}

        <g
          className="animate-sweep"
          style={{
            transformOrigin: '100px 100px',
          }}
        >
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="10"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />

          <path
            d="M100 100 L100 10 A90 90 0 0 1 163.64 36.36 Z"
            fill="rgba(34,211,238,0.08)"
          />
        </g>

        {/* Detection points */}

        {[
          {
            x: 140,
            y: 60,
            delay: 0,
          },
          {
            x: 60,
            y: 130,
            delay: 1.5,
          },
          {
            x: 155,
            y: 120,
            delay: 2.5,
          },
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="2"
            fill="#22d3ee"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: pt.delay,
              repeatDelay: 3,
            }}
          />
        ))}

        {/* Center */}

        <circle
          cx="100"
          cy="100"
          r="3"
          fill="#22d3ee"
        />

        <circle
          cx="100"
          cy="100"
          r="6"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   RECOMMENDATION FLOW
========================================================= */

function RecommendationFlow({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <FlowDiagram
        steps={
          architecture.length
            ? architecture.slice(0, 4)
            : [
                'USER SKILLS',
                'SQLITE',
                'MATCHING',
                'JOBS',
              ]
        }
        color="#8b5cf6"
      />
    </div>
  );
}

/* =========================================================
   TESTING DASHBOARD
========================================================= */

function TestingDashboard({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      {/* Statistics */}

      <div className="flex items-center gap-8">
        {[
          {
            label: 'PASS',
            color: '#22d3ee',
            count: 12,
          },
          {
            label: 'FAIL',
            color: '#ef4444',
            count: 1,
          },
          {
            label: 'SKIP',
            color: '#8b5cf6',
            count: 2,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              className="font-mono text-lg font-bold"
              style={{
                color: stat.color,
              }}
            >
              {stat.count}
            </motion.div>

            <div className="font-mono text-[9px] tracking-wider text-white/40">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Architecture/test flow */}

      {architecture.length > 0 && (
        <FlowDiagram
          steps={architecture.slice(0, 4)}
          color="#22d3ee"
        />
      )}

      {/* Progress bar */}

      <div className="w-full max-w-[260px]">
        <div className="mb-1 flex justify-between font-mono text-[8px] text-white/30">
          <span>TEST EXECUTION</span>
          <span>92%</span>
        </div>

        <div className="h-1 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: '92%',
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}