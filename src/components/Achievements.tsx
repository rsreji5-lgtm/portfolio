import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FolderCheck, Briefcase, GraduationCap, Brain } from 'lucide-react';
import { AchievementItem } from '../types';

// Animated single counter component
function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(handle);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  const achievements: (AchievementItem & { icon: React.ReactNode })[] = [
    {
      label: 'Projects Completed',
      value: 5,
      suffix: '+',
      icon: <FolderCheck className="w-6 h-6 text-[#9DB2BF]" />,
    },
    {
      label: 'Internships',
      value: 2,
      suffix: '',
      icon: <Briefcase className="w-6 h-6 text-[#9DB2BF]" />,
    },
    {
      label: 'Technologies Learned',
      value: 20,
      suffix: '+',
      icon: <GraduationCap className="w-6 h-6 text-[#9DB2BF]" />,
    },
    {
      label: 'AI Solutions Built',
      value: 8,
      suffix: '+',
      icon: <Brain className="w-6 h-6 text-[#9DB2BF]" />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1326]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Bento/Stat Box Rows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15 flex flex-col items-center justify-center text-center space-y-4 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(157,178,191,0.08)] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Number and Suffix */}
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center justify-center">
                <CountUp end={item.value} />
                <span className="text-accent">{item.suffix}</span>
              </div>

              {/* Label */}
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
