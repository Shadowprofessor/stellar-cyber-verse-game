
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const HeroSection: React.FC = () => {
  const { toast } = useToast();
  const [glitchActive, setGlitchActive] = useState(false);

  const handleEnterGame = () => {
    setGlitchActive(true);
    
    toast({
      title: "System Alert",
      description: "Preparing neural interface. Standby for immersion sequence.",
      variant: "default",
    });
    
    setTimeout(() => setGlitchActive(false), 1000);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-10 animate-scanline"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4KICAgICAgaWQ9InNjYW5saW5lIgogICAgICB3aWR0aD0iMSIKICAgICAgaGVpZ2h0PSIyIgogICAgICBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICBwYXR0ZXJuVHJhbnNmb3JtPSJzY2FsZSgxLDEpIgogICAgPgogICAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmZmZmMDUiIC8+CiAgICAgIDxyZWN0IHk9IjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAwMDAwMCIgLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzY2FubGluZSkiIC8+Cjwvc3ZnPgo=')]"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center z-20">
        <div className={`relative inline-block mb-6 ${glitchActive ? 'animate-glitch' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white">Welcome to</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple animate-pulse-neon">
              STELLAR CYBER VERSE
            </span>
          </h1>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-neon-blue opacity-70"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-neon-purple opacity-70"></div>
        </div>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Embark on an epic journey through digital realms where you'll battle cyber threats, 
          explore virtual landscapes, and rise through the ranks of elite hackers.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button 
            className="cyber-button"
            onClick={handleEnterGame}
          >
            ENTER GAME
          </button>
          
          <a 
            href="#missions" 
            className="relative px-6 py-3 bg-transparent text-white border-2 border-neon-blue hover:text-black hover:shadow-[0_0_20px_theme(colors.neon-blue)] transition-all duration-300 overflow-hidden hover:z-10"
          >
            <span className="relative z-10">VIEW MISSIONS</span>
            <span className="absolute inset-0 bg-neon-blue transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Active Players", value: "18,432" },
            { label: "Missions", value: "72" },
            { label: "Cyber Battles", value: "2.7M" },
            { label: "Planets", value: "12" }
          ].map((stat, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-md p-4 border border-white/10 rounded-md">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon-purple/20 rounded-full filter blur-3xl animate-float opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue/20 rounded-full filter blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
