import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft, Check, Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import type React from 'react';
import { INK, CREAM, CARD, MUTED, DISPLAY, SERIF, MONO, cardShadow } from './tokens';
import { openContact } from './ContactModal';
import { SampleViewer, type SampleId } from './samples/SampleViewer';

const OFFERS = [
  {
    name: 'Behaviour audit',
    sample: 'sample-audit' as SampleId,
    line: 'Find where, and why, users hesitate or drop off.',
    duration: '2 weeks',
    price: 'From $2,500',
    includes: [
      'Review of your key flows, funnels and session data',
      'Behavioural and heuristic analysis of the friction points',
      'Prioritised fixes, ranked by impact and effort',
      'Walkthrough call with your team',
    ],
  },
  {
    name: 'Flow redesign',
    sample: 'sample-flow' as SampleId,
    line: 'Rebuild one critical journey end-to-end: onboarding, checkout, KYC or pricing.',
    duration: '4–6 weeks',
    price: 'From $5,000',
    featured: true,
    includes: [
      'Problem framing with your team and data',
      'User research or usability testing where it matters',
      'Flows, interaction design and high-fidelity screens',
      'Dev-ready handoff and a check-in after launch',
    ],
  },
  {
    name: 'Design partner',
    sample: 'sample-partner' as SampleId,
    line: 'Senior product design on an ongoing basis, without hiring.',
    duration: 'Monthly',
    price: "Let's scope",
    includes: [
      'A fixed number of focused hours each month',
      'Design reviews, critiques and decisions',
      'Hands-on work on your highest-priority problems',
      'Async-friendly, with weekly overlap calls',
    ],
  },
];

const STEPS = [
  { title: 'Intro call', text: '30 minutes to understand the problem, your users and what success looks like.' },
  { title: 'Scope & proposal', text: 'A clear, fixed-price proposal within 48 hours. No surprise invoices.' },
  { title: 'Work in the open', text: 'Weekly checkpoints, shared files, and decisions made with you, not handed to you.' },
  { title: 'Handoff & follow-up', text: 'Dev-ready files, a walkthrough, and a check-in once it ships.' },
];

const FIT = [
  'SaaS, fintech or insurtech products with real users',
  'A specific flow that is underperforming',
  'Teams who want a senior designer, not an agency',
];
const NOT_FIT = ['Logos, branding or marketing websites', 'Pixel-pushing without access to the problem', 'Projects that need a full in-house team'];

const FAQ = [
  {
    q: 'Who will I be working with?',
    a: "Me, directly. I'm a senior product designer with 12 years across insurtech, fintech, commerce and SaaS. No handoffs to juniors.",
  },
  {
    q: 'Which time zones do you work with?',
    a: "I'm based in Mumbai (IST). There's comfortable overlap with the UK, Europe, the Middle East and Singapore, and morning calls work for the US East Coast.",
  },
  { q: 'How do payments work?', a: 'Projects are invoiced in USD, typically 50% to start and 50% on delivery. Retainers are billed monthly.' },
  {
    q: 'How many projects do you take on?',
    a: 'One project at a time, so your work gets full attention. If I am booked, I will tell you when I can start.',
  },
];

