import { motion } from 'motion/react';
import { Download, ArrowRight, Brain, Code, Cpu, Smartphone } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ onViewProjects, onDownloadResume }: HeroProps) {
  // Drift-animate coordinates for the floating tech badges
  const floatingBadges = [
    { icon: <Brain className="w-4 h-4 text-accent" />, text: 'AI/ML', top: '15%', left: '8%', delay: 0 },
    { icon: <Smartphone className="w-4 h-4 text-[#02569B]" />, text: 'Flutter', top: '75%', left: '12%', delay: 1.5 },
    { icon: <Cpu className="w-4 h-4 text-emerald-400" />, text: 'FastAPI', top: '25%', right: '10%', delay: 0.8 },
    { icon: <Code className="w-4 h-4 text-[#61DAFB]" />, text: 'React', top: '70%', right: '15%', delay: 2.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic backdrop neon radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & Credentials */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 z-10">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/15 border border-accent/20 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
              Ready for Developer Roles & Research
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white/60 uppercase font-mono text-xs tracking-[0.25em]"
            >
              Hi there, I am Reji R S
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white leading-tight"
            >
              AI & Data Science <br />
              <span className="text-gradient">Engineer</span>
            </motion.h2>
          </div>

          {/* Role Subheading Carousel / List */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-mono text-accent/90"
          >
            <span>Flutter Developer</span>
            <span className="text-white/30">•</span>
            <span>Backend Developer</span>
            <span className="text-white/30">•</span>
            <span>AI Engineer</span>
            <span className="text-white/30">•</span>
            <span>Full Stack Developer</span>
          </motion.div>

          {/* Rich Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed"
          >
            Passionate AI & Data Science student building intelligent software solutions using Artificial Intelligence, Machine Learning, Flutter, FastAPI, and modern web technologies. Experienced in AI-powered applications, OCR systems, IoT, and scalable backend development.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            {/* View Projects CTA */}
            <button
              onClick={onViewProjects}
              className="px-6 py-3.5 bg-white text-base-dark font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-accent hover:shadow-[0_0_20px_rgba(157,178,191,0.3)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Resume CTA */}
            <button
              onClick={onDownloadResume}
              className="px-6 py-3.5 bg-primary/20 border border-accent/25 text-white hover:text-base-dark font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right: Premium Interactive Profile Image */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] lg:min-h-[450px]">
          {/* Animated Background Lights */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-secondary/10 blur-3xl animate-pulse" />
          
          {/* Rotating Glowing Dashed Border Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] border-2 border-dashed border-accent/35 rounded-full pointer-events-none"
          />

          {/* Pulse Ripple Circle 1 */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] border border-secondary/20 rounded-full pointer-events-none"
          />

          {/* Profile Wrapper with glassmorphic tilt look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_0_50px_rgba(39,55,77,0.3)] hover:scale-105 transition-all duration-500 group cursor-pointer"
          >
            {/* Soft inner black border and image mask */}
            <div className="w-full h-full rounded-full overflow-hidden bg-base-dark flex items-center justify-center relative">
              <img
                src="/Reji_profile.png"
                alt="Reji R S - AI & Data Science Engineer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale-[10%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-dark/60 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Floating Drift-Animated Technology Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                delay: badge.delay,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: { duration: 0.6 },
              }}
              style={{
                position: 'absolute',
                top: badge.top,
                left: badge.left,
                right: badge.right,
              }}
              className="glass-card px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg border border-accent/20 cursor-default hover:border-accent hover:bg-slate-900/50 transition-colors z-20"
            >
              {badge.icon}
              <span className="font-mono text-[10px] font-semibold text-white tracking-wider">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
