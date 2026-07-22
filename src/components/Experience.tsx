import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckSquare, Sparkles } from 'lucide-react';
import { ExperienceItem } from '../types';

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Gateway Software Solutions',
      role: 'Flutter Developer Intern',
      period: 'Internship Period',
      responsibilities: [
        'Flutter Application Development & Responsive UI styling',
        'Firebase Integration for real-time storage & multi-device authentication',
        'REST API Integration and custom JSON serialization',
        'Mobile Application Optimization for high FPS and low RAM usage',
        'State management configuration and cross-platform UI adjustments',
      ],
    },
    {
      company: 'Pass Science Work',
      role: 'Backend Developer',
      period: 'Active Term',
      responsibilities: [
        'FastAPI Development for lightweight, high-performance services',
        'AI Backend Integration utilizing state-of-the-art LLMs',
        'OCR Processing systems for scanned document text extraction',
        'Claude API Integration for automated document summarization & parsing',
        'Database Management, schema definition, and query optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative neon light spot */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-primary/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            My Professional Timeline
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 ml-2 sm:ml-auto border-l border-accent/20 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Indicator Badge */}
              <span className="absolute -left-[35px] sm:-left-[51px] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-base-dark border border-accent ring-4 ring-primary/20 group-hover:border-white group-hover:scale-110 transition-all duration-300">
                <Briefcase className="w-3 h-3 text-accent" />
              </span>

              {/* Glass Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15 group-hover:border-accent/45 transition-colors duration-300 relative overflow-hidden">
                {/* Decorative glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent blur-xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <div>
                    {/* Role / Job Title */}
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <Sparkles className="w-4 h-4 text-accent/50 shrink-0" />
                    </h4>
                    
                    {/* Company Name */}
                    <p className="font-sans text-sm text-accent/90 font-medium tracking-wide mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-primary/20 border border-accent/15 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent/70" />
                    <span className="font-mono text-[10px] text-white/70 font-semibold uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/bullet">
                      <div className="p-0.5 rounded bg-accent/10 text-accent group-hover/bullet:bg-accent/25 group-hover/bullet:text-white transition-colors mt-0.5 shrink-0">
                        <CheckSquare className="w-3.5 h-3.5" />
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed group-hover/bullet:text-white transition-colors">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
