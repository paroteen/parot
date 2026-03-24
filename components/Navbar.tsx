import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { name: 'Recent Work', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-500 h-16 ${
        scrolled ? 'bg-black/85 shadow-lg border-indigo-500/20' : 'bg-black/40 shadow-none border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <span className="font-bold text-xl text-white tracking-tight flex items-center transition-colors duration-300 group-hover:text-paroblue">
              <img src="/assets/images/logo.png" alt="ParoTeen logo" className="h-8 w-8 mt-1 object-contain" />
              aroTeen&nbsp;Inc.
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path) ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
                style={{ animation: `fade-in-up 0.6s ease forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-paroblue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a href="tel:+250783594197" className="inline-flex items-center gap-2 bg-paroblue hover:bg-[#1a7a9d] text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
              <Phone size={15} />
              +250783594197
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-slate-200 focus:outline-none" aria-label="Open menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 absolute w-full shadow-xl" style={{ animation: 'slide-in-down 0.3s ease-out' }}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:pl-5 ${
                  isActive(link.path) ? 'text-white bg-white/10 font-bold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                style={{ animation: `fade-in-left 0.4s ease forwards`, animationDelay: `${index * 0.05}s`, opacity: 0 }}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+250783594197" className="mt-3 block w-full text-center bg-paroorange hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-bold transition-colors">
              Call +250783594197
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
