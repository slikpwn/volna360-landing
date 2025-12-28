'use client';

import { useEffect, useRef } from 'react';
import styles from './FloatingBubbles.module.css';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

export default function FloatingBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create bubbles
    const bubbleCount = 15;
    bubblesRef.current = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 60,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: 0.1 + Math.random() * 0.2,
      hue: Math.random() * 60 + 170, // cyan to purple range
    }));

    // Create bubble elements
    bubblesRef.current.forEach((bubble) => {
      const el = document.createElement('div');
      el.className = styles.bubble;
      el.id = `bubble-${bubble.id}`;
      el.style.width = `${bubble.size}px`;
      el.style.height = `${bubble.size}px`;
      el.style.left = `${bubble.x}px`;
      el.style.top = `${bubble.y}px`;
      el.style.opacity = `${bubble.opacity}`;
      el.style.background = `radial-gradient(circle, hsla(${bubble.hue}, 80%, 60%, 0.4), transparent 70%)`;
      container.appendChild(el);
    });

    // Animation loop
    const animate = () => {
      bubblesRef.current.forEach((bubble) => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Bounce off edges
        if (bubble.x < -bubble.size) bubble.x = window.innerWidth;
        if (bubble.x > window.innerWidth) bubble.x = -bubble.size;
        if (bubble.y < -bubble.size) bubble.y = window.innerHeight;
        if (bubble.y > window.innerHeight) bubble.y = -bubble.size;

        const el = document.getElementById(`bubble-${bubble.id}`);
        if (el) {
          el.style.left = `${bubble.x}px`;
          el.style.top = `${bubble.y}px`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      bubblesRef.current.forEach((bubble) => {
        if (bubble.x > window.innerWidth) bubble.x = window.innerWidth * Math.random();
        if (bubble.y > window.innerHeight) bubble.y = window.innerHeight * Math.random();
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      // Clean up bubbles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
