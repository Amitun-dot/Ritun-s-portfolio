"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/common/Reveal";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setSent(true);

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" />

        <Reveal delay={0.1}>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mb-12">
            Interested in VLSI, FPGA, RTL design, embedded systems, or hardware
            engineering? Let&apos;s connect.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: profile.email,
                href: `mailto:${profile.email}`,
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: profile.whatsapp,
                href: profile.whatsappUrl,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Ritun Panigrahi",
                href: profile.linkedin,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "ritun253254",
                href: profile.github,
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-xl p-4 hover:border-cyan/20 transition-all hover:translate-x-1"
                >
                  <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-cyan/30 transition-colors">
                    <item.icon className="w-4 h-4 text-cyan/70" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="tech-label text-[9px] mb-0.5">
                      {item.label}
                    </div>

                    <div className="text-sm text-white/70 truncate">
                      {item.value}
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-cyan/50 group-hover:translate-x-1 transition-all" />
                </a>
              </Reveal>
            ))}

            {/* Action buttons */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-2">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full
                 bg-[#E73F1E] text-white
                 font-semibold text-sm
                 border border-[#E73F1E]
                 hover:bg-[#d93617]
                 hover:border-[#d93617]
                 hover:scale-105
                 hover:shadow-[0_0_20px_rgba(231,63,30,0.35)]
                 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-white">Email Me</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full
                 bg-gradient-to-r from-cyan to-blue
                 text-white
                 font-semibold text-sm
                 border border-cyan/30
                 hover:scale-105
                 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  <span className="text-white">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full
                 bg-[#F7F4ED] text-black
                 font-semibold text-sm
                 border border-[#F7F4ED]
                 hover:bg-white
                 hover:scale-105
                 hover:shadow-[0_0_20px_rgba(247,244,237,0.25)]
                 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-black" />
                  <span className="text-black">GitHub</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full
                 bg-[#7EC151] text-white
                 font-semibold text-sm
                 border border-[#7EC151]
                 hover:bg-[#72b347]
                 hover:border-[#72b347]
                 hover:scale-105
                 hover:shadow-[0_0_20px_rgba(126,193,81,0.3)]
                 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-white">WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Email Form */}
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                <span className="tech-label">Quick Message</span>
              </div>

              <div>
                <label className="text-xs text-white/40 mb-1.5 block">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-cyan/30 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-white/40 mb-1.5 block">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-cyan/30 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-white/40 mb-1.5 block">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-cyan/30 transition-colors resize-none"
                  placeholder="Tell me about the role or project..."
                  required
                />
              </div>

              {sent && (
                <div className="flex items-center justify-center gap-2 text-cyan text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully!
                </div>
              )}

              {error && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Failed to send message.
                </div>
              )}

              <button
  type="submit"
  disabled={sending}
  className="group flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan/70 to-blue/70 text-white font-semibold text-sm border border-cyan/30 hover:scale-[1.02] hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.12)] transition-all disabled:opacity-50 disabled:hover:scale-100"
>
  {sending ? (
    <>
      <div className="w-4 h-4 border-2 border-white/25 border-t-white/80 rounded-full animate-spin" />
      <span>Sending...</span>
    </>
  ) : (
    <>
      <span>Send Message</span>
      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
    </>
  )}
</button>

              <p className="text-[10px] text-white/30 text-center">
                Your message will be delivered directly to my inbox.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
