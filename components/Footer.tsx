import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <span className="font-bold text-xl tracking-tight flex items-center transition-colors duration-300 group-hover:text-paroblue">
                <img
                  src="/assets/images/logo.png"
                  alt="P"
                  className="h-8 w-8 mt-1 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                aroTeen
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses globally with innovative IT solutions, AI integration, and robust cybersecurity training.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-paroorange transition-all transform hover:scale-125 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-paroorange transition-all transform hover:scale-125 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-paroorange transition-all transform hover:scale-125 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-paroorange transition-all transform hover:scale-125 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-paroblue transition-all hover:pl-2 inline-block">AI Chatbot Integration</Link></li>
              <li><Link to="/services" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Cybersecurity Training</Link></li>
              <li><Link to="/services" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Software & CRM</Link></li>
              <li><Link to="/services" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Hackathon Organization</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-paroblue transition-all hover:pl-2 inline-block">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-paroblue transition-all hover:pl-2 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-paroblue mt-0.5 shrink-0" />
                <span>Rwanda (HQ) • USA • Asia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-paroblue shrink-0" />
                <span>+250 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-paroblue shrink-0" />
                <span>info@paroteen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ParoTeen Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;