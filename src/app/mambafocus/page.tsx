import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Mamba Focus - The No Mercy Focus Timer',
    description: 'Flip to Focus. Fail and be Shamed. Mamba Focus uses "No Mercy" mechanics to force discipline. There is no pause button.',
    openGraph: {
        title: 'Mamba Focus - No Mercy Focus Timer',
        description: 'The ONLY way to start a session is to place your phone face down. Fail, and you hit the public Wall of Shame.',
        url: 'https://zaynstudio.app/mambafocus',
        siteName: 'Zayn Studio',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Mamba Focus App',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function MambaFocusPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">
            {/* Background Grid & Noise & Overlays */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="fixed inset-0 z-50 pointer-events-none scanlines"></div>
            <div className="fixed inset-0 z-50 pointer-events-none vignette"></div>

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Image src="/mamba-logo.png" width={48} height={48} alt="Mamba Focus Logo" className="w-12 h-12 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)]" />
                    <span className="text-xl font-heavy font-bold tracking-widest uppercase text-yellow-500">Mamba Focus</span>
                </div>
                <div>
                    <a href="#download" className="hidden sm:inline-block px-6 py-2 border border-yellow-500 text-yellow-500 font-mono font-bold hover:bg-yellow-500 hover:text-black transition-all rounded-sm uppercase tracking-wider text-sm">
                        Get The App
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 w-full">
                <section className="pt-24 pb-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
                    <div className="inline-block px-4 py-2 mb-8 border border-red-600 bg-red-900/40 text-red-500 font-mono text-sm font-bold uppercase tracking-[0.2em] animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                        Warning: Discipline Decay Detected
                    </div>

                    <h1 className="text-6xl md:text-9xl font-heavy mb-8 leading-[0.85] tracking-tight uppercase">
                        Flip to <span className="text-yellow-400">Survive.</span><br />
                        Fail and be <span className="text-red-600 text-shadow-red">Shamed.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 font-mono leading-relaxed border-l-4 border-yellow-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        <span className="text-white font-heavy text-2xl tracking-wide">STANDARD MODE (25M)</span> <span className="text-yellow-500 mx-2">//</span> <span className="text-red-500 font-heavy text-2xl tracking-wide">MAMBA MODE (4x25M CHAIN)</span><br className="hidden md:block" />
                        There is no pause button. Initiate lockdown protocol.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20">
                        <a href="#download" className="w-full sm:w-auto relative group overflow-hidden">
                            <div className="absolute inset-0 bg-red-700/20 group-hover:bg-red-600/30 transition-colors"></div>
                            <button className="relative w-full sm:w-auto px-10 py-5 bg-red-700 hover:bg-red-600 text-white font-heavy font-bold text-3xl tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] border-t-2 border-red-500 border-b-4 border-red-900 active:translate-y-1 active:border-b-2">
                                <div className="absolute inset-0 scanlines opacity-30"></div>
                                Initiate Lockdown
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-12 opacity-80 hover:opacity-100 transition-opacity">
                        <a href="#" className="transition-transform hover:scale-105 active:scale-95 grayscale hover:grayscale-0">
                            <Image src="/app-store-badge.svg" width={140} height={42} alt="Download on the App Store" />
                        </a>
                        <a href="#" className="transition-transform hover:scale-105 active:scale-95 grayscale hover:grayscale-0">
                            <Image src="/google-play-badge.svg" width={140} height={42} alt="Get it on Google Play" />
                        </a>
                    </div>

                    {/* App Preview Mockup - Tactical Lock */}
                    <div className="relative w-full max-w-sm mx-auto perspective-1000 group mt-12">
                        <div className="relative bg-black rounded-[3rem] border-8 border-gray-900 shadow-[0_0_80px_rgba(220,38,38,0.2)] overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                            <Image src="/mamba-lock.png" width={400} height={800} alt="Mamba Focus Interface" className="w-full h-full object-cover opacity-90" />

                            {/* Overlay Effects on Device Screen */}
                            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
                            <div className="absolute inset-0 vignette pointer-events-none"></div>

                            {/* Glow reflection */}
                            <div className="absolute -inset-[100%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                {/* Features Grid - Terminal Style */}
                <section id="how-it-works" className="py-24 px-6 bg-transparent border-y border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-6xl font-heavy mb-4 uppercase text-white">
                                Tactical <span className="text-yellow-400">Modules</span>
                            </h2>
                            <p className="text-gray-500 font-mono">v1.0.0 // PROTOCOLS_ENGAGED</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-black/80 border border-zinc-800 p-6 hover:border-yellow-500/50 transition-colors group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-2 opacity-50 font-heavy text-xl text-yellow-500">01</div>
                                <h3 className="text-3xl font-heavy mb-4 text-yellow-500 group-hover:underline decoration-yellow-500 underline-offset-4 tracking-wide">Flip to Focus</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500">::</span>
                                        <span>Must place phone <strong className="text-white">face down</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500">::</span>
                                        <span>Lift phone = <strong className="text-red-500">MISSION FAILED</strong>.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-black/80 border border-zinc-800 p-6 hover:border-red-500/50 transition-colors group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-2 opacity-50 font-heavy text-xl text-red-500">02</div>
                                <h3 className="text-3xl font-heavy mb-4 text-red-500 group-hover:underline decoration-red-500 underline-offset-4 tracking-wide">Wall of Shame</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">::</span>
                                        <span>Public failure log.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">::</span>
                                        <span>Call Sign exposed.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-black/80 border border-zinc-800 p-6 hover:border-white/50 transition-colors group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-2 opacity-50 font-heavy text-xl text-white">03</div>
                                <h3 className="text-3xl font-heavy mb-4 text-white group-hover:underline decoration-white underline-offset-4 tracking-wide">Tactical HUD</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white">::</span>
                                        <span>CRT Scanline effects.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white">::</span>
                                        <span>Mil-spec sound effects.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-black/80 border border-yellow-500/20 p-6 hover:border-yellow-500 transition-colors group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-2 opacity-50 font-heavy text-xl text-yellow-500">04</div>
                                <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none"></div>
                                <h3 className="text-3xl font-heavy mb-4 text-yellow-500 group-hover:underline decoration-yellow-500 underline-offset-4 tracking-wide">Elite Status</h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500">★</span>
                                        <span>Immunity from Shame.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-500">★</span>
                                        <span>Classified Access.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="download" className="py-32 px-6 relative overflow-hidden z-10">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h2 className="text-6xl md:text-9xl font-heavy mb-6 tracking-tight uppercase text-white">
                            Do you have the <span className="text-red-600">discipline?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 font-mono">Join the ranks. Face down to survive.</p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="relative px-12 py-6 bg-red-700 hover:bg-red-600 text-white font-heavy font-bold text-4xl tracking-widest uppercase transition-all shadow-[0_0_40px_rgba(220,38,38,0.4)] border-2 border-red-500 active:scale-95">
                                <div className="absolute inset-0 scanlines opacity-30"></div>
                                Initialize Download
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10 py-12 px-6 bg-black font-mono text-xs">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-600">
                            SYSTEM.ROOT // © {new Date().getFullYear()} Zayn Studio.
                        </div>
                        <div className="flex gap-8">
                            <a href="https://www.zaynstudio.app/privacy" className="text-gray-600 hover:text-white transition-colors uppercase">Privacy Protocol</a>
                            <a href="https://www.zaynstudio.app/terms" className="text-gray-600 hover:text-white transition-colors uppercase">Terms of Engagement</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
