'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-[#F5F5F7] selection:bg-cyanAccent/30 font-sans overflow-x-hidden">
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,240,255,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Scanlines Effect */}
        <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.03]" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <Link href="/" className="group flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyanAccent transition-all duration-500">
            <ChevronLeft size={18} className="text-white group-hover:text-cyanAccent transition-colors" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.4em] text-steel group-hover:text-cyanAccent transition-colors uppercase">
            Exit to Laboratory
          </span>
        </Link>

        <div className="text-[10px] font-mono tracking-[0.4em] text-steel/40 uppercase hidden md:block">
          Protocol // Privacy.Archive
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
              Privacy <br /> <span className="text-cyanAccent">Policy.</span>
            </h1>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px w-12 bg-cyanAccent/30" />
              <p className="text-[10px] font-mono tracking-[0.3em] text-steel/60 uppercase">
                Last Revision: August 06, 2025
              </p>
            </div>

            <div className="space-y-16">
              {/* Section 01 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">01 // Collection</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Information We Collect</h3>
                  <p className="text-steel/70 leading-relaxed mb-6 font-light">ZaynStudio may collect the following information when you use our digital environments:</p>
                  <ul className="space-y-4">
                    {[
                      { l: "Usage Data", v: "Feature access, session duration, and interface interactions." },
                      { l: "Device Metrics", v: "OS version, hardware specifications, and system settings." },
                      { l: "System Reports", v: "Encrypted crash reports and latency analytics." },
                      { l: "Registry Info", v: "Authenticated account data (Email, Method, Preferences)." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 group">
                        <span className="text-cyanAccent/40 font-mono text-[10px] mt-1.5">—</span>
                        <p className="text-steel/60 text-sm leading-relaxed">
                          <strong className="text-white/80 font-mono text-[11px] uppercase tracking-wider mr-2">{item.l}:</strong>
                          {item.v}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 02 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">02 // Processing</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">How We Use Information</h3>
                  <p className="text-steel/70 leading-relaxed mb-6 font-light">Data is strictly utilized for the evolution of our ecosystem:</p>
                  <ul className="space-y-4">
                    {[
                      "Refinement of core application logic and performance.",
                      "Personalization of user focus environments.",
                      "Encryption and account security protocols.",
                      "Processing of laboratory subscriptions and secure payments.",
                      "Monitoring of system integrity and misuse prevention."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-cyanAccent/40 font-mono text-[10px] mt-1.5">—</span>
                        <p className="text-steel/60 text-sm leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 03 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">03 // Distribution</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Information Sharing</h3>
                  <p className="text-steel/70 leading-relaxed mb-6 font-light">We share data with trusted infrastructure partners only to facilitate secure operations:</p>
                  <ul className="space-y-4 mb-8">
                    {["App Distribution Platforms", "Encrypted Analytics Pipelines", "Service Infrastructure Providers"].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-cyanAccent/40 font-mono text-[10px] mt-1.5">—</span>
                        <p className="text-steel/60 text-sm leading-relaxed font-mono tracking-wide">{item}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="p-6 rounded-xl border border-cyanAccent/10 bg-cyanAccent/[0.02] inline-block">
                    <p className="text-[10px] font-mono text-cyanAccent uppercase tracking-[0.4em]">ZAYNSTUDIO DOES NOT SELL USER DATA TO EXTERNAL ENTITIES.</p>
                  </div>
                </div>
              </div>

              {/* Section 04 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">04 // Special Protocol</span>
                </div>
                <div className="md:col-span-3 font-mono">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase font-sans">App-Specific Disclaimers</h3>
                  <div className="space-y-8">
                    <div className="flex flex-col gap-3">
                      <span className="text-cyanAccent text-[9px] tracking-[0.4em uppercase]">/ ByeSmoke AI</span>
                      <p className="text-steel/60 text-[11px] leading-relaxed">Motivational and lifestyle support only. Not a medical advisory. Consult licensed professionals for smoking cessation protocols.</p>
                    </div>
                    <div className="flex flex-col gap-3 border-l border-cyanAccent/20 pl-6 py-2">
                      <span className="text-cyanAccent text-[9px] tracking-[0.4em uppercase]">/ Mamba Focus</span>
                      <p className="text-steel/60 text-[11px] leading-relaxed italic">Public Accountability Protocol: Failed sessions trigger an automated broadcast of your "Call Sign" and failure status to the global registry. Core mechanics utilize accelerometer telemetry to detect focus violations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Footer */}
              <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-3">
                  <span className="text-[8px] font-mono text-steel/30 uppercase tracking-[0.6em]">Encrypted contact channel</span>
                  <a href="mailto:sandy@zaynstudio.app" className="text-sm font-bold hover:text-cyanAccent transition-colors">sandy@zaynstudio.app</a>
                </div>
                <p className="text-[8px] font-mono text-steel/20 uppercase tracking-[0.5em]">© 2026 ZAYNSTUDIO // ALL SYSTEMS GO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
