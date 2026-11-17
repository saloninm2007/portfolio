import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, TrendingDown, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import CoverSureBannerImage from '@/imports/Container-59-3004';
import CoverSureBeforeImage from '@/imports/Container-59-3024';
import CoverSureAfterImage from '@/imports/Container-59-3045';
import CoverSureOverviewProblem from '@/imports/Frame2147227082';
import CoverSureUserBehaviour from '@/imports/Frame2147227079';
import researchAnalysisImage from 'figma:asset/4b7ae9d70604793db3c1f1dfd4e15080626de71f.png';
import executionScreenshot from 'figma:asset/a2c0d07f1565ef096bf1c8f7269400007289dbe8.png';
import executionScreenshot2 from 'figma:asset/54b73eca8927df901a71ad5e60ead7cc6a34f6d4.png';
import executionScreenshot3 from 'figma:asset/31e9a9b1b147976c1d4f6a38f6251944d22ef07c.png';
import executionScreenshot4 from 'figma:asset/77f4f505d330903844ba28716a6cb86e79c771d0.png';
import coverSureHeaderImage from 'figma:asset/1940585ebaa2046707cae339d6a3a23e2c860769.png';

interface CoverSureDetailProps {
  project: any;
  nextProject?: any;
  onClose: () => void;
  onNextProject?: () => void;
}

