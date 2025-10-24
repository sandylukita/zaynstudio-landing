'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ByeSmokeAI() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sandy@zaynstudio.app');
      // You could add a toast notification here later
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleContactClick = () => {
    setContactModalOpen(true);
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
          { size: 'w-36 h-32', position: 'bottom-[20%] left-[20%]', delay: 0.5 },
          { size: 'w-28 h-24', position: 'top-[35%] right-[25%]', delay: 2.5 },
          { size: 'w-52 h-40', position: 'bottom-[45%] right-[35%]', delay: 1.8 },
          { size: 'w-24 h-20', position: 'top-[55%] left-[15%]', delay: 3 }
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
          { position: 'bottom-[25%] left-[35%]', delay: 2 },
          { position: 'top-[40%] right-[40%]', delay: 2.5 },
          { position: 'top-[60%] left-[45%]', delay: 3 },
          { position: 'bottom-[50%] right-[10%]', delay: 0.8 },
          { position: 'top-[70%] left-[8%]', delay: 1.2 },
          { position: 'bottom-[15%] right-[45%]', delay: 1.8 }
        ].map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={`absolute w-2 h-2 bg-white rounded-full ${sparkle.position} shadow-lg`}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
              x: [0, Math.random() * 10 - 5, 0],
              y: [0, Math.random() * 10 - 5, 0],
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
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 flex items-center justify-center mr-4">
                    <img
                      src="/byesmokeai-logo.png"
                      alt="ByeSmoke AI Logo"
                      className="w-16 h-16"
                    />
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-inter font-bold text-white">
                    ByeSmoke AI
                  </h1>
                </div>
                
                <p className="text-xl sm:text-2xl text-purple-200 mb-8 font-inter">
                  Your AI-Powered Quit Smoking Companion
                </p>

                <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                  ByeSmoke AI combines intelligent AI coaching, an evolving pet companion (Cat → Tiger → Lion), and gamification to make quitting smoking engaging, rewarding, and successful. Watch your health recover while your pet grows!
                </p>

                {/* Download Buttons */}
                <div className="flex flex-row gap-4 mb-8 justify-center lg:justify-start">
                  <motion.a
                    href="#"
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src="/app-store-badge.svg"
                      alt="Download on the App Store"
                      className="h-14 w-auto"
                    />
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src="/google-play-badge.svg"
                      alt="Get it on Google Play"
                      className="h-14 w-auto"
                    />
                  </motion.a>
                </div>

                <div className="text-purple-300 text-sm">
                  Join thousands who&apos;ve successfully quit smoking with AI coaching, pet companion, and gamified progress tracking
                </div>
              </motion.div>

              {/* Right: App Screenshot */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative max-w-[250px] md:max-w-[300px]">
                  <Image
                    src="/byesmokeai-screenshot.png"
                    alt="ByeSmoke AI App Screenshot"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-2xl w-full h-auto"
                    priority
                  />
                  {/* Floating animation */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-inter font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose ByeSmoke AI?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤖",
                  title: "Smart AI Coach",
                  description: "Get personalized motivation, custom daily missions, and emotional support from AI that adapts to your journey stage."
                },
                {
                  icon: "🐱",
                  title: "LungCat Pet Companion",
                  description: "Watch your virtual pet evolve from Cat → Tiger → Lion as you quit smoking. Feed, play, and celebrate together!"
                },
                {
                  icon: "🎮",
                  title: "Gamified Journey",
                  description: "Earn 25+ badges, level up with XP, complete daily missions, and track your streak with heatmap calendar."
                },
                {
                  icon: "💪",
                  title: "Health Recovery Tracking",
                  description: "See 8+ major health milestones in real-time, from 20 minutes to 1+ years. Watch your body heal!"
                },
                {
                  icon: "💰",
                  title: "Money Saved Calculator",
                  description: "Track savings daily, monthly, yearly with multi-currency support. See exactly what you can buy with saved money!"
                },
                {
                  icon: "🤝",
                  title: "Community & Social Features",
                  description: "Compare progress, share achievements, earn referral rewards. Bilingual support (English/Indonesian)."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-inter font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-inter font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Setup & Meet Your Pet",
                  description: "Tell us about your smoking habits, set your quit date, and meet your LungCat companion who will grow with you!"
                },
                {
                  step: "2",
                  title: "Get AI-Powered Guidance",
                  description: "Receive personalized daily missions from your AI coach. Complete check-ins, feed your pet, and earn XP and badges."
                },
                {
                  step: "3",
                  title: "Watch Your Progress",
                  description: "See your health recover in real-time, track money saved, watch your pet evolve (Cat→Tiger→Lion), and celebrate milestones!"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-inter font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-inter font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quit Smoking. Save Money. Level Up Your Life.
            </motion.h2>

            <motion.p
              className="text-xl text-purple-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands who have successfully quit with AI coaching, pet companion, and gamified progress. Start your smoke-free journey today!
            </motion.p>

            <motion.div
              className="flex flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="#"
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </motion.a>
              
              <motion.a
                href="#"
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: contactModalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: contactModalOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setContactModalOpen(false)}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-purple-gradient rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/20"
          initial={{ scale: 0.8, y: 50 }}
          animate={{
            scale: contactModalOpen ? 1 : 0.8,
            y: contactModalOpen ? 0 : 50,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Same background effects as main page */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {/* Animated grain texture */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-noise animate-pulse"></div>
            </div>
            
            {/* Mini jellyfish */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-6 opacity-30 blur-sm"
              style={{
                background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)',
                borderRadius: '60% 40% 50% 70%',
              }}
              animate={{
                x: [0, 10, 0],
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Mini sparkles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`modal-sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + i * 25}%`,
                  left: `${10 + i * 30}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Modal Content */}
          <div className="relative z-10 text-center text-white">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-lg">×</span>
            </button>

            <motion.h2
              className="text-3xl font-inter font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get Support
            </motion.h2>
            
            <motion.p
              className="text-purple-200 mb-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Questions about our apps? Feedback? Bug reports?
            </motion.p>

            <motion.div
              className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors cursor-pointer"
              onClick={copyEmailToClipboard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-lg font-inter font-semibold mb-1">
                sandy@zaynstudio.app
              </div>
              <div className="text-xs text-purple-200">
                Click to copy
              </div>
            </motion.div>
            
            <motion.p
              className="text-xs text-purple-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We love hearing from you
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center space-x-2 text-purple-300 text-xs font-inter">
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
              <span>|</span>
              <button
                onClick={handleContactClick}
                className="hover:text-purple-200 transition-colors cursor-pointer px-1 py-1"
              >
                Contact
              </button>
            </div>
            
            {/* Copyright */}
            <p className="text-purple-300 text-sm font-inter">
              © 2025 ZaynStudio. All rights reserved.
            </p>
            
            {/* Back to ZaynStudio */}
            <Link 
              href="/"
              className="text-purple-300 hover:text-purple-200 transition-colors font-inter text-sm"
            >
              ← Back to ZaynStudio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}