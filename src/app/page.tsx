'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [appsModalOpen, setAppsModalOpen] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sandy@zaynstudio.app');
      // You could add a toast notification here later
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleContactClick = () => {
    setMenuOpen(false); // Close hamburger menu
    setContactModalOpen(true); // Open contact modal
  };

  const handleAboutClick = () => {
    setMenuOpen(false); // Close hamburger menu
    setAboutModalOpen(true); // Open about modal
  };

  const handleContactUsClick = () => {
    setAboutModalOpen(false); // Close about modal
    setContactModalOpen(true); // Open contact modal
  };

  const handlePrivacyClick = () => {
    setPrivacyModalOpen(true);
  };

  const handleTermsClick = () => {
    setTermsModalOpen(true);
  };

  const handleAppsClick = () => {
    setMenuOpen(false); // Close hamburger menu
    setAppsModalOpen(true); // Open apps modal
  };

  const handleVisitAppPage = (appName: string) => {
    setAppsModalOpen(false); // Close apps modal
    // Navigate to app page (for now, we'll use window.location)
    window.location.href = `/${appName}`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Multi-stop gradient background with effects */}
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
          { position: 'bottom-[15%] right-[45%]', delay: 1.8 },
          { position: 'top-[15%] left-[60%]', delay: 2.2 },
          { position: 'bottom-[60%] left-[25%]', delay: 2.8 },
          { position: 'top-[45%] right-[5%]', delay: 3.2 },
          { position: 'bottom-[30%] left-[50%]', delay: 0.3 },
          { position: 'top-[65%] right-[55%]', delay: 0.7 }
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

      {/* Hamburger Menu Button */}
      <motion.button
        className="absolute top-8 right-8 z-50 w-10 h-10 flex flex-col justify-center items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="w-6 h-0.5 bg-white mb-1 rounded-full"
          animate={{
            rotate: menuOpen ? 45 : 0,
            y: menuOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white mb-1 rounded-full"
          animate={{
            opacity: menuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full"
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Hamburger Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -100,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        {/* Solid backdrop to cover main page */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Same background as main page */}
        <div className="absolute inset-0 bg-purple-gradient">
          {/* Animated grain texture overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-noise animate-pulse"></div>
          </div>
          
          {/* Same jellyfish blobs */}
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
              key={`menu-blob-${i}`}
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

          {/* Same sparkles */}
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
              key={`menu-sparkle-${i}`}
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

        <nav className="text-center relative z-10">
          <motion.ul className="space-y-8 text-white text-2xl font-inter">
            {['About', 'Apps', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -50,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:text-purple-300 cursor-pointer transition-colors"
                onClick={
                  item === 'Contact' ? handleContactClick :
                  item === 'About' ? handleAboutClick :
                  item === 'Apps' ? handleAppsClick : undefined
                }
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>

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

      {/* About Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: aboutModalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: aboutModalOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setAboutModalOpen(false)}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-purple-gradient rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-white/20"
          initial={{ scale: 0.8, y: 50 }}
          animate={{
            scale: aboutModalOpen ? 1 : 0.8,
            y: aboutModalOpen ? 0 : 50,
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
                background: 'radial-gradient(ellipse, #C084FC 0%, transparent 70%)',
                borderRadius: '50% 70% 60% 40%',
              }}
              animate={{
                x: [0, 8, 0],
                y: [0, -6, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-6 left-6 w-6 h-4 opacity-25 blur-sm"
              style={{
                background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)',
                borderRadius: '40% 60% 70% 50%',
              }}
              animate={{
                x: [0, -6, 0],
                y: [0, 4, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
            {/* Mini sparkles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`about-sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${15 + i * 20}%`,
                  left: `${15 + i * 25}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              />
            ))}
          </div>

          {/* Modal Content */}
          <div className="relative z-10 text-white">
            {/* Close button */}
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-lg">×</span>
            </button>

            <motion.h2
              className="text-3xl font-inter font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              About Zaynstudio
            </motion.h2>
            
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-lg font-inter font-semibold mb-4 leading-relaxed">
                Creative ideas. Playful apps. Real impact.
              </div>
              
              <div className="text-purple-100 text-sm leading-relaxed mb-4">
                Zaynstudio is a creative-tech lab building fun and useful digital products for everyday life.
              </div>
              
              <div className="text-purple-200 text-sm">
                We believe innovation should be joyful and make a difference.
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-purple-200 mb-3 font-inter">
                Let's connect!
              </div>
              
              <motion.button
                onClick={handleContactUsClick}
                className="bg-white/15 rounded-lg px-6 py-3 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors font-inter font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact us
              </motion.button>
            </motion.div>
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
                <p className="text-purple-100">ZaynStudio may collect the following types of information through our apps:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Usage data and analytics to improve app performance</li>
                  <li>Device information (OS version, device type) for compatibility</li>
                  <li>Crash reports to fix bugs and improve stability</li>
                  <li>User preferences and settings to enhance your experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">2. How We Use Information</h3>
                <p className="text-purple-100">We use collected information to:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Provide and maintain our app services</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Analyze usage patterns to guide development</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Ensure app security and prevent misuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">3. Information Sharing</h3>
                <p className="text-purple-100">We may share information with:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>App store platforms (Apple App Store, Google Play Store)</li>
                  <li>Analytics providers (anonymized data only)</li>
                  <li>Service providers who assist in app operations</li>
                </ul>
                <p className="text-purple-100 mt-2">We never sell personal information to third parties.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">4. Data Security</h3>
                <p className="text-purple-100">We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">5. Your Rights</h3>
                <p className="text-purple-100">You have the right to:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of data collection where possible</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">6. Contact Us</h3>
                <p className="text-purple-100">For privacy concerns or questions, contact us at:</p>
                <p className="text-white font-semibold">sandy@zaynstudio.app</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">7. Policy Updates</h3>
                <p className="text-purple-100">We may update this Privacy Policy periodically. Changes will be posted in our apps and on our website. Continued use constitutes acceptance of updates.</p>
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
                <p className="text-purple-100">By downloading, installing, or using any ZaynStudio app, you agree to these Terms of Service. If you do not agree, please do not use our apps.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">2. App Usage</h3>
                <p className="text-purple-100">You may use our apps for personal or commercial purposes in accordance with:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>All applicable laws and regulations</li>
                  <li>App store terms and conditions</li>
                  <li>These Terms of Service</li>
                  <li>Any specific app guidelines provided</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">3. Prohibited Uses</h3>
                <p className="text-purple-100">You agree NOT to:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Reverse engineer, decompile, or disassemble our apps</li>
                  <li>Use our apps for illegal activities</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Distribute malware or harmful content</li>
                  <li>Violate intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">4. Intellectual Property</h3>
                <p className="text-purple-100">ZaynStudio retains all rights, title, and interest in our apps, including:</p>
                <ul className="list-disc list-inside mt-2 text-purple-200 space-y-1">
                  <li>Software code and architecture</li>
                  <li>User interface and design elements</li>
                  <li>Trademarks, logos, and branding</li>
                  <li>Content and documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">5. Disclaimer of Warranties</h3>
                <p className="text-purple-100">Our apps are provided "as is" without warranties of any kind. We do not guarantee that our apps will be error-free, secure, or continuously available.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">6. Limitation of Liability</h3>
                <p className="text-purple-100">ZaynStudio shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our apps.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">7. Support</h3>
                <p className="text-purple-100">For technical support or questions, contact us at:</p>
                <p className="text-white font-semibold">sandy@zaynstudio.app</p>
                <p className="text-purple-200 mt-1">We strive to respond within 48 hours.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">8. Termination</h3>
                <p className="text-purple-100">We may terminate or suspend access to our apps immediately, without notice, for conduct that violates these Terms.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">9. Governing Law</h3>
                <p className="text-purple-100">These Terms are governed by applicable laws. Any disputes will be resolved through appropriate legal channels.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">10. Changes to Terms</h3>
                <p className="text-purple-100">We may modify these Terms at any time. Updated terms will be posted in our apps and on our website. Continued use constitutes acceptance.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Apps Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: appsModalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: appsModalOpen ? 'auto' : 'none' }}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setAppsModalOpen(false)}
        />
        
        <motion.div
          className="relative bg-purple-gradient rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-white/20"
          initial={{ scale: 0.8, y: 50 }}
          animate={{
            scale: appsModalOpen ? 1 : 0.8,
            y: appsModalOpen ? 0 : 50,
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
                background: 'radial-gradient(ellipse, #C084FC 0%, transparent 70%)',
                borderRadius: '50% 70% 60% 40%',
              }}
              animate={{
                x: [0, 8, 0],
                y: [0, -6, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-6 left-6 w-6 h-4 opacity-25 blur-sm"
              style={{
                background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)',
                borderRadius: '40% 60% 70% 50%',
              }}
              animate={{
                x: [0, -6, 0],
                y: [0, 4, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
            {/* Mini sparkles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`apps-sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${15 + i * 20}%`,
                  left: `${15 + i * 25}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              />
            ))}
          </div>

          {/* Modal Content */}
          <div className="relative z-10 text-white">
            {/* Close button */}
            <button
              onClick={() => setAppsModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-lg">×</span>
            </button>

            <motion.h2
              className="text-3xl font-inter font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Our Apps
            </motion.h2>
            
            <motion.p
              className="text-purple-200 text-center mb-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Innovative mobile solutions for everyday challenges
            </motion.p>

            {/* ByeSmoke AI App Card */}
            <motion.div
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                {/* App Icon */}
                <div className="w-16 h-16 flex items-center justify-center mr-4">
                  <img
                    src="/byesmokeai-logo.png"
                    alt="ByeSmoke AI Logo"
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-bold text-white">ByeSmoke AI</h3>
                  <p className="text-sm text-purple-200">AI-powered smoking cessation</p>
                </div>
              </div>
              
              <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                Your intelligent companion for quitting smoking. Personalized AI coaching, progress tracking, and support when you need it most.
              </p>
              
              <motion.button
                onClick={() => handleVisitAppPage('byesmokeai')}
                className="w-full bg-white/15 rounded-lg py-3 px-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors font-inter font-medium text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit App Page
              </motion.button>
            </motion.div>

            {/* Coming Soon Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-purple-300 text-sm font-inter">
                📱 More innovative apps coming soon...
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 max-w-6xl w-full">
          {/* Text - Top on mobile, Left on desktop */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-bold text-white mb-4 md:mb-6"
              style={{ filter: 'blur(0.8px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ZaynStudio
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-inter text-purple-200"
              style={{ filter: 'blur(0.5px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Apps that reshape reality.
            </motion.p>
          </div>

          {/* Logo - Top on mobile, Right on desktop */}
          <motion.div
            className="flex-shrink-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
                filter: [
                  'drop-shadow(0 0 5px rgba(124, 58, 237, 0.4)) drop-shadow(0 0 10px rgba(192, 132, 252, 0.2))',
                  'drop-shadow(0 0 8px rgba(124, 58, 237, 0.6)) drop-shadow(0 0 15px rgba(192, 132, 252, 0.4))',
                  'drop-shadow(0 0 5px rgba(124, 58, 237, 0.4)) drop-shadow(0 0 10px rgba(192, 132, 252, 0.2))'
                ],
                scale: [1, 1.005, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/logo.png"
                alt="Zayn Studio Logo"
                width={700}
                height={700}
                className="object-contain w-[500px] h-[500px] sm:w-[550px] sm:h-[550px] md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 text-center z-20">
        <div className="flex flex-col items-center space-y-2">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center space-x-2 text-purple-300 text-xs font-inter">
            <button 
              onClick={handlePrivacyClick}
              className="hover:text-purple-200 transition-colors cursor-pointer px-1 py-1"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button 
              onClick={handleTermsClick}
              className="hover:text-purple-200 transition-colors cursor-pointer px-1 py-1"
            >
              Terms of Service
            </button>
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
        </div>
      </footer>
    </div>
  );
}