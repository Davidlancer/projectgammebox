import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-dark-900 text-white' 
        : 'bg-white text-dark-900'
    }`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;