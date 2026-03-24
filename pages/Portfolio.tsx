import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    id: 'hello-kids',
    title: 'Hello Kids Initiative Digital Support',
    description:
      'Technology support for a community-driven program helping vulnerable and street-connected children access education, basic needs, and cultural development.',
    role: 'Development, cybersecurity guidance, and ongoing technical support.'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="w-full py-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Recent Work</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We only publish work we can represent accurately. Additional project details are shared during consultation where client confidentiality applies.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 120}>
              <div className="glass border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed"><span className="text-white font-semibold">What it does:</span> {project.description}</p>
                <p className="text-slate-300 leading-relaxed"><span className="text-white font-semibold">Our role:</span> {project.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
