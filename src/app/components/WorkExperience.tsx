import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { CompanyLogo } from '@/imports/Container-231-879';
import { INK, CREAM, CARD, MUTED, DISPLAY, MONO, cardShadow } from './tokens';

const roles = [
  {
    company: 'CoverSure',
    type: 'Startup',
    domain: 'Insurtech · B2C',
    role: 'Lead Product Designer',
    dates: 'Jan 2025 – Present',
    text: 'Redefining how users understand and act on insurance by transforming fragmented policies into a clear, decision-ready experience that drives engagement and trust.',
  },
  {
    company: 'Fynd',
    type: 'Scale-up',
    domain: 'Retail tech · AI analytics',
    role: 'Product Design Manager',
    dates: 'Feb 2024 – Oct 2024',
    text: 'Designed AI-powered analytical platforms that turned complex data into intuitive, insight-driven workflows supporting faster, confident decisions.',
  },
  {
    company: 'Nykaa',
    type: 'Listed company',
    domain: 'E-commerce · B2B',
    role: 'Lead Product Designer',
    dates: 'Mar 2021 – Jun 2023',
    text: 'Shaped large-scale B2B commerce systems, designing high-frequency operational journeys that improved retailer efficiency and business performance.',
  },
  {
    company: 'PharmEasy',
    type: 'Unicorn startup',
    domain: 'Healthtech · B2C',
    role: 'UX Designer 2',
    dates: 'Apr 2019 – Feb 2021',
    text: 'Reimagined prescription and diagnostics journeys to reduce friction, strengthen user confidence, and improve task completion in high-stakes moments.',
  },
  {
    company: 'IDfy',
    type: 'Startup',
    domain: 'Fintech · Identity verification',
    role: 'UI/UX Designer',
    dates: 'Mar 2018 – Mar 2019',
    text: 'Designed compliant identity verification experiences that balanced security, usability, and seamless fintech integrations at scale.',
  },
  {
    company: 'Taglr',
    type: 'Early-stage startup',
    domain: 'Retail tech · Commerce',
    role: 'UI/UX Designer',
    dates: 'Jun 2017 – Mar 2018',
    text: 'Built unified commerce experiences bridging online discovery and offline inventory, helping retailers operate more efficiently.',
  },
  {
    company: 'Zycus',
    type: 'Enterprise SaaS',
    domain: 'Procurement · B2B',
    role: 'Asst Design Lead',
    dates: 'Jul 2015 – May 2017',
    text: 'Improved enterprise procurement experiences by simplifying complex buyer-supplier workflows across multi-product SaaS systems.',
  },
  {
    company: 'Oracle',
    type: 'MNC',
    domain: 'Banking software · Enterprise',
    role: 'UX Designer (Contract)',
    dates: 'Jul 2013 – Jul 2015',
    text: 'Transformed banker-facing loan origination workflows into structured, efficient systems improving accuracy and operational speed.',
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="px-4 md:px-10 py-20 md:py-28" style={{ background: CREAM, color: INK }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader pill="Experience" title="Where I've" accent="worked." note="12 years · 8 teams · insurtech, fintech, commerce & SaaS" />

        <div className="rounded-[28px] p-3 md:p-4" style={{ background: CARD, boxShadow: cardShadow }}>
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className={`group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center rounded-[18px] px-4 md:px-6 py-5 md:py-6 transition-colors duration-300 hover:bg-[#F3F0EA] ${i ? 'border-t' : ''}`}
              style={{ borderColor: 'rgba(28,15,31,0.08)' }}
            >
              <div className="md:col-span-3" style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>
                {r.dates}
              </div>
              <div className="md:col-span-4 flex items-center gap-4">
                <CompanyLogo company={r.company} size={52} />
                <div>
                <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}>
                  {r.company}
                </div>
                <div className="mt-1" style={{ fontSize: '0.9rem', color: MUTED }}>{r.role}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[r.type, r.domain].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1"
                      style={{ background: '#F1ECE4', color: MUTED, fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </div>
              <p className="md:col-span-5" style={{ fontSize: '0.95rem', lineHeight: 1.55, color: MUTED }}>
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
