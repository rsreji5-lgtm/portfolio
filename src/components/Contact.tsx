import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: 'Call / Telegram',
      value: '+919629521501',
      href: 'tel:+919629521501',
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: 'Email Address',
      value: 'rsreji5@gmail.com',
      href: 'mailto:rsreji5@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Tamil+Nadu+India',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/rsreji5-lgtm',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reji-r-s-3443a7379',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formcarry.com/s/2Wc6IwPORLf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || 'Portfolio Contact',
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong while sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative gradient light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="font-mono text-xs text-accent uppercase tracking-[0.25em]"
          >
            Connect With Me
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1"
          >
            Contact <span className="text-gradient">Information</span>
          </motion.h3>
          <div className="w-12 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15 space-y-6">
              <h4 className="font-display font-extrabold text-xl text-white">
                Let's discuss <br />
                <span className="text-accent">your next project.</span>
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
                I am highly responsive to emails and am always interested in backend API challenges, intelligent automation projects, and Flutter mobile consulting. Feel free to reach out!
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="glass-card p-4 rounded-xl border border-accent/10 hover:border-accent/35 hover:shadow-lg transition-all duration-300 flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent/80 block">
                      {info.label}
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connect */}
            <div className="glass-card p-6 rounded-xl border border-accent/10 flex items-center justify-between">
              <span className="font-mono text-xs text-white/70">Connect Online:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-white/5 hover:bg-accent hover:text-base-dark rounded-lg text-white border border-white/5 hover:border-accent transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Message Submission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-accent/15">
              <h4 className="font-display font-extrabold text-lg text-white mb-6">
                Send a Secure Message
              </h4>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-white/75 block">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Harry Potter"
                    className="w-full px-4 py-3 bg-base-dark border border-white/10 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-white/75 block">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@example.com"
                    className="w-full px-4 py-3 bg-base-dark border border-white/10 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-wider text-white/75 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Collaboration Opportunity"
                    className="w-full px-4 py-3 bg-base-dark border border-white/10 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-white/75 block">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Write your detailed query..."
                    className="w-full px-4 py-3 bg-base-dark border border-white/10 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Status Notice Panel */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start space-x-3 text-emerald-300"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-xs block">Message Transmitted!</span>
                        <span className="text-[11px] opacity-90 leading-relaxed">
                          Your query was successfully recorded. I will reply to you as soon as possible.
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start space-x-3 text-red-300"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold block">Validation Alert</span>
                        <span className="opacity-90">{errorMessage}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white hover:bg-accent text-base-dark font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-base-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
