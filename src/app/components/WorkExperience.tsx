import { motion } from 'motion/react';
import ExperienceCards from '@/imports/Container-231-879';

export function WorkExperience() {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-white via-pink-50/20 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-['Playfair_Display',serif]" style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--line-height-tight)',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>Where I've Worked</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-orange-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <ExperienceCards />
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4 gap-2">
            <div style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--text-quaternary)'
            }}>← Scroll to explore →</div>
          </div>
        </div>
      </div>
    </section>
  );
}