import { motion, useScroll, useTransform } from 'motion/react';
import { Layers, ArrowUpRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { ProjectDetail } from './ProjectDetail';
import ImageCoverSureContextualHomepage from '@/imports/ImageCoverSureContextualHomepage-59-26';
import CoverSureDetailPage from '@/imports/Container-59-2617';
import coverSureThumbnail from 'figma:asset/cf86cedfb8b910f631b334e8e98d8c9b73185391.png';
import nykaaThumbnail from 'figma:asset/3e5d04adff641e6d2cc881dde4324f4886ef7aa7.png';

const projects = [
  {
    title: 'How homepage clarity fixed a Day 1–5 uninstall problem',
    company: 'CoverSure',
    year: '2025',
    category: 'Product Design',
    description: 'Redesigning the homepage to reduce friction and guide users toward their first meaningful action',
    
    // New structure for detail page
    subtitle: 'CoverSure — Redesigning the Homepage for Clarity & Action',
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
        description: 'The homepage did not answer a critical question for users: "What am I supposed to do next?" Jobs-to-be-done were unclear, resulting in passive browsing instead of action.'
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
        reasoning: 'Insurance is cognitively heavy—users feel lost when the app doesn\'t guide them. This reduces the "what now?" moment and improves activation.'
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
    category: 'Product Design',
    description: 'Making pricing transparent and actionable for 100,000+ retailers',
    subtitle: 'Helping retailers understand pricing and value clearly on the Product Listing Page so they can make confident purchase decisions — without needing support or explanation.',
    metaLine: 'PRODUCT DESIGN · B2B COMMERCE · PRICING EXPERIENCE',
    overview: 'Nykaa Superstore serves over 100,000 small retailers across India who source beauty and personal care products for their shops. Retailers compared prices, discounts, and quantity benefits before placing an order — but the Product Listing Page presented this information in a fragmented way.',
    
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
    
    // Design Decisions for the detail view
    designDecisions: [
      {
        title: 'Unified Pricing Display',
        explanation: 'Instead of scattering MRP, discount percentage, and unit price across the card, we consolidated all pricing information into a single, scannable unit. This included showing the MRP with a strikethrough, the current price in bold, and any applicable "Best Price" indicator.',
        reasoning: 'Retailers no longer needed to hunt for pricing details or do mental math. Everything required to assess value was presented in one place, reducing cognitive load and decision time.'
      },
      {
        title: 'Visual "Best Price" Indicators',
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
      'Retailers compared prices, discounts, and quantity benefits before placing an order — but the PLP presented this information in a fragmented way.',
      'They weren\'t able to understand the final value or margin confidently, which led to hesitation, delayed purchases, and dependency on BDE explanation — especially on weekends when support wasn\'t available.'
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
    discoveryHypothesis: 'If pricing on the PLP is structured, transparent, and self-explained, retailers will be able to make confident decisions independently — leading to faster and more independent ordering.',
    
    strategyTitle: 'Design Strategy',
    strategyDescription: 'Making pricing transparent, structured, and self-explanatory so retailers can make confident decisions independently.',
    strategyPrinciples: [
      {
        title: 'Price comparison at a glance',
        description: 'Help retailers understand value instantly without effort'
      },
      {
        title: 'Explain offers — don\'t hide them',
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
        why: 'A transparent price breakdown that explains eligibility, conditions, and final benefit in a simple narrative format — instead of users having to interpret discounts on their own.',
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
    impactNarrative: 'The redesign didn\'t just clarify pricing — it improved confidence. Retailers felt informed, independent, and in control of their purchase decisions.',
    
    // Future improvements
    futureImprovements: [
      'Extend pricing clarity patterns to PDP for consistency across the entire purchase journey',
      'Implement smart quantity-based savings recommendations that adapt to individual retailer purchasing patterns',
      'Add lightweight contextual nudges to guide retailers toward optimal pricing without overwhelming them',
      'Introduce personalized "best for you" recommendations based on past order history and profit margins',
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

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="work" className="py-20 px-6 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-neutral-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-tight)',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>Featured Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Hover overlay with icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
                    >
                      <ArrowUpRight size={28} style={{ color: 'var(--text-primary)' }} />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6 space-y-3"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {project.company}
                    </span>
                    <span style={{ color: 'var(--text-tertiary)' }}>•</span>
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-tertiary)'
                    }}>
                      {project.year}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    lineHeight: 'var(--line-height-snug)',
                    color: 'var(--text-primary)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-regular)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'var(--text-secondary)'
                  }}>
                    {project.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center gap-2 pt-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)'
                    }}>
                      View Case Study
                    </span>
                    <ArrowUpRight size={16} style={{ color: 'var(--text-primary)' }} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}