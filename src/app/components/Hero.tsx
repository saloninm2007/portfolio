import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, ArrowUpRight, Award, Briefcase, Layers, Clock, Users, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { openContact } from './ContactModal';
import type React from 'react';

const INK = '#1C0F1F';
const CREAM = '#F3F0EA';
const MUTED = '#5B4E5E';

const DISPLAY = "'Inter Tight', 'Inter Display', 'Inter', sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const SERIF = "'Instrument Serif', 'Playfair Display', Georgia, serif";

// Credentials that scroll in the strip at the bottom of the hero
const CREDENTIALS = [
  { icon: Clock, text: '12 years in product design' },
  { icon: Award, text: 'HFI Certified · CUA' },
  { icon: Award, text: 'HFI Certified · CXA' },
  { icon: Briefcase, text: 'Nykaa' },
  { icon: Briefcase, text: 'Fynd' },
  { icon: Briefcase, text: 'CoverSure' },
  { icon: Layers, text: 'SaaS · Fintech · Insurtech · Commerce' },
  { icon: Rocket, text: '20+ products shipped' },
  { icon: Users, text: '15+ designers mentored' },
];

// Real outcomes from the case studies, flipping one at a time
const OUTCOMES = [
  { stat: '0 → 1', text: "Nykaa's B2B retail experience", caseStudy: 'Nykaa' },
  { stat: '~34%', text: "Day-1 activation on CoverSure's new homepage", caseStudy: 'CoverSure' },
  { stat: '~30%', text: 'more first policies added at CoverSure', caseStudy: 'CoverSure' },
  { stat: '~12%', text: 'fewer early app uninstalls at CoverSure', caseStudy: 'CoverSure' },
  { stat: '100,000+', text: 'retailers given clearer pricing at Nykaa', caseStudy: 'Nykaa' },
  { stat: '~2%', text: 'uplift in weekend orders at Nykaa', caseStudy: 'Nykaa' },
  { stat: 'AI', text: 'analytics turned into confident decisions at Fynd', section: 'experience' },
];

// Opens the matching case study (handled in ProjectStackingScroll) or scrolls to a section
function openOutcome(o: (typeof OUTCOMES)[0]) {
  if (o.caseStudy) window.dispatchEvent(new CustomEvent('open-case-study', { detail: o.caseStudy }));
  else if (o.section) document.getElementById(o.section)?.scrollIntoView({ behavior: 'smooth' });
}

function OutcomeTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % OUTCOMES.length), 2800);
    return () => clearInterval(id);
  }, []);
  const o = OUTCOMES[i];
  return (
    <div className="flex flex-col items-center gap-3">
      <span style={{ fontFamily: MONO, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED }}>
        What changed
      </span>
      <div className="relative overflow-hidden" style={{ height: '2.6rem', minWidth: 'min(90vw, 40rem)', perspective: 600 }}>
        <AnimatePresence mode="wait">
          <motion.button
            key={i}
            onClick={() => openOutcome(o)}
            initial={{ y: '100%', opacity: 0, rotateX: -70 }}
            animate={{ y: '0%', opacity: 1, rotateX: 0 }}
            exit={{ y: '-100%', opacity: 0, rotateX: 70 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group absolute inset-0 flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
            aria-label={`${o.stat} ${o.text}, open`}
          >
            <span style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)', letterSpacing: '-0.04em', color: '#6B3FA0' }}>
              {o.stat}
            </span>
            <span
              className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-[#6B3FA0]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: INK }}
            >
              {o.text}
            </span>
            <ArrowUpRight size={16} strokeWidth={1.75} className="opacity-40 transition-all group-hover:opacity-100 group-hover:rotate-45" style={{ color: INK }} />
          </motion.button>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Name in different scripts, used as a soft background watermark
const SCRIPTS: { text: string; lang: string; font: string }[] = [
  { text: 'Saloni', lang: 'en', font: SERIF },
  { text: 'सलोनी', lang: 'hi', font: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif" },
  { text: 'સલોની', lang: 'gu', font: "'Noto Serif Gujarati', serif" },
  { text: 'ಸಲೋನಿ', lang: 'kn', font: "'Noto Serif Kannada', serif" },
  { text: 'سالوني', lang: 'ar', font: "'Noto Naskh Arabic', serif" },
  { text: 'สาโลนี', lang: 'th', font: "'Noto Serif Thai', serif" },
];

const FILL = 'rgba(28,15,31,0.045)';
const STROKE = '1px rgba(28,15,31,0.12)';

type Variant = 'clean' | 'top' | 'ribbon' | 'specimen' | 'echo' | 'grid';
const VARIANTS: { id: Variant; label: string }[] = [
  { id: 'clean', label: 'Clean' },
  { id: 'top', label: 'Top' },
  { id: 'ribbon', label: 'Ribbon' },
  { id: 'specimen', label: 'Specimen' },
  { id: 'echo', label: 'Echo' },
  { id: 'grid', label: 'Grid' },
];

function Word({ s, size, outline, style }: { s: (typeof SCRIPTS)[0]; size: string; outline?: boolean; style?: React.CSSProperties }) {
  return (
    <span
      lang={s.lang}
      className="whitespace-nowrap"
      style={{
        fontFamily: s.font,
        fontStyle: s.lang === 'en' ? 'italic' : undefined,
        fontSize: size,
        lineHeight: 1,
        color: outline ? 'transparent' : FILL,
        WebkitTextStroke: outline ? STROKE : undefined,
        ...style,
      }}
    >
      {s.text}
    </span>
  );
}

// Fine film grain, generated as an SVG noise tile
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11 0 0 0 0 0.06 0 0 0 0 0.12 0 0 0 2 -1.15'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

function NameWatermark({ variant }: { variant: Variant }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <div
        className="absolute"
        style={{ left: '50%', top: '45%', width: '70vw', height: '50vw', transform: 'translate(-50%, -50%)', background: 'radial-gradient(closest-side, rgba(185,164,232,0.2), rgba(185,164,232,0) 70%)' }}
      />

      {/* E, names along the very top edge, with a soft blur band through the middle */}
      {variant === 'top' && (
        <>
          <div className="absolute left-0 right-0 flex items-start gap-[3.5vw]" style={{ top: '-2.2vw', transform: 'translateX(-5vw)' }}>
            {[...SCRIPTS, ...SCRIPTS.slice(0, 2)].map((s, i) => (
              <Word key={i} s={s} size="12.5vw" outline={i % 2 === 1} style={i % 2 === 0 ? { color: 'rgba(28,15,31,0.07)' } : { WebkitTextStroke: '1px rgba(28,15,31,0.18)' }} />
            ))}
          </div>
          <div
            className="absolute"
            style={{
              top: 0,
              left: '22%',
              width: '56%',
              height: '17vw',
              backdropFilter: 'blur(9px)',
              WebkitBackdropFilter: 'blur(9px)',
              maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent), linear-gradient(to bottom, black 55%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
              maskComposite: 'intersect',
            }}
          />
        </>
      )}

      {/* A, one giant band of all six names running across the lower half */}
      {variant === 'ribbon' && (
        <div className="absolute left-0 right-0 flex items-center gap-[4vw]" style={{ top: '4.5vw', transform: 'translateX(-6vw) rotate(-3deg)' }}>
          {[...SCRIPTS, ...SCRIPTS].map((s, i) => (
            <Word key={i} s={s} size="11vw" outline={i % 2 === 1} />
          ))}
        </div>
      )}

      {/* B, a type-specimen stack on the right, sizes stepping down */}
      {variant === 'specimen' && (
        <div className="absolute flex flex-col items-end" style={{ right: '-1vw', top: '50%', transform: 'translateY(-46%)', gap: '0.6vw' }}>
          {SCRIPTS.map((s, i) => (
            <Word key={s.lang} s={s} size={`${15 - i * 1.9}vw`} outline={i % 2 === 0} />
          ))}
        </div>
      )}

      {/* C, one huge name behind the headline with an outlined echo */}
      {variant === 'echo' && (
        <>
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '6vh' }}>
            <Word s={SCRIPTS[1]} size="34vw" style={{ color: 'rgba(28,15,31,0.035)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '6vh', transform: 'translate(5vw, 5vw)' }}>
            <Word s={SCRIPTS[0]} size="22vw" outline />
          </div>
        </>
      )}

      {/* D, a loose 3×2 grid of names around the edges, centre left clear */}
      {variant === 'grid' && (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
          {SCRIPTS.map((s, i) => (
            <div
              key={s.lang}
              className="flex"
              style={{
                alignItems: i < 3 ? 'flex-start' : 'flex-end',
                justifyContent: i % 3 === 0 ? 'flex-start' : i % 3 === 2 ? 'flex-end' : 'center',
                padding: i < 3 ? '13vh 3vw 0' : '0 3vw 12vh',
                opacity: i % 3 === 1 ? 0.6 : 1,
              }}
            >
              <Word s={s} size={i % 3 === 1 ? '7vw' : '10vw'} outline={(i + Math.floor(i / 3)) % 2 === 0} />
            </div>
          ))}
        </div>
      )}

      {/* grain over the whole first fold */}
      <div className="absolute inset-0" style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px', opacity: 0.3 }} />
    </div>
  );
}

// Temporary picker so the background options can be compared on the page
function VariantSwitcher({ value, onChange }: { value: Variant; onChange: (v: Variant) => void }) {
  return (
    <div
      className="fixed z-50 bottom-5 right-5 flex items-center gap-1 rounded-full p-1.5 backdrop-blur-md"
      style={{ background: 'rgba(28,15,31,0.85)', fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
    >
      <span className="px-2.5" style={{ color: 'rgba(243,240,234,0.6)' }}>Background</span>
      {VARIANTS.map((v) => (
        <button
          key={v.id}
          onClick={() => onChange(v.id)}
          className="rounded-full px-3 py-1.5 cursor-pointer"
          style={{ background: value === v.id ? CREAM : 'transparent', color: value === v.id ? INK : CREAM }}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

function CredentialMarquee() {
  // The list is rendered twice so the loop is seamless
  const items = [...CREDENTIALS, ...CREDENTIALS];
  return (
    <div
      className="hero-marquee relative w-full overflow-hidden border-y"
      style={{ borderColor: 'rgba(28,15,31,0.15)' }}
      aria-label="Credentials"
    >
      <style>{`
        @keyframes hero-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hero-marquee-track { animation: hero-marquee-scroll 40s linear infinite; }
        .hero-marquee:hover .hero-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .hero-marquee-track { animation: none; } }
      `}</style>
      <div className="hero-marquee-track flex w-max items-center py-4">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center" aria-hidden={i >= CREDENTIALS.length}>
            <span className="flex items-center gap-2.5 px-6 whitespace-nowrap" style={{ color: INK }}>
              <Icon size={18} strokeWidth={1.5} />
              <span style={{ fontFamily: MONO, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {text}
              </span>
            </span>
            <span style={{ color: 'rgba(28,15,31,0.35)', fontSize: '0.9rem' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {

  const [variant, setVariant] = useState<Variant>(() => {
    const h = typeof window !== 'undefined' ? window.location.hash.replace('#bg-', '') : '';
    return (VARIANTS.find((v) => v.id === h)?.id ?? 'ribbon') as Variant;
  });
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden"
      style={{ background: CREAM, color: INK, minHeight: 'calc(100vh - 16px)' }}
    >
      <NameWatermark variant={variant} />
      <VariantSwitcher value={variant} onChange={setVariant} />
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-32 pb-16">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-full border px-4 py-1.5 mb-8"
            style={{ borderColor: INK, fontSize: '0.72rem', fontFamily: MONO, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Saloni Mehta · Behaviour-led product design
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: 'clamp(2.75rem, 7.2vw, 6.75rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.045em',
            }}
          >
            I design for how<br />
            people{' '}
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>
              actually
            </span>{' '}
            behave.
          </motion.h1>

          {/* Divider + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col items-center"
          >
            <span className="block mt-8 mb-6 h-px w-12" style={{ background: INK }} />
            <OutcomeTicker />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { label: 'See the work', icon: ArrowDown, target: 'work', dark: true },
              { label: "Let's talk", icon: ArrowRight, target: 'contact-modal', dark: false },
            ].map(({ label, icon: Icon, target, dark }) => (
              <button
                key={label}
                onClick={() => (target === 'contact-modal' ? openContact('hero') : scrollTo(target))}
                className="group flex items-center cursor-pointer"
                style={{ fontFamily: MONO, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                <span
                  className="rounded-full px-6 py-3.5 border transition-colors"
                  style={{ background: dark ? INK : 'transparent', color: dark ? CREAM : INK, borderColor: INK }}
                >
                  {label}
                </span>
                <span
                  className="-ml-px flex items-center justify-center rounded-full border w-[46px] h-[46px] transition-transform group-hover:rotate-[-45deg]"
                  style={{ background: dark ? INK : 'transparent', color: dark ? CREAM : INK, borderColor: INK }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </span>
              </button>
            ))}
            <a
              href="/Saloni_Mehta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-3 underline underline-offset-4"
              style={{ color: INK, fontFamily: MONO, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Credentials strip */}
      <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
        <CredentialMarquee />
      </motion.div>
    </section>
  );
}
