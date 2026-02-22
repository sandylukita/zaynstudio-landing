"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Mail, ArrowUpRight, Menu, X, Terminal, Cpu, Zap, Globe } from "lucide-react";
import Image from 'next/image';

const TextScramble = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((current) =>
        current
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
}

export default function ZaynStudioFuturistic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const headRotate = useTransform(smoothProgress, [0, 1], [0, 15]);

  return (
    <main ref={containerRef} className="relative min-h-screen w-full bg-[#020202] text-[#F5F5F7] overflow-hidden selection:bg-cyanAccent/30 font-sans">

      {/* --- VOID LAYER: HIGH-TECH BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Dynamic Vignette */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.03), transparent 80%)`
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Particles */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute w-px h-px bg-cyanAccent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* --- UI OVERLAY: SCANLINES & NOISE --- */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-[100] scanlines" />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[110] flex justify-between items-center px-8 md:px-16 py-8 backdrop-blur-sm border-b border-white/5">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-6"
        >
          <div className="w-6 h-6 rounded-full border border-cyanAccent flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-cyanAccent rounded-full" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-[-0.05em] uppercase">ZAYN STUDIO</h1>
        </motion.div>

        <div className="hidden md:flex gap-12 text-[9px] tracking-[0.4em] text-steel uppercase cursor-pointer">
          <a href="#projects" className="hover:text-cyanAccent transition-colors relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyanAccent group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="hover:text-cyanAccent transition-colors relative group">
            Lab
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyanAccent group-hover:w-full transition-all duration-300" />
          </a>
          <a href="mailto:sandy@zaynstudio.app" className="hover:text-cyanAccent transition-colors relative group">
            Connect
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyanAccent group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
          <Menu size={20} />
        </button>
      </nav>

      {/* --- HERO SECTION: THE CORE --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">

        {/* Immersive Neural Core */}
        <motion.div
          style={{ y: bgY, rotateY: headRotate }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[450vw] md:w-full md:max-w-[1600px] aspect-square opacity-100 mt-[8vh] md:mt-0 scale-[1.75] md:scale-125">
            <Image
              src="/hero.png"
              alt="Neural Core"
              fill
              unoptimized
              className="object-contain mix-blend-screen contrast-150 brightness-95"
              style={{
                maskImage: 'radial-gradient(circle, black 10%, transparent 55%), linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 10%, transparent 55%), linear-gradient(to bottom, black 60%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in'
              }}
              priority
            />
            {/* Dynamic Light Ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-cyanAccent/20 blur-2xl"
            />
          </div>
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[12vw] md:text-[8.5rem] font-bold tracking-[-0.05em] leading-[0.8] mb-8">
              <span className="block drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">RESHAPING</span>
              <span
                className="block text-outline opacity-100 md:opacity-70 drop-shadow-[0_0_30px_rgba(0,0,0,1)] drop-shadow-[0_0_10px_rgba(0,0,0,1)] drop-shadow-[0_0_5px_rgba(0,0,0,1)] mt-2"
                style={{ WebkitTextStroke: '1.2px rgba(255, 255, 255, 1)' }}
              >
                REALITY.
              </span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-4 font-mono text-[9px] tracking-[0.5em] text-steel uppercase"
              >
                <div className="p-2 border border-white/10 rounded-lg backdrop-blur-md">
                  <Terminal size={14} className="text-cyanAccent" />
                </div>
                <span>Architecture</span>
              </motion.div>

              <div className="w-px h-8 bg-white/10 hidden md:block" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-4 font-mono text-[9px] tracking-[0.5em] text-steel uppercase"
              >
                <div className="p-2 border border-white/10 rounded-lg backdrop-blur-md">
                  <Cpu size={14} className="text-cyanAccent" />
                </div>
                <span>Intelligence</span>
              </motion.div>

              <div className="w-px h-8 bg-white/10 hidden md:block" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-4 font-mono text-[9px] tracking-[0.5em] text-steel uppercase"
              >
                <div className="p-2 border border-white/10 rounded-lg backdrop-blur-md">
                  <Zap size={14} className="text-cyanAccent" />
                </div>
                <span>Impact</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyanAccent to-transparent" />
          <span className="text-[8px] font-mono tracking-[0.5em] uppercase">Initiate Scroll</span>
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION: THE PORTFOLIO --- */}
      <section id="projects" className="relative py-40 px-6 md:px-20 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-[10px] font-mono text-cyanAccent mb-6 uppercase tracking-[0.8em]">Work // Selected Outputs</h3>
              <h4 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase whitespace-pre-line">
                PROTOTYPING <br /> THE UNKNOWN.
              </h4>
            </div>
            <p className="text-steel/50 font-mono text-[9px] tracking-[0.3em] uppercase max-w-[200px] leading-relaxed">
              Every project is a step towards vertical intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "CORE.APP",
                category: "Neural Research // Phase 01",
                status: "UNDER CONSTRUCTION",
                image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
                id: "01"
              },
              {
                title: "DIGITAL.KIT",
                category: "Spatial Logic // Phase 02",
                status: "ACCESS RESTRICTED",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                id: "02"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-white/5 cursor-pointer bg-obsidian"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />

                {/* Construction Overlay Noise */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em]">{project.id}</span>
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="px-6 py-3 bg-cyanAccent/5 border border-cyanAccent/20 rounded-xl w-fit backdrop-blur-md"
                      >
                        <span className="text-[12px] font-mono text-cyanAccent tracking-[0.4em] uppercase font-bold">{project.status}</span>
                      </motion.div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyanAccent group-hover:border-cyanAccent transition-all duration-500">
                      <Zap size={16} className="text-white/40 group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  <div className="relative">
                    <h5 className="text-[9px] font-mono text-steel uppercase tracking-[0.6em] mb-4 opacity-40">{project.category}</h5>
                    <h6 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase glitch-hover">
                      <TextScramble text={project.title} />
                    </h6>

                    {/* Construction Bars on Hover */}
                    <div className="absolute -bottom-4 left-0 w-0 h-[2px] bg-cyanAccent group-hover:w-full transition-all duration-700 opacity-30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION: GHOST PANELS --- */}
      <section id="about" className="relative py-40 px-6 md:px-20 overflow-visible z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-[10px] font-mono text-cyanAccent mb-8 uppercase tracking-[0.8em]">Manifesto // 01</h3>
            <h4 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              WE ARE THE <br /> <span className="text-cyanAccent">ARCHITECTS</span> OF <br /> PERCEPTION.
            </h4>
            <p className="text-steel leading-[2] text-sm md:text-lg font-light max-w-md opacity-80">
              In the intersection of human psychology and machine learning, we find the canvas for the next reality.
              Everything we build is an experiment in radical utility and aesthetic perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Neuro-Design", desc: "Interfaces that adapt to human cognitive patterns." },
              { title: "Synthetic Intelligence", desc: "AI agents integrated into daily utility." },
              { title: "Spatial Logic", desc: "Digital environments that transcend screen boundaries." },
              { title: "Radical Impact", desc: "Engineering products that define new categories." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(0, 240, 255, 0.3)' }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all h-full flex flex-col justify-between group"
              >
                <div className="mb-8">
                  <span className="text-[8px] font-mono text-steel block mb-2 opacity-50">0{i + 1}</span>
                  <h5 className="text-sm font-bold tracking-widest uppercase mb-4 group-hover:text-cyanAccent transition-colors">{item.title}</h5>
                  <p className="text-[11px] text-steel/60 leading-relaxed">{item.desc}</p>
                </div>
                <motion.div animate={{ rotate: [0, 90, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-4 h-4 border border-white/20 rounded-sm" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATUS BAR: GLOBAL TICKER --- */}
      <footer className="relative z-[110] border-t border-white/5 py-8 md:py-12 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 backdrop-blur-xl bg-obsidian/50">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-full text-center md:text-left">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-cyanAccent shadow-[0_0_10px_#00F0FF]" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-cyanAccent uppercase">Network: Online</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
          <p className="text-[9px] font-mono tracking-[0.4em] text-steel uppercase animate-pulse leading-relaxed">
            Current Task: <TextScramble text="EVOLVING DIGITAL REALITIES" />
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex gap-8 md:border-r md:border-white/5 md:pr-8">
            <a href="/privacy" className="text-[8px] font-mono tracking-[0.4em] text-steel/40 hover:text-cyanAccent transition-colors uppercase">Privacy Policy</a>
            <a href="/terms" className="text-[8px] font-mono tracking-[0.4em] text-steel/40 hover:text-cyanAccent transition-colors uppercase">Terms of Service</a>
          </div>
          <div className="flex gap-12 items-center">
            <a href="mailto:sandy@zaynstudio.app" className="p-4 rounded-full border border-white/10 hover:border-cyanAccent hover:bg-cyanAccent/5 transition-all transition-colors group">
              <Mail size={16} className="text-steel group-hover:text-cyanAccent transition-colors" />
            </a>
            <p className="text-[8px] tracking-[0.5em] text-steel uppercase opacity-30">
              © 2026 ZAYN.STUDIO // ALL SYSTEMS GO
            </p>
          </div>
        </div>
      </footer>

      {/* --- MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-obsidian/95 backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
              <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse" />
            </div>

            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-white p-4 hover:scale-110 transition-transform">
              <X size={40} strokeWidth={1} />
            </button>

            <nav className="text-center relative z-10 flex flex-col gap-12 w-full px-8">
              {[
                { label: 'Work', href: '#projects' },
                { label: 'Lab', href: '#about' },
                { label: 'Connect', href: 'mailto:sandy@zaynstudio.app' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap hover:text-cyanAccent transition-all transition-colors"
                >
                  {item.label}.
                </motion.a>
              ))}

              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="h-px w-24 bg-cyanAccent/30" />
                <span className="text-[9px] font-mono tracking-[0.8em] text-steel uppercase">Initiate Digital Pulse</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CUSTOM CURSOR --- */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-12 h-12 rounded-full border border-cyanAccent/20 pointer-events-none z-[300]"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, restDelta: 0.001 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-cyanAccent rounded-full" />
        </div>
        <div className="absolute -inset-2 border border-white/5 rounded-full" />
      </motion.div>

    </main>
  );
}