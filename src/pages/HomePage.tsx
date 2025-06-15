import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Tournaments from '../components/Tournaments';
import Games from '../components/Games';
import Community from '../components/Community';
import Sponsors from '../components/Sponsors';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const HomePage = () => {
  const [theme, setTheme] = useState('light');
  const isDarkMode = theme === 'dark';
  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-900 text-white' : 'bg-white text-dark-900'} font-sans`}>
      <Header />
      <button onClick={toggleDarkMode} className="p-2 m-4 bg-primary-blue text-white rounded">
        Toggle Dark Mode
      </button>
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