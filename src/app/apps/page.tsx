'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Apps() {
  const apps = [
    {
      id: 'byesmokeai',
      name: 'ByeSmoke AI',
      tagline: 'AI-powered smoking cessation',
      description: 'Your intelligent companion for quitting smoking. Personalized AI motivation, progress tracking, and support when you need it most.',
      icon: '🚭',
      available: true,
      link: '/byesmokeai',
      logo: '/byesmokeai-logo.png'
    },
    {
      id: 'mambafocus',
      name: 'Mamba Focus',
      tagline: 'The No Mercy Focus Timer',
      description: 'Flip to Focus. Fail and be Shamed. Mamba Focus uses "No Mercy" mechanics to force discipline. There is no pause button.',
      icon: '🎯',
      available: true,
      link: '/mambafocus',
      logo: '/mamba-logo.png'
    },
    {
      id: 'coming-soon-1',
      name: 'Coming Soon',
      tagline: 'More apps in development',
      description: "We're working on exciting new apps to help you with everyday challenges.",
      icon: '📱',
      available: false
    },
    {
      id: 'coming-soon-2',
      name: 'Coming Soon',
      tagline: 'More apps in development',
      description: "We're working on exciting new apps to help you with everyday challenges.",
      icon: '📱',
      available: false
    },
    {
      id: 'coming-soon-3',
      name: 'Coming Soon',
      tagline: 'More apps in development',
      description: "We're working on exciting new apps to help you with everyday challenges.",
      icon: '📱',
      available: false
    },
    {
      id: 'coming-soon-4',
      name: 'Coming Soon',
      tagline: 'More apps in development',
      description: "We're working on exciting new apps to help you with everyday challenges.",
      icon: '📱',
      available: false
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Same magical background as main page */}
      <div className="absolute inset-0 bg-purple-gradient">
        {/* Animated grain texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-noise animate-pulse"></div>
        </div>

        {/* Jellyfish blob shapes */}
        {[
          { size: 'w-40 h-32', position: 'top-[15%] left-[10%]', delay: 0 },
          { size: 'w-56 h-44', position: 'top-[25%] right-[8%]', delay: 1 },
          { size: 'w-32 h-28', position: 'top-[45%] left-[5%]', delay: 2 },
          { size: 'w-48 h-36', position: 'bottom-[35%] right-[15%]', delay: 1.5 },
        ].map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute ${blob.size} ${blob.position} opacity-20 blur-xl`}
            style={{
              background: `radial-gradient(ellipse, ${i % 2 === 0 ? '#7C3AED' : '#C084FC'} 0%, transparent 70%)`,
              borderRadius: `${40 + i * 10}% ${60 + i * 5}% ${45 + i * 8}% ${55 + i * 6}%`,
            }}
            animate={{
              x: [0, 20 + i * 5, 0],
              y: [0, -15 - i * 3, 0],
              scale: [1, 1.1 + i * 0.02, 1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.delay,
            }}
          />
        ))}

        {/* Sparkle particles */}
        {[
          { position: 'top-[20%] left-[25%]', delay: 0 },
          { position: 'top-[30%] right-[20%]', delay: 0.5 },
          { position: 'top-[50%] left-[15%]', delay: 1 },
          { position: 'bottom-[40%] right-[30%]', delay: 1.5 },
        ].map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={`absolute w-2 h-2 bg-white rounded-full ${sparkle.position} shadow-lg`}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
          />
        ))}
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 p-6">
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-purple-200 transition-colors font-inter"
        >
          <span className="mr-2">←</span>
          Back to ZaynStudio
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">
              Our Apps
            </h1>
            <p className="text-xl text-purple-200">
              Innovative mobile solutions for everyday challenges
            </p>
          </motion.div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {app.available && app.link ? (
                  <Link href={app.link}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-purple-400 transition-all cursor-pointer h-full">
                      <div className="mb-4">
                        {app.logo ? (
                          <img src={app.logo} alt={`${app.name} logo`} className="w-16 h-16 rounded-xl" />
                        ) : (
                          <div className="text-5xl">{app.icon}</div>
                        )}
                      </div>
                      <h3 className="text-xl font-inter font-bold text-white mb-2">
                        {app.name}
                      </h3>
                      <p className="text-purple-300 text-sm mb-3 font-medium">
                        {app.tagline}
                      </p>
                      <p className="text-purple-200 text-sm leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full opacity-60">
                    <div className="mb-4">
                      {app.logo ? (
                        <img src={app.logo} alt={`${app.name} logo`} className="w-16 h-16 rounded-xl opacity-40" />
                      ) : (
                        <div className="text-5xl">{app.icon}</div>
                      )}
                    </div>
                    <h3 className="text-xl font-inter font-bold text-white mb-2">
                      {app.name}
                    </h3>
                    <p className="text-purple-300 text-sm mb-3 font-medium">
                      {app.tagline}
                    </p>
                    <p className="text-purple-200 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-purple-300 text-xs font-inter mb-4">
            <Link
              href="/privacy"
              className="hover:text-purple-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-purple-200 transition-colors"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link
              href="/contact"
              className="hover:text-purple-200 transition-colors"
            >
              Contact
            </Link>
          </div>

          <p className="text-purple-300 text-sm font-inter">
            © 2025 ZaynStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
