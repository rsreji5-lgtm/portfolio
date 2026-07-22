import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      href: 'mailto:rsreji5@gmail.com',
    },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 bg-base-dark/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Brand / Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-display font-bold text-sm tracking-widest text-white">
              REJI R S
            </span>
            <span className="text-white/20">|</span>
            <span className="font-sans text-[10px] text-white/50 tracking-wider">
              AI & DATA SCIENCE ENGINEER
            </span>
          </div>
          <p className="font-sans text-[11px] text-white/40">
            &copy; {currentYear} All Rights Reserved. Crafted with passion.
          </p>
        </div>

        {/* Middle: Small Heart indicator */}
        <div className="hidden md:flex items-center space-x-1.5 text-xs text-white/35">
          <span>Designed & Coded with</span>
          <Heart className="w-3.5 h-3.5 text-accent/60 fill-accent/10 animate-pulse" />
          <span>in Tamil Nadu, India</span>
        </div>

        {/* Right: Social Profiles */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg bg-white/5 hover:bg-white text-white/70 hover:text-base-dark border border-white/5 hover:border-transparent transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
