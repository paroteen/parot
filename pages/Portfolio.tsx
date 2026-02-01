import React from 'react';
import { Project } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';
import Lightning from '../components/Lightning';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'FinTech Dashboard',
      category: 'Web Development',
      description: 'A comprehensive CRM for a local bank in Rwanda.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'EduLearn AI',
      category: 'AI Solutions',
      description: 'AI-powered tutoring bot for high school students.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'SecureNet Audit',
      category: 'Cybersecurity',
      description: 'Full security audit and training for a logistics firm.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const partners = ['ALU', 'NCSA', 'RIB', 'ShieldTech Hub', 'EyeCyber', 'BSC'];

  return (
    <div className="w-full">
      {/* Portfolio Header */}
      <section className="bg-gradient-to-br from-paroblue via-paroblue to-parodark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Lightning hue={200} xOffset={0.15} speed={0.9} intensity={0.6} size={1.2} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Our Work & Impact</h1>
            <GlowLine className="max-w-md mx-auto mb-6" color="#FFA500" />
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Showcasing innovation across borders.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 border-l-4 border-paroorange pl-4">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <GlowLine className="max-w-xs mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 150}>
                <div className="card-cyber group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-paroblue/20 to-paroorange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 text-white z-20">
                    <span className="text-paroorange text-sm font-bold uppercase tracking-wider mb-2 inline-block px-3 py-1 bg-paroorange/20 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-paroorange transition-colors">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="mt-4 h-0.5 w-0 bg-paroorange group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons & Partners */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hackathons & <span className="gradient-text">Partnerships</span>
              </h2>
              <GlowLine className="max-w-md mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                We collaborate with leading institutions to foster innovation through intense coding competitions and events.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner} direction="up" delay={index * 100}>
                <div className="card-cyber flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-full h-32 hover:shadow-2xl transition-all duration-500 group">
                  <span className="font-bold text-lg text-center text-gray-700 group-hover:text-paroblue transition-colors transform group-hover:scale-110">
                    {partner}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={600}>
            <div className="mt-20 card-cyber bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop" 
                  alt="Hackathon Event" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-paroblue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-paroblue transition-colors">Upcoming Event: CyberDefense 2025</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Join us for a 48-hour cybersecurity hackathon in partnership with NCSA. Challenge yourself to protect critical infrastructure simulation.
                </p>
                <div className="flex gap-4">
                  <button className="btn-cyber bg-paroblue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden">
                    <span className="relative z-10">Register Now</span>
                  </button>
                  <button className="glass border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 hover:border-paroblue transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
