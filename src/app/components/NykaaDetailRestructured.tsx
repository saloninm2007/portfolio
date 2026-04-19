import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Users, TrendingUp, DollarSign, Zap, Target, Eye, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';
import nykaaPLPImage from 'figma:asset/3783797e9dfae78f3df2083643be4f593ce9d100.png';

// Research images
import researchWorkshop from 'figma:asset/52bfce7702ee37581f659042c56f3f0d35b690b7.png';
import retailerInterview1 from 'figma:asset/4c361cd4eae7e6ab2583a7f71c33010b025c91c6.png';
import retailerInterview2 from 'figma:asset/72b77894ec034064fae806e3cd3b9e0f88afaef9.png';

// Design decision images
import nykaaDesignUI from 'figma:asset/3e5d04adff641e6d2cc881dde4324f4886ef7aa7.png';
import nykaaFullPLP from 'figma:asset/38328744e743157bdf3a798dbfd9f86c04d23f0d.png';
import nykaaPricingUI from 'figma:asset/b66f053a6e0d87fb090cce70c705349904081fe3.png';
import nykaaQuantityPricing from 'figma:asset/bfaff6a8d3b25ab701cf14acc8cf3086e82adca4.png';
import nykaaBestPrice from 'figma:asset/1a62bad2d6f8791057d919c270a743de5721c068.png';

interface NykaaDetailRestructuredProps {
  project: any;
  onClose: () => void;
}

