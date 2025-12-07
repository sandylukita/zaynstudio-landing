'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sandy@zaynstudio.app');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-inter font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get Support
            </motion.h1>

            <motion.p
              className="text-purple-200 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Questions about our apps? Feedback? Bug reports?
            </motion.p>

            <motion.div
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors cursor-pointer mb-6"
              onClick={copyEmailToClipboard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl md:text-3xl font-inter font-semibold text-white mb-2">
                sandy@zaynstudio.app
              </div>
              <div className="text-sm text-purple-200">
                {copied ? '✓ Copied to clipboard!' : 'Click to copy'}
              </div>
            </motion.div>

            <motion.p
              className="text-sm text-purple-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We love hearing from you and typically respond within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center space-x-2 text-purple-300 text-xs font-inter mb-4">
            <Link
              href="/privacy"
              className="hover:text-purple-200 transition-colors px-1 py-1"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-purple-200 transition-colors px-1 py-1"
            >
              Terms of Service
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
