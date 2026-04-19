import { motion, AnimatePresence } from 'motion/react';
import { X, Quote, Lightbulb, AlertCircle, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CoverSureDetail } from './CoverSureDetail';
import { CoverSureDetailRestructured } from './CoverSureDetailRestructured';
import { NykaaDetailRestructured } from './NykaaDetailRestructured';
import { VIMMFrameworkCaseStudy } from './VIMMFrameworkCaseStudy';

interface ProjectDetailProps {
  project: {
    title: string;
    company: string;
    year: string;
    category: string;
    description: string;
    challenge?: string;
    solution?: string;
    impact: string[];
    image: string | any;
    headerImage?: any;
    isNewFormat?: boolean;
    // Extended fields for detailed case studies
    overview?: string;
    userProblem?: {
      persona?: string;
      description?: string;
      painPoints?: string[];
    };
    businessProblem?: string[];
    research?: {
      hypothesis?: string[];
      methodology?: string;
      insights?: string[];
      images?: string[];
    };
    designGuidelines?: string[];
    constraints?: string[];
    finalDesigns?: {
      title: string;
      description: string;
      image?: string;
    }[];
    nextSteps?: string[];
  } | null;
  nextProject?: {
    title: string;
    company: string;
    year: string;
    category: string;
    image: string | any;
  } | null;
  onClose: () => void;
  onNextProject?: () => void;
}

