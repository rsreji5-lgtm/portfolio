import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause for visual completion
          return 100;
        }
        // Increment progress with pseudo-random high rates for a real premium loading feel
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + step);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#070913] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background glow behind loader */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="relative text-center max-w-xs px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Pulsating logo/initials */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-[0_0_20px_rgba(157,178,191,0.2)]">
            <div className="w-full h-full rounded-full bg-base-dark flex items-center justify-center">
              <span className="font-display font-bold text-lg text-white tracking-wider">
                RS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Developer Name & Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display font-bold text-2xl text-white tracking-widest uppercase mb-1"
        >
          REJI R S
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-sans text-xs text-accent uppercase tracking-widest mb-8"
        >
          AI & Data Science Engineer
        </motion.p>

        {/* Progress bar container */}
        <div className="relative w-48 h-[3px] bg-slate-900 rounded-full overflow-hidden mx-auto mb-3">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary via-accent to-white"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.div
          key={progress}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[10px] text-accent/60 tracking-wider"
        >
          {progress}% SECURED
        </motion.div>
      </div>
    </div>
  );
}
