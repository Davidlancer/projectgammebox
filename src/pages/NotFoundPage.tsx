import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Gamepad2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-dark-900 font-sans">
      <Header />
      
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
                404
              </h1>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Gamepad2 className="w-16 h-16 md:w-20 md:h-20 text-primary-blue" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">
              Game Over!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Looks like you've wandered into uncharted territory. 
              The page you're looking for doesn't exist in our arena.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              to="/"
              className="group bg-gradient-to-r from-primary-blue to-primary-purple px-6 py-3 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-300 flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Arena
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group border-2 border-primary-blue px-6 py-3 rounded-lg text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-all duration-300 flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Go Back
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/tournament" className="text-primary-blue hover:text-primary-purple transition-colors">
                Tournaments
              </Link>
              <Link to="/community" className="text-primary-blue hover:text-primary-purple transition-colors">
                Community
              </Link>
              <Link to="/partner" className="text-primary-blue hover:text-primary-purple transition-colors">
                Partner With Us
              </Link>
              <Link to="/auth" className="text-primary-blue hover:text-primary-purple transition-colors">
                Login/Register
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;