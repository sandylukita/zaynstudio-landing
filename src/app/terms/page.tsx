'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfService() {
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
            Terms of Service
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
                <h3 className="text-lg font-semibold mb-2 text-white">9. App-Specific Disclaimers</h3>
                <p className="text-purple-100 mb-2">Certain apps may have specific disclaimers:</p>
                <p className="text-purple-100"><strong>Health & Wellness Apps (ByeSmoke AI):</strong> This app provides motivational and lifestyle support only. It is not medical advice or treatment. For medical advice regarding quitting smoking or health conditions, consult a licensed healthcare professional.</p>
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
