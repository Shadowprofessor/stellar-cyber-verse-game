
import React from 'react';
import { Clock, Activity, Shield, Users, Bolt, Zap } from 'lucide-react';

const missions = [
  {
    id: 1,
    title: "Neural Infiltration",
    description: "Hack into the Megacorp neural networks and extract classified data without triggering system alerts.",
    difficulty: "Hard",
    time: "45 min",
    players: "1-2",
    rewards: "8,000 Credits + Neural Implant",
    image: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1974&auto=format&fit=crop",
    bgColor: "from-neon-purple/20 to-cyber-red/20"
  },
  {
    id: 2,
    title: "Cyber Defense",
    description: "Protect the city's power grid from a coordinated attack by rogue AI entities. Build defensive algorithms in real-time.",
    difficulty: "Medium",
    time: "30 min",
    players: "1-4",
    rewards: "5,500 Credits + Defensive Module",
    image: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?q=80&w=2070&auto=format&fit=crop",
    bgColor: "from-neon-blue/20 to-neon-green/20"
  },
  {
    id: 3,
    title: "Quantum Heist",
    description: "Infiltrate the heavily guarded quantum vault and extract the experimental tech before time runs out.",
    difficulty: "Extreme",
    time: "60 min",
    players: "2-4",
    rewards: "12,000 Credits + Rare Equipment",
    image: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=2070&auto=format&fit=crop",
    bgColor: "from-cyber-red/20 to-neon-blue/20"
  }
];

const GameCards: React.FC = () => {
  return (
    <section id="missions" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block cyber-border p-2">
            <span className="bg-dark-bg px-4">ACTIVE MISSIONS</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Select your mission and establish your legacy in the cyber realm. Each mission offers unique challenges and rewards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <div 
              key={mission.id} 
              className="group relative flex flex-col h-full rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Card background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${mission.bgColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              {/* Mission image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={mission.image} 
                  alt={mission.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-20 flex-1 flex flex-col p-6 bg-black/80 border border-white/10">
                {/* Difficulty badge */}
                <div className={`
                  absolute right-6 -top-4 px-3 py-1 text-xs font-semibold rounded 
                  ${mission.difficulty === 'Hard' ? 'bg-cyber-red' : 
                    mission.difficulty === 'Medium' ? 'bg-neon-blue' : 'bg-neon-purple'}
                `}>
                  {mission.difficulty}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors duration-300">
                  {mission.title}
                </h3>
                
                <p className="text-slate-300 mb-4 flex-1">
                  {mission.description}
                </p>
                
                {/* Mission details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-neon-blue" />
                    <span>{mission.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-neon-green" />
                    <span>{mission.players}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Bolt size={16} className="text-cyber-red" />
                    <span>{mission.rewards}</span>
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-neon-green/50 text-white transition-all duration-300 group-hover:text-neon-green flex items-center justify-center space-x-2">
                  <span>Deploy Mission</span>
                  <Zap size={16} />
                </button>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 border-t-2 border-r-2 w-6 h-6 border-neon-green opacity-70"></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 w-6 h-6 border-neon-green opacity-70"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="cyber-button">
            VIEW ALL MISSIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameCards;
