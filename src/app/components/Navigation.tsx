import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['hero', 'approach', 'work', 'experience'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 md:top-6 left-0 right-0 z-40 px-5 md:px-8"
      >
        <div className={`max-w-6xl mx-auto px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
          isScrolled ? "bg-[#F3F0EA]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-transparent"
        }`}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer"
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                fontFamily: "'Inter Tight', 'Inter Display', 'Inter', sans-serif",
                letterSpacing: '-0.06em',
                color: 'var(--text-primary)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              SM
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="relative cursor-pointer transition-colors"
                style={{
                  fontSize: '0.7rem', fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 'var(--font-weight-medium)',
                  color: activeSection === 'hero' ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'hero') e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'hero') e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                About
                {activeSection === 'hero' && (
                  <motion.div
                    layoutId="underline"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollToSection('approach')}
                className="relative cursor-pointer transition-colors"
                style={{
                  fontSize: '0.7rem', fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 'var(--font-weight-medium)',
                  color: activeSection === 'approach' ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'approach') e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'approach') e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                Design Approach
                {activeSection === 'approach' && (
                  <motion.div
                    layoutId="underline"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="relative cursor-pointer transition-colors"
                style={{
                  fontSize: '0.7rem', fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 'var(--font-weight-medium)',
                  color: activeSection === 'work' ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'work') e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'work') e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                Work
                {activeSection === 'work' && (
                  <motion.div
                    layoutId="underline"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="relative cursor-pointer transition-colors"
                style={{
                  fontSize: '0.7rem', fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 'var(--font-weight-medium)',
                  color: activeSection === 'experience' ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'experience') e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'experience') e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                Experience
                {activeSection === 'experience' && (
                  <motion.div
                    layoutId="underline"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[88px] left-0 right-0 z-30 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
        >
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left cursor-pointer py-2 transition-colors"
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-left cursor-pointer py-2 transition-colors"
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Design Approach
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-left cursor-pointer py-2 transition-colors"
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left cursor-pointer py-2 transition-colors"
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Experience
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}