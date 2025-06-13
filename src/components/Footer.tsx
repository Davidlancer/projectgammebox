import React from 'react';
import { Gamepad2, Youtube, Twitch, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Twitch, href: '#', color: 'hover:text-purple-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/#tournaments' },
    { name: 'Games', href: '/#games' },
    { name: 'Community', href: '/#community' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Partner With Us', href: '/partner' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl">
                <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-white">GameBox Arena</span>
                <div className="text-xs text-gray-400 font-medium">ESPORTS ORGANIZATION</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Where Gamers Become Legends. Join the ultimate esports community with professional 
              tournaments and competitive gaming experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 ${link.color} transition-colors duration-300 hover:scale-105`}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-blue transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-blue transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary-blue flex-shrink-0" />
                <span className="break-all">info@gameboxarena.com</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary-purple flex-shrink-0" />
                +1 (555) 123-GAME
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-accent-cyan flex-shrink-0" />
                Los Angeles, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © 2024 GameBox Arena. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <Link to="/partner" className="text-gray-400 hover:text-primary-blue transition-colors duration-300 text-sm sm:text-base">
                Partner with Us
              </Link>
              <Link to="/auth" className="bg-gradient-to-r from-primary-blue to-primary-purple px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-200 text-sm sm:text-base">
                 Register/Login
               </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;