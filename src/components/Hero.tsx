import React from 'react';
import { Play, Users, Trophy, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/3 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 rounded-full text-primary-blue font-medium text-sm mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Professional Esports Organization
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-dark-900">
            GameBox Arena
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            Where Gamers Become
          </p>
          <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
            LEGENDS
          </p>
        </div>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Join the premier esports community with professional LAN and online tournaments. 
          Compete at the highest level and connect with passionate gamers worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 flex items-center">
            <Trophy className="w-5 h-5 mr-2" />
            Join Tournament
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="group border-2 border-primary-blue px-8 py-4 rounded-lg text-primary-blue font-semibold text-lg hover:bg-primary-blue hover:text-white transition-all duration-200 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Join Community
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="text-3xl font-bold text-primary-blue mb-2">2,500+</div>
            <div className="text-gray-600 font-medium">Active Players</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="text-3xl font-bold text-primary-purple mb-2">150+</div>
            <div className="text-gray-600 font-medium">Tournaments Hosted</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="text-3xl font-bold text-accent-cyan mb-2">$50K+</div>
            <div className="text-gray-600 font-medium">Prize Pool Distributed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;