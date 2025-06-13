import React from 'react';
import { Calendar, MapPin, DollarSign, Users, ArrowRight } from 'lucide-react';

const Tournaments = () => {
  const tournaments = [
    {
      title: 'Winter Championship 2024',
      game: 'Call of Duty Mobile',
      date: 'Dec 15-17, 2024',
      type: 'LAN',
      location: 'Los Angeles, CA',
      prizePool: '$10,000',
      participants: '64 Teams',
      status: 'Registration Open',
      statusColor: 'bg-green-100 text-green-700',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Apex Legends Masters',
      game: 'Apex Legends',
      date: 'Jan 8-10, 2025',
      type: 'Online',
      location: 'Global',
      prizePool: '$5,000',
      participants: '128 Players',
      status: 'Coming Soon',
      statusColor: 'bg-blue-100 text-blue-700',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'FIFA Pro League',
      game: 'FIFA 24',
      date: 'Feb 1-3, 2025',
      type: 'Hybrid',
      location: 'Multi-City',
      prizePool: '$8,000',
      participants: '32 Players',
      status: 'Registration Soon',
      statusColor: 'bg-yellow-100 text-yellow-700',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="tournaments" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
            Upcoming <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Tournaments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Join our competitive tournaments and prove your skills against the best players in the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${tournament.statusColor}`}>
                    {tournament.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-900">
                  {tournament.title}
                </h3>
                <p className="text-primary-blue font-semibold mb-4">{tournament.game}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-primary-blue" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-primary-purple" />
                    <span className="text-sm">{tournament.type} - {tournament.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-3 text-accent-cyan" />
                    <span className="text-sm">{tournament.prizePool} Prize Pool</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-gray-500" />
                    <span className="text-sm">{tournament.participants}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple py-3 rounded-lg font-semibold text-white hover:shadow-medium transition-all duration-200 flex items-center justify-center group">
                  {tournament.status === 'Registration Open' ? 'Register Now' : 
                   tournament.status === 'Coming Soon' ? 'Notify Me' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
            View All Tournaments
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;