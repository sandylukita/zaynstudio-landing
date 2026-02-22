'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function TermsOfService() {
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
          Protocol // Terms.Archive
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
              Terms of <br /> <span className="text-cyanAccent">Service.</span>
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
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">01 // Acceptance</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Usage Agreement</h3>
                  <p className="text-steel/70 leading-relaxed font-light">
                    By accessing or utilizing any ZaynStudio digital environment ("App"), you acknowledge and agree to the protocols outlined in these Terms of Service. If you do not consent, you are instructed to terminate access immediately.
                  </p>
                </div>
              </div>

              {/* Section 02 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">02 // Parameters</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Eligibility & Conduct</h3>
                  <ul className="space-y-4">
                    {[
                      "Access is restricted to individuals aged 13 and older.",
                      "Users must comply with all regional and digital governance laws.",
                      "Unauthorized reverse-engineering or system intrusion is strictly prohibited.",
                      "Distribution of malicious payloads or harmful content within the ecosystem will result in immediate termination."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 group">
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
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">03 // Commerce</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Subscriptions & Systems</h3>
                  <p className="text-steel/70 leading-relaxed mb-6 font-light">Laboratory access and premium tiers are governed by the following mechanics:</p>
                  <ul className="space-y-4">
                    {[
                      "Payments are processed through secure app store infrastructure (Apple/Google).",
                      "Refund protocols follow standard platform-specific merchant policies.",
                      "Access to premium modules is contingent upon an active subscription status."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-cyanAccent/40 font-mono text-[10px] mt-1.5">—</span>
                        <p className="text-steel/60 text-sm leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 04 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">04 // Assets</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Intellectual Architecture</h3>
                  <p className="text-steel/70 leading-relaxed mb-4 font-light">ZaynStudio retains absolute ownership of all system components, including:</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {["Codebase", "Interface Design", "Neural Models", "Branding Assets"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-[9px] font-mono text-steel/50 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 05 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-cyanAccent tracking-[0.5em] uppercase">05 // Diagnostics</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">Liability & Disclaimers</h3>
                  <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] font-mono text-[11px] leading-relaxed text-steel/60 space-y-4 italic">
                    <p>"AS IS" PROTOCOL: THE APP IS PROVIDED WITHOUT WARRANTY OF ANY KIND. ZAYNSTUDIO ASSUMES NO LIABILITY FOR SYSTEM DOWNTIME OR DATA ANOMALIES.</p>
                    <p>MAMBA FOCUS DISCLAIMER: "NO MERCY" MECHANICS ARE INTENDED TO BE UNFORGIVING. FAILURE TO MAINTAIN FOCUS MAY RESULT IN PUBLIC BROADCAST TO THE REGISTRY. REFUNDS ARE NOT ISSUED FOR INTENDED DIFFICULTY CHALLENGES.</p>
                  </div>
                </div>
              </div>

              {/* Final Footer */}
              <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-3">
                  <span className="text-[8px] font-mono text-steel/30 uppercase tracking-[0.6em]">System support node</span>
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