export function ProjectDetail({ project, nextProject, onClose, onNextProject }: ProjectDetailProps) {
  // ALL HOOKS MUST BE CALLED FIRST - before any conditional returns
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
      
      // Make nav sticky after scrolling past 300px (hero image height)
      setIsNavSticky(scrollTop > 250);
      
      const sections = container.querySelectorAll('[data-section]');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-section');
        
        // Check if section is in viewport (considering the sticky nav height)
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

  // Auto-scroll active bookmark into view
  useEffect(() => {
    const activeButton = document.querySelector(`[data-nav-id="${activeSection}"]`);
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeSection]);

  // NOW we can do conditional returns after all hooks are called
  
  // For CoverSure and Nykaa - use the editorial detail view with sticky nav
  if (project && project.isNewFormat) {
    // Check if this is the CoverSure project (by checking isRestructured flag or company name)
    if (project.company === 'CoverSure' || project.isRestructured) {
      return (
        <CoverSureDetailRestructured 
          project={project} 
          onClose={onClose}
        />
      );
    }
    
    // Check if this is the Nykaa project
    if (project.company === 'Nykaa') {
      return (
        <NykaaDetailRestructured 
          project={project} 
          onClose={onClose}
        />
      );
    }
    
    // Check if this is the VIMM Framework project
    if (project.company === 'Framework' || project.isVIMMFramework) {
      return (
        <VIMMFrameworkCaseStudy 
          project={project} 
          onClose={onClose}
        />
      );
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Build navigation items based on available sections
  const getNavItems = () => {
    if (!project) return [];
    
    const items = [];
    
    if (project.overview) items.push({ id: 'overview', label: 'Overview' });
    if (project.userProblem) items.push({ id: 'user', label: 'User' });
    if (project.businessProblem) items.push({ id: 'business', label: 'Business' });
    if (project.research) items.push({ id: 'research', label: 'Research' });
    if (project.designGuidelines) items.push({ id: 'guidelines', label: 'Guidelines' });
    if (project.constraints) items.push({ id: 'constraints', label: 'Constraints' });
    if (project.finalDesigns) items.push({ id: 'designs', label: 'Designs' });
    if (project.challenge && project.solution) items.push({ id: 'challenge', label: 'Challenge' });
    items.push({ id: 'impact', label: 'Impact' });
    if (project.nextSteps) items.push({ id: 'next', label: 'Next Steps' });
    
    return items;
  };

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
                {/* Sticky Floating Navigation - Appears on scroll, stays within modal */}
                {isNavSticky && (
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="sticky top-0 z-20 bg-white border-b border-neutral-200 shadow-lg rounded-t-xl md:rounded-t-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="overflow-x-auto scrollbar-hide">
                      <nav className="flex gap-2 md:gap-6 px-4 md:px-12 py-3 md:py-4 min-w-max md:min-w-0">
                        {getNavItems().map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 md:px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap text-sm md:text-base ${
                              activeSection === item.id
                                ? 'bg-neutral-900 text-white'
                                : 'text-neutral-600 hover:bg-neutral-100'
                            }`}
                            data-nav-id={item.id}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </motion.div>
                )}

                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[250px] md:h-[400px] object-cover"
                    />
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer z-10"
                    >
                      <X size={20} className="md:hidden" />
                      <X size={24} className="hidden md:block" />
                    </button>
                  </div>

                  {/* Navigation Below Image - Initial Position */}
                  <div className="bg-white border-b border-neutral-200 shadow-sm">
                    <div className="overflow-x-auto scrollbar-hide">
                      <nav className="flex gap-2 md:gap-6 px-4 md:px-12 py-3 md:py-4 min-w-max md:min-w-0">
                        {getNavItems().map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 md:px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap text-sm md:text-base ${
                              activeSection === item.id
                                ? 'bg-neutral-900 text-white'
                                : 'text-neutral-600 hover:bg-neutral-100'
                            }`}
                            data-nav-id={item.id}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  <div className="p-6 md:p-12 space-y-12 md:space-y-16">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 text-sm md:text-base text-neutral-500 flex-wrap">
                        <span>{project.company}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.category}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl mb-4 md:mb-6">{project.title}</h2>
                      <p className="text-base md:text-xl text-neutral-600 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Overview - Highlighted */}
                    {project.overview && (
                      <div data-section="overview" className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 md:p-10 rounded-xl md:rounded-2xl border-l-4 border-neutral-900">
                        <div className="flex items-start gap-3 md:gap-4">
                          <Lightbulb className="text-neutral-900 flex-shrink-0 mt-1" size={24} />
                          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">{project.overview}</p>
                        </div>
                      </div>
                    )}

                    {/* User Problem */}
                    {project.userProblem && (
                      <div data-section="user">
                        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                          <span className="text-4xl md:text-5xl">🎯</span>
                          <h3 className="text-3xl md:text-4xl">Meet the User</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                          {/* Persona Card */}
                          {project.userProblem.persona && (
                            <div className="md:col-span-2 bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
                              <p className="text-sm md:text-base text-neutral-800 leading-relaxed">{project.userProblem.persona}</p>
                            </div>
                          )}
                          
                          {/* Image placeholder */}
                          <div className="w-full h-full min-h-[150px] md:min-h-[200px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                            <span className="text-sm text-blue-400">[ User Photo ]</span>
                          </div>
                        </div>

                        {/* Quote */}
                        {project.userProblem.description && (
                          <div className="bg-neutral-900 text-white p-6 md:p-8 rounded-xl mb-6 md:mb-8 relative">
                            <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-700" size={36} />
                            <p className="text-base md:text-xl leading-relaxed italic relative z-10">{project.userProblem.description}</p>
                          </div>
                        )}

                        {/* Pain Points in Cards */}
                        {project.userProblem.painPoints && project.userProblem.painPoints.length > 0 && (
                          <div>
                            <h4 className="text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2">
                              <AlertCircle className="text-red-500" size={20} />
                              Pain Points
                            </h4>
                            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                              {project.userProblem.painPoints.map((point, index) => (
                                <div key={index} className="bg-red-50 p-5 md:p-6 rounded-lg border-l-4 border-red-500">
                                  <p className="text-sm md:text-base text-neutral-700">{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Business Problem - 2 Column */}
                    {project.businessProblem && project.businessProblem.length > 0 && (
                      <div data-section="business" className="bg-amber-50 p-6 md:p-10 rounded-xl md:rounded-2xl border border-amber-100">
                        <h3 className="text-2xl md:text-3xl mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <span className="text-3xl md:text-4xl">💼</span>
                          Business Problem
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          {project.businessProblem.map((item, index) => (
                            <div key={index} className="flex gap-3 md:gap-4">
                              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 text-sm">
                                <span className="text-amber-900">{index + 1}</span>
                              </div>
                              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Research */}
                    {project.research && (
                      <div data-section="research">
                        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                          <span className="text-4xl md:text-5xl">✨</span>
                          <h3 className="text-3xl md:text-4xl">Research & Insights</h3>
                        </div>
                        
                        {/* Hypothesis - Horizontal Cards */}
                        {project.research.hypothesis && project.research.hypothesis.length > 0 && (
                          <div className="mb-8 md:mb-10">
                            <h4 className="text-xl md:text-2xl mb-4 md:mb-6">Hypothesis</h4>
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                              {project.research.hypothesis.map((item, index) => (
                                <div key={index} className="bg-purple-50 p-5 md:p-6 rounded-xl border-l-4 border-purple-500">
                                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Methodology - Full Width with Image */}
                        {project.research.methodology && (
                          <div className="mb-8 md:mb-10">
                            <h4 className="text-xl md:text-2xl mb-4 md:mb-6">Research Methodology</h4>
                            <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                              <div className="md:col-span-3 bg-neutral-50 p-6 md:p-8 rounded-xl">
                                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{project.research.methodology}</p>
                              </div>
                              <div className="md:col-span-2 h-48 md:h-auto bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center">
                                <span className="text-sm text-neutral-400">[ Research Photo ]</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Insights - Highlighted Cards */}
                        {project.research.insights && project.research.insights.length > 0 && (
                          <div>
                            <h4 className="text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2">
                              <Lightbulb className="text-green-600" size={20} />
                              Key Insights
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                              {project.research.insights.map((item, index) => (
                                <div key={index} className="bg-green-50 p-5 md:p-6 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                                  <div className="flex gap-3 md:gap-4">
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm">
                                      <span>{index + 1}</span>
                                    </div>
                                    <p className="text-sm md:text-base text-neutral-700">{item}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Affinity Map Image */}
                            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                              <span className="text-sm text-green-400">[ Affinity Map Image ]</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Design Guidelines - 3 Column Cards */}
                    {project.designGuidelines && project.designGuidelines.length > 0 && (
                      <div data-section="guidelines">
                        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                          <span className="text-4xl md:text-5xl">🎨</span>
                          <h3 className="text-3xl md:text-4xl">Design Guidelines</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                          {project.designGuidelines.map((guideline, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-shadow cursor-pointer">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-3 md:mb-4 text-lg md:text-xl">
                                {index + 1}
                              </div>
                              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{guideline}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Constraints - Inline */}
                    {project.constraints && project.constraints.length > 0 && (
                      <div data-section="constraints" className="bg-orange-50 p-6 md:p-10 rounded-xl md:rounded-2xl border border-orange-100">
                        <h3 className="text-2xl md:text-3xl mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <span className="text-3xl md:text-4xl">⚠️</span>
                          Constraints
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                          {project.constraints.map((item, index) => (
                            <div key={index} className="flex gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-lg">
                              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs md:text-sm">
                                {index + 1}
                              </div>
                              <p className="text-sm md:text-base text-neutral-700">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Final Designs - Alternating Layout */}
                    {project.finalDesigns && project.finalDesigns.length > 0 && (
                      <div data-section="designs">
                        <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10">
                          <span className="text-4xl md:text-5xl">💻</span>
                          <h3 className="text-3xl md:text-4xl">Final Designs</h3>
                        </div>
                        <div className="space-y-10 md:space-y-16">
                          {project.finalDesigns.map((design, index) => (
                            <div key={index} className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-6 md:p-8 rounded-xl">
                                  <h4 className="text-xl md:text-2xl mb-3 md:mb-4">{design.title}</h4>
                                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">{design.description}</p>
                                </div>
                              </div>
                              <div className={`w-full h-64 md:h-96 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                                <span className="text-sm text-neutral-400">[ Design Screenshot ]</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Legacy Challenge/Solution - Side by Side */}
                    {project.challenge && project.solution && (
                      <div data-section="challenge" className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-red-50 p-6 md:p-8 rounded-xl border-l-4 border-red-500">
                          <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Challenge</h3>
                          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="bg-green-50 p-6 md:p-8 rounded-xl border-l-4 border-green-500">
                          <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Solution</h3>
                          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    )}

                    {/* Impact - Highlighted Cards */}
                    <div data-section="impact" className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-10 rounded-xl md:rounded-2xl border border-green-100">
                      <h3 className="text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                        <span className="text-4xl md:text-5xl">📈</span>
                        Impact
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {project.impact.map((item, index) => (
                          <div key={index} className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-3 md:gap-4 items-start">
                              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-base md:text-lg">
                                ✓
                              </div>
                              <p className="text-sm md:text-base text-neutral-800 leading-relaxed pt-1">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next Steps - Cards */}
                    {project.nextSteps && project.nextSteps.length > 0 && (
                      <div data-section="next">
                        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                          <span className="text-4xl md:text-5xl">🚀</span>
                          <h3 className="text-3xl md:text-4xl">Next Steps & Improvements</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                          {project.nextSteps.map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8 rounded-xl border-t-4 border-indigo-500">
                              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-3 md:mb-4 text-lg">
                                →
                              </div>
                              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Next Case Study */}
                    {nextProject && onNextProject && (
                      <div className="border-t-2 border-neutral-200 pt-12 md:pt-16">
                        <div className="mb-6 md:mb-8">
                          <p className="text-neutral-500 text-sm md:text-base mb-2">Up Next</p>
                          <h3 className="text-2xl md:text-3xl">Continue Exploring</h3>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          onClick={onNextProject}
                          className="group cursor-pointer bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl md:rounded-2xl overflow-hidden"
                        >
                          <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                              <img 
                                src={nextProject.image} 
                                alt={nextProject.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            
                            <div className="p-6 md:p-10 flex flex-col justify-center text-white">
                              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-neutral-300 mb-3 md:mb-4 flex-wrap">
                                <span>{nextProject.company}</span>
                                <span>•</span>
                                <span>{nextProject.year}</span>
                                <span>•</span>
                                <span>{nextProject.category}</span>
                              </div>
                              
                              <h4 className="text-2xl md:text-3xl mb-4 md:mb-6 group-hover:text-neutral-200 transition-colors">
                                {nextProject.title}
                              </h4>
                              
                              <div className="flex items-center gap-2 text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors">
                                <span>View Case Study</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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