export function NykaaDetailRestructured({ project, onClose }: NykaaDetailRestructuredProps) {
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
          className="fixed inset-0 bg-black/80 z-50"
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
                          src={nykaaPLPImage}
                          alt="Nykaa Superstore Product Listing Page"
                          className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover object-top"
                        />
                      </div>
                    </section>

                    {/* 1. Introduction / Context */}
                    <section>
                      <h1 style={{
                        fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                        fontWeight: 'var(--font-weight-bold)',
                        lineHeight: 'var(--line-height-tight)',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                      }}>
                        Superstore by Nykaa
                      </h1>
                      <p style={{
                        fontSize: 'var(--font-size-xl)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                      }}>
                        Pricing Clarity That Builds Retailer Confidence
                      </p>
                      <p style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--text-secondary)',
                        maxWidth: '45rem',
                        marginBottom: '2rem'
                      }}>
                        Nykaa Superstore serves over 100,000 small retailers across India who source beauty and personal care products for their shops. The project focused on redesigning the Product Listing Page (PLP) to help retailers understand pricing and value clearly, enabling confident purchase decisions without requiring sales support.
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

                    {/* 2. Core Problem */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        The Core Problem
                      </h2>

                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-8 rounded-xl">
                        <p style={{
                          fontSize: 'var(--font-size-lg)',
                          fontWeight: 'var(--font-weight-regular)',
                          lineHeight: 'var(--line-height-relaxed)',
                          color: 'var(--text-primary)'
                        }}>
                          Retailers could see prices on the Product Listing Page, but they couldn't confidently evaluate value. They had to mentally compare MRP, discounts, quantity-based pricing, and profit margins across multiple products — creating decision friction. Many relied on Business Development Executives (BDEs) to explain which products offered the best deal, turning what should be a self-service experience into a dependency on sales support.
                        </p>
                      </div>
                    </section>

                    {/* 3. Signals That Triggered the Project */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Signals That Triggered This Project
                      </h2>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                          <div className="mb-4">
                            <ShoppingCart size={32} style={{ color: 'rgb(234 88 12)' }} />
                          </div>
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem'
                          }}>
                            Frequent Navigation Loops
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Retailers repeatedly moved between PLP, cart, and homepage to compare pricing and validate their choices.
                          </p>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                          <div className="mb-4">
                            <Users size={32} style={{ color: 'rgb(234 88 12)' }} />
                          </div>
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem'
                          }}>
                            High BDE Dependency
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Many orders were placed only after consulting with Business Development Executives to clarify pricing.
                          </p>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                          <div className="mb-4">
                            <TrendingUp size={32} style={{ color: 'rgb(234 88 12)' }} />
                          </div>
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem'
                          }}>
                            Weekend Cart Abandonment
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Cart abandonment spiked during weekends when BDEs were unavailable to answer pricing questions.
                          </p>
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

                      <div className="space-y-6">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                            <Eye size={24} style={{ color: 'rgb(234 88 12)' }} />
                          </div>
                          <div className="flex-1">
                            <h3 style={{
                              fontSize: 'var(--font-size-xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              Price visibility does not equal price confidence
                            </h3>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Even when prices are displayed, retailers struggle to evaluate value when pricing variables (MRP, discount, quantity tiers, profit margin) are fragmented across the interface.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                            <BarChart3 size={24} style={{ color: 'rgb(234 88 12)' }} />
                          </div>
                          <div className="flex-1">
                            <h3 style={{
                              fontSize: 'var(--font-size-xl)',
                              fontWeight: 'var(--font-weight-semibold)',
                              lineHeight: 'var(--line-height-snug)',
                              color: 'var(--text-primary)',
                              marginBottom: '0.5rem'
                            }}>
                              High cognitive load during price evaluation
                            </h3>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              Retailers are forced to do mental math and cross-reference multiple data points, making the comparison process exhausting and time-consuming.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* 5. Research & Validation */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                      }}>
                        Research & Validation
                      </h2>
                      
                      <p style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                      }}>
                        To validate our hypothesis, we conducted mixed-method research combining contextual interviews with retailers, task-based usability testing, and behavioral data analysis to understand how pricing decisions are actually made.
                      </p>

                      {/* Research Images Bento Grid */}
                      <div className="mb-8 grid grid-cols-3 gap-4 auto-rows-[200px]">
                        {/* Large image - spans 2 columns and 2 rows */}
                        <div className="col-span-2 row-span-2 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src={researchWorkshop}
                            alt="Research Workshop"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                        
                        {/* Small image 1 - top right */}
                        <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src={retailerInterview1}
                            alt="Retailer Interview 1"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                        
                        {/* Small image 2 - bottom right */}
                        <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img
                            src={retailerInterview2}
                            alt="Retailer Interview 2"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Research Methods Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                          }}>
                            Contextual Interviews
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Conducted in-depth interviews with 24 retailers in their actual shops to observe how they make purchasing decisions in their natural environment. We watched them browse products, compare prices, and place orders while asking them to think aloud.
                          </p>
                        </div>

                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                          }}>
                            Task-Based Usability Testing
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Asked retailers to complete specific tasks like "Find the best value shampoo for your shop" and "Compare profit margins across three products." Measured task completion time, error rates, and points of confusion.
                          </p>
                        </div>

                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                          }}>
                            Behavioral Analytics
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Analyzed over 100,000 user sessions to identify navigation patterns, page abandonment points, and friction areas. Tracked metrics like time spent on PLP, cart-to-checkout ratio, and weekend vs. weekday conversion rates.
                          </p>
                        </div>

                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                          <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            lineHeight: 'var(--line-height-snug)',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                          }}>
                            BDE Feedback Sessions
                          </h3>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            Interviewed Business Development Executives to understand the most common questions retailers ask about pricing, discounts, and product value. Mapped recurring pain points that drove retailer dependency on sales support.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 6. Key Insights */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Key Insights from Research
                      </h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: <DollarSign size={20} />, text: 'MRP serves as the primary pricing anchor — retailers compare all discounts against it' },
                          { icon: <Target size={20} />, text: 'Profit margin per unit matters more than overall order value for small retailers' },
                          { icon: <Zap size={20} />, text: 'Retailers prefer quick scanning over detailed calculations when browsing products' },
                          { icon: <BarChart3 size={20} />, text: 'Quantity-based pricing creates confusion when not clearly labeled as "best option"' },
                          { icon: <Eye size={20} />, text: '"Best price" is contextual — it depends on stock needs, not just the lowest unit price' }
                        ].map((insight, index) => (
                          <div key={index} className="flex gap-3 items-start bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex-shrink-0 text-orange-600 mt-0.5">
                              {insight.icon}
                            </div>
                            <p style={{
                              fontSize: 'var(--font-size-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              {insight.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 7. Design Principles */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Design Principles
                      </h2>

                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          { title: 'Make the best option immediately obvious', description: 'Highlight value without requiring calculation' },
                          { title: 'Reduce mental effort at decision point', description: 'Present all pricing factors in one glance' },
                          { title: 'Enable independent ordering', description: 'Eliminate dependency on sales support' }
                        ].map((principle, index) => (
                          <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white mb-4">
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
                              {principle.title}
                            </h3>
                            <p style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-regular)',
                              lineHeight: 'var(--line-height-relaxed)',
                              color: 'var(--text-secondary)'
                            }}>
                              {principle.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 8. Design Decisions & Rationale */}
                    <section>
                      <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: 'var(--line-height-snug)',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}>
                        Design Decisions & Rationale
                      </h2>

                      <div className="space-y-12">
                        {project.designDecisions?.map((decision: any, index: number) => (
                          <div key={index} className="grid md:grid-cols-2 gap-6 items-start">
                            {/* Decision Text */}
                            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
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
                              <div className="pl-4 border-l-2 border-orange-600">
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
                            
                            {/* Design Snippet Image */}
                            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-300">
                              <img
                                src={index === 0 ? nykaaFullPLP : index === 1 ? nykaaBestPrice : index === 2 ? nykaaQuantityPricing : index === 3 ? nykaaPricingUI : nykaaDesignUI}
                                alt={`UI Design: ${decision.title}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 9. Impact */}
                    {project.impactStats && (
                      <section>
                        <h2 style={{
                          fontSize: 'var(--font-size-3xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: 'var(--line-height-snug)',
                          color: 'var(--text-primary)',
                          marginBottom: '2rem'
                        }}>
                          Impact After Release
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                          {project.impactStats.map((stat: any, index: number) => (
                            <div 
                              key={index}
                              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500"
                            >
                              <div style={{
                                fontSize: 'var(--font-size-5xl)',
                                fontWeight: 'var(--font-weight-bold)',
                                lineHeight: 'var(--line-height-tight)',
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem'
                              }}>
                                {stat.value}
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
                          ))}
                        </div>
                      </section>
                    )}

                    {/* 10. Future Improvements */}
                    {project.futureImprovements && (
                      <section>
                        <h2 style={{
                          fontSize: 'var(--font-size-3xl)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: 'var(--line-height-snug)',
                          color: 'var(--text-primary)',
                          marginBottom: '2rem'
                        }}>
                          What I'd Improve Next
                        </h2>

                        <div className="space-y-3">
                          {project.futureImprovements.map((improvement: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                              <p style={{
                                fontSize: 'var(--font-size-base)',
                                fontWeight: 'var(--font-weight-regular)',
                                lineHeight: 'var(--line-height-relaxed)',
                                color: 'var(--text-secondary)'
                              }}>
                                {improvement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

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