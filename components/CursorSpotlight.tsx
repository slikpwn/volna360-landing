'use client';

import { useEffect, useState } from 'react';

interface CursorSpotlightProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export default function CursorSpotlight({
  color = 'rgba(6, 182, 212, 0.07)',
  size = 600,
  opacity = 1,
}: CursorSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Отмечаем что компонент смонтирован на клиенте
    setIsMounted(true);

    // Только на desktop
    if (window.innerWidth < 1024) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Рендерим пустой div на сервере и клиенте до монтирования
  // После монтирования показываем spotlight
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: isMounted && isVisible ? opacity : 0,
        transition: 'opacity 0.3s ease',
        background: isMounted
          ? `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`
          : 'transparent',
      }}
      aria-hidden="true"
    />
  );
}
