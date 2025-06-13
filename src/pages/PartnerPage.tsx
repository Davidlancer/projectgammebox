import React from 'react';
import { ArrowRight, Users, BarChart3, Trophy, Tv, Globe, Handshake, Medal, Video, Laptop, ShoppingBag, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerPage = () => {
  // Sample partner logos (placeholders)
  const partners = [
    { name: 'TechGear Pro', category: 'Equipment Sponsor' },
    { name: 'GameChair Elite', category: 'Gear Sponsor' },
    { name: 'StreamTech', category: 'Media Partner' },
    { name: 'ProGaming Peripherals', category: 'Tournament Sponsor' },
    { name: 'EnergyBoost Gaming', category: 'Beverage Partner' },
    { name: 'CloudNet Gaming', category: 'Technology Partner' },
  ];

  // Partnership categories
  const partnershipTypes = [
    {
      icon: Trophy,
      title: 'Tournament Sponsorship',
      description: 'Sponsor our high-profile tournaments with cash prizes, product placements, and branded segments.'
    },
    {
      icon: Video,
      title: 'Media & Content Collabs',
      description: 'Create co-branded content, sponsor livestreams, or develop exclusive series with our content creators.'
    },
    {
      icon: Laptop,
      title: 'Equipment & Tech',
      description: 'Provide gaming gear, hardware, or software solutions for our players, events, and training facilities.'
    },
    {
      icon: ShoppingBag,
      title: 'Merch/Brand Deals',
      description: 'Develop co-branded merchandise or exclusive product lines with GameBox Arena.'
    },
    {
      icon: MapPin,
      title: 'Venue Partnerships',
      description: 'Host LAN events, viewing parties, or community meetups at your venue with our growing community.'
    },
  ];

  // Stats for value props
  const stats = [
    { icon: Users, value: '500K+', label: 'Community Members' },
    { icon: BarChart3, value: '85%', label: 'Engagement Rate' },
    { icon: Trophy, value: '120+', label: 'Tournaments Hosted' },
    { icon: Tv, value: '2.5M', label: 'Livestream Views' },
    { icon: Globe, value: '35+', label: 'Countries Reached' },
  ];

  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <Header />
      <div className="pt-24"> {/* Add padding top to account for fixed header */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark-900">
                Partner with the <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Future of African Esports</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-10">
                Join GameBox Arena in shaping the competitive gaming landscape across Africa. 
                With our rapidly growing community and high-engagement events, we offer unparalleled 
                brand visibility and authentic connections with the gaming audience.
              </p>
              <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Why Partner With Us */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-dark-900">
                  Why <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Partner With Us</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  GameBox Arena offers partners exceptional value through our engaged audience, 
                  high-visibility events, and authentic community connections.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-soft transition-all duration-300 text-center"
                  >
                    <div className="bg-gradient-to-r from-primary-blue to-primary-purple p-3 rounded-xl inline-flex mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-dark-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Partners */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-dark-900">
                  Our <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Partners</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  We're proud to work with these amazing brands who share our vision for African esports
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300 text-center"
                  >
                    <Medal className="w-12 h-12 text-primary-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-dark-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm">{partner.category}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-dark-900">
                  Partnership <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Opportunities</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Explore the different ways your brand can collaborate with GameBox Arena
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partnershipTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-medium transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-primary-blue to-primary-purple p-3 rounded-xl inline-flex mb-6">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Inquiry Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <div className="text-center mb-12">
                <Handshake className="w-12 h-12 text-primary-blue mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-dark-900">Let's Discuss Partnership</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                  Fill out the form below and our partnerships team will get back to you within 48 hours
                </p>
              </div>

              <form className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200" 
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200" 
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                  <select 
                    id="partnershipType" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="" disabled selected>Select partnership type</option>
                    <option value="tournament">Tournament Sponsorship</option>
                    <option value="media">Media & Content Collaboration</option>
                    <option value="equipment">Equipment & Tech</option>
                    <option value="merch">Merchandise & Brand Deals</option>
                    <option value="venue">Venue Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200" 
                    placeholder="Tell us about your partnership goals"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-primary-blue to-primary-purple px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-medium transition-all duration-200 inline-flex items-center"
                  >
                    Let's Talk
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerPage;