import React from 'react';
import { Shield, Wifi, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Competitive Integrity',
      description: 'Fair play and professional standards maintained across all tournaments and events'
    },
    {
      icon: Wifi,
      title: 'LAN & Online Events',
      description: 'Versatile tournament formats accommodating all types of competitive players'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by gamers, for gamers with continuous community feedback and involvement'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Clear pathways for players to develop skills and advance their esports careers'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
            About <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">GameBox Arena</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            GameBox Arena is a premier esports organization dedicated to hosting world-class tournaments 
            and fostering competitive gaming communities. We specialize in both LAN and online events, 
            providing platforms for players to compete at the highest professional level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-dark-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              To create an inclusive, competitive environment where gamers of all skill levels can 
              compete, learn, and grow together. We believe in the power of esports to bring people 
              together and create lasting connections through shared passion for competitive gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;