import React from 'react';
import { Project } from '../types';

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
      <section className="bg-paroblue text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Work & Impact</h1>
          <p className="text-xl text-blue-100">Showcasing innovation across borders.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-4 border-paroorange pl-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white opacity-100">
                <span className="text-paroorange text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathons & Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hackathons & Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading institutions to foster innovation through intense coding competitions and events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <div key={partner} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm w-full h-32 hover:shadow-md transition-shadow">
                {/* Using placeholder text for logos as per limitations, normally <img> */}
                <span className="font-bold text-lg text-center text-gray-700">{partner}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop" alt="Hackathon Event" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Upcoming Event: CyberDefense 2025</h3>
                <p className="text-gray-600 mb-6">Join us for a 48-hour cybersecurity hackathon in partnership with NCSA. Challenge yourself to protect critical infrastructure simulation.</p>
                <div className="flex gap-4">
                    <button className="bg-paroblue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">Register Now</button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-50 transition">Learn More</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;