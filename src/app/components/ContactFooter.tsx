import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Download, Copy, Check, Briefcase } from 'lucide-react';
import { useState } from 'react';
import type React from 'react';
import { CREAM, DISPLAY, SERIF, MONO } from './tokens';
import { openContact } from './ContactModal';
import { CONSULTING_ENABLED } from '../config';

const BG = '#1C0F1F';
const EMAIL = 'saloninm2007@gmail.com';
const LINE = 'rgba(243,240,234,0.16)';

// Real URL on the live site; falls back to #hire-me where paths can't be used (previews)
function goHireMe(e: React.MouseEvent) {
  if (!/mehtasaloni\.in$/.test(window.location.hostname) && window.location.hostname !== 'localhost') {
    e.preventDefault();
    window.location.hash = 'hire-me';
  }
}

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable, the address is visible to copy by hand */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 md:px-10 pt-20 md:pt-28 pb-10" style={{ background: BG, color: CREAM }}>
      <div className="max-w-7xl mx-auto">
        {/* Top: pill + big line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span
            className="inline-block rounded-full border px-4 py-1.5 mb-8"
            style={{ borderColor: CREAM, fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Contact
          </span>
          <h2 style={{ color: CREAM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.8rem, 7.5vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.055em' }}>
            Have a problem that
            <br />
            needs <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>reframing?</span>
          </h2>
          <p className="mt-7 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(243,240,234,0.65)' }}>
            Good design starts with understanding the right problem to solve. I'm open to conversations about design, product strategy and collaboration.
          </p>
        </motion.div>

        {/* Circles CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-14 md:mt-16 flex items-center justify-center"
        >
          <div
            className="rounded-full flex items-center justify-center text-center"
            style={{ width: 'clamp(150px, 18vw, 220px)', height: 'clamp(150px, 18vw, 220px)', background: CREAM, color: BG }}
          >
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', lineHeight: 1.1 }}>
              Let's
              <br />
              talk
            </span>
          </div>
          <button
            type="button"
            onClick={() => openContact('contact-section')}
            className="group cursor-pointer -ml-6 md:-ml-8 rounded-full border border-[#F3F0EA] text-[#F3F0EA] flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#B9A4E8] hover:border-[#B9A4E8] hover:text-[#1C0F1F] hover:translate-x-2"
            style={{ width: 'clamp(150px, 18vw, 220px)', height: 'clamp(150px, 18vw, 220px)' }}
          >
            <span style={{ fontFamily: MONO, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact me</span>
            <ArrowUpRight size={22} strokeWidth={1.5} className="mt-2 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </motion.div>

        {/* Email + links row */}
        <div className="mt-16 md:mt-20 border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ borderColor: LINE }}>
          <button onClick={copyEmail} className="group flex items-center gap-3 text-left cursor-pointer">
            <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)', letterSpacing: '-0.02em' }}>{EMAIL}</span>
            <span
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 transition-colors group-hover:bg-[#F3F0EA] group-hover:text-[#1C0F1F]"
              style={{ borderColor: LINE, fontFamily: MONO, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Copy'}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            {CONSULTING_ENABLED && (
            <a
              href="/hire-me"
              onClick={goHireMe}
              className="flex items-center gap-2 rounded-full px-5 py-3 transition-colors duration-300 bg-[#F3F0EA] text-[#1C0F1F] hover:bg-[#B9A4E8]"
              style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              <Briefcase size={15} strokeWidth={1.6} />
              Get users to the ‘aha’
            </a>
            )}
            {[
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/saloninm2007/' },
              { icon: Download, label: 'Resume', href: '/Saloni_Mehta_Resume.pdf' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border px-5 py-3 transition-colors duration-300 hover:bg-[#F3F0EA] hover:text-[#1C0F1F]"
                style={{ borderColor: LINE, fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                <Icon size={15} strokeWidth={1.6} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div
          className="mt-10 flex flex-col md:flex-row md:justify-between gap-2"
          style={{ fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(243,240,234,0.45)' }}
        >
          <span>
            © {new Date().getFullYear()} Saloni Mehta
            {CONSULTING_ENABLED && (
              <>
                {' · '}
                <a href="/hire-me" onClick={goHireMe} className="underline underline-offset-4 hover:text-[#F3F0EA]">
                  Get users to the ‘aha’
                </a>
              </>
            )}
          </span>
          <span>Mumbai, India · IST (UTC+5:30)</span>
        </div>
      </div>
    </section>
  );
}
