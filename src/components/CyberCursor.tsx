
import React, { useEffect, useState } from 'react';

const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${clicked ? 0.8 : 1})`,
          border: '2px solid hsl(var(--neon-purple))',
          boxShadow: clicked ? '0 0 15px hsl(var(--neon-purple))' : '0 0 5px hsl(var(--neon-purple))'
        }}
      />
      <div 
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          boxShadow: '0 0 10px white'
        }}
      />
    </>
  );
};

export default CyberCursor;
