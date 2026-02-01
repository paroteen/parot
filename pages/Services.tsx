import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Code, MessageSquare, ShieldAlert, Monitor, Users, Database } from 'lucide-react';
import { Service } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <GlowLine className="max-w-md mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              World-class IT solutions tailored to your needs, delivered with speed and precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const getColorClasses = (icon: string) => {
              switch(icon) {
                case 'code': return {
                  text: 'text-paroblue',
                  bg: 'bg-blue-50',
                  bgHover: 'group-hover:bg-paroblue',
                  bgAccent: 'bg-blue-500/5'
                };
                case 'bot': return {
                  text: 'text-purple-600',
                  bg: 'bg-purple-50',
                  bgHover: 'group-hover:bg-purple-600',
                  bgAccent: 'bg-purple-500/5'
                };
                case 'shield': return {
                  text: 'text-paroorange',
                  bg: 'bg-orange-50',
                  bgHover: 'group-hover:bg-paroorange',
                  bgAccent: 'bg-orange-500/5'
                };
                case 'monitor': return {
                  text: 'text-indigo-600',
                  bg: 'bg-indigo-50',
                  bgHover: 'group-hover:bg-indigo-600',
                  bgAccent: 'bg-indigo-500/5'
                };
                case 'users': return {
                  text: 'text-pink-600',
                  bg: 'bg-pink-50',
                  bgHover: 'group-hover:bg-pink-600',
                  bgAccent: 'bg-pink-500/5'
                };
                default: return {
                  text: 'text-green-600',
                  bg: 'bg-green-50',
                  bgHover: 'group-hover:bg-green-600',
                  bgAccent: 'bg-green-500/5'
                };
              }
            };
            const colors = getColorClasses(service.icon);
            return (
              <ScrollReveal key={service.id} direction="up" delay={index * 100}>
                <div className="card-cyber bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col group relative">
                  <div className={`absolute top-0 right-0 w-40 h-40 ${colors.bgAccent} rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className="p-8 flex-1 relative z-10">
                    <div className={`${colors.text} mb-6 ${colors.bg} ${colors.bgHover} group-hover:text-white w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}>
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-paroblue transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {service.price && (
                      <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6 transform group-hover:scale-105 transition-transform">
                        {service.price}
                      </div>
                    )}

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                          style={{
                            animation: `fade-in-left 0.5s ease forwards`,
                            animationDelay: `${idx * 0.1}s`,
                            opacity: 0,
                          }}
                        >
                          <CheckCircle2 size={18} className="text-parogreen mr-3 mt-0.5 shrink-0 group-hover:scale-125 transition-transform" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100 mt-auto relative z-10">
                    <Link 
                      to="/contact" 
                      className="btn-cyber block w-full text-center bg-white border-2 border-paroblue text-paroblue hover:bg-paroblue hover:text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden"
                    >
                      <span className="relative z-10">Book Now</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
