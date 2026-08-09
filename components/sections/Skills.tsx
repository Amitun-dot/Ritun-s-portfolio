"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Code2,
  Wrench,
  ShieldCheck,
  TestTube,
  Brain,
  ScanSearch,
  MessageSquare,
  Users,
  Layers,
  type LucideIcon,
} from "lucide-react";
import {
  skillCategories,
  skillNetworkNodes,
  softSkills,
  languages,
} from "@/data/portfolio";
import {
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  CircuitBoard,
  Code2,
  Wrench,
  ShieldCheck,
  TestTube,
  Brain,
  ScanSearch,
  MessageSquare,
  Users,
  Layers,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="SKILLS"
          title="Technical Arsenal"
          className="mb-16"
        />

        {/* Skill network visualization */}
        <Reveal>
          <SkillNetwork />
        </Reveal>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-2 gap-5 mt-12">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div
                  className="group glass rounded-xl p-6 hover:border-cyan/20 transition-all duration-300 h-full"
                  onMouseEnter={() => setActiveCategory(i)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors">
                      <Icon className="w-4 h-4 text-cyan/70" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.07] border border-white/[0.14] text-white/[0.75] shadow-[0_0_8px_rgba(255,255,255,0.02)] hover:border-cyan/35 hover:text-white hover:bg-cyan/[0.06] hover:shadow-[0_0_10px_rgba(34,211,238,0.08)] transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cat.note && (
                    <p className="text-[11px] text-white/45 mt-3 italic">
                      {cat.note}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Soft skills */}
        <Reveal>
          <div className="mt-12">
            <h3 className="tech-label mb-5">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {softSkills.map((skill, i) => {
                const Icon = iconMap[skill.icon] || Brain;
                return (
                  <StaggerContainer key={skill.label} delay={i * 0.05}>
                    <StaggerItem>
                      <div className="glass rounded-lg p-4 flex flex-col items-center gap-2 text-center hover:border-violet/20 transition-colors">
                        <Icon className="w-4 h-4 text-violet/60" />
                        <span className="text-[11px] text-white/50 leading-tight">
                          {skill.label}
                        </span>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal>
          <div className="mt-8">
            <h3 className="tech-label mb-5">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className="glass rounded-lg px-5 py-3 text-sm text-white/60 hover:text-white/80 hover:border-cyan/20 transition-colors"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillNetwork() {
  const center = { x: 150, y: 150 };
  const radius = 115;
  const nodeCount = skillNetworkNodes.length;

  const nodes = skillNetworkNodes.map((label, i) => {
    const angle = (i / nodeCount) * Math.PI * 2 - Math.PI / 2;

    return {
      label,
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative w-full flex justify-center">
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-[480px] h-auto overflow-visible"
      >
        {/* Connection lines */}
        {nodes.map((node, i) => (
          <g key={`connection-${i}`}>
            <line
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(34,211,238,0.16)"
              strokeWidth="0.7"
            />

            {/* Moving signal pulse */}
            <motion.circle
              r="1.7"
              fill="#22d3ee"
              animate={{
                cx: [center.x, node.x],
                cy: [center.y, node.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* Outer ring */}
        <circle
          cx={center.x}
          cy={center.y}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.6"
          strokeDasharray="2 4"
        />

        {/* ================= CENTER NODE ================= */}

        {/* Center glow */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="30"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
          opacity="0.08"
          animate={{
            r: [28, 38, 28],
            opacity: [0.08, 0, 0.08],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Center node */}
        <circle
          cx={center.x}
          cy={center.y}
          r="25"
          fill="rgba(34,211,238,0.08)"
          stroke="rgba(34,211,238,0.65)"
          strokeWidth="1"
        />

        {/* Center inner glow */}
        <circle
          cx={center.x}
          cy={center.y}
          r="20"
          fill="rgba(34,211,238,0.04)"
          stroke="rgba(34,211,238,0.18)"
          strokeWidth="0.5"
        />

        {/* Center pulse */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="25"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.7"
          animate={{
            r: [25, 34.5, 25],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Center text */}
        <text
          x={center.x}
          y={center.y + 3.5}
          textAnchor="middle"
          className="fill-cyan font-bold"
          style={{
            fontSize: 10.5,
            fontFamily: "monospace",
            letterSpacing: "0.08em",
          }}
        >
          RITUN
        </text>

        {/* ================= SKILL NODES ================= */}

        {nodes.map((node, i) => (
          <g key={node.label}>
            {/* Soft outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="4"
              opacity="0.06"
              animate={{
                r: [18, 21, 18],
                opacity: [0.06, 0.12, 0.06],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />

            {/* Main skill node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="16"
              fill="rgba(139,92,246,0.10)"
              stroke="rgba(139,92,246,0.55)"
              strokeWidth="0.9"
              animate={{
                r: [16, 17.5, 16],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />

            {/* Inner highlight */}
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="rgba(139,92,246,0.035)"
              stroke="rgba(139,92,246,0.12)"
              strokeWidth="0.5"
            />

            {/* Skill label */}
            <text
              x={node.x}
              y={node.y + 2.3}
              textAnchor="middle"
              className="fill-white"
              style={{
                fontSize: 6.5,
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
