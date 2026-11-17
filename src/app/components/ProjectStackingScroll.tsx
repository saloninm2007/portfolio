import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { ProjectDetail } from './ProjectDetail';
import CoverSureDetailPage from '@/imports/Container-59-2617';
import coverSureThumbnail from 'figma:asset/cf86cedfb8b910f631b334e8e98d8c9b73185391.png';
import nykaaThumbnail from 'figma:asset/3e5d04adff641e6d2cc881dde4324f4886ef7aa7.png';

const projects = [
  {
    title: 'How homepage clarity fixed a Day 1–5 uninstall problem',
    company: 'CoverSure',
    year: '2025',
    category: 'B2C | InsureTech',
    description: 'Redesigning the homepage to reduce friction and guide users toward their first meaningful action',
    
    subtitle: 'CoverSure: Redesigning the Homepage for Clarity & Action',
    introText: 'CoverSure is an insurtech platform helping users understand, organize, and take action on their insurance. This project focuses on redesigning the homepage to improve early engagement, reduce drop-offs, and make the next step for users unmistakably clear.',
    
    myRole: [
      'Product Strategy',
      'UX Architecture',
      'Interaction Design',
      'Design Systems',
      'Cross-Functional Collaboration',
      'Dev Handoff',
      'Workflow Definition',
      'Usability Thinking'
    ],
    
    teamsCollaborated: [
      'Engineering',
      'QA',
      'Business / Ops',
      'Customer Support Insights',
      'Stakeholder Reviews'
    ],
    
    problemsIdentified: [
      {
        title: 'Low Policy Addition After Signup',
        description: 'A significantly lower number of users were adding policies compared to total signups. Post-signup analytics showed users were dropping off before adding any policy, indicating a failure to communicate value early in the journey.'
      },
      {
        title: 'High Uninstalls Between Day 1–5',
        description: 'A sharp uninstall spike was observed within the first five days. Early churn analysis revealed users were not finding enough reason to return after their first session, pointing toward an engagement and clarity issue.'
      },
      {
        title: 'Incomplete Signups & Early Drop-offs',
        description: 'Users were abandoning the flow before completing onboarding or exploring the app. A noticeable percentage exited before understanding what to do next, showing the homepage was not guiding users toward meaningful first actions.'
      }
    ],
    
    uxHypothesis: [
      {
        title: 'Cluttered First Impression',
        description: 'The first fold was overloaded with information, overwhelming users before they could understand the core value. Too many competing elements reduced comprehension and focus.'
      },
      {
        title: 'Lack of Clear Actionability',
        description: 'The homepage did not answer a critical question for users: \"What am I supposed to do next?\" Jobs-to-be-done were unclear, resulting in passive browsing instead of action.'
      }
    ],
    
    researchSection: {
      intro: 'To validate assumptions and align the team, we combined user research with internal workshops to deeply understand early drop-offs and expectations from the homepage.',
      captions: [
        'External user calls with drop-off users to understand confusion and unmet expectations',
        'Internal workshop to align teams on what problem the homepage must solve, especially given the novelty of CoverSure\'s offering'
      ]
    },
    
    designPillars: [
      {
        title: 'Remove Clutter, Increase Focus',
        description: 'Reduce cognitive load by simplifying the first fold and prioritising only what matters at that moment.'
      },
      {
        title: 'Flexible & Contextual Homepage',
        description: 'Make the homepage adaptive based on onboarding inputs and user state, instead of a one-size-fits-all experience.'
      },
      {
        title: 'Strong, Visible Next Actions',
        description: 'Ensure the next best action is always clear to drive engagement and reduce early uninstalls, especially between Day 1–2.'
      }
    ],
    
    designDecisions: [
      {
        title: 'Adaptive hero section with progress tracking',
        explanation: 'Instead of a static banner, the hero adapts to user state (new, returning, incomplete setup), highlighting the next best action while giving users a sense of progress and control.',
        reasoning: 'Insurance is cognitively heavy, users feel lost when the app doesn\'t guide them. This reduces the \"what now?\" moment and improves activation.'
      },
      {
        title: 'Contextual feature prompts based on behavior',
        explanation: 'High-value features (expiry reminders, risk analysis) are surfaced upfront through contextual prompts, based on user portfolio and behavior, rather than being buried in menus.',
        reasoning: 'Users shouldn\'t need to explore to find value. These prompts increase feature adoption while keeping the interface minimal and focused.'
      },
      {
        title: 'Engagement modules positioned as value-adds',
        explanation: 'Motor Club and Health Club are presented as upfront informational cards that clearly explain benefits and provide one clear action to start.',
        reasoning: 'By surfacing these modules as benefits rather than optional features, users see them as part of their protection journey, supporting retention and expansion.'
      },
      {
        title: 'Portfolio snapshot with quick actions',
        explanation: 'A snapshot shows key portfolio information (what\'s active, expiring, missing) and supports instant actions like view, renew, or download documents.',
        reasoning: 'In insurance, trust comes from clarity. The snapshot reduces uncertainty, makes users feel in control, and directly supports renewals.'
      }
    ],
    
    impactStats: [
      { value: '~34%', label: 'D1 activation', description: 'More users completed a core action within 24 hours of installing the app.' },
      { value: '~20-25%', label: 'increase in feature usage', description: 'Users discovered and engaged with features they previously overlooked.' },
      { value: '~30%', label: 'policy additions', description: 'The new contextual prompts drove significantly more users to add their first policy.' },
      { value: '~12%', label: 'Reduction in App uninstall', description: 'Clearer guidance reduced early abandonment and improved retention.' }
    ],
    
    image: coverSureThumbnail,
    headerImage: CoverSureDetailPage,
    isNewFormat: true,
    isRestructured: true
  },
  {
    title: 'When price visibility doesn\'t equal price confidence',
    company: 'Nykaa',
    year: '2023-2024',
    category: 'B2B2C | Assisted Commerce',
    description: 'Making pricing transparent and actionable for 100,000+ retailers',
    subtitle: 'Helping retailers understand pricing and value clearly on the Product Listing Page so they can make confident purchase decisions, without needing support or explanation.',
    metaLine: 'PRODUCT DESIGN · B2B COMMERCE · PRICING EXPERIENCE',
    overview: 'Nykaa Superstore serves over 100,000 small retailers across India who source beauty and personal care products for their shops. Retailers compared prices, discounts, and quantity benefits before placing an order, but the Product Listing Page presented this information in a fragmented way.',
    
    myRole: [
      'User Research',
      'Problem Framing',
      'Information Architecture',
      'UX Design',
      'Data-Driven Decisions',
      'Experimentation',
      'Dev Collaboration',
      'Retailer Behavior Insights'
    ],
    
    teamsCollaborated: [
      'Engineering',
      'QA',
      'Business / Ops',
      'Customer Support Insights',
      'Stakeholder Reviews'
    ],
    
    designDecisions: [
      {
        title: 'Unified Pricing Display',
        explanation: 'Instead of scattering MRP, discount percentage, and unit price across the card, we consolidated all pricing information into a single, scannable unit. This included showing the MRP with a strikethrough, the current price in bold, and any applicable \"Best Price\" indicator.',
        reasoning: 'Retailers no longer needed to hunt for pricing details or do mental math. Everything required to assess value was presented in one place, reducing cognitive load and decision time.'
      },
      {
        title: 'Visual \"Best Price\" Indicators',
        explanation: 'Products eligible for the best price were marked with a distinct badge and color treatment that immediately stood out on the PLP. This indicator appeared only when the product met specific quantity or offer criteria.',
        reasoning: 'This made the best option immediately obvious without requiring retailers to compare every product manually. It shifted decision-making from calculation to recognition.'
      },
      {
        title: 'Quantity-Based Pricing Breakdown',
        explanation: 'When a product had tiered pricing based on quantity, we added a simple expandable section showing how the price changes with different purchase quantities, along with the potential savings.',
        reasoning: 'This transparency eliminated the need to add items to the cart just to see pricing variations. Retailers could evaluate their options and make informed decisions directly from the listing page.'
      },
      {
        title: 'Profit Margin Visibility',
        explanation: 'For each product, we displayed the expected profit margin per unit alongside the price. This helped retailers understand not just what they would pay, but what they would earn.',
        reasoning: 'Small retailers make purchasing decisions based on profit potential, not just low prices. Showing margin upfront aligned the interface with their actual decision-making process.'
      }
    ],
    
    problemStatement: 'The Fragmented Pricing Problem',
    problemDescription: [
      'Retailers compared prices, discounts, and quantity benefits before placing an order, but the PLP presented this information in a fragmented way.',
      'They weren\'t able to understand the final value or margin confidently, which led to hesitation, delayed purchases, and dependency on BDE explanation, especially on weekends when support wasn\'t available.'
    ],
    problemEvidence: [
      'Fragmented price understanding',
      'Low confidence at purchase decision',
      'High dependency on explanation'
    ],
    problemQuote: 'I only place the order when I clearly understand the price breakdown.',
    
    discoveryInsights: [
      'Retailers wanted clarity on the final price and value outcome before checkout',
      'Orders increased when savings and margin were visible upfront',
      'Users avoided purchasing if pricing felt uncertain or incomplete',
      'Transparency built trust more than discount messaging'
    ],
    discoveryQuotes: [
      'I only place the order when I clearly understand the price breakdown.',
      'If I\'m not sure about the final margin, I delay the purchase.'
    ],
    discoveryHypothesis: 'If pricing on the PLP is structured, transparent, and self-explained, retailers will be able to make confident decisions independently, leading to faster and more independent ordering.',
    
    strategyTitle: 'Design Strategy',
    strategyDescription: 'Making pricing transparent, structured, and self-explanatory so retailers can make confident decisions independently.',
    strategyPrinciples: [
      {
        title: 'Price comparison at a glance',
        description: 'Help retailers understand value instantly without effort'
      },
      {
        title: 'Explain offers, don\'t hide them',
        description: 'Make savings and conditions transparent and predictable'
      },
      {
        title: 'Turn progress into motivation',
        description: 'Show how actions unlock better pricing outcomes'
      }
    ],
    
    executionTitle: 'What I Designed and Why',
    executionDecisions: [
      {
        decision: 'Price comparison at a glance',
        why: 'Show MRP, current price, and best-price potential together on the PLP so retailers can evaluate value instantly without calculation or guesswork.',
        reasoning: 'This reduces hesitation and helps users make faster, confident purchase decisions.'
      },
      {
        decision: 'Best-price explanation bottom sheet',
        why: 'A transparent price breakdown that explains eligibility, conditions, and final benefit in a simple narrative format, instead of users having to interpret discounts on their own.',
        reasoning: 'This enables self-served price understanding rather than relying on BDE clarification.'
      },
      {
        decision: 'Progress toward better pricing',
        why: 'Show how increasing quantity or combining offers leads to better pricing outcomes, instead of making users trial-and-error.',
        reasoning: 'This turns pricing into momentum and action, not uncertainty and hesitation.'
      }
    ],
    
    impactTitle: 'Results After Launch',
    impactStats: [
      { value: '~2%', label: 'uplift in weekend orders', description: 'Users could make confident purchases even without support' },
      { value: 'Higher', label: 'conversion on price-visible SKUs', description: 'Clarity reduced hesitation at the decision point' },
      { value: 'Drop in', label: 'clarification calls to BDEs', description: 'Support time shifted to higher-value conversations' }
    ],
    impactNarrative: 'The redesign didn\'t just clarify pricing, it improved confidence. Retailers felt informed, independent, and in control of their purchase decisions.',
    
    futureImprovements: [
      'Extend pricing clarity patterns to PDP for consistency across the entire purchase journey',
      'Implement smart quantity-based savings recommendations that adapt to individual retailer purchasing patterns',
      'Add lightweight contextual nudges to guide retailers toward optimal pricing without overwhelming them',
      'Introduce personalized \"best for you\" recommendations based on past order history and profit margins',
      'Create a comparison view that lets retailers evaluate multiple products side-by-side with full pricing transparency'
    ],
    
    nextPhaseTitle: 'What\'s Next',
    nextPhaseDescription: 'Building on the pricing clarity foundation to create more confident, independent ordering experiences.',
    nextPhaseRoadmap: [
      {
        title: 'Extend pricing clarity patterns to PDP',
        description: 'Bring the same transparent pricing structure to the Product Detail Page for consistency across the journey.'
      },
      {
        title: 'Smart quantity-based savings recommendations',
        description: 'Proactively suggest quantity adjustments that unlock better pricing based on retailer behavior.'
      },
      {
        title: 'Lightweight nudges for confident, independent ordering',
        description: 'Use contextual guidance to reduce friction and build purchase confidence at key decision points.'
      }
    ],
    closingReflection: 'Transparency isn\'t about exposing complexity. It\'s about giving people the clarity they need to make confident decisions.',
    
    image: nykaaThumbnail,
    isNewFormat: true,
    isLocked: false
  },
  {
    title: 'The framework that turned user research into org-wide product decisions',
    company: 'Framework',
    year: '2024',
    category: 'Usability Analysis',
    description: 'A structured approach to usability analysis that aligns teams around user effort',
    image: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwbWluaW1hbCUyMHNoYXBlc3xlbnwxfHx8fDE3Njk1MzIzODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isNewFormat: true,
    isVIMMFramework: true,
    isLocked: false
  }
];

