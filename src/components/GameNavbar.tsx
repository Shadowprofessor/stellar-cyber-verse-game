
import React, { useState, useEffect } from 'react';
import { Gamepad2, Brain, Trophy, Users, Menu, X } from 'lucide-react';

const GameNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-neon-green/30">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-neon-green neon-text tracking-wider">
              STELLAR<span className="text-cyber-red">VERSE</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Lore', href: '#lore', icon: <Brain size={18} /> },
              { name: 'Missions', href: '#missions', icon: <Gamepad2 size={18} /> },
              { name: 'Leaderboard', href: '#leaderboard', icon: <Trophy size={18} /> },
              { name: 'Community', href: '#community', icon: <Users size={18} /> }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-neon-green transition-colors duration-300 group relative py-2"
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-neon-green/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'Lore', href: '#lore', icon: <Brain size={18} /> },
              { name: 'Missions', href: '#missions', icon: <Gamepad2 size={18} /> },
              { name: 'Leaderboard', href: '#leaderboard', icon: <Trophy size={18} /> },
              { name: 'Community', href: '#community', icon: <Users size={18} /> }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-neon-green block px-3 py-2 text-base font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default GameNavbar;
