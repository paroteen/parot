import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="font-bold text-xl tracking-tight flex items-center text-white">
              <img src="/assets/images/logo.png" alt="ParoTeen logo" className="h-8 w-8 mt-1 object-contain" />
              aroTeen Inc.
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build technology solutions that solve real business problems and support long-term social impact through the Hello Kids Initiative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-paroblue transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-paroblue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-paroblue transition-colors">Recent Work</Link></li>
              <li><Link to="/contact" className="hover:text-paroblue transition-colors">Request a Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-paroblue mt-0.5 shrink-0" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-paroblue shrink-0" />
                <a href="tel:+250783594197" className="hover:text-white transition-colors">+250783594197</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-paroblue shrink-0" />
                <a href="mailto:info@paroteen.com" className="hover:text-white transition-colors">info@paroteen.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} ParoTeen Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