export function CoverSureDetail({ project, onClose, nextProject, onNextProject }: CoverSureDetailProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);

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

  useEffect(() => {
    if (!project) return;

    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollTop = container.scrollTop;
      
      setIsNavSticky(scrollTop > 250);
      
      const sections = container.querySelectorAll('[data-section]');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        
        if (rect.top <= 200 && rect.bottom >= 200 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    const modalContent = document.querySelector('.modal-scroll-container');
    modalContent?.addEventListener('scroll', handleScroll);

    return () => {
      modalContent?.removeEventListener('scroll', handleScroll);
    };
  }, [project]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    ...(project.researchTitle ? [{ id: 'research', label: 'Research' }] : []),
    { id: 'problem', label: 'Problem' },
    ...(project.researchTitle ? [] : [{ id: 'discovery', label: 'Discovery' }]),
    ...(project.constraints ? [{ id: 'constraints', label: 'Constraints' }] : []),
    { id: 'strategy', label: project.strategyTitle || 'Strategy' },
    { id: 'execution', label: 'Execution' },
    { id: 'impact', label: 'Impact' },
    { id: 'next', label: 'Next' }
  ];

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
          <div className="h-full overflow-y-auto modal-scroll-container">
            <div className="min-h-screen py-12 md:py-20 px-4 md:px-6 flex items-start justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: 'spring', damping: 25 }}
                className="w-full max-w-6xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Navigation */}
                {isNavSticky && (
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="sticky top-0 z-20 bg-white border-b border-neutral-200 shadow-lg rounded-t-xl md:rounded-t-2xl"
                  >
                    <div className="overflow-x-auto scrollbar-hide">
                      <nav className="flex gap-2 md:gap-3 px-4 md:px-12 py-3 md:py-4 min-w-max md:min-w-0">
                        {navItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                              activeSection === item.id
                                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white'
                                : 'hover:bg-neutral-100'
                            }`}
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: activeSection === item.id ? 'white' : 'var(--text-secondary)'
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </motion.div>
                )}

                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                  {/* Close Button - Always visible */}
                  <button
                    onClick={onClose}
                    className="fixed top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer z-50 shadow-2xl border-2 border-neutral-200"
                  >
                    <X size={24} className="text-neutral-800" />
                  </button>

                  {/* Banner Image - Always show the regular image as banner */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback 
                      src={coverSureHeaderImage} 
                      alt="CoverSure Header" 
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Initial Navigation */}
                  <div className="bg-white border-b border-neutral-200 shadow-sm">
                    <div className="overflow-x-auto scrollbar-hide">
                      <nav className="flex gap-2 md:gap-3 px-4 md:px-12 py-3 md:py-4 min-w-max md:min-w-0">
                        {navItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                              activeSection === item.id
                                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white'
                                : 'hover:bg-neutral-100'
                            }`}
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: activeSection === item.id ? 'white' : 'var(--text-secondary)'
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-16 space-y-20 md:space-y-32">
                    {/* Hero Section */}
                    <div>
                      <div className="mb-6">
                        <p style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-semibold)',
                          letterSpacing: '0.1em',
                          color: 'rgb(124 58 237)',
                          marginBottom: '1.5rem'
                        }}>{project.metaLine}</p>
                        <h1 style={{
                          fontSize: 'clamp(2rem, 6vw, 4rem)',
                          fontWeight: 'var(--font-weight-bold)',
                          lineHeight: 'var(--line-height-tight)',
                          color: 'var(--text-primary)',
                          marginBottom: '1.5rem'
                        }}>
                          CoverSure Home Page Redesign
                        </h1>
                      </div>
                    </div>

                    {/* Overview & Problem Combined */}
                    <div data-section="overview" className="-mt-12 md:-mt-16">
                      <CoverSureOverviewProblem />
                    </div>

                    {/* Problem section for navigation */}
                    <div data-section="problem"></div>

                    {/* Before/After Comparison */}
                    <div className="grid md:grid-cols-2 gap-4 -mt-8 md:-mt-12">
                      <div className="aspect-[4/3] relative bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden">
                        <CoverSureBeforeImage />
                      </div>
                      <div className="aspect-[4/3] relative bg-gradient-to-br from-violet-100 to-cyan-100 rounded-xl overflow-hidden">
                        <CoverSureAfterImage />
                      </div>
                    </div>

                    {/* User Behaviour Section */}
                    <div>
                      <CoverSureUserBehaviour />
                    </div>

                    {/* Research Section */}
                    {project.researchTitle && (
                      <div data-section="research" className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">{project.researchTitle}</h2>
                        
                        <div className="space-y-6">
                          {project.researchDescription.map((para: string, i: number) => (
                            <p key={i} className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Hypotheses */}
                        {project.researchHypotheses && project.researchHypotheses.length > 0 && (
                          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 border-2 border-neutral-300 rounded-2xl p-10 md:p-12 my-12">
                            <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-6 tracking-tight">
                              Research Hypotheses:
                            </h3>
                            <ul className="space-y-5">
                              {project.researchHypotheses.map((hypothesis: string, i: number) => (
                                <li key={i} className="text-base md:text-lg text-neutral-700 leading-relaxed flex items-start gap-4">
                                  <span className="text-violet-500 text-xl font-bold mt-0.5 flex-shrink-0">–</span>
                                  <span>{hypothesis}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Findings */}
                        {project.researchFindings && project.researchFindings.length > 0 && (
                          <div className="mt-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8">Key Findings</h3>
                            <ul className="space-y-6">
                              {project.researchFindings.map((finding: string, i: number) => (
                                <li key={i} className="flex gap-4">
                                  <span className="text-cyan-500 mt-1 flex-shrink-0">→</span>
                                  <span className="text-base md:text-lg text-neutral-700 leading-relaxed">{finding}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Quote */}
                        {project.researchQuote && (
                          <div className="bg-gradient-to-br from-cyan-50 to-violet-50 p-8 md:p-10 rounded-2xl border-2 border-violet-200 my-12">
                            <div className="text-5xl md:text-6xl text-violet-300 mb-4 leading-none">"</div>
                            <p className="text-lg md:text-xl font-medium text-neutral-800 leading-relaxed mb-4 italic">
                              {project.researchQuote}
                            </p>
                            <div className="text-sm text-neutral-500 font-medium">Retailer Feedback</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Discovery Section */}
                    {!project.researchTitle && (
                      <div data-section="discovery" className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">What We Learned from Users</h2>

                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                          {/* Left: Insights */}
                          <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-neutral-600 mb-8">Key Insights</h3>
                            <ul className="space-y-6">
                              {project.discoveryInsights && project.discoveryInsights.map((insight: string, i: number) => (
                                <li key={i} className="flex gap-4">
                                  <span className="text-cyan-500 mt-1 flex-shrink-0">→</span>
                                  <span className="text-base md:text-lg text-neutral-700 leading-relaxed">{insight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right: Quotes */}
                          <div className="space-y-8">
                            <h3 className="text-lg font-semibold text-neutral-600 mb-8">User Quotes</h3>
                            {project.discoveryQuotes && project.discoveryQuotes.map((quote: string, i: number) => (
                              <div key={i} className="bg-neutral-50 p-6 md:p-8 rounded-xl border-l-4 border-neutral-300">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed italic">"{quote}"</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hypothesis Card */}
                        {project.discoveryHypothesis && (
                          <div className="bg-neutral-50 p-8 md:p-12 rounded-2xl border-l-4 border-neutral-400 mt-16">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 text-neutral-800">
                              <Zap className="text-neutral-600" size={28} />
                              Hypothesis
                            </h3>
                            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">{project.discoveryHypothesis}</p>
                          </div>
                        )}

                        {/* Journey Diagram Placeholder */}
                        <div className="mt-12 rounded-xl overflow-hidden">
                          <img 
                            src={researchAnalysisImage} 
                            alt="Research Analysis & Logic Snippet" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}

                    {/* Constraints Section */}
                    {project.constraints && (
                      <div data-section="constraints" className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">Constraints</h2>

                        <ul className="space-y-6 mt-12">
                          {project.constraints.map((constraint: string, i: number) => (
                            <li key={i} className="flex gap-4">
                              <span className="text-red-500 mt-1 flex-shrink-0 text-2xl">×</span>
                              <span className="text-lg md:text-xl text-neutral-700 leading-relaxed">{constraint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Strategy Section */}
                    <div data-section="strategy" className="space-y-8">
                      <h2 className="text-4xl md:text-5xl font-bold">{project.strategyTitle || 'Design Strategy'}</h2>
                      
                      {project.strategyDescription && (
                        <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
                          {project.strategyDescription}
                        </p>
                      )}

                      {/* Principle Cards */}
                      {(project.strategyPrinciples || project.designPrinciples) && (
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                          {(project.strategyPrinciples || project.designPrinciples).map((principle: any, i: number) => (
                            <div key={i} className="bg-neutral-50 border border-neutral-200 p-8 rounded-xl space-y-4">
                              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                {i + 1}
                              </div>
                              <h4 className="text-xl font-semibold text-neutral-900">{principle.title}</h4>
                              <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Execution Section */}
                    <div data-section="execution" className="space-y-12">
                      <h2 className="text-4xl md:text-5xl font-bold">{project.executionTitle}</h2>

                      {project.executionDecisions.map((item: any, i: number) => (
                        <div key={i} className="space-y-6">
                          {/* Decision - Black header */}
                          <div className="bg-neutral-900 text-white p-8 rounded-xl">
                            <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-2">Decision</h3>
                            <p className="text-2xl font-bold">{item.decision}</p>
                          </div>

                          {/* Image - Full width below decision */}
                          <div className="rounded-xl overflow-hidden">
                            <img 
                              src={i === 1 ? executionScreenshot2 : i === 2 ? executionScreenshot3 : i === 3 ? executionScreenshot4 : executionScreenshot} 
                              alt="Annotated Screenshot" 
                              className="w-full h-auto"
                            />
                          </div>

                          {/* What & Why + Why It Matters - Below image */}
                          <div className="pl-6 border-l-4 border-violet-600 space-y-4">
                            <div>
                              <h4 className="text-lg font-bold text-violet-600 mb-2">What & Why</h4>
                              <p className="text-neutral-700 leading-relaxed">{item.why}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-cyan-600 mb-2">Why It Matters</h4>
                              <p className="text-neutral-700 leading-relaxed">{item.reasoning}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Impact Section */}
                    <div data-section="impact" className="space-y-8">
                      <h2 className="text-4xl md:text-5xl font-bold">{project.impactTitle}</h2>

                      {/* Large Stat Cards */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {project.impactStats.map((stat: any, i: number) => (
                          <div key={i} className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-2xl border-t-4 border-neutral-400">
                            <div className="text-5xl md:text-6xl font-bold text-neutral-800 mb-3">
                              {stat.value}
                            </div>
                            <div className="text-lg font-bold text-neutral-800 mb-2">
                              {stat.label}
                            </div>
                            <p className="text-sm text-neutral-600">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Interpretation */}
                      <div className="bg-neutral-50 p-8 rounded-xl mt-8">
                        <p className="text-lg text-neutral-700 leading-relaxed">
                          {project.impactInterpretation || project.impactNarrative}
                        </p>
                      </div>
                    </div>

                    {/* Next Phase Section */}
                    <div data-section="next" className="space-y-8">
                      <h2 className="text-4xl md:text-5xl font-bold">{project.nextPhaseTitle}</h2>
                      
                      <p className="text-xl text-neutral-700 leading-relaxed">
                        {project.nextPhaseDescription}
                      </p>

                      {/* Roadmap Pills */}
                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {project.nextPhaseRoadmap.map((item: any, i: number) => (
                          <div key={i} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border-t-4 border-indigo-500">
                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                            <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>

                      {/* Closing Reflection */}
                      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-10 md:p-12 rounded-2xl mt-12">
                        <p className="text-2xl md:text-3xl italic leading-relaxed">
                          "{project.closingReflection}"
                        </p>
                      </div>
                    </div>

                    {/* Next Case Study */}
                    {nextProject && onNextProject && (
                      <div className="border-t-2 border-neutral-200 pt-16">
                        <div className="mb-8">
                          <p className="text-neutral-500 text-sm mb-2">Up Next</p>
                          <h3 className="text-3xl font-bold">Continue Exploring</h3>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          onClick={onNextProject}
                          className="group cursor-pointer bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden"
                        >
                          <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                              <img 
                                src={nextProject.image} 
                                alt={nextProject.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            
                            <div className="p-10 flex flex-col justify-center text-white">
                              <div className="flex items-center gap-3 text-sm text-neutral-300 mb-4">
                                <span>{nextProject.company}</span>
                                <span>•</span>
                                <span>{nextProject.year}</span>
                              </div>
                              <h4 className="text-3xl font-bold mb-4">{nextProject.title}</h4>
                              <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                                <span>View Case Study</span>
                                <ArrowRight size={20} />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
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