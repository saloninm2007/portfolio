import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { DISPLAY, SERIF, MONO, MUTED } from './tokens';

// Shared section header: outlined pill, big headline with an italic accent, and a mono side note
export function SectionHeader({
  pill,
  title,
  accent,
  note,
  dark = false,
}: {
  pill: string;
  title: string;
  accent: string;
  note?: ReactNode;
  dark?: boolean;
}) {
  const fg = dark ? '#F3F0EA' : '#1C0F1F';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14 px-2"
    >
      <div>
        <span
          className="inline-block rounded-full border px-4 py-1.5 mb-6"
          style={{ borderColor: fg, color: fg, fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          {pill}
        </span>
        <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.05em', color: fg }}>
          {title} <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>{accent}</span>
        </h2>
      </div>
      {note && (
        <p
          className="md:max-w-xs md:text-right"
          style={{ fontFamily: MONO, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6, color: dark ? 'rgba(243,240,234,0.6)' : MUTED }}
        >
          {note}
        </p>
      )}
    </motion.div>
  );
}