const INK = '#1C0F1F';
const CREAM = '#F3F0EA';
const CARD = '#FFFDF9';
const MUTED = '#6A5E6C';
const DISPLAY = "'Inter Tight', 'Inter Display', 'Inter', sans-serif";
const SERIF = "'Instrument Serif', 'Playfair Display', Georgia, serif";
const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

type Project = typeof projects[0];

// Short display copy for each case study card (keyed by company)
const CARD_COPY: Record<string, { name: string; challenge: string; focus: string }> = {
  CoverSure: {
    name: 'CoverSure Home',
    challenge: 'People signed up, then uninstalled within five days, without adding a single policy.',
    focus: 'Product strategy · UX architecture',
  },
  Nykaa: {
    name: 'Nykaa Superstore',
    challenge: 'Retailers could see every price, yet still couldn’t tell if they were getting a good deal.',
    focus: 'Research · Information architecture',
  },
  Framework: {
    name: 'VIMM Framework',
    challenge: 'Research findings weren’t turning into product decisions across teams.',
    focus: 'Usability analysis · Team alignment',
  },
};

const label: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: '0.68rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: MUTED,
};

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[24px] p-6 md:p-7 ${className}`}
      style={{ background: CARD, boxShadow: '0 1px 0 rgba(28,15,31,0.04), 0 12px 32px -18px rgba(28,15,31,0.18)' }}
    >
      {children}
    </div>
  );
}

function CaseImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden" style={{ background: '#E9E3D8', maxHeight: 'calc(100vh - 19rem)' }}>
      {!failed ? (
        <img
          src={project.image as string}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-10 text-center" style={{ background: 'linear-gradient(140deg, #E9E3D8, #D9CFE0)' }}>
          <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: INK }}>
            {project.category}
          </span>
        </div>
      )}
    </div>
  );
}

function usePinnedLayout() {
  const query = '(min-width: 1024px) and (min-height: 700px)';
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

// A card that fades/slides in when scroll progress passes its threshold
function Step({ progress, at, children }: { progress: MotionValue<number> | null; at: number; children: React.ReactNode }) {
  if (!progress) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  }
  // Function transforms (not range maps) so the browser can't hand these off to a scroll timeline
  const t = useTransform(progress, (v) => Math.min(1, Math.max(0, (v - at) / 0.12)));
  const opacity = useTransform(t, (v) => v);
  const y = useTransform(t, (v) => (1 - v) * 56);
  return <motion.div style={{ opacity, y }}>{children}</motion.div>;
}

function CaseStudyContent({ project, index, total, onOpen, progress }: { project: Project; index: number; total: number; onOpen: () => void; progress: MotionValue<number> | null }) {
  const copy = CARD_COPY[project.company] ?? { name: project.company, challenge: project.description, focus: project.category };
  const stats = ((project as any).impactStats as { value: string; label: string }[] | undefined)?.slice(0, 3);
  const num = String(index + 1).padStart(2, '0');
  const offsets = ['md:mt-0', 'md:mt-7', 'md:mt-3'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start w-full">
      {/* Featured card */}
      <div className="lg:col-span-7">
        <button onClick={onOpen} className="group w-full text-left cursor-pointer">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between" style={label}>
              <span>Case study {num} / {String(total).padStart(2, '0')}</span>
              <span>{project.category}</span>
            </div>
            <div className="mt-4 mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h3 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 0.95, letterSpacing: '-0.05em', color: INK }}>
                {copy.name}
              </h3>
              <p className="md:text-right md:max-w-[15rem]" style={{ fontSize: '0.9rem', lineHeight: 1.5, color: MUTED }}>
                {project.title}
              </p>
            </div>
            <CaseImage project={project} />
          </Card>
        </button>
      </div>

      {/* Supporting cards, appear one by one, stacking below each other */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        <Step progress={progress} at={0.12}>
          <Card>
            <div style={label}>The challenge</div>
            <p className="mt-3" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.3rem, 1.85vw, 1.7rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: INK }}>
              {copy.challenge}
            </p>
          </Card>
        </Step>

        <Step progress={progress} at={0.38}>
          <Card>
            <div style={label}>{stats && stats.length ? 'What moved' : 'The outcome'}</div>
            {stats && stats.length ? (
              <div className="mt-5 grid grid-cols-3 gap-3 items-start">
                {stats.map((s, i) => (
                  <div key={i} className={`border-l pl-3 ${offsets[i]}`} style={{ borderColor: 'rgba(28,15,31,0.22)' }}>
                    <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(1.25rem, 1.9vw, 1.9rem)', lineHeight: 1, letterSpacing: '-0.05em', color: INK, whiteSpace: 'nowrap' }}>
                      {s.value}
                    </div>
                    <div className="mt-2" style={{ ...label, fontSize: '0.62rem', letterSpacing: '0.08em', lineHeight: 1.45 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3" style={{ fontSize: '1rem', lineHeight: 1.55, color: INK }}>{project.description}</p>
            )}
          </Card>
        </Step>

        <Step progress={progress} at={0.64}>
          <Card>
            <div style={label}>Project</div>
            <div className="mt-2">
              {[
                project.company === 'Framework' ? ['Type', 'Framework'] : ['Company', project.company],
                ['Year', project.year],
                ['Focus', copy.focus],
              ].map(([k, v], i) => (
                <div key={k} className={`flex items-baseline justify-between gap-4 py-2 ${i ? 'border-t' : ''}`} style={{ borderColor: 'rgba(28,15,31,0.08)' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: INK }}>{k}</span>
                  <span className="text-right" style={{ fontSize: '0.88rem', color: MUTED }}>{v}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onOpen}
              className="group/cta mt-4 flex items-center cursor-pointer"
              style={{ fontFamily: MONO, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <span className="rounded-full px-5 py-3" style={{ background: INK, color: CREAM }}>View case study</span>
              <span className="-ml-px flex items-center justify-center rounded-full w-[42px] h-[42px] transition-transform group-hover/cta:rotate-45" style={{ background: INK, color: CREAM }}>
                <ArrowUpRight size={15} strokeWidth={1.75} />
              </span>
            </button>
          </Card>
        </Step>
      </div>
    </div>
  );
}

// Pinned version: the whole project sticks to the screen while its cards appear
function PinnedCaseStudy(props: { project: Project; index: number; total: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <div ref={ref} style={{ height: '280vh' }} className="relative">
      <div className="sticky top-0 h-screen flex items-start pt-24 pb-6">
        <CaseStudyContent {...props} progress={scrollYProgress} />
      </div>
    </div>
  );
}

function CaseStudy(props: { project: Project; index: number; total: number; onOpen: () => void }) {
  const pinned = usePinnedLayout();
  return pinned ? <PinnedCaseStudy {...props} /> : <CaseStudyContent {...props} progress={null} />;
}

export function ProjectStackingScroll() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Hero outcome links open a case study by company name
  useEffect(() => {
    const open = (e: Event) => {
      const p = projects.find((x) => x.company === (e as CustomEvent).detail);
      if (p) setSelectedProject(p);
    };
    window.addEventListener('open-case-study', open);
    return () => window.removeEventListener('open-case-study', open);
  }, []);
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: listProgress } = useScroll({ target: listRef, offset: ['start end', 'end start'] });
  // Slow horizontal drift for the watermark (function form keeps it on the main thread)
  const watermarkX = useTransform(listProgress, (v) => `${10 - v * 20}%`);

  return (
    <>
      <section id="work" className="relative px-4 md:px-10 pt-24 md:pt-28 pb-16 md:pb-20" style={{ background: CREAM, color: INK }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 md:mb-2 px-2"
          >
            <div>
              <span
                className="inline-block rounded-full border px-4 py-1.5 mb-6"
                style={{ borderColor: INK, fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Selected work
              </span>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.05em' }}>
                Problems, <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>reframed.</span>
              </h2>
            </div>
            <p className="md:max-w-xs md:text-right" style={{ fontFamily: MONO, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6, color: MUTED }}>
              {String(projects.length).padStart(2, '0')} case studies · what was broken, what changed, what moved
            </p>
          </motion.div>

          {/* Case studies, with a sticky parallax watermark behind them */}
          <div ref={listRef} className="relative">
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
              <div className="sticky top-0 h-screen flex items-end justify-center overflow-hidden pb-[3vh]">
                <motion.span
                  style={{
                    x: watermarkX,
                    fontFamily: SERIF,
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '23vw',
                    lineHeight: 0.8,
                    letterSpacing: '-0.035em',
                    color: 'rgba(28,15,31,0.07)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Projects
                </motion.span>
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-16 lg:gap-0">
              {projects.map((project, index) => (
                <CaseStudy
                  key={index}
                  project={project}
                  index={index}
                  total={projects.length}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
