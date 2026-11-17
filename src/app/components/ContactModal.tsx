import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { INK, CREAM, CARD, MUTED, DISPLAY, SERIF, MONO } from './tokens';
import { ENQUIRY_ENDPOINT, CONTACT_EMAIL } from '../config';

// Any button on the site can open this with: window.dispatchEvent(new CustomEvent('open-contact', { detail: 'source' }))
export function openContact(source = 'site') {
  window.dispatchEvent(new CustomEvent('open-contact', { detail: source }));
}

const NEEDS = ['Behaviour audit', 'Flow redesign', 'Design partner (ongoing)', 'Not sure yet'];
const BUDGETS = ['Under $2.5k', '$2.5k – $5k', '$5k – $10k', '$10k+'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span style={{ fontFamily: MONO, fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  'w-full rounded-[14px] border px-4 py-3 bg-white/70 outline-none transition-colors focus:border-[#1C0F1F] focus:bg-white';
const inputStyle = { borderColor: 'rgba(28,15,31,0.15)', color: INK, fontSize: '0.95rem' };

function Chips({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o}
          onClick={() => onChange(o)}
          className="rounded-full border px-3.5 py-2 cursor-pointer transition-colors"
          style={{
            borderColor: value === o ? INK : 'rgba(28,15,31,0.18)',
            background: value === o ? INK : 'transparent',
            color: value === o ? CREAM : INK,
            fontSize: '0.85rem',
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('site');
  const [status, setStatus] = useState<Status>('idle');
  const [need, setNeed] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    const onOpen = (e: Event) => {
      setSource(String((e as CustomEvent).detail ?? 'site'));
      setStatus('idle');
      setOpen(true);
    };
    window.addEventListener('open-contact', onOpen);
    return () => window.removeEventListener('open-contact', onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      company: String(fd.get('company') || ''),
      need,
      budget,
      message: String(fd.get('message') || ''),
      source,
      submittedAt: new Date().toISOString(),
    };

    if (!ENQUIRY_ENDPOINT) {
      // No sheet connected yet: hand over to the visitor's email app, pre-filled
      const body = Object.entries(data)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project enquiry: ${data.name}`)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      await fetch(ENQUIRY_ENDPOINT, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(11,11,12,0.55)' }} onClick={() => setOpen(false)} />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full md:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-[28px] md:rounded-[28px] p-6 md:p-10"
            style={{ background: CREAM, color: INK }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-[#1C0F1F] hover:text-[#F3F0EA]"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {status === 'sent' ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: INK, color: CREAM }}>
                  <Check size={22} />
                </div>
                <h3 className="mt-6" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: '2.2rem', letterSpacing: '-0.045em', lineHeight: 1 }}>
                  Thank you, <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>received.</span>
                </h3>
                <p className="mt-3 max-w-sm" style={{ color: MUTED, lineHeight: 1.6 }}>
                  I read every message myself and usually reply within two working days.
                </p>
              </div>
            ) : (
              <>
                <span
                  className="inline-block rounded-full border px-4 py-1.5"
                  style={{ borderColor: INK, fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  Start a conversation
                </span>
                <h3 className="mt-5" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.05em', lineHeight: 0.95 }}>
                  Tell me about the <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>problem.</span>
                </h3>
                <p className="mt-3" style={{ color: MUTED, lineHeight: 1.55 }}>
                  A few lines is enough. I'll come back with questions, not a sales pitch.
                </p>

                <form onSubmit={submit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Your name *">
                      <input name="name" required className={inputCls} style={inputStyle} placeholder="Alex Morgan" />
                    </Field>
                    <Field label="Work email *">
                      <input name="email" type="email" required className={inputCls} style={inputStyle} placeholder="alex@company.com" />
                    </Field>
                  </div>
                  <Field label="Company / product">
                    <input name="company" className={inputCls} style={inputStyle} placeholder="Company name or website" />
                  </Field>
                  <Field label="What do you need?">
                    <Chips options={NEEDS} value={need} onChange={setNeed} />
                  </Field>
                  <Field label="Budget (USD)">
                    <Chips options={BUDGETS} value={budget} onChange={setBudget} />
                  </Field>
                  <Field label="What's happening? *">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className={`${inputCls} resize-none`}
                      style={inputStyle}
                      placeholder="Where are users getting stuck? What have you tried?"
                    />
                  </Field>

                  {status === 'error' && (
                    <p style={{ color: '#B42318', fontSize: '0.9rem' }}>
                      Something went wrong. Please email me directly at {CONTACT_EMAIL}.
                    </p>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                    <span style={{ fontFamily: MONO, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>
                      Or email {CONTACT_EMAIL}
                    </span>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group flex items-center cursor-pointer disabled:opacity-60"
                      style={{ fontFamily: MONO, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      <span className="rounded-full px-6 py-3.5" style={{ background: INK, color: CREAM }}>
                        {status === 'sending' ? 'Sending…' : 'Send'}
                      </span>
                      <span
                        className="-ml-px flex items-center justify-center rounded-full w-[46px] h-[46px] transition-transform group-hover:rotate-45"
                        style={{ background: INK, color: CREAM }}
                      >
                        <ArrowUpRight size={16} strokeWidth={1.75} />
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
