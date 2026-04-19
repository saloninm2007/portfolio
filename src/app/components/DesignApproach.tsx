import { motion, AnimatePresence } from 'motion/react';
import { Search, BarChart3, Heart, RefreshCw, MessageSquare, Lightbulb, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const approaches = [
  {
    icon: Search,
    title: 'The brief is never the brief',
    points: [
      'I go upstream before I go anywhere. Every project starts with questioning what problem we\'re actually solving.'
    ],
    color: 'bg-gradient-to-br from-blue-100 to-indigo-200'
  },
  {
    icon: BarChart3,
    title: 'Constraints are inputs, not walls',
    points: [
      'No budget, small team, tight deadline — I reorganise around them without shrinking the ambition.'
    ],
    color: 'bg-gradient-to-br from-purple-100 to-pink-200'
  },
  {
    icon: Heart,
    title: 'Expertise narrows. Research confirms.',
    points: [
      'I\'m not guessing and I\'m not fishing blind. Experience narrows the search space. Evidence gives it shape.'
    ],
    color: 'bg-gradient-to-br from-rose-100 to-orange-200'
  },
  {
    icon: RefreshCw,
    title: 'Users decide. Not me, not the PM.',
    points: [
      'I create the conditions for the right answer to emerge. Then I get out of the way.'
    ],
    color: 'bg-gradient-to-br from-emerald-100 to-teal-200'
  },
  {
    icon: MessageSquare,
    title: 'Pushback is a diagnostic',
    points: [
      'When someone pushes back I ask — is this a constraint, a misalignment, or an ego? The answer decides my move.'
    ],
    color: 'bg-gradient-to-br from-amber-100 to-yellow-200'
  },
  {
    icon: Lightbulb,
    title: 'My solutions are questions',
    points: [
      'I don\'t hand the room a conclusion. I hand them a reframe. That\'s why the work feels different.'
    ],
    color: 'bg-gradient-to-br from-cyan-100 to-blue-200'
  }
];

export function DesignApproach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % approaches.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + approaches.length) % approaches.length);
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      const handleWheel = (e: WheelEvent) => {
        // Detect horizontal scroll or shift+scroll
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
        const delta = isHorizontalScroll ? e.deltaX : e.deltaY;
        
        // Only handle if there's meaningful scroll
        if (Math.abs(delta) < 10) return;
        
        e.preventDefault();
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set new timeout to change card after scroll settles
        scrollTimeoutRef.current = setTimeout(() => {
          if (delta > 0) {
            nextCard();
          } else {
            prevCard();
          }
        }, 50);
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
          nextCard();
        } else if (e.key === 'ArrowLeft') {
          prevCard();
        }
      };
      
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
      currentRef.addEventListener('keydown', handleKeyDown);
      
      return () => {
        currentRef.removeEventListener('wheel', handleWheel);
        currentRef.removeEventListener('keydown', handleKeyDown);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [activeIndex]);

  return (
    <section id="approach" className="py-24 px-6 bg-gradient-to-b from-white via-violet-50/30 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-['Playfair_Display',serif]" style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--line-height-tight)',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>Before The Solution</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto" style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--line-height-relaxed)',
            color: 'var(--text-secondary)'
          }}>
            I don't have a process I follow. I have a way of thinking I bring to every problem.
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative h-[520px] md:h-[480px] flex items-center justify-center px-4" ref={containerRef} tabIndex={0}>
          <div className="relative w-full max-w-7xl h-full">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              const offset = (index - activeIndex + approaches.length) % approaches.length;
              
              // Calculate position for multi-card carousel
              let zIndex = 10 - Math.abs(offset);
              let translateX = 0;
              let scale = 1;
              let opacity = 0;
              let blur = 0;
              let pointerEvents = 'none';

              if (offset === 0) {
                // Active card - center
                translateX = 0;
                scale = 1;
                opacity = 1;
                blur = 0;
                zIndex = 20;
                pointerEvents = 'auto';
              } else if (offset === 1) {
                // Next card - right side, fully visible
                translateX = 440;
                scale = 0.95;
                opacity = 0.85;
                blur = 0;
                zIndex = 15;
                pointerEvents = 'auto';
              } else if (offset === approaches.length - 1) {
                // Previous card - left side, fully visible
                translateX = -440;
                scale = 0.95;
                opacity = 0.85;
                blur = 0;
                zIndex = 15;
                pointerEvents = 'auto';
              } else if (offset === 2) {
                // Card after next - peek on far right
                translateX = 880;
                scale = 0.85;
                opacity = 0.3;
                blur = 10;
                zIndex = 5;
              } else if (offset === approaches.length - 2) {
                // Card before previous - peek on far left
                translateX = -880;
                scale = 0.85;
                opacity = 0.3;
                blur = 10;
                zIndex = 5;
              } else {
                // Cards too far away - hide completely
                opacity = 0;
                translateX = offset < approaches.length / 2 ? 1200 : -1200;
              }

              const isActive = offset === 0;

              return (
                <motion.div
                  key={approach.title}
                  initial={false}
                  animate={{
                    scale,
                    x: translateX,
                    opacity,
                    zIndex,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    pointerEvents: pointerEvents as any,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div 
                    className={`bg-white rounded-3xl p-8 md:p-10 shadow-2xl w-full max-w-sm border transition-all h-[480px] md:h-[440px] flex flex-col ${
                      isActive ? 'border-violet-200 shadow-violet-100/50' : 'border-neutral-100'
                    }`}
                    onClick={() => !isActive && setActiveIndex(index)}
                  >
                    <motion.div 
                      className={`${approach.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0`}
                      animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Icon size={28} style={{ color: 'var(--text-secondary)' }} />
                    </motion.div>
                    <h3 style={{
                      fontSize: isActive ? 'var(--font-size-3xl)' : 'var(--font-size-2xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      lineHeight: 'var(--line-height-snug)',
                      color: 'var(--text-primary)',
                      marginBottom: '1.5rem'
                    }}>{approach.title}</h3>
                    <div className="flex-1 overflow-auto">
                      <ul className="space-y-3">
                        {approach.points.map((point, i) => (
                          <li key={i} style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-regular)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--text-secondary)'
                          }}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center z-50 border border-neutral-200 hover:scale-110"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Previous card"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center z-50 border border-neutral-200 hover:scale-110"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Next card"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {approaches.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer transition-all"
              style={{
                width: activeIndex === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === index ? '#6366f1' : '#d4d4d8',
              }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll to explore text */}
        <div className="text-center mt-4">
          <div style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--text-quaternary)'
          }}>← Scroll to explore →</div>
        </div>
      </div>
    </section>
  );
}