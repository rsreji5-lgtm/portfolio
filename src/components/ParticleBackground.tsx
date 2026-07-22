import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * -0.3 - 0.1; // Float upwards
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = 'rgba(157, 178, 191, ' + this.opacity + ')'; // Accent color
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around bounds
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = height;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw glowing gradient spots in the background
      // Glow 1: Top-Right
      const glow1 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        0,
        width * 0.8,
        height * 0.2,
        Math.max(width * 0.4, 300)
      );
      glow1.addColorStop(0, 'rgba(39, 55, 77, 0.15)'); // Primary
      glow1.addColorStop(0.5, 'rgba(82, 109, 130, 0.05)'); // Secondary
      glow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      // Glow 2: Bottom-Left
      const glow2 = ctx.createRadialGradient(
        width * 0.15,
        height * 0.8,
        0,
        width * 0.15,
        height * 0.8,
        Math.max(width * 0.5, 400)
      );
      glow2.addColorStop(0, 'rgba(82, 109, 130, 0.1)'); // Secondary
      glow2.addColorStop(0.5, 'rgba(157, 178, 191, 0.03)'); // Accent
      glow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      // Glow 3: Center-Right floating glow
      const time = Date.now() * 0.0005;
      const glowX = width * 0.5 + Math.cos(time) * (width * 0.1);
      const glowY = height * 0.5 + Math.sin(time) * (height * 0.1);
      const glow3 = ctx.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        Math.max(width * 0.3, 250)
      );
      glow3.addColorStop(0, 'rgba(157, 178, 191, 0.06)'); // Accent
      glow3.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow3;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#070913]"
    />
  );
}
