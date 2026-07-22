import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Horizontal Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-900 z-[9999]">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary via-accent to-white"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
          scrolled ? 'glass-panel border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[1px]">
              <div className="w-full h-full rounded-full bg-base-dark flex items-center justify-center font-display font-bold text-sm text-white group-hover:scale-95 transition-transform">
                RS
              </div>
            </div>
            <span className="font-display font-bold tracking-widest text-lg text-white group-hover:text-accent transition-colors">
              REJI R S
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                  activeSection === link.id
                    ? 'text-white font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-primary/30 rounded-full border border-accent/20"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}

            {/* Premium CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 text-xs font-semibold tracking-wider text-base-dark bg-white rounded-full hover:bg-accent hover:text-base-dark transition-all duration-300 flex items-center space-x-1"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-base-dark bg-white rounded-full hover:bg-accent transition-all duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 w-full glass-panel border-b border-white/10 py-6 px-6 z-40 flex flex-col space-y-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`py-2 text-sm font-medium tracking-wider border-b border-white/5 transition-colors ${
                    activeSection === link.id ? 'text-accent font-bold pl-2' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
