'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ByeSmokeAI() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

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

  const handlePrivacyClick = () => {
    setPrivacyModalOpen(true);
  };

  const handleTermsClick = () => {
    setTermsModalOpen(true);
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

      {/* Privacy Policy Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: privacyModalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: privacyModalOpen ? 'auto' : 'none' }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setPrivacyModalOpen(false)}
        />
        
        <motion.div
          className="relative bg-purple-gradient rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl border border-white/20 max-h-[80vh]"
          initial={{ scale: 0.8, y: 50 }}
          animate={{
            scale: privacyModalOpen ? 1 : 0.8,
            y: privacyModalOpen ? 0 : 50,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-noise animate-pulse"></div>
            </div>
          </div>

          <div className="relative z-10 text-white">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-lg">×</span>
            </button>

            <h2 className="text-2xl font-inter font-bold mb-6 text-center">Privacy Policy</h2>
            
            <div className="overflow-y-auto max-h-[60vh] pr-2 text-sm leading-relaxed space-y-4">
              <p className="text-purple-100"><strong>Effective Date:</strong> August 6, 2025</p>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">1. Information We Collect</h3>
                <p className="text-purple-100">ZaynStudio may collect the following information when you use our apps:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Usage data and analytics (e.g., features accessed, session length)</li>
                  <li>Device information (OS version, device type, language settings)</li>
                  <li>Crash reports to identify and fix bugs</li>
                  <li>User preferences and settings (e.g., theme, language)</li>
                  <li>Account information if you sign up (email, login method)</li>
                </ul>
                <p className="text-purple-100 mt-2">Third-party services we use may also collect data:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Firebase (authentication, crash reporting, analytics)</li>
                  <li>Google AdMob (ads personalization, device identifiers)</li>
                  <li>Google Play Billing / Apple In-App Purchases (subscription management)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">2. How We Use Information</h3>
                <p className="text-purple-100">We use collected information to:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Provide and improve app functionality</li>
                  <li>Personalize the user experience</li>
                  <li>Monitor performance and fix bugs</li>
                  <li>Deliver ads (for free users)</li>
                  <li>Process subscriptions and payments</li>
                  <li>Ensure app security and prevent misuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">3. Information Sharing</h3>
                <p className="text-purple-100">We may share data with trusted third parties only to operate our services:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>App store platforms (Google Play, Apple App Store)</li>
                  <li>Analytics providers (aggregated, anonymized data)</li>
                  <li>Service providers who help operate our apps</li>
                </ul>
                <p className="text-purple-100 mt-2">We do not sell personal data to third parties.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">4. Data Security</h3>
                <p className="text-purple-100">We use technical and organizational measures to protect your data against unauthorized access, disclosure, or alteration. However, no method of transmission is 100% secure.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">5. Your Rights</h3>
                <p className="text-purple-100">You may:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Access the data associated with your account</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your account and data at any time</li>
                  <li>Opt-out of personalized ads where supported by your device settings</li>
                </ul>
                <p className="text-purple-100 mt-2">To delete your account, please contact us at sandy@zaynstudio.app or use the in-app account deletion option (if available).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">6. Children&apos;s Privacy</h3>
                <p className="text-purple-100">Our apps are not directed to children under 13. We do not knowingly collect personal data from children. If you believe we have collected such data, contact us to request deletion.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">7. Health Disclaimer</h3>
                <p className="text-purple-100">ByeSmoke AI provides motivational support only. It is not a substitute for medical advice or treatment. Please consult a healthcare professional for medical guidance.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">8. Contact Us</h3>
                <p className="text-purple-100">For privacy concerns or questions, please contact:</p>
                <p className="text-white font-semibold">📧 sandy@zaynstudio.app</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">9. Policy Updates</h3>
                <p className="text-purple-100">We may update this Privacy Policy periodically. Updates will be posted in the app and on our website. Continued use of the app constitutes acceptance of the updated policy.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Terms of Service Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: termsModalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: termsModalOpen ? 'auto' : 'none' }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setTermsModalOpen(false)}
        />
        
        <motion.div
          className="relative bg-purple-gradient rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl border border-white/20 max-h-[80vh]"
          initial={{ scale: 0.8, y: 50 }}
          animate={{
            scale: termsModalOpen ? 1 : 0.8,
            y: termsModalOpen ? 0 : 50,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-noise animate-pulse"></div>
            </div>
          </div>

          <div className="relative z-10 text-white">
            <button
              onClick={() => setTermsModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-lg">×</span>
            </button>

            <h2 className="text-2xl font-inter font-bold mb-6 text-center">Terms of Service</h2>
            
            <div className="overflow-y-auto max-h-[60vh] pr-2 text-sm leading-relaxed space-y-4">
              <p className="text-purple-100"><strong>Effective Date:</strong> August 6, 2025</p>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">1. Acceptance of Terms</h3>
                <p className="text-purple-100">By downloading, installing, or using any ZaynStudio app (&quot;App&quot;), you agree to these Terms of Service. If you do not agree, please discontinue use of the App.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">2. Eligibility & Age Restriction</h3>
                <p className="text-purple-100">The App is intended for individuals aged 13 and older. Users under 18 should obtain parental consent. The App is not directed to children under 13, and we do not knowingly collect data from them.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">3. App Usage</h3>
                <p className="text-purple-100">You may use the App for personal purposes in accordance with:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>All applicable laws and regulations</li>
                  <li>App store terms and conditions</li>
                  <li>These Terms of Service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">4. User Accounts & Subscriptions</h3>
                <p className="text-purple-100">You are responsible for maintaining the confidentiality of your account and credentials.</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Subscriptions and payments are processed through Google Play Billing and/or Apple In-App Purchases.</li>
                  <li>Refunds are handled in accordance with Google Play and Apple App Store policies.</li>
                  <li>Premium features will remain accessible only while your subscription is active.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">5. Prohibited Uses</h3>
                <p className="text-purple-100">You agree NOT to:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Use the App for illegal or harmful activities</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Upload or distribute malware, offensive, or harmful content</li>
                  <li>Violate intellectual property rights of ZaynStudio or third parties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">6. Intellectual Property</h3>
                <p className="text-purple-100">ZaynStudio retains all rights, title, and interest in the App, including:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Software code and architecture</li>
                  <li>User interface and design elements</li>
                  <li>Trademarks, logos, and branding</li>
                  <li>Content, documentation, and media assets</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">7. Community Features</h3>
                <p className="text-purple-100">Some Apps may include anonymous community statistics, badges, or achievements. You agree to use these features responsibly and not submit harmful, offensive, or misleading content.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">8. Disclaimer of Warranties</h3>
                <p className="text-purple-100">The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that the App will be error-free, secure, or continuously available.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">9. Health Disclaimer</h3>
                <p className="text-purple-100">This App provides motivational and lifestyle support only. It is not medical advice or treatment. For medical advice regarding quitting smoking or health conditions, consult a licensed healthcare professional.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">10. Limitation of Liability</h3>
                <p className="text-purple-100">ZaynStudio shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the App.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">11. Termination</h3>
                <p className="text-purple-100">We may suspend or terminate your access to the App immediately, without notice, if you violate these Terms or misuse the App.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">12. Governing Law & Dispute Resolution</h3>
                <p className="text-purple-100">These Terms shall be governed by the laws of Indonesia (or your country of residence, if required by law). Any disputes will be resolved through the appropriate courts in that jurisdiction.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">13. Support</h3>
                <p className="text-purple-100">For technical support or questions, contact us at:</p>
                <p className="text-white font-semibold">📧 sandy@zaynstudio.app</p>
                <p className="text-purple-200 mt-1">We aim to respond within 48 hours.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">14. Changes to Terms</h3>
                <p className="text-purple-100">We may modify these Terms from time to time. Updated Terms will be posted in the App and on our website. Continued use of the App constitutes acceptance of the updated Terms.</p>
              </div>
            </div>
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