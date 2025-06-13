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
    <section id="tournaments" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-dark-900">
            Upcoming <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Tournaments</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
            Join our competitive tournaments and prove your skills against the best players in the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${tournament.statusColor}`}>
                    {tournament.status}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-dark-900">
                  {tournament.title}
                </h3>
                <p className="text-primary-blue font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{tournament.game}</p>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary-blue flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary-purple flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tournament.type} - {tournament.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-accent-cyan flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tournament.prizePool} Prize Pool</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-gray-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tournament.participants}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple py-2.5 sm:py-3 rounded-lg font-semibold text-white hover:shadow-medium transition-all duration-200 flex items-center justify-center group text-sm sm:text-base">
                  {tournament.status === 'Registration Open' ? 'Register Now' : 
                   tournament.status === 'Coming Soon' ? 'Notify Me' : 'Learn More'}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
            View All Tournaments
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;