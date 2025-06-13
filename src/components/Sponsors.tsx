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
    <section id="partners" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Merchandise Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-dark-900">
              Arena <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Merchandise</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Represent GameBox Arena with our exclusive gaming apparel and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {merchandise.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-dark-900">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-primary-blue">{item.price}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple py-2.5 sm:py-3 rounded-lg font-semibold text-white hover:shadow-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base">
                    <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
              View Full Store
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-dark-900">
              Our <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Proudly supported by industry-leading brands that share our passion for competitive gaming
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="group bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-soft transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-blue mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">
                    {sponsor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 text-center">
            <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-primary-blue mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-dark-900">Partner With Us</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
              Join our growing network of sponsors and partners. Reach thousands of engaged gamers 
              and support the future of competitive esports.
            </p>
            <Link to="/partner" className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
            Become a Partner
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;