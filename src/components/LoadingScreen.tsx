
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingTexts, setLoadingTexts] = useState<string[]>([]);

  useEffect(() => {
    const texts = [
      "INITIALIZING STELLAR DRIVE...",
      "LOADING QUANTUM ENGINE...",
      "CALIBRATING NEURAL NETWORKS...",
      "SYNCHRONIZING BATTLE PROTOCOLS...",
      "ESTABLISHING SECURE CONNECTION..."
    ];
    setLoadingTexts([texts[0]]);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        
        // Add new loading text at specific progress points
        if (newProgress === 20 || newProgress === 40 || newProgress === 60 || newProgress === 80) {
          const textIndex = Math.floor(newProgress / 20);
          setLoadingTexts(prev => [...prev, texts[textIndex]]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 rounded-full border-4 border-t-neon-green border-r-neon-blue border-b-neon-purple border-l-cyber-red animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-2 border-t-cyber-red border-r-neon-purple border-b-neon-blue border-l-neon-green animate-spin" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="w-80 mb-12">
        <div className="mb-2 text-neon-blue text-lg font-bold animate-pulse-neon">
          {loadingTexts[loadingTexts.length - 1]}
        </div>
        
        <div className="w-full h-1 bg-muted relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple absolute top-0 left-0 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-2 text-right text-white text-sm">
          {progress}%
        </div>
      </div>
      
      <div className="max-w-md px-4">
        <div className="text-muted-foreground text-xs space-y-1 font-mono">
          {loadingTexts.map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="text-neon-green mr-2">[OK]</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
