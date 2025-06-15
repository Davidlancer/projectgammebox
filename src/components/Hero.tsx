import React from 'react';
import { Users, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-accent-cyan/3 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-20 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-blue/10 rounded-full text-primary-blue font-medium text-xs sm:text-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Professional Esports Organization
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-dark-900"
            variants={itemVariants}
          >
            GameBox Arena
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-2 sm:mb-4 font-light"
            variants={itemVariants}
          >
            Where Gamers Become
          </motion.p>
          
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent"
            variants={itemVariants}
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            LEGENDS
          </motion.p>
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4"
          variants={itemVariants}
        >
          Join the premier esports community with professional LAN and online tournaments. 
          Compete at the highest level and connect with passionate gamers worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          variants={itemVariants}
        >
          <motion.button 
            className="group w-full sm:w-auto bg-gradient-to-r from-primary-blue to-primary-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg hover:shadow-medium transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate('/tournament')}
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Join Tournament
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </motion.div>
          </motion.button>
          
          <motion.button 
            className="group w-full sm:w-auto border-2 border-primary-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-primary-blue font-semibold text-base sm:text-lg hover:bg-primary-blue hover:text-white transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate('/community')}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Join Community
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
          variants={containerVariants}
        >
          {[
            { value: '2,500+', label: 'Active Players', color: 'text-primary-blue' },
            { value: '150+', label: 'Tournaments Hosted', color: 'text-primary-purple' },
            { value: '$50K+', label: 'Prize Pool Distributed', color: 'text-accent-cyan' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${stat.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;