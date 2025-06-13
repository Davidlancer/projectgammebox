import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TournamentPage = () => {
  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-purple text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compete in Africa's Premier Esports Arena</h1>
          <p className="text-lg md:text-xl mb-8">Online or LAN — GameBox Arena is where champions are made.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-200">
              Register for a Tournament
            </Link>
            <Link to="/host" className="bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-200">
              Host with GameBox
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Upcoming Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example tournament card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/path/to/game-logo.png" alt="Game Logo" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">Tournament Title</h3>
            <p className="text-gray-700 mb-2">Date & Time</p>
            <p className="text-gray-700 mb-2">Format: Solo</p>
            <p className="text-gray-700 mb-2">Mode: Online</p>
            <p className="text-gray-700 mb-4">Entry Fee: ₦1000</p>
            <Link to="/register" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Tournaments Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Ongoing Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example ongoing tournament card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Tournament Title</h3>
            <Link to="/live" className="text-primary-blue hover:text-primary-purple transition-colors">
              View Live Scores
            </Link>
          </div>
        </div>
      </section>

      {/* Past Tournaments Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Past Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example past tournament card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Winner: Team Name</h3>
            <p className="text-gray-700 mb-2">Date</p>
            <p className="text-gray-700 mb-4">Game</p>
            <Link to="/results" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Filter/Sort Panel */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Filter & Sort</h2>
        <div className="flex space-x-4">
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200">
            <option>Game</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200">
            <option>Format</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200">
            <option>Platform</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200">
            <option>Status</option>
          </select>
        </div>
      </section>

      {/* Tournament Rules & FAQs */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Tournament Rules & FAQs</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Link to="/rules" className="text-primary-blue hover:text-primary-purple transition-colors">
            View Full Rules
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TournamentPage;