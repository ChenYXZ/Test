import React, { useEffect, useState, useRef } from 'react';

interface Head {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
}

export function FloatingHeads() {
  const [heads, setHeads] = useState<Head[]>([]);
  const lastSpawnTime = useRef(Date.now());

  useEffect(() => {
    let spawnInterval: number;
    let animationFrame: number;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastSpawnTime.current = Date.now(); // Reset spawn timer when page becomes visible
      }
    };

    const spawnHead = () => {
      const currentTime = Date.now();
      if (currentTime - lastSpawnTime.current >= 8000 && isVisible) {
        const newHead: Head = {
          id: currentTime,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
          scale: 0.5 + Math.random() * 1.5,
          rotation: Math.random() * 360,
          opacity: 0.8
        };

        setHeads(prevHeads => [...prevHeads, newHead]);
        lastSpawnTime.current = currentTime;
      }
    };

    const animate = () => {
      if (isVisible) {
        spawnHead();
        setHeads(prevHeads => 
          prevHeads
            .map(head => ({
              ...head,
              y: head.y - 0.3,
              opacity: head.y < window.innerHeight * 0.2 ? head.opacity - 0.002 : head.opacity
            }))
            .filter(head => head.opacity > 0)
        );
      }
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrame = requestAnimationFrame(animate);

    // Add visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {heads.map(head => (
        <div
          key={head.id}
          className="absolute"
          style={{
            left: `${head.x}px`,
            top: `${head.y}px`,
            transform: `scale(${head.scale}) rotate(${head.rotation}deg)`,
            opacity: head.opacity,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <img
            src="https://files.catbox.moe/t1m8hj.png"
            alt=""
            className="w-16 h-16 object-contain opacity-20"
          />
        </div>
      ))}
    </div>
  );
}