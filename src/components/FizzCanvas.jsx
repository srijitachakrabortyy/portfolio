import React, { useEffect, useRef } from 'react';

const FizzCanvas = ({ active, position = { x: window.innerWidth / 2, y: window.innerHeight / 2 - 120 } }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create particles
    const particles = [];
    const particleCount = 180;
    const originX = position.x || width / 2;
    const originY = position.y || height / 2 - 100;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * (Math.random() * 0.8 + 1.1)); // Upward trajectory arc
      const speed = Math.random() * 12 + 4;
      particles.push({
        x: originX + (Math.random() * 40 - 20),
        y: originY + (Math.random() * 10 - 5),
        vx: Math.cos(angle) * speed * (Math.random() * 0.8 + 0.6),
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 4.5 + 1.5,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008,
        color: Math.random() > 0.4 ? 'rgba(255, 255, 255, ' : 'rgba(235, 200, 205, ',
        type: Math.random() > 0.3 ? 'bubble' : 'sparkle',
        gravity: 0.15 + Math.random() * 0.1,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.1 + 0.05
      });
    }

    // Secondary burst delay
    setTimeout(() => {
      for (let i = 0; i < 90; i++) {
        const angle = (Math.PI * (Math.random() * 0.9 + 1.05));
        const speed = Math.random() * 16 + 6;
        particles.push({
          x: originX + (Math.random() * 30 - 15),
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 6 + 2,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.01,
          color: 'rgba(255, 255, 255, ',
          type: 'burst',
          gravity: 0.1,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.08
        });
      }
    }, 150);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.8;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(index, 1);
          return;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === 'bubble') {
          // Bubble gradient with shiny highlight
          const grad = ctx.createRadialGradient(
            p.x - p.radius * 0.3,
            p.y - p.radius * 0.3,
            p.radius * 0.1,
            p.x,
            p.y,
            p.radius
          );
          grad.addColorStop(0, 'rgba(255, 255, 255, ' + (p.alpha * 0.9) + ')');
          grad.addColorStop(0.7, 'rgba(255, 240, 245, ' + (p.alpha * 0.5) + ')');
          grad.addColorStop(1, 'rgba(180, 20, 40, ' + (p.alpha * 0.2) + ')');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + (p.alpha * 0.8) + ')';
          ctx.stroke();
        } else if (p.type === 'sparkle') {
          ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();
        }

        ctx.restore();
      });

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, position]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default FizzCanvas;
