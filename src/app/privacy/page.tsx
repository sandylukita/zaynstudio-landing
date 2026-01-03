'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
      <div className="relative z-10 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-inter font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-sm leading-relaxed">
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
                <h3 className="text-lg font-semibold mb-2 text-white">7. App-Specific Disclaimers</h3>
                <p className="text-purple-100 mb-2">Certain apps may have specific disclaimers:</p>
                <p className="text-purple-100"><strong>Health & Wellness Apps (ByeSmoke AI):</strong> ByeSmoke AI provides motivational and lifestyle support only. It is not a substitute for medical advice or treatment. Please consult a healthcare professional for medical guidance regarding quitting smoking or health conditions.</p>
                <p className="text-purple-100 mt-4"><strong>Productivity Apps (Mamba Focus):</strong> By using Mamba Focus, you acknowledge and agree that specific session data (your "Call Sign", session duration, and failure timestamp) will be <strong>publicly broadcasted</strong> to the global "Wall of Shame" upon session failure. This is a core accountability feature of the app. We also access device motion sensors (accelerometer/gyroscope) solely to detect phone orientation ("Flip to Focus") during active sessions.</p>
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
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-300 text-sm font-inter">
            © 2025 ZaynStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
