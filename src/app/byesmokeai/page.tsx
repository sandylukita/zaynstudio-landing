'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ByeSmokeAI() {
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
                  AI-powered recommendations for your quit journey
                </p>
                
                <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                  Break free from smoking with personalized AI recommendations, gamified progress tracking, and community support. 
                  Your journey to a smoke-free life starts here.
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
                  Join thousands who've successfully quit smoking with AI recommendations and community support
                </div>
              </motion.div>

              {/* Right: App Screenshot */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src="/byesmokeai-screenshot.png"
                    alt="ByeSmoke AI App Screenshot"
                    width={400}
                    height={800}
                    className="rounded-3xl shadow-2xl"
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
                  icon: "🎯",
                  title: "AI-Powered Recommendations",
                  description: "Smart daily missions and personalized tips based on your activity patterns and quit journey stage."
                },
                {
                  icon: "🏆",
                  title: "Gamified Progress",
                  description: "Track streaks, earn badges, level up with XP, and see your savings grow with interactive progress tracking."
                },
                {
                  icon: "👥",
                  title: "Community Support",
                  description: "Connect with others, compete on leaderboards, and stay motivated with referral rewards and social features."
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
                  title: "Setup Your Profile",
                  description: "Tell us about your smoking habits and goals to get personalized AI recommendations."
                },
                {
                  step: "2",
                  title: "Get Daily Missions",
                  description: "Complete AI-generated daily tasks, check in regularly, and earn XP as you progress."
                },
                {
                  step: "3",
                  title: "Level Up & Connect",
                  description: "Unlock badges, track savings, compete with friends, and celebrate milestones together."
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
              Ready to Quit Smoking for Good?
            </motion.h2>
            
            <motion.p
              className="text-xl text-purple-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands who have successfully quit smoking with AI recommendations and community support
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

      {/* Footer */}
      <footer className="relative z-20 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center space-x-2 text-purple-300 text-xs font-inter">
              <Link href="/" className="hover:text-purple-200 transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-purple-200 transition-colors">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-purple-200 transition-colors">
                Contact
              </Link>
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