import React from 'react';
import { Gamepad, Zap, Target, Swords } from 'lucide-react';

const Games = () => {
  const games = [
    {
      name: 'Call of Duty Mobile',
      icon: Target,
      color: 'from-red-500 to-orange-500',
      players: '200+ Active',
      tournaments: '15 Monthly',
      description: 'Fast-paced tactical shooter'
    },
    {
      name: 'FIFA 24',
      icon: Zap,
      color: 'from-green-500 to-blue-500',
      players: '150+ Active',
      tournaments: '8 Monthly',
      description: 'Premier football simulation'
    },
    {
      name: 'Mortal Kombat',
      icon: Swords,
      color: 'from-purple-500 to-pink-500',
      players: '100+ Active',
      tournaments: '6 Monthly',
      description: 'Legendary fighting game'
    },
    {
      name: 'Apex Legends',
      icon: Gamepad,
      color: 'from-orange-500 to-red-500',
      players: '180+ Active',
      tournaments: '12 Monthly',
      description: 'Battle royale excellence'
    }
  ];

  return (
    <section id="games" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
            Featured <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Compete in your favorite games with regular tournaments and active communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {games.map((game, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <game.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-dark-900">
                {game.name}
              </h3>
              
              <p className="text-gray-500 text-sm mb-4">{game.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Players</span>
                  <span className="text-primary-blue font-semibold text-sm">{game.players}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Tournaments</span>
                  <span className="text-primary-purple font-semibold text-sm">{game.tournaments}</span>
                </div>
              </div>

              <button className="w-full border border-primary-blue py-2.5 rounded-lg text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-all duration-200">
                Join Community
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-dark-900">Don't See Your Game?</h3>
            <p className="text-lg text-gray-600 mb-6 font-light">
              We're always expanding our tournament offerings. Let us know what games you'd like to see!
            </p>
            <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 py-3 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-200">
              Suggest a Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;