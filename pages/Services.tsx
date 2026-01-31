import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Code, MessageSquare, ShieldAlert, Monitor, Users, Database } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Website Development',
      description: 'Get a professional, mobile-responsive website built in record time. Perfect for startups and small businesses.',
      price: 'Starting at $100',
      icon: 'code',
      features: ['Ready in 1-2 days', 'SEO Optimized', 'Mobile Responsive', 'Free 1 month support']
    },
    {
      id: 'ai-chat',
      title: 'AI Chatbot Integration',
      description: 'Enhance customer engagement with intelligent bots that work 24/7.',
      icon: 'bot',
      features: ['GPT/Gemini Integration', 'Custom Knowledge Base', 'Multi-language Support', 'Instant Setup']
    },
    {
      id: 'cyber-training',
      title: 'Cybersecurity Training',
      description: 'Protect your organization by training your biggest asset: your people.',
      icon: 'shield',
      features: ['Phishing Simulations', 'Workshops for Schools', 'Corporate Seminars', 'Security Audits']
    },
    {
      id: 'software',
      title: 'Custom Software & CRM',
      description: 'Tailor-made software solutions to streamline your business operations.',
      icon: 'monitor',
      features: ['Custom CRMs', 'Inventory Management', 'Cloud Solutions', 'API Development']
    },
    {
      id: 'hackathons',
      title: 'Hackathon Organization',
      description: 'We partner with institutions to organize world-class tech events.',
      icon: 'users',
      features: ['Event Logistics', 'Mentorship', 'Judge Coordination', 'Technical Setup']
    },
    {
      id: 'ai-training',
      title: 'Corporate AI Training',
      description: 'Upskill your workforce to leverage Artificial Intelligence effectively.',
      icon: 'db',
      features: ['Prompt Engineering', 'AI Ethics', 'Productivity Tools', 'Hands-on Workshops']
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'code': return <Code size={40} />;
      case 'bot': return <MessageSquare size={40} />;
      case 'shield': return <ShieldAlert size={40} />;
      case 'monitor': return <Monitor size={40} />;
      case 'users': return <Users size={40} />;
      default: return <Database size={40} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            World-class IT solutions tailored to your needs, delivered with speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              <div className="p-8 flex-1">
                <div className="text-paroblue mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {service.price && (
                  <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
                    {service.price}
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-parogreen mr-2 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-white border border-paroblue text-paroblue hover:bg-paroblue hover:text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;