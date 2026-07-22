import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle, GraduationCap } from 'lucide-react';

export default function About() {
  const bulletPoints = [
    'AI & Data Science Student & Researcher',
    'Experienced Flutter Developer Intern',
    'Sleek & Scalable Backend Developer',
    'Passionate about building AI-powered mobile and web applications',
    'Hands-on expertise in OCR Systems & Intelligent Document Processing',
    'IoT solutions and Cloud Integration experience',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative radial gradient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            Get To Know Me
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            About <span className="text-gradient">Myself</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Illustration / Neural Network Art */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl group">
              <div className="w-full h-full bg-base-dark rounded-2xl overflow-hidden aspect-4/3 relative">
                <img
                  src="/src/assets/images/ai_neural_about_1784645921455.jpg"
                  alt="AI Artificial Intelligence Neural Networks representation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[80%]"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-dark/80 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15 space-y-6">
              <h4 className="font-display font-bold text-xl text-white">
                Engineering student specialized in building <span className="text-accent">intelligent technology systems</span>.
              </h4>

              <p className="font-sans text-sm text-white/70 leading-relaxed">
                As a student of Artificial Intelligence & Data Science, I bridge the gap between advanced deep learning research and production-grade applications. I love creating beautiful mobile client applications with Flutter and writing performant, secure server APIs with FastAPI.
              </p>

              {/* Check bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="font-sans text-xs text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Education</h4>
              </div>

              <div className="relative border-l border-accent/20 pl-6 ml-3 space-y-4">
                <div className="relative">
                  {/* Outer circle indicator */}
                  <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-base-dark" />
                  
                  <span className="font-mono text-xs text-accent/80 font-semibold uppercase tracking-wider block mb-1">
                    2023 – 2027
                  </span>
                  
                  <h5 className="font-display font-bold text-base text-white">
                    B.Tech Artificial Intelligence & Data Science
                  </h5>
                  
                  <p className="font-sans text-xs text-white/60 mt-1">
                    Mount Zion College of Engineering and Technology
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
