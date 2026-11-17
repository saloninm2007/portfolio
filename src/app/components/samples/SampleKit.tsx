// Shared building blocks for the sample deliverables
import type { ReactNode, CSSProperties } from 'react';
import { INK, CREAM, CARD, MUTED, DISPLAY, SERIF, MONO, cardShadow } from '../tokens';

export const PRODUCT = 'Plumwise';

export const mono: CSSProperties = { fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED };

export function SampleBanner() {
  return (
    <div
      className="rounded-full px-4 py-2 inline-flex items-center gap-2"
      style={{ background: '#EDE6F7', color: '#4B2D78', fontFamily: MONO, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#6B3FA0' }} />
      Sample deliverable · {PRODUCT} is a fictional product · figures are illustrative
    </div>
  );
}

export function Block({ children, className = '', dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-[24px] p-6 md:p-8 [&_p]:text-inherit [&_h3]:text-inherit ${className}`}
      style={{ background: dark ? INK : CARD, color: dark ? CREAM : INK, boxShadow: cardShadow }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ n, title, accent }: { n: string; title: string; accent?: string }) {
  return (
    <div className="flex items-baseline gap-4 mt-16 mb-6 px-1">
      <span style={{ ...mono, color: INK }}>{n}</span>
      <h2 style={{ color: INK, fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)', lineHeight: 1, letterSpacing: '-0.045em' }}>
        {title} {accent && <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>{accent}</span>}
      </h2>
    </div>
  );
}

export function Stat({ value, label, tone = INK }: { value: string; label: string; tone?: string }) {
  return (
    <div className="border-l pl-4" style={{ borderColor: 'rgba(28,15,31,0.2)' }}>
      <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', letterSpacing: '-0.05em', lineHeight: 1, color: tone }}>{value}</div>
      <div className="mt-2" style={{ ...mono, fontSize: '0.62rem', lineHeight: 1.45 }}>{label}</div>
    </div>
  );
}

export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'high' | 'med' | 'low' | 'neutral' | 'good' }) {
  const map = {
    high: ['#FBE4E1', '#9B2C1E'],
    med: ['#FBF0D9', '#8A5A00'],
    low: ['#E6F0FB', '#1F4E8A'],
    good: ['#E2F3E5', '#1E6B34'],
    neutral: ['#EEEAE3', MUTED],
  } as const;
  const [bg, fg] = map[tone];
  return (
    <span className="inline-block rounded-full px-2.5 py-1" style={{ background: bg, color: fg, fontFamily: MONO, fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      {children}
    </span>
  );
}

export function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={className} style={{ color: MUTED, lineHeight: 1.6, fontSize: '0.98rem' }}>
      {children}
    </p>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 style={{ color: 'inherit', fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>{children}</h3>;
}

// A simple phone frame with wireframe blocks, used for before/after flows
export function Phone({ title, children, accent = false }: { title: string; children: ReactNode; accent?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-[150px] h-[300px] rounded-[26px] p-2.5 flex flex-col"
        style={{ background: accent ? INK : '#2B2230', boxShadow: '0 18px 40px -22px rgba(28,15,31,0.5)' }}
      >
        <div className="flex-1 rounded-[19px] p-3 flex flex-col gap-2 overflow-hidden" style={{ background: CREAM }}>
          {children}
        </div>
      </div>
      <span style={{ ...mono, color: INK, textAlign: 'center', maxWidth: 150 }}>{title}</span>
    </div>
  );
}

export const Bar = ({ w = '100%', h = 8, c = 'rgba(28,15,31,0.12)' }: { w?: string; h?: number; c?: string }) => (
  <div style={{ width: w, height: h, borderRadius: 999, background: c }} />
);

export const Btn = ({ label, dark = true }: { label: string; dark?: boolean }) => (
  <div
    className="rounded-full text-center py-1.5"
    style={{ background: dark ? INK : 'transparent', border: dark ? 'none' : `1px solid ${INK}`, color: dark ? CREAM : INK, fontSize: '0.58rem', fontWeight: 600 }}
  >
    {label}
  </div>
);

export const Field = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1">
    <span style={{ fontSize: '0.5rem', color: MUTED }}>{label}</span>
    <div className="h-5 rounded-md" style={{ background: 'white', border: '1px solid rgba(28,15,31,0.12)' }} />
  </div>
);
