
import React, { useState } from 'react';
import { Trophy, ChevronUp, ChevronDown, Shield, Zap, Cpu } from 'lucide-react';

const players = [
  {
    id: 1,
    rank: 1,
    username: "NeonShadow",
    score: 12480,
    missions: 72,
    winRate: 94,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    level: 85,
    badge: "Legendary"
  },
  {
    id: 2,
    rank: 2,
    username: "CyberWitch",
    score: 11350,
    missions: 65,
    winRate: 92,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    level: 83,
    badge: "Elite"
  },
  {
    id: 3,
    rank: 3,
    username: "Bl4ckH4t",
    score: 10870,
    missions: 68,
    winRate: 89,
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    level: 81,
    badge: "Elite"
  },
  {
    id: 4,
    rank: 4,
    username: "QuantumBreaker",
    score: 9750,
    missions: 61,
    winRate: 87,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    level: 79,
    badge: "Veteran"
  },
  {
    id: 5,
    rank: 5,
    username: "ByteRunner",
    score: 8920,
    missions: 59,
    winRate: 86,
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    level: 77,
    badge: "Veteran"
  }
];

const Leaderboard: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' }>({
    key: 'rank',
    direction: 'ascending'
  });

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedPlayers = [...players].sort((a, b) => {
    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const getClassForHeaderCell = (key: string) => {
    if (sortConfig.key === key) {
      return 'text-neon-green';
    }
    return 'text-slate-400';
  };

  return (
    <section id="leaderboard" className="py-20 px-4 bg-black/30 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzFmMWYzOSIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')] opacity-25"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <Trophy className="inline-block mr-2 text-neon-blue" size={32} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              GLOBAL LEADERBOARD
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The most elite cyber operatives ranked by performance. Do you have what it takes to reach the top?
          </p>
        </div>
        
        <div className="bg-black/80 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th 
                    className={`px-6 py-4 font-medium cursor-pointer ${getClassForHeaderCell('rank')}`}
                    onClick={() => requestSort('rank')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>RANK</span>
                      {sortConfig.key === 'rank' && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium">PLAYER</th>
                  <th 
                    className={`px-6 py-4 font-medium cursor-pointer ${getClassForHeaderCell('score')}`}
                    onClick={() => requestSort('score')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>SCORE</span>
                      {sortConfig.key === 'score' && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-4 font-medium cursor-pointer hidden md:table-cell ${getClassForHeaderCell('missions')}`}
                    onClick={() => requestSort('missions')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>MISSIONS</span>
                      {sortConfig.key === 'missions' && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-4 font-medium cursor-pointer hidden lg:table-cell ${getClassForHeaderCell('winRate')}`}
                    onClick={() => requestSort('winRate')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>WIN RATE</span>
                      {sortConfig.key === 'winRate' && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium text-center hidden sm:table-cell">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((player) => (
                  <tr 
                    key={player.id} 
                    className="border-b border-white/5 transition-colors hover:bg-white/5"
                  >
                    <td className="px-6 py-4">
                      <div className={`
                        inline-flex justify-center items-center w-8 h-8 rounded-full font-bold text-sm
                        ${player.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                          player.rank === 2 ? 'bg-slate-400/20 text-slate-400' : 
                          player.rank === 3 ? 'bg-amber-600/20 text-amber-600' : 
                          'bg-slate-800/50 text-slate-500'}
                      `}>
                        {player.rank}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img 
                            src={player.avatar} 
                            alt={player.username}
                            className="w-10 h-10 rounded-full border-2 border-white/10" 
                          />
                          <div className="absolute -bottom-1 -right-1 bg-black rounded-full w-5 h-5 flex items-center justify-center text-xs border border-white/20">
                            {player.level}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-white">{player.username}</div>
                          <div className="text-xs text-slate-400">
                            {player.badge === 'Legendary' ? (
                              <span className="text-yellow-500 flex items-center">
                                <Shield size={12} className="mr-1" /> Legendary
                              </span>
                            ) : player.badge === 'Elite' ? (
                              <span className="text-neon-blue flex items-center">
                                <Zap size={12} className="mr-1" /> Elite
                              </span>
                            ) : (
                              <span className="text-neon-green flex items-center">
                                <Cpu size={12} className="mr-1" /> Veteran
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono font-medium text-neon-green">
                      {player.score.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      {player.missions}
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      {player.winRate}%
                    </td>
                    <td className="px-6 py-4 text-center hidden sm:table-cell">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                        Online
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-white/10 flex justify-between items-center bg-white/5">
            <div className="text-sm text-slate-400">
              Showing top 5 of 10,432 players
            </div>
            <button className="text-neon-blue hover:text-neon-purple text-sm transition-colors">
              View Full Rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
