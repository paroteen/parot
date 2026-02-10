import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="py-24 relative">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/office/1920/600" className="w-full h-full object-cover rounded-3xl" alt="Office" />
          <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">About ParoTeen Inc.</h1>
            <GlowLine className="max-w-md mx-auto mb-6" color="#FFA500" />
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between human potential and technological innovation.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Mission & Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                ParoTeen Inc. is a premier global IT service consultancy. Born from a passion for technology and education, we operate across Rwanda, the United States, and Asia.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                We don't just build software; we build capacity. Our unique approach combines high-end development services with rigorous training programs in AI and Cybersecurity, ensuring our partners aren't just consumers of tech, but masters of it.
              </p>

              <div className="space-y-6 mt-10">
                <ScrollReveal direction="left" delay={200}>
                  <div className="glass flex items-start gap-5 p-6 rounded-xl shadow-lg hover:shadow-xl border border-white/10 group">
                    <div className="p-4 bg-blue-500/10 rounded-xl text-paroblue group-hover:bg-paroblue group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      <Target size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-paroblue transition-colors">Our Mission</h3>
                      <p className="text-slate-400 leading-relaxed">To empower businesses and individuals with innovative tech solutions, AI tools, and cybersecurity knowledge while fostering global collaboration.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left" delay={300}>
                  <div className="glass flex items-start gap-5 p-6 rounded-xl shadow-lg hover:shadow-xl border border-white/10 group">
                    <div className="p-4 bg-orange-500/10 rounded-xl text-paroorange group-hover:bg-paroorange group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      <Heart size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-paroorange transition-colors">Our Values</h3>
                      <p className="text-slate-400 leading-relaxed">Innovation, Integrity, Education, and Global Connectivity.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-paroblue to-paroorange rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
                <img
                  src="https://picsum.photos/seed/teamwork/600/800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[500px] relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <ScrollReveal direction="up" delay={400}>
                  <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl shadow-2xl border border-white/10 max-w-xs hidden md:block">
                    <p className="text-paroblue font-bold text-5xl mb-3 glow-text">3+</p>
                    <p className="text-slate-400 leading-relaxed">Continents served with dedicated teams in Africa, Asia, and North America.</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="gradient-text">Leadership</span>
            </h2>
            <GlowLine className="max-w-md mx-auto mb-12" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-white/10">
                  <div className="w-28 h-28 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <img src={`https://picsum.photos/seed/face${i}/200/200`} alt="Team Member" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-paroblue transition-colors text-white">Tech Leader {i}</h3>
                  <p className="text-paroblue text-sm mb-4 font-semibold">Senior Developer</p>
                  <div className="flex justify-center items-center text-slate-500 text-sm gap-2 group-hover:text-paroblue transition-colors">
                    <Globe size={14} />
                    <span>{i % 2 === 0 ? 'Rwanda' : 'USA'}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
