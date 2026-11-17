import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { Search, BarChart3, Heart, RefreshCw, MessageSquare, Lightbulb } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { SectionHeader } from './SectionHeader';
import { INK, CREAM, CARD, MUTED, DISPLAY, MONO, cardShadow } from './tokens';

const approaches = [
  {
    icon: Search,
    tint: 'linear-gradient(135deg, #DBEAFE, #C7D2FE)',
    title: 'The brief is never the brief',
    text: "I go upstream before I go anywhere. Every project starts with questioning what problem we're actually solving.",
  },
  {
    icon: BarChart3,
    tint: 'linear-gradient(135deg, #F3E8FF, #FBCFE8)',
    title: 'Constraints are inputs, not walls',
    text: 'No budget, small team, tight deadline. I reorganise around them without shrinking the ambition.',
  },
  {
    icon: Heart,
    tint: 'linear-gradient(135deg, #FFE4E6, #FED7AA)',
    title: 'Expertise narrows. Research confirms.',
    text: "I'm not guessing and I'm not fishing blind. Experience narrows the search space. Evidence gives it shape.",
  },
  {
    icon: RefreshCw,
    tint: 'linear-gradient(135deg, #D1FAE5, #99F6E4)',
    title: 'Users decide. Not me, not the PM.',
    text: 'I create the conditions for the right answer to emerge. Then I get out of the way.',
  },
  {
    icon: MessageSquare,
    tint: 'linear-gradient(135deg, #FEF3C7, #FEF08A)',
    title: 'Pushback is a diagnostic',
    text: 'When someone pushes back I ask: is this a constraint, a misalignment, or an ego? The answer decides my move.',
  },
  {
    icon: Lightbulb,
    tint: 'linear-gradient(135deg, #CFFAFE, #BFDBFE)',
    title: 'My solutions are questions',
    text: "I don't hand the room a conclusion. I hand them a reframe. That's why the work feels different.",
  },
];

function usePinned() {
  const query = '(min-width: 1024px) and (min-height: 760px)';
  const [pinned, setPinned] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return pinned;
}

function Appear({ progress, at, children }: { progress: MotionValue<number> | null; at: number; children: ReactNode }) {
  if (!progress) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -12% 0px' }}
        transition={{ duration: 0.55 }}
        className="h-full"
      >
        {children}
      </motion.div>
    );
  }
  const t = useTransform(progress, (v) => Math.min(1, Math.max(0, (v - at) / 0.1)));
  const opacity = useTransform(t, (v) => v);
  const y = useTransform(t, (v) => (1 - v) * 48);
  const scale = useTransform(t, (v) => 0.96 + v * 0.04);
  return (
    <motion.div style={{ opacity, y, scale }} className="h-full">
      {children}
    </motion.div>
  );
}

function ApproachCard({ a, i }: { a: (typeof approaches)[0]; i: number }) {
  const Icon = a.icon;
  return (
    <div className="h-full rounded-[24px] p-6 md:p-7 flex flex-col" style={{ background: CARD, boxShadow: cardShadow }}>
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: INK }}>
          <Icon size={20} strokeWidth={1.6} color="#FFFFFF" />
        </div>
        <span style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.14em', color: MUTED }}>
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>
      <h3
        className="mt-6"
        style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.35rem, 1.8vw, 1.7rem)', lineHeight: 1.05, letterSpacing: '-0.035em', color: INK }}
      >
        {a.title}
      </h3>
      <p className="mt-3" style={{ fontSize: '0.95rem', lineHeight: 1.55, color: MUTED }}>
        {a.text}
      </p>
    </div>
  );
}

function Content({ progress }: { progress: MotionValue<number> | null }) {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <SectionHeader
        pill="How I think"
        title="Before the"
        accent="solution."
        note="I don't have a process I follow. I have a way of thinking I bring to every problem."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
        {approaches.map((a, i) => (
          <Appear key={a.title} progress={progress} at={0.04 + i * 0.13}>
            <ApproachCard a={a} i={i} />
          </Appear>
        ))}
      </div>
    </div>
  );
}

function PinnedApproach() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <div ref={ref} style={{ height: '320vh' }} className="relative">
      <div className="sticky top-0 h-screen flex items-start pt-24 px-4 md:px-10">
        <Content progress={scrollYProgress} />
      </div>
    </div>
  );
}

export function DesignApproach() {
  const pinned = usePinned();
  return (
    <section id="approach" style={{ background: CREAM, color: INK }}>
      {pinned ? (
        <PinnedApproach />
      ) : (
        <div className="px-4 md:px-10 py-20 md:py-28">
          <Content progress={null} />
        </div>
      )}
    </section>
  );
}
