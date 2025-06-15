import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Tournaments from '../components/Tournaments';
import Games from '../components/Games';
import Community from '../components/Community';
import Sponsors from '../components/Sponsors';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-dark-900 text-white' 
        : 'bg-white text-dark-900'
    }`}>
      <Header />
      <Hero />
      <About />
      <Tournaments />
      <Games />
      <Community />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;