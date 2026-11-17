import type { LucideIcon } from 'lucide-react';
import { INK, CREAM, MUTED, DISPLAY, SERIF } from '../tokens';
import { Block, SectionTitle, Tag, mono } from './SampleKit';

export type Step = { icon: LucideIcon; when: string; title: string };
export type Item = { icon: LucideIcon; text: string };
export type Slot = { title: string; hint: string; span: string };

export type SampleSpec = {
  duration: string;
  process: Step[];
  need: Item[];
  get: Item[];
  statement: { lead: string; question: string };
  facts: [string, string][];
  tag: string;
  slots: Slot[];
};

function IconList({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  return (
    <div className="mt-5 flex flex-col gap-2.5">
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3">
          <span
            className="w-9 h-9 shrink-0 rounded-[11px] flex items-center justify-center"
            style={{ background: dark ? 'rgba(243,240,234,0.12)' : INK, color: CREAM }}
          >
            <Icon size={16} strokeWidth={1.7} />
          </span>
          <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.01em' }}>{text}</span>
        </div>
      ))}
    </div>
  );
}

export function SampleTemplate({ spec }: { spec: SampleSpec }) {
  const cols = spec.process.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5';
  return (
    <>
      {/* First fold: the process */}
      <Block className="!p-6 md:!p-10">
        <div className="flex items-center justify-between">
          <span style={mono}>The process</span>
          <span style={mono}>{spec.duration}</span>
        </div>
        <div className={`relative mt-10 grid grid-cols-2 ${cols} gap-y-10 gap-x-4`}>
          <div className="hidden md:block absolute left-[10%] right-[10%] top-7 h-px" style={{ background: 'rgba(28,15,31,0.18)' }} />
          {spec.process.map(({ icon: Icon, when, title }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: i === spec.process.length - 1 ? '#6B3FA0' : INK, color: CREAM, boxShadow: '0 0 0 6px #FFFDF9' }}
              >
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <span className="mt-4" style={mono}>{when}</span>
              <span className="mt-1.5" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.03em', color: INK }}>
                {title}
              </span>
            </div>
          ))}
        </div>
      </Block>

      {/* Need / get */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Block>
          <span style={mono}>I need from you</span>
          <IconList items={spec.need} />
        </Block>
        <Block dark>
          <span style={{ ...mono, color: 'rgba(243,240,234,0.6)' }}>You get</span>
          <IconList items={spec.get} dark />
        </Block>
      </div>

      {/* What it looks like: problem statement + sections to fill */}
      <SectionTitle n="→" title="What it" accent="looks like." />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <Block className="lg:col-span-12">
          <div className="flex items-center justify-between">
            <span style={mono}>Problem statement</span>
            <Tag>{spec.tag}</Tag>
          </div>
          <p className="mt-5 max-w-4xl" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.035em', color: INK }}>
            {spec.statement.lead}{' '}
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>{spec.statement.question}</span>
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {spec.facts.map(([k, v]) => (
              <div key={k} className="rounded-[16px] p-4" style={{ background: '#F5F1EA' }}>
                <div style={{ ...mono, fontSize: '0.6rem' }}>{k}</div>
                <div className="mt-1.5" style={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.35, color: INK }}>{v}</div>
              </div>
            ))}
          </div>
        </Block>

        {spec.slots.map((sec, i) => (
          <div
            key={sec.title}
            className={`${sec.span} rounded-[24px] p-6 md:p-7 min-h-[200px] flex flex-col justify-between border-2 border-dashed`}
            style={{ borderColor: 'rgba(28,15,31,0.18)' }}
          >
            <div className="flex items-center justify-between">
              <span style={mono}>{String(i + 1).padStart(2, '0')}</span>
              <Tag>To be added</Tag>
            </div>
            <div className="mt-8">
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: '1.35rem', letterSpacing: '-0.03em', color: INK }}>{sec.title}</div>
              <p className="mt-1.5" style={{ fontSize: '0.92rem', lineHeight: 1.5, color: MUTED }}>{sec.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
