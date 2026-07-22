import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileCode, Database, Cpu, ExternalLink, Globe, Layout, Search, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectWithMeta extends ProjectItem {
  id: string;
  category: 'ai' | 'mobile';
  badge: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'mobile'>('all');

  const projects: ProjectWithMeta[] = [
    {
      id: 'proj-4',
      title: 'Smart Water Tank Monitoring',
      category: 'mobile',
      badge: 'IoT & Telemetry Dash',
      description:
        'IoT-enabled water monitoring system using NodeMCU for real-time tank monitoring, alerts, and dashboard analytics.',
      tech: ['NodeMCU', 'Flutter', 'Firebase'],
      imageSrc: '/src/assets/images/aquagaurd.jpeg',
      demoUrl: 'https://youtu.be/ocyMNRA_HwE?si=-St9ecDI_lTGa841',
    },
    {
      id: 'proj-3',
      title: 'Certificate Generator',
      category: 'mobile',
      badge: 'Cross Platform Utility',
      description:
        'Flutter application that generates participation and winner certificates dynamically with cloud storage integration.',
      tech: ['Flutter', 'Firebase', 'Supabase'],
      imageSrc: '/src/assets/images/ai_neural_about_1784645921455.jpg',
      demoUrl: '#',
    },
    {
      id: 'proj-1',
      title: 'MZ MarkDigitizer',
      category: 'ai',
      badge: 'OCR & Vision System',
      description:
        'AI-powered OCR marksheet digitization platform that extracts student information and marks from scanned answer sheets and converts them into structured digital records.',
      tech: ['Python', 'OCR', 'FastAPI', 'React', 'MySQL'],
      imageSrc: '/src/assets/images/ocr.jpeg',
      comingSoon: true,
    },
    {
      id: 'proj-2',
      title: 'EvalAI',
      category: 'ai',
      badge: 'AI Assessment Core',
      description:
        'AI-powered answer sheet evaluation platform using Claude API for automated batch assessment and centralized result management.',
      tech: ['Claude API', 'FastAPI', 'React', 'Python'],
      imageSrc: '/src/assets/images/EvalAI.png',
      comingSoon: true,
    },
  ];

  // Map category to readable title
  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & OCR Platforms' },
    { id: 'mobile', label: 'Mobile & IoT' },
  ] as const;

  const filteredProjects = projects
    .filter((p) => {
      if (activeFilter === 'all') return true;
      return p.category === activeFilter;
    })
    .filter((project, index, self) => self.findIndex((item) => item.id === project.id) === index);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative ambient background glows */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            My Engineering Achievements
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full transition-all duration-300 relative ${
                activeFilter === tab.id
                  ? 'text-base-dark font-bold'
                  : 'text-white/60 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {activeFilter === tab.id && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-white rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden border border-accent/15 hover:border-accent/45 hover:shadow-[0_0_30px_rgba(157,178,191,0.12)] transition-all duration-500 flex flex-col justify-between group cursor-pointer"
              >
                {/* Visual Header of Card with project image */}
                <div className="h-44 relative overflow-hidden border-b border-white/5 bg-slate-950/10">
                  {proj.imageSrc ? (
                    <>
                      <img
                        src={proj.imageSrc}
                        alt={`${proj.title} screenshot`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                      <div className="relative z-10 flex h-full items-end justify-center pb-4 px-4 text-center">
                        <span className="inline-flex rounded-full bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 shadow-sm">
                          {proj.badge}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-base-dark" />
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                      <div className="relative flex flex-col items-center justify-center text-center space-y-2 z-10 h-full px-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 shadow-md">
                          {proj.category === 'ai' ? (
                            <Sparkles className="w-6 h-6" />
                          ) : proj.category === 'mobile' ? (
                            <Cpu className="w-6 h-6" />
                          ) : (
                            <FileCode className="w-6 h-6" />
                          )}
                        </div>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-accent/70">
                          {proj.badge}
                        </span>
                      </div>
                    </>
                  )}

                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-lg text-white group-hover:text-accent transition-colors duration-300">
                      {proj.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[9px] sm:text-[10px] font-semibold text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.comingSoon ? (
                    <div className="pt-4">
                      <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                        Coming Soon
                      </span>
                    </div>
                  ) : proj.demoUrl ? (
                    <div className="pt-4">
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition hover:border-accent/60 hover:bg-accent/20"
                      >
                        Live Demo
                      </a>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
