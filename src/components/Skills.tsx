import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

interface SkillItem {
  label: string;
  abbr: string;
  circleBgClass: string;
  textClass: string;
}

export default function Skills() {
  const skillsList: SkillItem[] = [
    {
      label: 'Python',
      abbr: 'PY',
      circleBgClass: 'bg-blue-500/10 border border-blue-500/25',
      textClass: 'text-blue-400',
    },
    {
      label: 'Java',
      abbr: 'JA',
      circleBgClass: 'bg-amber-500/10 border border-amber-500/25',
      textClass: 'text-amber-400',
    },
    {
      label: 'C++',
      abbr: 'CP',
      circleBgClass: 'bg-indigo-500/10 border border-indigo-500/25',
      textClass: 'text-indigo-400',
    },
    {
      label: 'JavaScript',
      abbr: 'JS',
      circleBgClass: 'bg-yellow-500/10 border border-yellow-500/25',
      textClass: 'text-yellow-400',
    },
    {
      label: 'Flutter',
      abbr: 'FL',
      circleBgClass: 'bg-sky-500/10 border border-sky-500/25',
      textClass: 'text-sky-400',
    },
    {
      label: 'FastAPI',
      abbr: 'FA',
      circleBgClass: 'bg-emerald-500/10 border border-emerald-500/25',
      textClass: 'text-emerald-400',
    },
    {
      label: 'React',
      abbr: 'RE',
      circleBgClass: 'bg-cyan-500/10 border border-cyan-500/25',
      textClass: 'text-cyan-400',
    },
    {
      label: 'OCR',
      abbr: 'OC',
      circleBgClass: 'bg-purple-500/10 border border-purple-500/25',
      textClass: 'text-purple-400',
    },
    {
      label: 'Firebase',
      abbr: 'FI',
      circleBgClass: 'bg-orange-500/10 border border-orange-500/25',
      textClass: 'text-orange-400',
    },
    {
      label: 'Supabase',
      abbr: 'SU',
      circleBgClass: 'bg-emerald-500/10 border border-emerald-500/25',
      textClass: 'text-emerald-400',
    },
    {
      label: 'MySQL',
      abbr: 'MY',
      circleBgClass: 'bg-blue-500/10 border border-blue-500/25',
      textClass: 'text-blue-400',
    },
    {
      label: 'MSSQL',
      abbr: 'MS',
      circleBgClass: 'bg-red-500/10 border border-red-500/25',
      textClass: 'text-red-400',
    },
    {
      label: 'Git',
      abbr: 'GI',
      circleBgClass: 'bg-orange-500/10 border border-orange-500/25',
      textClass: 'text-orange-400',
    },
    {
      label: 'VS Code',
      abbr: 'VS',
      circleBgClass: 'bg-sky-500/10 border border-sky-500/25',
      textClass: 'text-sky-400',
    },
    {
      label: 'Android Studio',
      abbr: 'AS',
      circleBgClass: 'bg-green-500/10 border border-green-500/25',
      textClass: 'text-green-400',
    },
    {
      label: 'Tailwind CSS',
      abbr: 'TW',
      circleBgClass: 'bg-teal-500/10 border border-teal-500/25',
      textClass: 'text-teal-400',
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070913]">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none -z-10" />

      {/* Grid pattern background for a clean modern layout */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            My Technological Toolkit
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            Skills & <span className="text-gradient">Proficiencies</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Premium grid layout matched perfectly with user uploaded format */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 justify-center items-center">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -6,
                  scale: 1.04,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.05)',
                }
              }}
              className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/5 transition-all duration-300 group aspect-square max-w-[135px] mx-auto w-full cursor-pointer"
            >
              {/* Colored abbreviation bubble badge with spring motion scale on hover */}
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.12,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-extrabold text-xs mb-3 shadow-[0_2px_10px_rgba(0,0,0,0.2)] ${skill.circleBgClass} ${skill.textClass}`}
              >
                {skill.abbr}
              </motion.div>

              {/* Title label beneath: clean, bold sans-serif font centered underneath */}
              <span className="font-sans font-bold text-xs text-slate-300 group-hover:text-white transition-colors duration-300 block truncate w-full px-1">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footnote verified badge */}
        <div className="flex items-center justify-center space-x-1.5 mt-16 opacity-40">
          <Code2 className="w-4 h-4 text-accent" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
            Interactive Technical Stack Representation
          </span>
        </div>
      </div>
    </section>
  );
}
