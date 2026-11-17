import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, Brain, Layers, Hand, ArrowRight, Map, Users } from 'lucide-react';
import { useEffect } from 'react';

interface VIMMFrameworkCaseStudyProps {
  project: any;
  onClose: () => void;
}

export function VIMMFrameworkCaseStudy({ project, onClose }: VIMMFrameworkCaseStudyProps) {
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
                className="w-full max-w-6xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="fixed top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer z-50 shadow-2xl border-2 border-neutral-200"
                  >
                    <X size={24} style={{ color: 'var(--text-primary)' }} />
                  </button>

                  {/* Content Container */}
                  <div className="relative">
                    
                    {/* Hero Section with Abstract Background */}
                    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-8 md:px-20 py-16 md:py-24">
                      {/* Abstract Background Visual - Layered shapes */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h1 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 'var(--font-weight-bold)',
                            lineHeight: 'var(--line-height-tight)',
                            color: 'var(--text-primary)',
                            marginBottom: '2rem'
                          }}
                        >
                          How I Turn User Experience Into Product Decisions
                        </motion.h1>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-4"
                        >
                          <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            User Experience Design is not just about screens. It's about understanding users deeply, aligning teams around real problems, and turning insights into product decisions that actually ship.
                          </p>

                          <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Over the years, I've developed a structured approach that connects user effort, domain context, and stakeholder alignment. This helps teams move from opinions to shared clarity and meaningful product action.
                          </p>
                        </motion.div>
                      </div>
                    </section>

                    {/* Main Content */}
                    <div className="px-8 md:px-20 py-12 md:py-20 space-y-24">
                      
                      {/* STAGE 1 - DEFINE THE REAL PROBLEM */}
                      <section className="space-y-6">
                        <div className="max-w-4xl mx-auto">
                          {/* Stage Label */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'rgb(37 99 235)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Stage 1
                            </span>
                          </div>

                          <h2 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem'
                          }}>
                            Start With Context, Not Screens
                          </h2>

                          <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                          }}>
                            Before evaluating any flow, I ground the work in context. Usability is not one-size-fits-all, and what feels complex in one domain may be acceptable in another.
                          </p>

                          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 mb-8">
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-primary)',
                              marginBottom: '1rem'
                            }}>
                              I align early with stakeholders on:
                            </p>
                            <div className="space-y-3">
                              {[
                                'Who the primary user is',
                                'What job they are trying to get done',
                                'What constraints exist in the business or system',
                                'What success looks like for the user'
                              ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
                                  <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    fontWeight: 'var(--font-weight-regular)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--text-secondary)'
                                  }}>
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* User Context vs Domain Context Split */}
                          <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border-l-4 border-rose-500 overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-40"></div>
                              <div className="relative z-10">
                                <h3 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '1rem'
                                }}>
                                  B2C Environments
                                </h3>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  I focus more on <strong>reducing friction and cognitive effort</strong> because user patience is low.
                                </p>
                              </div>
                            </div>

                            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border-l-4 border-slate-500 overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-full blur-3xl opacity-40"></div>
                              <div className="relative z-10">
                                <h3 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '1rem'
                                }}>
                                  B2B Tools
                                </h3>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  I pay closer attention to <strong>workflow continuity, efficiency</strong>, and reducing memory burden across complex tasks.
                                </p>
                              </div>
                            </div>
                          </div>

                          <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic'
                          }}>
                            Once the team aligns on who we're solving for and why, then we evaluate the experience.
                          </p>
                        </div>
                      </section>

                      {/* STAGE 2 - DIAGNOSE USER EFFORT */}
                      <section className="space-y-12">
                        <div className="max-w-4xl mx-auto">
                          {/* Stage Label */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
                            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'rgb(147 51 234)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Stage 2
                            </span>
                          </div>

                          <h2 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '3rem'
                          }}>
                            Diagnose Where the Experience Is Heavy
                          </h2>

                          {/* Subsection A - Map the End-to-End Journey */}
                          <div className="mb-12">
                            <h3 style={{
                              fontSize: 'var(--font-size-2xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '1.5rem'
                            }}>
                              Map the End-to-End Journey
                            </h3>

                            <p style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              marginBottom: '2rem'
                            }}>
                              Instead of reviewing isolated screens, I map the full user journey. This helps reveal where effort accumulates across steps, not just within a single interface.
                            </p>

                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 mb-6">
                              <p style={{
                                fontSize: 'var(--font-size-base)',
                                fontWeight: 'var(--font-weight-semibold)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--text-primary)',
                                marginBottom: '1rem'
                              }}>
                                My usability analysis flow typically includes:
                              </p>
                              <div className="space-y-3">
                                {[
                                  'Defining the primary scenario',
                                  'Mapping the end-to-end journey',
                                  'Identifying friction points across steps',
                                  'Ranking issues based on user impact and severity',
                                  'Validating with quick testing, research, or behavioral signals'
                                ].map((item, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center" style={{
                                      fontSize: 'var(--font-size-xs)',
                                      fontWeight: 'var(--font-weight-semibold)'
                                    }}>
                                      {index + 1}
                                    </div>
                                    <p style={{
                                      fontSize: 'var(--font-size-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      lineHeight: 'var(--line-height-relaxed)',
                                      color: 'var(--text-secondary)'
                                    }}>
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic'
                            }}>
                              I focus on understanding not just what is confusing, but <strong>where users slow down, hesitate, or abandon tasks</strong>.
                            </p>
                          </div>

                          {/* Subsection B - Evaluate Friction Using VIMM Model */}
                          <div>
                            <h3 style={{
                              fontSize: 'var(--font-size-2xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '1rem'
                            }}>
                              Evaluate Friction Using the VIMM Model
                            </h3>

                            <p style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              marginBottom: '3rem'
                            }}>
                              To understand what type of effort we are adding to the experience, I use the VIMM model as a diagnostic lens.
                            </p>

                            {/* VIMM Cards Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Card 1 - Visual Load */}
                              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-5">
                                  <Eye size={28} style={{ color: 'white' }} />
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.75rem'
                                }}>
                                  Visual Load
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: '1rem'
                                }}>
                                  Too many competing elements, weak hierarchy, cluttered layouts.
                                </p>
                                <p style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-primary)'
                                }}>
                                  Goal: Make the next step obvious without visual fatigue.
                                </p>
                              </div>

                              {/* Card 2 - Intellectual Load */}
                              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
                                  <Brain size={28} style={{ color: 'white' }} />
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.75rem'
                                }}>
                                  Intellectual Load
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: '1rem'
                                }}>
                                  Unclear labels, hidden logic, too many decisions at once.
                                </p>
                                <p style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-primary)'
                                }}>
                                  Goal: Reduce thinking and support recognition.
                                </p>
                              </div>

                              {/* Card 3 - Memory Load */}
                              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5">
                                  <Layers size={28} style={{ color: 'white' }} />
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.75rem'
                                }}>
                                  Memory Load
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: '1rem'
                                }}>
                                  Users needing to remember information across steps.
                                </p>
                                <p style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-primary)'
                                }}>
                                  Goal: Keep important information visible and accessible.
                                </p>
                              </div>

                              {/* Card 4 - Motor Load */}
                              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5">
                                  <Hand size={28} style={{ color: 'white' }} />
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-xl)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.75rem'
                                }}>
                                  Motor Load
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)',
                                  marginBottom: '1rem'
                                }}>
                                  Too many clicks, taps, scrolls, or precision-heavy actions.
                                </p>
                                <p style={{
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-primary)'
                                }}>
                                  Goal: Reduce physical effort and interaction friction.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* STAGE 3 - ALIGN TEAMS */}
                      <section className="space-y-6">
                        <div className="max-w-4xl mx-auto">
                          {/* Stage Label */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'rgb(22 163 74)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Stage 3
                            </span>
                          </div>

                          <h2 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem'
                          }}>
                            Turn Observations Into Shared Understanding
                          </h2>

                          <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                          }}>
                            Many usability challenges stem from teams having different mental models of the user and the problem.
                          </p>

                          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl border border-green-100 overflow-hidden">
                            {/* Abstract Network Visual */}
                            <div className="absolute inset-0 opacity-10">
                              <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-green-600"></div>
                              <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-emerald-600"></div>
                              <div className="absolute bottom-1/4 left-1/2 w-4 h-4 rounded-full bg-teal-600"></div>
                              <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-green-600"></div>
                              <svg className="absolute inset-0 w-full h-full">
                                <line x1="25%" y1="25%" x2="33%" y2="66%" stroke="#059669" strokeWidth="1" opacity="0.3" />
                                <line x1="33%" y1="66%" x2="66%" y2="33%" stroke="#059669" strokeWidth="1" opacity="0.3" />
                                <line x1="66%" y1="33%" x2="75%" y2="50%" stroke="#059669" strokeWidth="1" opacity="0.3" />
                              </svg>
                            </div>

                            <div className="relative z-10">
                              <p style={{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-regular)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem'
                              }}>
                                I bring Product, Engineering, and Business stakeholders together to align on:
                              </p>

                              <div className="space-y-3 pl-6">
                                {[
                                  'Who we are solving for',
                                  'What problem matters most',
                                  'What trade-offs are acceptable',
                                  'What success means from both user and business perspectives'
                                ].map((item, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                                    <p style={{
                                      fontSize: 'var(--font-size-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      lineHeight: 'var(--line-height-relaxed)',
                                      color: 'var(--text-secondary)'
                                    }}>
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>

                              <p style={{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-regular)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--text-secondary)',
                                marginTop: '1.5rem',
                                fontStyle: 'italic'
                              }}>
                                This reduces subjective debates later and ensures we are solving the same problem, not just critiquing interfaces.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* STAGE 4 - TURN INSIGHT INTO PRODUCT ACTION */}
                      <section className="space-y-12">
                        <div className="max-w-4xl mx-auto">
                          {/* Stage Label */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
                            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                            <span style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'rgb(234 88 12)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Stage 4
                            </span>
                          </div>

                          <h2 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '3rem'
                          }}>
                            Turn Usability Into Product Decisions
                          </h2>

                          {/* Subsection A - Communicating in Terms of Impact */}
                          <div className="mb-12">
                            <h3 style={{
                              fontSize: 'var(--font-size-2xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '1.5rem'
                            }}>
                              Communicating in Terms of Impact
                            </h3>

                            <p style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              marginBottom: '3rem'
                            }}>
                              Usability insights only matter if they influence decisions. I translate findings into language that connects user effort to product and business outcomes.
                            </p>

                            {/* Observation vs Product Impact Cards */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <div className="space-y-4">
                                <h4 style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-tertiary)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em'
                                }}>
                                  Instead of saying:
                                </h4>
                                <div className="bg-neutral-100 p-6 rounded-xl border-l-4 border-neutral-400">
                                  <p style={{
                                    fontSize: 'var(--font-size-lg)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    lineHeight: 'var(--line-height-relaxed)',
                                    color: 'var(--text-secondary)',
                                    fontStyle: 'italic'
                                  }}>
                                    "This is confusing"
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  color: 'var(--text-tertiary)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em'
                                }}>
                                  I frame it as:
                                </h4>
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-500">
                                  <div className="space-y-2">
                                    {[
                                      'Increased drop-off risk',
                                      'Higher support dependency',
                                      'Lower task completion confidence',
                                      'Slower task execution for power users'
                                    ].map((item, index) => (
                                      <div key={index} className="flex items-start gap-2">
                                        <span style={{ color: 'var(--text-tertiary)' }}>•</span>
                                        <p style={{
                                          fontSize: 'var(--font-size-base)',
                                          fontWeight: 'var(--font-weight-regular)',
                                          lineHeight: 'var(--line-height-relaxed)',
                                          color: 'var(--text-secondary)'
                                        }}>
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              I use <strong>before-and-after journeys, effort hotspots</strong>, and real usability observations to make the problem visible and urgent.
                            </p>
                          </div>

                          {/* Subsection B - Prioritizing for Implementation */}
                          <div>
                            <h3 style={{
                              fontSize: 'var(--font-size-2xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '1.5rem'
                            }}>
                              Prioritizing for Implementation
                            </h3>

                            <p style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              marginBottom: '3rem'
                            }}>
                              After alignment, I work with Product and Engineering to prioritize usability improvements alongside business goals.
                            </p>

                            {/* Three-column layout */}
                            <div className="grid md:grid-cols-3 gap-6 relative mb-6">
                              {/* Background shapes */}
                              <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
                              </div>

                              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                                <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center mb-4" style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)'
                                }}>
                                  1
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.5rem'
                                }}>
                                  Quick Wins
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  For immediate friction reduction
                                </p>
                              </div>

                              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                                <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center mb-4" style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)'
                                }}>
                                  2
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.5rem'
                                }}>
                                  Structural Improvements
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  To strengthen key journeys
                                </p>
                              </div>

                              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                                <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center mb-4" style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)'
                                }}>
                                  3
                                </div>
                                <h4 style={{
                                  fontSize: 'var(--font-size-lg)',
                                  fontWeight: 'var(--font-weight-semibold)',
                                  lineHeight: 'var(--line-height-snug)',
                                  color: 'var(--text-primary)',
                                  marginBottom: '0.5rem'
                                }}>
                                  Longer-term Product Bets
                                </h4>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  That require deeper changes
                                </p>
                              </div>
                            </div>

                            <p style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic'
                            }}>
                              This ensures usability is treated as a <strong>product quality metric</strong> and not just a surface-level refinement.
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* FINAL SECTION */}
                      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-10 py-16 rounded-3xl">
                        {/* Soft gradient background */}
                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                          <h2 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '2rem'
                          }}>
                            What This Way of Working Changes
                          </h2>

                          <div className="space-y-4 mb-8">
                            {[
                              'Aligns cross-functional teams around a shared understanding of users',
                              'Reduces subjective design debates by grounding decisions in user effort',
                              'Connects usability insights to business and product outcomes',
                              'Turns usability into a continuous product mindset, not a one-time activity'
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <p style={{
                                  fontSize: 'var(--font-size-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  lineHeight: 'var(--line-height-relaxed)',
                                  color: 'var(--text-secondary)'
                                }}>
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>

                          <p style={{
                            fontSize: 'var(--font-size-xl)',
                            fontWeight: 'var(--font-weight-medium)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-primary)',
                            fontStyle: 'italic'
                          }}>
                            For me, usability is not a testing phase. It's a mindset that shapes how products are defined, built, and improved.
                          </p>
                        </div>
                      </section>

                    </div>
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