function Pill({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className="inline-block rounded-full border px-4 py-1.5"
      style={{ borderColor: dark ? CREAM : INK, color: dark ? CREAM : INK, fontFamily: MONO, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
    >
      {children}
    </span>
  );
}

function CtaButton({ label, source, dark = true }: { label: string; source: string; dark?: boolean }) {
  const bg = dark ? INK : CREAM;
  const fg = dark ? CREAM : INK;
  return (
    <button
      onClick={() => openContact(source)}
      className="group flex items-center cursor-pointer"
      style={{ fontFamily: MONO, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
    >
      <span className="rounded-full px-6 py-3.5" style={{ background: bg, color: fg }}>{label}</span>
      <span className="-ml-px flex items-center justify-center rounded-full w-[46px] h-[46px] transition-transform group-hover:rotate-45" style={{ background: bg, color: fg }}>
        <ArrowUpRight size={16} strokeWidth={1.75} />
      </span>
    </button>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t" style={{ borderColor: 'rgba(28,15,31,0.12)' }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer">
        <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>{q}</span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {open && (
        <p className="pb-5 max-w-2xl" style={{ color: MUTED, lineHeight: 1.6 }}>
          {a}
        </p>
      )}
    </div>
  );
}

// In hash-based previews, go back by clearing the hash instead of leaving the page
function goHome(section?: string) {
  return (e: React.MouseEvent) => {
    if (window.location.hash === '#hire-me' || window.location.hash === '#work-with-me') {
      e.preventDefault();
      window.location.hash = section ?? '';
      if (section) setTimeout(() => document.getElementById(section)?.scrollIntoView(), 50);
    }
  };
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
};

export function WorkWithMe() {
  const initialSample = (['sample-audit', 'sample-flow', 'sample-partner'] as SampleId[]).find((x) => window.location.hash === `#${x}`) ?? null;
  const [sample, setSample] = useState<SampleId | null>(initialSample);
  const openSample = (id: SampleId) => {
    history.replaceState(null, '', `#${id}`);
    setSample(id);
  };
  const closeSample = () => {
    history.replaceState(null, '', window.location.pathname.includes('hire-me') || window.location.pathname.includes('work-with-me') ? window.location.pathname : '#hire-me');
    setSample(null);
  };
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Get users to the ‘aha’ · Saloni Mehta';
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen p-2 md:p-3 flex flex-col gap-2 md:gap-3" style={{ background: '#0B0B0C' }}>
      {/* Hero */}
      <section className="rounded-[24px] md:rounded-[36px] px-5 md:px-12 pt-8 pb-16 md:pb-24" style={{ background: CREAM, color: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" onClick={goHome()} className="flex items-center gap-2" style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <ArrowLeft size={14} /> mehtasaloni.in
            </a>
            <span style={{ fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>
              Taking 1 project at a time
            </span>
          </div>

          <motion.div {...reveal} className="mt-16 md:mt-24 flex flex-col items-center text-center">
            <Pill>Get users to the ‘aha’</Pill>
            <h1 className="mt-7" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)', lineHeight: 0.93, letterSpacing: '-0.055em' }}>
              One senior designer.
              <br />
              <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>No handoffs.</span>
            </h1>
            <p className="mt-7 max-w-xl" style={{ fontSize: '1.1rem', lineHeight: 1.6, color: MUTED }}>
              I help SaaS, fintech and insurtech teams fix the moments where users hesitate, get confused or drop off, from first insight to
              shipped interaction.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <CtaButton label="Book an intro call" source="hire-me-hero" />
              <a href="/#work" onClick={goHome('work')} className="underline underline-offset-4" style={{ fontFamily: MONO, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                See case studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers */}
      <section className="rounded-[24px] md:rounded-[36px] px-4 md:px-10 py-16 md:py-24" style={{ background: CREAM, color: INK }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 px-2">
            <div>
              <Pill>Ways to work together</Pill>
              <h2 className="mt-6" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.3rem, 5vw, 4.2rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
                Pick a <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>starting point.</span>
              </h2>
            </div>
            <p className="md:max-w-xs md:text-right" style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6, color: MUTED }}>
              Fixed prices in USD. Final scope agreed after the intro call.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 md:gap-3">
            {OFFERS.map((o, i) => (
              <motion.div
                key={o.name}
                {...reveal}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-[24px] p-7 md:p-8 flex flex-col"
                style={{ background: o.featured ? INK : CARD, color: o.featured ? CREAM : INK, boxShadow: cardShadow }}
              >
                <div className="flex items-center justify-between" style={{ fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>
                  <span>0{i + 1}</span>
                  <span>{o.duration}</span>
                </div>
                <h3 className="mt-8" style={{ color: 'inherit', fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.9rem', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {o.name}
                </h3>
                <p className="mt-3" style={{ color: 'inherit', lineHeight: 1.55, opacity: 0.75 }}>{o.line}</p>
                <ul className="mt-6 flex flex-col gap-2.5 flex-1">
                  {o.includes.map((item) => (
                    <li key={item} className="flex gap-2.5" style={{ fontSize: '0.92rem', lineHeight: 1.45 }}>
                      <Check size={16} strokeWidth={2} className="shrink-0 mt-0.5" style={{ opacity: 0.6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openSample(o.sample)}
                  className="mt-6 self-start flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
                  style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit' }}
                >
                  See a sample <ArrowUpRight size={13} />
                </button>
                <div className="mt-6 pt-6 border-t flex items-center justify-between gap-4" style={{ borderColor: o.featured ? 'rgba(243,240,234,0.18)' : 'rgba(28,15,31,0.1)' }}>
                  <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>{o.price}</span>
                  <button
                    onClick={() => openContact(`offer-${o.name}`)}
                    className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:rotate-45"
                    style={{ background: o.featured ? CREAM : INK, color: o.featured ? INK : CREAM }}
                    aria-label={`Enquire about ${o.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + fit */}
      <section className="rounded-[24px] md:rounded-[36px] px-4 md:px-10 py-16 md:py-24" style={{ background: CREAM, color: INK }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div {...reveal} className="lg:col-span-7 px-2">
            <Pill>How it works</Pill>
            <h2 className="mt-6 mb-8" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
              Simple, <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>calm, clear.</span>
            </h2>
            {STEPS.map((s, i) => (
              <div key={s.title} className="grid grid-cols-12 gap-4 py-5 border-t" style={{ borderColor: 'rgba(28,15,31,0.12)' }}>
                <span className="col-span-2" style={{ fontFamily: MONO, fontSize: '0.75rem', color: MUTED }}>0{i + 1}</span>
                <div className="col-span-10">
                  <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>{s.title}</div>
                  <p className="mt-1" style={{ color: MUTED, lineHeight: 1.55 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-5 flex flex-col gap-2.5 md:gap-3">
            <div className="rounded-[24px] p-7" style={{ background: CARD, boxShadow: cardShadow }}>
              <div style={{ fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>A good fit</div>
              <ul className="mt-4 flex flex-col gap-3">
                {FIT.map((f) => (
                  <li key={f} className="flex gap-2.5" style={{ lineHeight: 1.45 }}>
                    <Check size={17} className="shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] p-7 border" style={{ borderColor: 'rgba(28,15,31,0.15)' }}>
              <div style={{ fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>Probably not a fit</div>
              <ul className="mt-4 flex flex-col gap-3">
                {NOT_FIT.map((f) => (
                  <li key={f} className="flex gap-2.5" style={{ lineHeight: 1.45, color: MUTED }}>
                    <Minus size={17} className="shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-[24px] md:rounded-[36px] px-4 md:px-10 py-16 md:py-24" style={{ background: CREAM, color: INK }}>
        <div className="max-w-4xl mx-auto px-2">
          <Pill>Questions</Pill>
          <h2 className="mt-6 mb-8" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
            Before you <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>ask.</span>
          </h2>
          {FAQ.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="rounded-[24px] md:rounded-[36px] px-5 md:px-12 py-20 md:py-28 text-center" style={{ background: INK, color: CREAM }}>
        <motion.div {...reveal} className="flex flex-col items-center">
          <Pill dark>Next step</Pill>
          <h2 className="mt-7" style={{ color: CREAM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
            Let's find the <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>real problem.</span>
          </h2>
          <p className="mt-5 max-w-md" style={{ color: 'rgba(243,240,234,0.65)', lineHeight: 1.6 }}>
            Share a few lines about what's happening. I'll reply within two working days.
          </p>
          <div className="mt-9">
            <CtaButton label="Start a conversation" source="hire-me-footer" dark={false} />
          </div>
        </motion.div>
      </section>

      <SampleViewer id={sample} onClose={closeSample} />
    </div>
  );
}
