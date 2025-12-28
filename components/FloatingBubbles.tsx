'use client';

export default function FloatingBubbles() {
  const bubbles = [
    { id: 1, size: 280, left: '10%', top: '20%', hue: 180, opacity: 0.6, duration: 25, delay: 0 },
    { id: 2, size: 200, left: '75%', top: '15%', hue: 200, opacity: 0.55, duration: 30, delay: -5 },
    { id: 3, size: 320, left: '85%', top: '55%', hue: 220, opacity: 0.5, duration: 35, delay: -10 },
    { id: 4, size: 150, left: '15%', top: '65%', hue: 190, opacity: 0.6, duration: 28, delay: -8 },
    { id: 5, size: 250, left: '50%', top: '35%', hue: 210, opacity: 0.5, duration: 32, delay: -12 },
    { id: 6, size: 180, left: '25%', top: '80%', hue: 175, opacity: 0.55, duration: 27, delay: -3 },
    { id: 7, size: 220, left: '88%', top: '25%', hue: 195, opacity: 0.5, duration: 33, delay: -15 },
    { id: 8, size: 160, left: '8%', top: '45%', hue: 185, opacity: 0.6, duration: 29, delay: -7 },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            borderRadius: '50%',
            background: `radial-gradient(circle, hsla(${b.hue}, 100%, 60%, 0.7), transparent 70%)`,
            filter: 'blur(30px)',
            opacity: b.opacity,
            animation: `floatBubble ${b.duration}s ease-in-out infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
