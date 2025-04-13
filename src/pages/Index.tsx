
import React, { useState, useEffect } from 'react';
import MatrixRain from '@/components/MatrixRain';
import GameNavbar from '@/components/GameNavbar';
import HeroSection from '@/components/HeroSection';
import GameCards from '@/components/GameCards';
import Leaderboard from '@/components/Leaderboard';
import CyberCursor from '@/components/CyberCursor';
import LoadingScreen from '@/components/LoadingScreen';
import { Users, MessageSquare, Mail, ChevronUp } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {loading ? (
        <LoadingScreen onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <CyberCursor />
          <MatrixRain />
          <GameNavbar />
          
          <main>
            <HeroSection />
            <GameCards />
            <Leaderboard />
            
            {/* Community Section */}
            <section id="community" className="py-20 px-4 relative overflow-hidden">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                    <Users className="inline-block mr-2 text-neon-purple" size={32} />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-green">
                      JOIN OUR COMMUNITY
                    </span>
                  </h2>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    Connect with fellow cyber warriors, share strategies, and participate in exclusive events.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10 text-center">
                    <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageSquare size={24} className="text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Discord Server</h3>
                    <p className="text-slate-300 mb-6">Join our active Discord community with over 50,000 members.</p>
                    <button className="cyber-button w-full">JOIN DISCORD</button>
                  </div>
                  
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10 text-center">
                    <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users size={24} className="text-neon-green" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Find Your Team</h3>
                    <p className="text-slate-300 mb-6">Form alliances with skilled players for multiplayer missions.</p>
                    <button className="cyber-button w-full">TEAM FINDER</button>
                  </div>
                  
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10 text-center">
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail size={24} className="text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Newsletter</h3>
                    <p className="text-slate-300 mb-6">Subscribe for updates on new missions and game patches.</p>
                    <button className="cyber-button w-full">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-black/80 border-t border-white/10 py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green neon-text tracking-wider mb-6">
                    STELLAR<span className="text-cyber-red">VERSE</span>
                  </div>
                  
                  <div className="flex justify-center space-x-8 mb-8">
                    <a href="#lore" className="text-white hover:text-neon-green transition-colors">Lore</a>
                    <a href="#missions" className="text-white hover:text-neon-green transition-colors">Missions</a>
                    <a href="#leaderboard" className="text-white hover:text-neon-green transition-colors">Leaderboard</a>
                    <a href="#community" className="text-white hover:text-neon-green transition-colors">Community</a>
                  </div>
                  
                  <p className="text-slate-400 text-sm">
                    © 2025 StellarVerse. All rights reserved. Created for Website Competition.
                  </p>
                </div>
              </div>
            </footer>
            
            {/* Scroll to top button */}
            {showScrollTop && (
              <button 
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-black/80 border border-neon-green text-neon-green p-3 rounded-full shadow-lg hover:bg-neon-green hover:text-black transition-colors z-40"
                aria-label="Scroll to top"
              >
                <ChevronUp size={20} />
              </button>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
