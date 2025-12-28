'use client';

import { useRef, useState, useCallback, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glareEnable?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  glareEnable = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
      const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;

      // Glare position (0-100%)
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;

      setTransform({ rotateX, rotateY, scale });
      setGlarePosition({ x: glareX, y: glareY });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const glareStyle = {
    background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnable && (
        <div
          style={{
            ...glareStyle,
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
