import React from 'react';
import { Target, Heart, Globe, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/office/1920/600" className="w-full h-full object-cover" alt="Office" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ParoTeen Inc.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Bridging the gap between human potential and technological innovation.</p>
        </div>
      </div>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ParoTeen Inc. is a premier global IT service consultancy. Born from a passion for technology and education, we operate across Rwanda, the United States, and Asia.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We don't just build software; we build capacity. Our unique approach combines high-end development services with rigorous training programs in AI and Cybersecurity, ensuring our partners aren't just consumers of tech, but masters of it.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-paroblue">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Mission</h3>
                    <p className="text-sm text-gray-600">To empower businesses and individuals with innovative tech solutions, AI tools, and cybersecurity knowledge while fostering global collaboration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-lg text-paroorange">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Values</h3>
                    <p className="text-sm text-gray-600">Innovation, Integrity, Education, and Global Connectivity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/teamwork/600/800" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <p className="text-paroblue font-bold text-4xl mb-2">3+</p>
                <p className="text-gray-600 text-sm">Continents served with dedicated teams in Africa, Asia, and North America.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                            <img src={`https://picsum.photos/seed/face${i}/200/200`} alt="Team Member" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-lg">Tech Leader {i}</h3>
                        <p className="text-paroblue text-sm mb-2">Senior Developer</p>
                        <div className="flex justify-center text-gray-400 text-xs gap-2">
                             <Globe size={12} />
                             <span>{i % 2 === 0 ? 'Rwanda' : 'USA'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;