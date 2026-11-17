import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle, Target, Users, TrendingUp, TrendingDown, UserX, Zap, ArrowUp, ArrowDown } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import CoverSureBeforeImage from '@/imports/Container-59-3024';
import CoverSureAfterImage from '@/imports/Container-59-3045';
import coverSureHeaderImage from 'figma:asset/1940585ebaa2046707cae339d6a3a23e2c860769.png';
import researchAnalysisImage from 'figma:asset/4b7ae9d70604793db3c1f1dfd4e15080626de71f.png';
import executionScreenshot from 'figma:asset/a2c0d07f1565ef096bf1c8f7269400007289dbe8.png';
import executionScreenshot2 from 'figma:asset/54b73eca8927df901a71ad5e60ead7cc6a34f6d4.png';
import executionScreenshot3 from 'figma:asset/31e9a9b1b147976c1d4f6a38f6251944d22ef07c.png';
import executionScreenshot4 from 'figma:asset/77f4f505d330903844ba28716a6cb86e79c771d0.png';

interface CoverSureDetailRestructuredProps {
  project: any;
  onClose: () => void;
}

export function CoverSureDetailRestructured({ project, onClose }: CoverSureDetailRestructuredProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const designImages = [executionScreenshot, executionScreenshot2, executionScreenshot3, executionScreenshot4];

  // Icons for problems
  const problemIcons = [
    <Users size={32} style={{ color: 'rgb(239 68 68)' }} />, // Low Policy Addition
    <TrendingDown size={32} style={{ color: 'rgb(245 158 11)' }} />, // High Uninstalls
    <UserX size={32} style={{ color: 'rgb(239 68 68)' }} /> // Incomplete Signups
  ];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 cs-theme"
          onClick={onClose}
        >
          <div className="h-full overflow-y-auto">
            <div className="min-h-screen py-12 md:py-20 px-4 md:px-6 flex items-start justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: 'spring', damping: 25 }}
                className="w-full max-w-5xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="fixed top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer z-50 shadow-2xl border-2 border-neutral-200"
                  >
                    <X size={24} style={{ color: 'var(--text-primary)' }} />
                  </button>

                  {/* Content */}
                  <div className="p-8 md:p-16 space-y-12 md:space-y-16">
                    
                    {/* Header Image */}
                    <section>
                      <div className="rounded-xl overflow-hidden -mx-8 md:-mx-16 -mt-8 md:-mt-16 mb-4 md:mb-8">
                        <img 
                          src={coverSureHeaderImage}
                          alt={project.subtitle}
                          className="w-full h-auto"
                        />
                      </div>
                    </section>

                    {/* 1. Intro Section */}
                    <section>
                      <h1 style={{
                        fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                        fontWeight: 'var(--font-weight-bold)',
                        lineHeight: 'var(--line-height-tight)',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                      }}>
                        {project.subtitle}
                      </h1>
                      <p style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--text-secondary)',
                        maxWidth: '45rem',
                        marginBottom: '2rem'
                      }}>
                        {project.introText}
                      </p>

                      {/* My Role Tags */}
                      {project.myRole && (
                        <div className="mb-4">
                          <h3 style={{
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--text-tertiary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '0.75rem'
                          }}>
                            My Role
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.myRole.map((role: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-full border border-violet-200"
                                style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-medium)'
                                }}
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </section>

                    {/* 2. Problems Identified */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Problems Identified
                      </h2>

                      <div className="grid md:grid-cols-3 gap-6">
                        {project.problemsIdentified?.map((problem: any, index: number) => (
                          <div
                            key={index}
                            className="border border-neutral-200 rounded-xl p-6 bg-neutral-50"
                          >
                            {/* Icon */}
                            <div className="mb-4">
                              {problemIcons[index]}
                            </div>

                            <h3 style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.75rem'
                            }}>
                              {problem.title}
                            </h3>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              {problem.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 3. Impact - Moved here right after Problems */}
                    {project.impactStats && (
                      <section>
                        <h2 style={{
                          fontSize: 'var(--font-size-3xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: 'var(--line-height-snug)',
                          color: 'var(--text-primary)',
                          marginBottom: '2rem'
                        }}>
                          Impact After Redesign
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          {project.impactStats.map((stat: any, index: number) => {
                            // Check if this is a reduction stat (contains "Reduction" or "reduction")
                            const isReduction = stat.label.toLowerCase().includes('reduction');
                            
                            return (
                              <div 
                                key={index}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500"
                              >
                                <div className="flex items-start gap-3 mb-2">
                                  <div style={{
                                    fontSize: 'var(--font-size-5xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    lineHeight: 'var(--line-height-tight)',
                                    color: 'var(--text-primary)'
                                  }}>
                                    {stat.value}
                                  </div>
                                  {/* Arrow indicator - down for reductions, up for increases */}
                                  <div className="mt-2">
                                    {isReduction ? (
                                      <ArrowDown size={28} style={{ color: 'rgb(34 197 94)' }} strokeWidth={3} />
                                    ) : (
                                      <ArrowUp size={28} style={{ color: 'rgb(34 197 94)' }} strokeWidth={3} />
                                    )}
                                  </div>
                                </div>
                                <div style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-normal)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.25rem'
                                }}>
                                  {stat.label}
                                </div>
                                <p style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  {stat.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    )}

                    {/* 3.5 Before/After Comparison */}
                    <section>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="space-y-3">
                          <div className="bg-neutral-100 px-4 py-2 rounded-lg inline-block">
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--text-secondary)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Before
                            </span>
                          </div>
                          <div className="relative w-full h-[400px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl border border-neutral-200">
                            <CoverSureBeforeImage />
                          </div>
                        </div>

                        {/* After */}
                        <div className="space-y-3">
                          <div className="bg-violet-100 px-4 py-2 rounded-lg inline-block">
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'rgb(124 58 237)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              After
                            </span>
                          </div>
                          <div className="relative w-full h-[400px] bg-gradient-to-br from-violet-100 to-cyan-100 rounded-xl border border-neutral-200">
                            <CoverSureAfterImage />
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* 4. UX Hypothesis */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        UX Hypothesis
                      </h2>

                      <div className="space-y-8">
                        {project.uxHypothesis?.map((hypothesis: any, index: number) => (
                          <div key={index} className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                              {index === 0 ? (
                                <AlertCircle size={24} style={{ color: 'rgb(124 58 237)' }} />
                              ) : (
                                <Target size={24} style={{ color: 'rgb(124 58 237)' }} />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                fontWeight: 'var(--font-weight-semibold)',
                                lineHeight: 'var(--line-height-snug)',
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem'
                              }}>
                                {hypothesis.title}
                              </h3>
                              <p style={{
                                fontSize: 'var(--font-size-base)',
                                fontWeight: 'var(--font-weight-regular)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--text-secondary)'
                              }}>
                                {hypothesis.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 5. Research & Alignment */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                      }}>
                        Research & Internal Alignment
                      </h2>
                      
                      <p style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                      }}>
                        {project.researchSection?.intro}
                      </p>

                      {/* Captions - moved above image */}
                      <div className="space-y-3 mb-6">
                        {project.researchSection?.captions.map((caption: string, index: number) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 flex-shrink-0"></div>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              {caption}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Research Image */}
                      <div className="rounded-xl overflow-hidden">
                        <img 
                          src={researchAnalysisImage}
                          alt="Research and workshop documentation"
                          className="w-full h-auto"
                        />
                      </div>
                    </section>

                    {/* 6. Design Pillars */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Design Pillars
                      </h2>

                      <div className="grid md:grid-cols-3 gap-6">
                        {project.designPillars?.map((pillar: any, index: number) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-xl p-8"
                          >
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4"
                              style={{ backgroundColor: 'var(--text-primary)' }}
                            >
                              <span style={{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-bold)'
                              }}>
                                {index + 1}
                              </span>
                            </div>
                            <h3 style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.75rem'
                            }}>
                              {pillar.title}
                            </h3>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              {pillar.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 7. Design Decisions */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Design Decisions
                      </h2>

                      <div className="space-y-12">
                        {project.designDecisions?.map((decision: any, index: number) => (
                          <div key={index} className="space-y-6">
                            {/* Decision Block */}
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                              {/* Left: Design Snippet */}
                              <div className="rounded-xl overflow-hidden border border-neutral-200">
                                <img 
                                  src={designImages[index % designImages.length]}
                                  alt={decision.title}
                                  className="w-full h-auto"
                                />
                              </div>

                              {/* Right: Explanation */}
                              <div>
                                <h3 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '1rem'
                                }}>
                                  {decision.title}
                                </h3>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: '1rem'
                                }}>
                                  {decision.explanation}
                                </p>
                                <div className="pl-4 border-l-2 border-violet-600">
                                  <p style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-regular)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--text-secondary)',
                                    fontStyle: 'italic'
                                  }}>
                                    {decision.reasoning}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 8. Learnings & Next Steps */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Learnings & Next Steps
                      </h2>

                      {/* Learnings */}
                      <div className="mb-10">
                        <h3 style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: 'var(--line-height-snug)',
                          color: 'var(--text-primary)',
                          marginBottom: '1.5rem'
                        }}>
                          Learnings
                        </h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              1. Designing with limited product bandwidth
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              This project required the design team to take strong ownership of defining flows, edge cases, and interaction logic. Working closely with developers helped translate design intent into build-ready workflows, but it also highlighted the importance of early product alignment to reduce ambiguity.
                            </p>
                          </div>

                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              2. Deep collaboration with engineering
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Instead of traditional handoff, this became an ongoing working relationship with engineers. Regular walkthroughs, logic mapping, and real-time problem solving ensured feasibility while maintaining experience quality. It strengthened my ability to design with technical awareness.
                            </p>
                          </div>

                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              3. Systems thinking at scale
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Redesigning the homepage wasn't just a visual exercise, it required thinking about states, user readiness, contextual prompts, and long-term extensibility. This reinforced the importance of modular thinking and designing for future iterations.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Next Steps */}
                      <div>
                        <h3 style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: 'var(--line-height-snug)',
                          color: 'var(--text-primary)',
                          marginBottom: '1.5rem'
                        }}>
                          Next Steps
                        </h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              1. Stronger product-design alignment earlier in discovery
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Future iterations would benefit from earlier co-ownership between product and design in defining success metrics, edge cases, and prioritization.
                            </p>
                          </div>

                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              2. Behavior-driven personalization
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              The next evolution of the homepage could become more adaptive based on policy type, life stage, and engagement signals.
                            </p>
                          </div>

                          <div>
                            <h4 style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              3. Continuous experimentation framework
                            </h4>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Setting up structured A/B testing for prompts, feature surfacing, and action hierarchies would help evolve the homepage based on real usage patterns.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}