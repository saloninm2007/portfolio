import { motion } from 'motion/react';
import { Mail, ExternalLink, Phone, Download, X, Quote } from 'lucide-react';
import { useState } from 'react';
import svgPaths from '@/imports/svg-uwvnmnjxsx';

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

export function ContactFooter() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ 
        background: 'linear-gradient(157.555deg, rgb(245, 243, 255) 5.3457%, rgb(255, 255, 255) 50%, rgb(236, 254, 255) 94.654%)'
      }}
    >
      {/* Decorative Background */}
      <DecorativeBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <div className="mb-8">
            <h2 className="font-['Playfair_Display',serif]" style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-tight)',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto"></div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-100 to-cyan-100 flex items-center justify-center">
                <Quote size={28} style={{ color: '#6366f1' }} strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p 
                className="font-['Playfair_Display',serif] italic"
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}
              >
                I believe good design starts with understanding the right problem to solve. By balancing user needs, technical constraints, and business context and by guiding teams through that clarity.
              </p>
              <p 
                className="font-['Playfair_Display',serif] italic"
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}
              >
                I focus on creating experiences that scale.
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Contact Links */}
          <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
            {/* Email */}
            <div className="relative">
              <button
                className="flex flex-col items-center gap-2 transition-all cursor-pointer group"
                onClick={() => setShowEmailPopup(!showEmailPopup)}
              >
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-200 transition-all">
                  <Mail size={24} style={{ color: '#525252' }} strokeWidth={1.5} />
                </div>
                <span style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-secondary)'
                }}>
                  Email
                </span>
              </button>
              {showEmailPopup && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap z-50">
                  <button
                    className="absolute -top-1 -right-1 rounded-full p-1 cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                    onClick={() => setShowEmailPopup(false)}
                  >
                    <X size={12} />
                  </button>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: '#525252' }}>saloninm2007@gmail.com</p>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <button
                className="flex flex-col items-center gap-2 transition-all cursor-pointer group"
                onClick={() => setShowPhonePopup(!showPhonePopup)}
              >
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-200 transition-all">
                  <Phone size={24} style={{ color: '#525252' }} strokeWidth={1.5} />
                </div>
                <span style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--text-secondary)'
                }}>
                  Phone
                </span>
              </button>
              {showPhonePopup && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap z-50">
                  <button
                    className="absolute -top-1 -right-1 rounded-full p-1 cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                    onClick={() => setShowPhonePopup(false)}
                  >
                    <X size={12} />
                  </button>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: '#525252' }}>+91 91 36 19 71 39</p>
                </div>
              )}
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saloninm2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-200 transition-all">
                <ExternalLink size={24} style={{ color: '#525252' }} strokeWidth={1.5} />
              </div>
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-secondary)'
              }}>
                LinkedIn
              </span>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1Wpn6nLEb5FWE9uGP-du6iz1RUzu2ZC8R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-200 transition-all">
                <Download size={24} style={{ color: '#525252' }} strokeWidth={1.5} />
              </div>
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-secondary)'
              }}>
                Resume
              </span>
            </a>
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--text-tertiary)',
            marginTop: '2rem'
          }}>
            Open to conversations about design, product strategy, and collaboration
          </p>
        </motion.div>
      </div>
    </section>
  );
}