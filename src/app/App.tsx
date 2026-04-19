import { Hero } from './components/Hero';
import { DesignApproach } from './components/DesignApproach';
import { WorkExperience } from './components/WorkExperience';
import { ProjectStackingScroll } from './components/ProjectStackingScroll';
import { Navigation } from './components/Navigation';
import { ContactFooter } from './components/ContactFooter';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ color: 'var(--text-primary)', scrollBehavior: 'smooth' }}>
      <Navigation />
      <Hero />
      <ProjectStackingScroll />
      <DesignApproach />
      <WorkExperience />
      <ContactFooter />
      
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 px-6 bg-neutral-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              fontSize: 'var(--font-size-sm)', 
              color: 'var(--text-tertiary)',
              lineHeight: 'var(--line-height-normal)'
            }}
          >
            © 2024 Saloni Mehta. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}