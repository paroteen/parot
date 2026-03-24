import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const team = [
  {
    name: 'Olivier Collins ITANGISHAKA',
    role: 'Founder and Cybersecurity Lead',
    bio: 'Leads the vision behind ParoTeen with a focus on cybersecurity, innovation, and measurable social impact.'
  },
  {
    name: 'MUGISHA Yves',
    role: 'Technical Team / Engineering',
    bio: 'Builds and maintains reliable digital solutions that support client operations day to day.'
  },
  {
    name: 'Gahingayire Eugene',
    role: 'Social Impact Lead',
    bio: 'Leads the Hello Kids Initiative and works directly with children and families in the community.'
  }
];

const About: React.FC = () => {
  return (
    <div className="w-full py-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About ParoTeen Inc.</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We are a technology company committed to solving real client problems while creating direct social impact through our work.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="glass p-8 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            Deliver high-quality technology and cybersecurity services that help organizations grow while supporting access to education and better futures for vulnerable children.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} direction="up" delay={index * 120}>
              <div className="glass p-6 rounded-2xl border border-white/10 h-full">
                <h3 className="font-bold text-xl text-white">{member.name}</h3>
                <p className="text-paroblue font-medium mt-2">{member.role}</p>
                <p className="text-slate-300 mt-4 leading-relaxed">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
