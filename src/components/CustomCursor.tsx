import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    setHidden(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Detect hovers on clickable elements
    const addHoverEvents = () => {
      const clickables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hover-trigger'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial setup and observer for dynamic DOM changes
    addHoverEvents();
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          backgroundColor: hovered ? 'rgba(157, 178, 191, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        }}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
      />

      {/* Outer rings/glow cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 1.2 : hovered ? 2.5 : 1,
          borderColor: hovered ? 'rgba(157, 178, 191, 0.6)' : 'rgba(157, 178, 191, 0.25)',
          backgroundColor: hovered ? 'rgba(157, 178, 191, 0.05)' : 'rgba(0, 0, 0, 0)',
        }}
        className="fixed top-0 left-0 w-8 h-8 -ml-2 -mt-2 border border-accent/30 rounded-full pointer-events-none z-50 transition-all duration-75"
      />
    </>
  );
}
