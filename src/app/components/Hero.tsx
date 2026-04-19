import { motion } from 'motion/react';
import { Mail, ExternalLink, Phone, Download, X } from 'lucide-react';
import imgSaloni1 from 'figma:asset/a28d5378dac1b1cec720ae6d4d81bd74a0dcbaa0.png';
import svgPaths from '@/imports/svg-uwvnmnjxsx';
import { useState, useEffect } from 'react';

// Decorative background element
function DecorativeBackground() {
  return (
    <div className="absolute right-0 top-0 w-[760px] h-[900px] opacity-5 pointer-events-none overflow-hidden">
      <div 
        className="absolute left-[100px] top-[-200px] rotate-[-12deg]" 
        style={{ width: '604px', height: '790px' }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419.513 698.855">
          <g>
            <path d={svgPaths.p1f38a00} fill="#004F57" />
            <path d={svgPaths.p3c5a2b00} fill="#F3FEFF" />
            <path d={svgPaths.p1fc2d500} fill="#F3FEFF" />
            <path d={svgPaths.p3b2b9180} fill="#F3FEFF" />
            <path d={svgPaths.p32182d00} fill="#F3FEFF" />
            <path d={svgPaths.p22c13c00} fill="#F3FEFF" />
            <path d={svgPaths.p2f39f80} fill="#F3FEFF" />
            <path d={svgPaths.p2ef18f00} fill="#DDFFF8" />
            <path d={svgPaths.p5ee9e90} fill="#DDFFF8" />
            <path d={svgPaths.p165ab280} fill="#DDFFF8" />
            <path d={svgPaths.p18e0a1f1} fill="#F3FEFF" />
            <path d={svgPaths.p3298c200} fill="#F3FEFF" />
            <path d={svgPaths.p2a9c700} fill="#DDFFF8" />
            <path d={svgPaths.p2a3f3c00} fill="#F3FEFF" />
            <path d={svgPaths.p26977500} fill="#F3FEFF" />
            <path d={svgPaths.pc59ed80} fill="#F3FEFF" />
            <path d={svgPaths.p32734580} fill="#F3FEFF" />
            <path d={svgPaths.p854e00} fill="#F3FEFF" />
            <path d={svgPaths.pa6eb400} fill="#F3FEFF" />
            <path d={svgPaths.p34ecfb00} fill="#F3FEFF" />
            <path d={svgPaths.p381ee400} fill="#F3FEFF" />
            <path d={svgPaths.pd1a7780} fill="#F3FEFF" />
            <path d={svgPaths.p2291db00} fill="#BEBFC2" />
            <path d={svgPaths.pef0f800} fill="#BEBFC2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Hero() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  
  // Name animation in multiple languages
  const names = ['Saloni', 'सलोनी', 'સલોની', 'ಸಲೋನಿ', 'สาโลนี', 'سالوني'];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(157.555deg, rgb(245, 243, 255) 5.3457%, rgb(255, 255, 255) 50%, rgb(236, 254, 255) 94.654%)',
        height: 'clamp(950px, 120vh, 85vh)',
        minHeight: '950px'
      }}
    >
      {/* Decorative Background */}
      <DecorativeBackground />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-[20px] items-center">
          
          {/* Profile Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div 
              className="relative overflow-hidden rounded-full lg:rounded-lg"
              style={{
                width: 'clamp(150px, 40vw, 350px)',
                height: 'clamp(150px, 40vw, 420px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src={imgSaloni1} 
                alt="Saloni"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-[700px] order-2 lg:order-1"
          >
            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Playfair_Display',serif] font-bold lg:text-left text-left"
              style={{
                fontSize: 'clamp(1.5rem, 3.75vw, 2.8rem)',
                lineHeight: '1.375',
                letterSpacing: '0.026em',
                color: '#1a1a1a'
              }}
            >
              Hi, I am{' '}
              <span className="inline-block" style={{ minWidth: '100px', lineHeight: '1.3', paddingTop: '0.2em', paddingBottom: '0.2em' }}>
                <motion.span
                  key={currentNameIndex}
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                  style={{
                    transformOrigin: 'center center',
                    background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {names[currentNameIndex]}
                </motion.span>
              </span>
              <span className="inline-block ml-2 lg:hidden">👋</span>
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Playfair_Display',serif] font-bold lg:text-left text-left"
              style={{
                fontSize: 'clamp(2.25rem, 5.6vw, 4.2rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.01em',
                color: '#1a1a1a'
              }}
            >
              I believe the obvious problem is rarely the actual problem.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-normal lg:text-left text-left"
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.6',
                letterSpacing: '0.01em',
                color: '#525252'
              }}
            >
              12 years of finding what's actually broken — across insurtech, fintech, and commerce. The metrics follow.
            </motion.p>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
              style={{
                fontSize: '1rem',
                lineHeight: '1.625',
                letterSpacing: '-0.04em',
                color: '#525252'
              }}
            >
            </motion.div>

            {/* Contact Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 flex-wrap pt-2 justify-center lg:justify-start"
            >
              {/* Email */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 transition-colors cursor-pointer font-bold"
                  style={{
                    fontSize: '0.875rem',
                    color: '#525252',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}
                  onClick={() => setShowEmailPopup(!showEmailPopup)}
                >
                  <Mail size={16} strokeWidth={1.5} />
                  <span>Email</span>
                </button>
                {showEmailPopup && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap z-50">
                    <button
                      className="absolute -top-1 -right-1 rounded-full p-1 cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                      onClick={() => setShowEmailPopup(false)}
                    >
                      <X size={12} />
                    </button>
                    <p style={{ fontSize: '0.875rem', color: '#525252' }}>saloninm2007@gmail.com</p>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 transition-colors cursor-pointer font-bold"
                  style={{
                    fontSize: '0.875rem',
                    color: '#525252',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}
                  onClick={() => setShowPhonePopup(!showPhonePopup)}
                >
                  <Phone size={16} strokeWidth={1.5} />
                  <span>Phone</span>
                </button>
                {showPhonePopup && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap z-50">
                    <button
                      className="absolute -top-1 -right-1 rounded-full p-1 cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                      onClick={() => setShowPhonePopup(false)}
                    >
                      <X size={12} />
                    </button>
                    <p style={{ fontSize: '0.875rem', color: '#525252' }}>+91 91 36 19 71 39</p>
                  </div>
                )}
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saloninm2007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors cursor-pointer font-bold"
                style={{
                  fontSize: '0.875rem',
                  color: '#525252',
                  letterSpacing: '-0.01em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}
              >
                <ExternalLink size={16} strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1Wpn6nLEb5FWE9uGP-du6iz1RUzu2ZC8R/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors cursor-pointer font-bold"
                style={{
                  fontSize: '0.875rem',
                  color: '#525252',
                  letterSpacing: '-0.01em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}
              >
                <Download size={16} strokeWidth={1.5} />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar - Positioned at bottom edge, slightly cut off */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 w-full px-6 md:px-12 lg:px-20"
        style={{
          transform: 'translateY(-10%)'
        }}
      >
        <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-4 font-light" style={{
          fontSize: '20px',
          lineHeight: '1.1',
          color: '#525252',
          letterSpacing: '0.7855px'
        }}>
          <div className="flex flex-col items-center md:items-start opacity-[0.24]">
            <p className="mb-0 text-[20px] md:text-[24px]">5+</p>
            <p className="mb-0 text-[14px] md:text-[20px]">Domains</p>
          </div>
          <div className="flex flex-col items-center md:items-start opacity-[0.24]">
            <p className="mb-0 text-[20px] md:text-[24px]">20+</p>
            <p className="mb-0 text-[14px] md:text-[20px]">Products shipped</p>
          </div>
          <div className="flex flex-col items-center md:items-start opacity-[0.24]">
            <p className="mb-0 text-[20px] md:text-[24px]">15+</p>
            <p className="mb-0 text-[14px] md:text-[20px]">Designers Mentored</p>
          </div>
          <div className="flex flex-col items-center md:items-start opacity-[0.24]">
            <p className="mb-0 text-[20px] md:text-[24px]">11+</p>
            <p className="mb-0 text-[14px] md:text-[20px]">Years of experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}