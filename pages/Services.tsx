import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Code, MessageSquare, ShieldAlert, Monitor, Users, Database } from 'lucide-react';
import { Service } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Website Development',
      description: 'Professional websites and web platforms aligned with your business model and growth goals.',
      icon: 'code',
      features: ['Discovery and planning', 'Responsive UI', 'SEO-ready structure', 'Post-launch support']
    },
    {
      id: 'ai-chat',
      title: 'AI and Chatbot Integration',
      description: 'Practical AI solutions that improve support, internal workflows, and customer response times.',
      icon: 'bot',
      features: ['Custom assistant setup', 'Knowledge base integration', 'Channel integration', 'Team onboarding']
    },
    {
      id: 'cyber-training',
      title: 'Cybersecurity Training and Support',
      description: 'Security awareness and technical support that reduce risk across teams and systems.',
      icon: 'shield',
      features: ['Awareness sessions', 'Policy guidance', 'Security assessments', 'Ongoing advisory']
    },
    {
      id: 'software',
      title: 'Custom Software and CRM',
      description: 'Tailored systems that match your operations instead of forcing your team into generic workflows.',
      icon: 'monitor',
      features: ['Workflow mapping', 'Custom dashboards', 'API integration', 'Scalable architecture']
    },
    {
      id: 'hackathons',
      title: 'Technical Program Delivery',
      description: 'Hands-on technical programs, events, and mentorship experiences for institutions and communities.',
      icon: 'users',
      features: ['Program design', 'Facilitation', 'Mentorship', 'Operational coordination']
    },
    {
      id: 'ai-training',
      title: 'Corporate AI Training',
      description: 'Practical training that helps teams adopt AI responsibly and effectively.',
      icon: 'db',
      features: ['Role-based sessions', 'Prompt best practices', 'Governance and ethics', 'Implementation coaching']
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'code': return <Code size={40} />;
      case 'bot': return <MessageSquare size={40} />;
      case 'shield': return <ShieldAlert size={40} />;
      case 'monitor': return <Monitor size={40} />;
      case 'users': return <Users size={40} />;
      default: return <Database size={40} />;
    }
  };

  return (
    <div className="min-h-screen py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Every engagement is scoped around your problem, priorities, and timelines.
            </p>
            <p className="text-slate-300 mt-4 font-medium">No fixed packages. No one-size-fits-all pricing.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} direction="up" delay={index * 100}>
              <div className="glass rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/5 flex flex-col group relative">
                <div className="p-8 flex-1 relative z-10">
                  <div className="text-paroblue mb-6 bg-blue-500/10 group-hover:bg-paroblue group-hover:text-white w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-400">
                        <CheckCircle2 size={18} className="text-parogreen mr-3 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-white/5 border-t border-white/5 mt-auto relative z-10">
                  <Link to="/contact" className="block w-full text-center bg-paroblue hover:bg-[#1a7a9d] text-white font-semibold py-3 rounded-lg transition-all">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
