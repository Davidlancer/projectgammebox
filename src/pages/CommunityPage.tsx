import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mdiTwitter } from '@mdi/js';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-purple text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the GameBox Community</h1>
          <p className="text-lg md:text-xl mb-8">Compete. Connect. Create. Stay updated with tournaments, behind-the-scenes content, memes, and team news.</p>
          <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-200">
            Join Our WhatsApp Squad
          </a>
        </div>
      </section>

      {/* Platform Grid Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* <WhatsApp className="w-12 h-12 text-primary-blue mb-4" /> */}
            <h2 className="text-xl font-bold mb-2">Tournament Announcements Group</h2>
            <p className="text-gray-700 mb-4">Join Now</p>
            <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Join Now
            </a>
          </div>

          {/* TikTok */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* <TikTok className="w-12 h-12 text-primary-blue mb-4" /> */}
            <h2 className="text-xl font-bold mb-2">@GameBoxArena</h2>
            <p className="text-gray-700 mb-4">Catch our viral clips, fails & wins.</p>
            <a href="https://www.tiktok.com/@GameBoxArena" target="_blank" rel="noopener noreferrer" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Follow on TikTok
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* <Instagram className="w-12 h-12 text-primary-blue mb-4" /> */}
            <h2 className="text-xl font-bold mb-2">@GameBoxArena</h2>
            <p className="text-gray-700 mb-4">Behind the scenes, merch, tourney recaps.</p>
            <a href="https://www.instagram.com/GameBoxArena" target="_blank" rel="noopener noreferrer" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Follow on Instagram
            </a>
          </div>

          {/* Twitter */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* <Twitter className="w-12 h-12 text-primary-blue mb-4" /> */}
            <h2 className="text-xl font-bold mb-2">@GameBoxArena</h2>
            <p className="text-gray-700 mb-4">Live updates. Trash talk. Announcements.</p>
            <a href="https://twitter.com/GameBoxArena" target="_blank" rel="noopener noreferrer" className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Optional Highlight Carousel */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Community Highlights</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {/* Example highlights */}
          <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md flex-shrink-0"></div>
          <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md flex-shrink-0"></div>
          <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md flex-shrink-0"></div>
        </div>
      </section>

      {/* Optional Newsletter Signup */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Not on socials? Get updates in your inbox.</h2>
          <form className="max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200" />
            <button type="submit" className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-purple transition-all duration-200">
              Join the List
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;