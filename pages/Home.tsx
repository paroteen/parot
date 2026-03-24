import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Shield, Code2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const helloKidsUrl = (import.meta.env.VITE_HELLO_KIDS_URL as string | undefined) || 'https://kids.paroteen.com';

const Home: React.FC = () => {
  const recentWork = [
    {
      name: 'Hello Kids Initiative Digital Support',
      whatItDoes:
        'Supports coordination, communication, and access to educational resources for vulnerable and street-connected children.',
      role: 'Web development, operational support, and ongoing technical improvements.'
    }
  ];

  return (
    <div className="w-full">
      <section className="relative min-h-[680px] flex items-center justify-center py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="zoom-out" duration={1000}>
            <p className="text-paroblue font-semibold tracking-wide mb-4">ParoTeen Inc.</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
              Technology Built Around Your Real Needs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              We design, build, and secure custom digital solutions for organizations that need dependable outcomes, not one-size-fits-all packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-paroblue hover:bg-[#1a7a9d] text-white px-8 py-4 rounded-full font-semibold transition-all">
                Request a Consultation
              </Link>
              <Link to="/contact" className="glass border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all">
                Let&apos;s Understand Your Needs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white">100+ Clients</h3>
            <p className="text-slate-400 mt-2">Trusted by 100+ clients</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white">Custom Delivery</h3>
            <p className="text-slate-400 mt-2">Solutions scoped around your context, team, and goals</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white">Long-Term Partner</h3>
            <p className="text-slate-400 mt-2">Development, cybersecurity, and operational support</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tech That Creates Impact</h2>
            <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 space-y-5">
              <p className="text-slate-300 leading-relaxed">ParoTeen Inc. is not just a technology company.</p>
              <p className="text-slate-300 leading-relaxed">
                We built this company with a deeper mission: to use technology as a tool for impact. Every project we deliver contributes to something bigger than business.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Through our work, we support the Hello Kids Initiative, a community-driven program that helps vulnerable and street-connected children access education, basic needs, and cultural development.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, more than 60 children are supported through this initiative, not by donations alone, but through the work we do with our clients.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When you choose to work with us, you are not only getting a reliable tech partner. You are directly contributing to giving a child access to school, learning materials, and a better future.
              </p>
              <p className="text-white font-semibold">This is technology with purpose.</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-paroorange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Work With Us. Create Impact.
                  <ArrowRight size={18} />
                </Link>
                <a href={helloKidsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Learn More About Hello Kids
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Some of the organizations we&apos;ve worked with</h2>
          <p className="text-slate-400 max-w-3xl">
            Many of our engagements are confidential. We share references and relevant case details during consultation based on your sector and needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Recent Work</h2>
          <div className="grid grid-cols-1 gap-6">
            {recentWork.map((project) => (
              <div key={project.name} className="glass border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{project.name}</h3>
                <div className="space-y-3 text-slate-300">
                  <p><span className="text-white font-medium">What it does:</span> {project.whatItDoes}</p>
                  <p><span className="text-white font-medium">Our role:</span> {project.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass border border-white/10 rounded-2xl p-6">
              <Code2 className="text-paroblue mb-4" size={30} />
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-slate-400">Web and software systems tailored to your actual workflows.</p>
            </div>
            <div className="glass border border-white/10 rounded-2xl p-6">
              <Shield className="text-paroorange mb-4" size={30} />
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-slate-400">Security support and awareness programs for safer teams and systems.</p>
            </div>
            <div className="glass border border-white/10 rounded-2xl p-6">
              <HeartHandshake className="text-parogreen mb-4" size={30} />
              <h3 className="text-xl font-semibold text-white mb-2">Social Impact</h3>
              <p className="text-slate-400">Client work that helps fund education and support for vulnerable children.</p>
            </div>
          </div>
          <div className="pt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-paroblue hover:bg-[#1a7a9d] text-white px-7 py-3 rounded-full font-semibold">
              Request a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
