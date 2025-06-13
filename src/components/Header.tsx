import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/tournament' },
    { name: 'Games', href: '/#games' },
    { name: 'Community', href: '/community' },
    { name: 'Partner With Us', href: '/partner' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-soft' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-dark-900">GameBox Arena</span>
              <div className="text-xs text-gray-500 font-medium">ESPORTS ORGANIZATION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-200 group-hover:w-full"></span>
                </a>
              )
            ))}
            <Link to="/auth" className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-200">
              Register/Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link to="/tournament" className="nav-link">Tournament</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;