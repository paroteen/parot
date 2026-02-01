import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio & Events', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-500 h-16 ${
        scrolled 
          ? 'bg-white/98 shadow-lg border-gray-200/50' 
          : 'bg-white/95 shadow-sm border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group magnetic" 
            onClick={closeMenu}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
          >
            <div className="relative">
              <img 
                src="/assets/images/logo.jpg" 
                alt="ParoTeen Logo" 
                className="h-10 w-10 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 rounded-lg bg-paroblue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </div>
            <span className="font-bold text-xl text-parodark tracking-tight transition-colors duration-300 group-hover:text-paroblue">
              Paro<span className="text-paroblue group-hover:text-paroorange transition-colors duration-300">Teen</span> Inc.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-paroblue'
                    : 'text-gray-600 hover:text-paroblue'
                }`}
                style={{
                  animation: `fade-in-up 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-paroblue transform origin-left"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paroblue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-cyber bg-paroblue hover:bg-[#1a7a9d] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-paroblue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-xl"
          style={{
            animation: 'slide-in-down 0.3s ease-out',
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 ${
                  isActive(link.path)
                    ? 'text-paroblue bg-blue-50'
                    : 'text-gray-600 hover:text-paroblue hover:bg-gray-50'
                }`}
                style={{
                  animation: `fade-in-left 0.4s ease forwards`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 px-3">
                    <Globe size={16} />
                    <span>Rwanda • USA • Asia</span>
                </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-paroorange hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-bold transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;