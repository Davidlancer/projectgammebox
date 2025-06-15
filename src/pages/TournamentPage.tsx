import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TournamentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-dark-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-purple text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Compete in Africa's Premier Esports Arena</h1>
          <p className="text-xl md:text-2xl mb-10">Online or LAN — GameBox Arena is where champions are made.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/register" className="bg-white text-primary-blue px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300">
              Register for a Tournament
            </Link>
            <Link to="/host" className="bg-white text-primary-blue px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300">
              Host with GameBox
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Upcoming Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example tournament card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/path/to/game-logo.png" alt="Game Logo" className="w-20 h-20 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Tournament Title</h3>
            <p className="text-gray-700 mb-3">Date & Time</p>
            <p className="text-gray-700 mb-3">Format: Solo</p>
            <p className="text-gray-700 mb-3">Mode: Online</p>
            <p className="text-gray-700 mb-6">Entry Fee: ₦1000</p>
            <Link to="/register" className="bg-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-primary-purple transition-all duration-300">
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Tournaments Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Ongoing Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example ongoing tournament card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Tournament Title</h3>
            <Link to="/live" className="text-primary-blue hover:text-primary-purple transition-colors">
              View Live Scores
            </Link>
          </div>
        </div>
      </section>

      {/* Past Tournaments Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Past Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example past tournament card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Winner: Team Name</h3>
            <p className="text-gray-700 mb-3">Date</p>
            <p className="text-gray-700 mb-6">Game</p>
            <Link to="/results" className="bg-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-primary-purple transition-all duration-300">
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Filter/Sort Panel */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Filter & Sort</h2>
        <div className="flex space-x-6">
          <select className="px-5 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-300">
            <option>Game</option>
          </select>
          <select className="px-5 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-300">
            <option>Format</option>
          </select>
          <select className="px-5 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-300">
            <option>Platform</option>
          </select>
          <select className="px-5 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-300">
            <option>Status</option>
          </select>
        </div>
      </section>

      {/* Tournament Rules & FAQs */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Tournament Rules & FAQs</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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