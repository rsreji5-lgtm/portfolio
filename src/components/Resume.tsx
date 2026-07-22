import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ResumeProps {
  onDownloadResume: () => void;
}

export default function Resume({ onDownloadResume }: ResumeProps) {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Top Background glowing point */}
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            Curriculum Vitae
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            Interactive <span className="text-gradient">Resume</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Premium Resume Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl border border-accent/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Header design of CV */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-8 mb-8 gap-6">
            <div>
              <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide uppercase">
                REJI R S
              </h4>
              <p className="font-mono text-xs text-accent font-semibold uppercase tracking-wider mt-1">
                AI & Data Science Engineer
              </p>
              <p className="font-sans text-xs text-white/50 mt-1">
                rsreji5@gmail.com | Tamil Nadu, India
              </p>
            </div>

            {/* Quick Actions */}
            <div className="shrink-0 flex items-center space-x-3">
              <button
                onClick={onDownloadResume}
                className="px-5 py-3 bg-white text-base-dark font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-accent hover:shadow-[0_0_15px_rgba(157,178,191,0.25)] transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Resume Contents */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left side: Objectives, Internships */}
            <div className="md:col-span-7 space-y-8">
              
              {/* Objective */}
              <div className="space-y-3">
                <h5 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
                  Professional Objective
                </h5>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  Passionate and detail-oriented Artificial Intelligence & Data Science engineering student. Skilled in mobile applications using Flutter, microservices and server frameworks with FastAPI, OCR development, and deep learning algorithms. Seeking entry-level developer or research intern positions where I can scale intelligent systems.
                </p>
              </div>

              {/* Work History */}
              <div className="space-y-4">
                <h5 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
                  Professional Internships
                </h5>

                <div className="space-y-4 border-l border-white/10 pl-4 ml-1">
                  <div className="space-y-1 relative">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <h6 className="font-display font-bold text-sm text-white">Backend Developer</h6>
                    <p className="font-mono text-[10px] text-white/50">Pass Science Work | Active Term</p>
                    <p className="font-sans text-xs text-white/75 leading-relaxed pt-1">
                      Designed reliable APIs using FastAPI and Claude LLM integrations. Automated complex document evaluation pipelines and structured scanned answer sheet text utilizing optical character recognition (OCR).
                    </p>
                  </div>

                  <div className="space-y-1 relative">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <h6 className="font-display font-bold text-sm text-white">Flutter Developer Intern</h6>
                    <p className="font-mono text-[10px] text-white/50">Gateway Software Solutions | Internship Period</p>
                    <p className="font-sans text-xs text-white/75 leading-relaxed pt-1">
                      Programmed client application layouts and widgets in Dart/Flutter. Implemented robust REST communication nodes and Firebase state logic, boosting app fluid performance.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side: Skills summaries, Education */}
            <div className="md:col-span-5 space-y-8">
              
              {/* Education Block */}
              <div className="space-y-3">
                <h5 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
                  Formal Education
                </h5>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] text-accent/80 font-bold">2023 – 2027</p>
                  <h6 className="font-display font-bold text-xs text-white">
                    B.Tech AI & Data Science
                  </h6>
                  <p className="font-sans text-xs text-white/50 leading-snug">
                    Mount Zion College of Engineering and Technology
                  </p>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-3">
                <h5 className="font-display font-bold text-sm text-accent uppercase tracking-wider">
                  Expertise Matrix
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python',
                    'FastAPI',
                    'Flutter',
                    'Claude API',
                    'OCR',
                    'Computer Vision',
                    'React',
                    'Firebase',
                    'Supabase',
                    'MySQL',
                    'Java',
                    'Tailwind CSS',
                    'Linux',
                  ].map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full font-mono text-[10px] text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Info */}
              <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl space-y-2">
                <div className="flex items-center space-x-2 text-accent">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                    Recruiter Quick Check
                  </span>
                </div>
                <p className="font-sans text-[11px] text-white/60 leading-relaxed">
                  Excellent credentials in computer applications, smart sensor integrations, and automated assessment modules. Ready to contribute immediately to backend pipelines and mobile products.
                </p>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
