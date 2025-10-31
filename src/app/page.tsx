'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
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
                Let&apos;s connect!
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
          className="relative bg-purple-gradient rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-2xl border border-white/20 max-h-[85vh] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: appsModalOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Same background effects as main page */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
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
              className="text-3xl font-inter font-bold mb-2 text-center"
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

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ByeSmoke AI App Card */}
              <motion.div
                className="bg-white/10 rounded-lg p-5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleVisitAppPage('byesmokeai')}
              >
                <div className="flex items-start gap-4 mb-3">
                  {/* App Icon */}
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src="/byesmokeai-logo.png"
                      alt="ByeSmoke AI Logo"
                      className="w-14 h-14 rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-inter font-bold text-white mb-1">ByeSmoke AI</h3>
                    <p className="text-xs text-purple-200">AI-powered smoking cessation</p>
                  </div>
                </div>

                <p className="text-purple-100 text-sm leading-relaxed">
                  Your intelligent companion for quitting smoking. Personalized AI motivation, progress tracking, and support when you need it most.
                </p>
              </motion.div>

              {/* Coming Soon Placeholder Cards */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`placeholder-${i}`}
                  className="bg-white/5 rounded-lg p-5 backdrop-blur-sm border border-white/10 border-dashed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i + 1) * 0.05 }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-14 h-14 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-inter font-bold text-white/40 mb-1">Coming Soon</h3>
                      <p className="text-xs text-purple-300/40">More apps in development</p>
                    </div>
                  </div>

                  <p className="text-purple-200/40 text-sm leading-relaxed">
                    We&apos;re working on exciting new apps to help you with everyday challenges.
                  </p>
                </motion.div>
              ))}
            </div>
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
        </div>
      </footer>
    </div>
  );
}