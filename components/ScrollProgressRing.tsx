'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgressRing.module.css';

export default function ScrollProgressRing() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
      setVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
      <svg className={styles.ring} viewBox="0 0 120 120">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
        </defs>
        <circle
          className={styles.bgCircle}
          cx="60"
          cy="60"
          r="54"
        />
        <circle
          className={styles.progressCircle}
          cx="60"
          cy="60"
          r="54"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className={styles.content}>
        <img src="/images/logo-icon.png" alt="" className={styles.logo} />
      </div>
      <button
        className={styles.scrollTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Наверх"
      >
        ↑
      </button>
    </div>
  );
}
