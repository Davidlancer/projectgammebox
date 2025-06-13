import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Tournaments from '../components/Tournaments';
import Games from '../components/Games';
import Community from '../components/Community';
import Sponsors from '../components/Sponsors';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
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