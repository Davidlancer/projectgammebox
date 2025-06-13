import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Crown, Handshake, ArrowRight, Star } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    'TechGear Pro', 'GameChair Elite', 'StreamTech', 'ProGaming Peripherals', 
    'EnergyBoost Gaming', 'CloudNet Gaming'
  ];

  const merchandise = [
    {
      name: 'GameBox Arena Jersey',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/8148579/pexels-photo-8148579.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Pro Gaming Hoodie',
      price: '$69.99',
      image: 'https://images.pexels.com/photos/5698841/pexels-photo-5698841.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arena Championship Cap',
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Merchandise Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
              Arena <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Merchandise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Represent GameBox Arena with our exclusive gaming apparel and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {merchandise.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark-900">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary-blue">{item.price}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple py-3 rounded-lg font-semibold text-white hover:shadow-medium transition-all duration-200 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
              View Full Store
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
              Our <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Proudly supported by industry-leading brands that share our passion for competitive gaming
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-soft transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <Crown className="w-8 h-8 text-primary-blue mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-semibold text-gray-700">
                    {sponsor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center">
            <Handshake className="w-12 h-12 text-primary-blue mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6 text-dark-900">Partner With Us</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Join our growing network of sponsors and partners. Reach thousands of engaged gamers 
              and support the future of competitive esports.
            </p>
            <Link to="/partner" className="bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
            Become a Partner
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;