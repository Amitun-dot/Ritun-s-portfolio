'use client';

import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      {/* Animated circuit line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan/30 to-transparent animate-gradient-x" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - copyright */}
          <p className="text-xs text-white/40 text-center sm:text-left">
            © 2026 {profile.name}. Designed &amp; engineered by Amit.
          </p>

          {/* Right - social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
              { icon: MessageCircle, href: profile.whatsappUrl, label: 'WhatsApp' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan hover:border-cyan/30 hover:scale-110 transition-all"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Circuit trace decoration */}
        <svg className="w-full h-8 mt-6 opacity-20" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path d="M0 20 L200 20 L200 5 L400 5 L400 35 L600 35 L600 20 L800 20 L800 5 L1000 5 L1000 20 L1200 20" stroke="#22d3ee" strokeWidth="0.5" />
          <circle cx="200" cy="20" r="2" fill="#22d3ee" />
          <circle cx="400" cy="5" r="2" fill="#8b5cf6" />
          <circle cx="600" cy="35" r="2" fill="#22d3ee" />
          <circle cx="800" cy="20" r="2" fill="#8b5cf6" />
          <circle cx="1000" cy="5" r="2" fill="#22d3ee" />
        </svg>
      </div>
    </footer>
  );
}
