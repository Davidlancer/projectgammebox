import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/tournament' },
    { name: 'Games', href: '/#games' },
    { name: 'Community', href: '/community' },
    { name: 'Partner With Us', href: '/partner' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700 shadow-soft' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-soft'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <motion.div 
              className="p-1.5 sm:p-2 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <div>
              <span className={`text-lg sm:text-xl font-bold group-hover:text-primary-blue transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-dark-900'
              }`}>
                GameBox Arena
              </span>
              <div className={`text-xs font-medium hidden sm:block ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>ESPORTS ORGANIZATION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className={`relative font-medium transition-all duration-300 text-sm xl:text-base group ${
                      isActiveLink(link.href) 
                        ? 'text-primary-blue' 
                        : isDarkMode 
                          ? 'text-gray-300 hover:text-primary-blue'
                          : 'text-gray-700 hover:text-primary-blue'
                    }`}
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary-blue"
                      initial={{ width: 0 }}
                      animate={{ width: isActiveLink(link.href) ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`font-medium relative group text-sm xl:text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-primary-blue'
                        : 'text-gray-700 hover:text-primary-blue'
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link 
                to="/auth" 
                className="bg-gradient-to-r from-primary-blue to-primary-purple px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-300 text-sm xl:text-base hover:scale-105"
              >
                Register/Login
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 ${isDarkMode ? 'text-white' : 'text-dark-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className={`lg:hidden mt-4 pb-4 border-t rounded-b-lg overflow-hidden ${
                isDarkMode 
                  ? 'border-dark-700 bg-dark-900/95 backdrop-blur-md'
                  : 'border-gray-200 bg-white/95 backdrop-blur-md'
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2 mt-4 px-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        className={`block py-3 px-3 rounded-lg font-medium transition-all duration-300 ${
                          isActiveLink(link.href)
                            ? 'text-primary-blue bg-primary-blue/10'
                            : isDarkMode
                              ? 'text-gray-300 hover:text-primary-blue hover:bg-dark-700'
                              : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={`block font-medium py-3 px-3 rounded-lg transition-colors duration-300 ${
                          isDarkMode
                            ? 'text-gray-300 hover:text-primary-blue hover:bg-dark-700'
                            : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                >
                  <Link 
                    to="/auth" 
                    className="block bg-gradient-to-r from-primary-blue to-primary-purple px-4 py-3 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-300 text-center mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register/Login
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;