import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

// Import custom components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scrolling to track active section and scroll button visibility
  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      // Toggle back-to-top button
      setShowBackToTop(window.scrollY > 400);

      // Section tracking for active navigation link
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger point

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleViewProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/REJI_Resume.pdf';
    link.download = 'REJI_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen text-white select-none selection:bg-accent/30"
          >
            {/* Custom interactive mouse trail */}
            <CustomCursor />

            {/* Glowing particle system canvas */}
            <ParticleBackground />

            {/* Glass sticky navbar with dynamic progress */}
            <Header activeSection={activeSection} />

            {/* Content Layout Sections */}
            <main className="relative z-10">
              
              {/* Home / Hero Section */}
              <Hero
                onViewProjects={handleViewProjects}
                onDownloadResume={handleDownloadResume}
              />

              {/* Achievements banner with counters */}
              <Achievements />

              {/* About section with biography and education */}
              <About />

              {/* Skills bento grid with progressive loaders */}
              <Skills />

              {/* Work history timeline */}
              <Experience />

              {/* Projects collection with tags and hover zoom */}
              <Projects />

              {/* Resume glass view and print generator */}
              <Resume onDownloadResume={handleDownloadResume} />

              {/* Contact channel details and validated message form */}
              <Contact />
              
            </main>

            {/* Page Footer */}
            <Footer />

            {/* Floating Back To Top button */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  key="back-to-top"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 p-3 bg-white text-base-dark border border-white/10 hover:bg-accent rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] z-40 cursor-pointer transition-all duration-300"
                  aria-label="Scroll back to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
