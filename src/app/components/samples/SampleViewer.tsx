import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { INK, CREAM, MUTED, DISPLAY, SERIF, MONO } from '../tokens';
import { SampleBanner, mono, PRODUCT } from './SampleKit';
import { AuditSample } from './AuditSample';
import { FlowSample } from './FlowSample';
import { PartnerSample } from './PartnerSample';
import { openContact } from '../ContactModal';

export type SampleId = 'sample-audit' | 'sample-flow' | 'sample-partner';

export const SAMPLES: Record<SampleId, { offer: string; title: string; accent: string; intro: string; meta: string[]; fictional?: boolean; Body: () => JSX.Element }> = {
  'sample-audit': {
    offer: 'Behaviour audit',
    title: 'How a behaviour audit',
    accent: 'works.',
    intro: 'Two weeks to find where, and why, people drop off.',
    meta: ['Behaviour audit', '2 weeks'],
    Body: AuditSample,
  },
  'sample-flow': {
    offer: 'Flow redesign',
    title: 'How a flow redesign',
    accent: 'works.',
    intro: 'Four to six weeks to rebuild one critical journey, from the real problem to tested screens.',
    meta: ['Flow redesign', '4–6 weeks'],
    Body: FlowSample,
  },
  'sample-partner': {
    offer: 'Design partner',
    title: 'How a design partnership',
    accent: 'works.',
    intro: 'Senior design every month, focused on what moves your numbers.',
    meta: ['Design partner', 'Monthly'],
    Body: PartnerSample,
  },
};

export function SampleViewer({ id, onClose }: { id: SampleId | null; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    scrollRef.current?.scrollTo(0, 0);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [id, onClose]);

  const sample = id ? SAMPLES[id] : null;

  return (
    <AnimatePresence>
      {sample && (
        <motion.div
          className="fixed inset-0 z-[55] p-2 md:p-3"
          style={{ background: '#0B0B0C' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Sample: ${sample.offer}`}
        >
          <motion.div
            ref={scrollRef}
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full overflow-y-auto rounded-[24px] md:rounded-[36px]"
            style={{ background: CREAM, color: INK }}
          >
            {/* Top bar */}
            <div className="sticky top-0 z-10 px-5 md:px-10 py-4 flex items-center justify-between backdrop-blur-md" style={{ background: 'rgba(243,240,234,0.85)' }}>
              <span style={mono}>Sample · {sample.offer}</span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-[#1C0F1F] hover:text-[#F3F0EA]"
                aria-label="Close sample"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-10 pb-20">
              {/* Header */}
              <div className="pt-6 md:pt-10 pb-10 flex flex-col items-start">
                {sample.fictional && <SampleBanner />}
                <h1 className="mt-6" style={{ color: INK, fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.055em' }}>
                  {sample.title}{' '}
                  <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>{sample.accent}</span>
                </h1>
                <p className="mt-5 max-w-2xl" style={{ fontSize: '1.1rem', lineHeight: 1.6, color: MUTED }}>{sample.intro}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(sample.fictional ? [PRODUCT, ...sample.meta] : sample.meta).map((m) => (
                    <span key={m} className="rounded-full border px-3 py-1.5" style={{ borderColor: 'rgba(28,15,31,0.2)', fontFamily: MONO, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <sample.Body />

              {/* Closing CTA */}
              <div className="mt-16 rounded-[28px] px-6 md:px-12 py-14 text-center flex flex-col items-center" style={{ background: INK, color: CREAM }}>
                <h2 style={{ color: CREAM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
                  Want this for <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>your product?</span>
                </h2>
                <p className="mt-4 max-w-md" style={{ color: 'rgba(243,240,234,0.65)', lineHeight: 1.6 }}>
                  Tell me what's happening and I'll suggest the right starting point.
                </p>
                <button
                  onClick={() => openContact(`sample-${sample.offer}`)}
                  className="group mt-8 flex items-center cursor-pointer"
                  style={{ fontFamily: MONO, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  <span className="rounded-full px-6 py-3.5" style={{ background: CREAM, color: INK }}>Start a conversation</span>
                  <span className="-ml-px flex items-center justify-center rounded-full w-[46px] h-[46px] transition-transform group-hover:rotate-45" style={{ background: CREAM, color: INK }}>
                    <ArrowUpRight size={16} strokeWidth={1.75} />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
