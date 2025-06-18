import React from 'react';
import { Calendar, MapPin, DollarSign, Users, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { getTournamentStatus, formatDate, getTimeUntil } from '../utils/dateUtils';

interface Tournament {
  id: string;
  title: string;
  game: string;
  startDate: string;
  endDate?: string;
  type: 'LAN' | 'Online' | 'Hybrid';
  location: string;
  prizePool: string;
  participants: string;
  entryFee: string;
  maxTeams: number;
  registeredTeams: number;
  image: string;
  format: 'Solo' | '2v2' | '3v3' | '5v5';
}

interface TournamentCardProps {
  tournament: Tournament;
  onRegister?: (tournamentId: string) => void;
  showRegisterButton?: boolean;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ 
  tournament, 
  onRegister,
  showRegisterButton = true 
}) => {
  const status = getTournamentStatus(tournament.startDate, tournament.endDate);
  const isRegistrationOpen = status === 'upcoming' && tournament.registeredTeams < tournament.maxTeams;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'ongoing':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Registration Open';
      case 'ongoing':
        return 'Live Now';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <motion.div 
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img 
          src={tournament.image} 
          alt={tournament.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </span>
        </div>
        {status === 'upcoming' && (
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
            <div className="flex items-center text-white text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {getTimeUntil(tournament.startDate)}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-dark-900">
          {tournament.title}
        </h3>
        <p className="text-primary-blue font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
          {tournament.game} • {tournament.format}
        </p>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary-blue flex-shrink-0" />
            <span className="text-xs sm:text-sm">{formatDate(tournament.startDate)}</span>
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
            <span className="text-xs sm:text-sm">
              {tournament.registeredTeams}/{tournament.maxTeams} Teams
            </span>
          </div>
        </div>

        {/* Registration Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Registration Progress</span>
            <span>{Math.round((tournament.registeredTeams / tournament.maxTeams) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-blue to-primary-purple h-2 rounded-full transition-all duration-300"
              style={{ width: `${(tournament.registeredTeams / tournament.maxTeams) * 100}%` }}
            ></div>
          </div>
        </div>

        {showRegisterButton && (
          <motion.button 
            onClick={() => onRegister?.(tournament.id)}
            disabled={!isRegistrationOpen}
            className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group text-sm sm:text-base ${
              isRegistrationOpen
                ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white hover:shadow-medium'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            whileHover={isRegistrationOpen ? { scale: 1.02 } : {}}
            whileTap={isRegistrationOpen ? { scale: 0.98 } : {}}
          >
            {status === 'upcoming' && isRegistrationOpen ? 'Register Now' : 
             status === 'upcoming' && !isRegistrationOpen ? 'Registration Full' :
             status === 'ongoing' ? 'View Live' : 'View Results'}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default TournamentCard;