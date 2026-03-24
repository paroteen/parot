import React from 'react';
import { Project } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Hello Kids Initiative Digital Support',
      category: 'Development & Social Impact',
      description: 'Technology support that helps coordinate education access, basic needs, and cultural development for vulnerable and street-connected children.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const partners: string[] = [];

  return (
    <div className="w-full">
      {/* Portfolio Header */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 border-l-4 border-paroorange pl-4">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-paroblue to-paroorange rounded-full mb-12"></div>
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

      {/* Partnerships */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partnerships</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-paroblue to-paroorange mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Some collaborations are confidential. We share details where disclosure is permitted.
              </p>
            </div>
          </ScrollReveal>

          {partners.length === 0 && <div className="text-center text-slate-500">No public partner list published at this time.</div>}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
