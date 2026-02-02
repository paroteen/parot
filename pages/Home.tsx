import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Brain, Users, Globe2, Trophy } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';
import MagnetLines from '../components/MagnetLines';
import Lightning from '../components/Lightning';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <AnimatedBackground />
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <MagnetLines 
              rows={12} 
              columns={12} 
              containerSize="100vmin"
              lineColor="rgba(37, 150, 190, 0.4)"
              lineWidth="2px"
              lineHeight="40px"
              baseAngle={-10}
            />
          </div>
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <Lightning hue={200} xOffset={0} speed={0.8} intensity={0.6} size={1.2} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-parodark/95 via-paroblue/90 to-parodark/95"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 20% 50%, rgba(37, 150, 190, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.2) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Glowing Lines */}
        <div className="absolute top-1/4 left-0 w-full z-10">
          <GlowLine color="#2596BE" />
        </div>
        <div className="absolute bottom-1/4 left-0 w-full z-10">
          <GlowLine color="#FFA500" />
        </div>

        {/* Content */}
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal direction="fade" delay={200}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-paroblue/30 backdrop-blur-sm rounded-full text-sm font-semibold border border-paroblue/50 mb-6 animate-pulse">
                🚀 Global IT Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="block glow-text">Empowering Your Future</span>
              <span className="block mt-2">
                with <span className="gradient-text bg-gradient-to-r from-paroorange to-paroblue bg-clip-text text-transparent">Innovative Tech</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50 font-light leading-relaxed">
              Cutting-edge software, AI tools, and cybersecurity training to businesses and individuals globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="btn-cyber group bg-paroorange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="glass group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:border-white/50 relative overflow-hidden"
              >
                <span className="relative z-10">Request a Quote</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats / Global Reach */}
      <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="card-cyber bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift group">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-paroblue group-hover:bg-paroblue group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <Globe2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Global Presence</h3>
                <p className="text-gray-500 text-lg">Rwanda, USA, & Asia</p>
                <div className="mt-4 h-1 w-0 bg-paroblue group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="card-cyber bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift group">
                <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-paroorange group-hover:bg-paroorange group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <Users size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100+ Clients</h3>
                <p className="text-gray-500 text-lg">Trusted by startups & enterprises</p>
                <div className="mt-4 h-1 w-0 bg-paroorange group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="card-cyber bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift group">
                <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <Trophy size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Award Winning</h3>
                <p className="text-gray-500 text-lg">Excellence in Hackathons & Dev</p>
                <div className="mt-4 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Expertise</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-paroblue to-paroorange mx-auto rounded-full mb-6"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Tailored technology solutions to drive your growth.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="card-cyber bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-paroblue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-5 bg-blue-50 rounded-xl w-fit group-hover:bg-paroblue transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <Code className="text-paroblue group-hover:text-white transition-colors duration-300" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-paroblue transition-colors">Website Development</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">High-quality, responsive websites built in 1-2 days. Starting at just <span className="text-paroorange font-bold">$100</span>.</p>
                  <Link to="/services" className="text-paroblue font-semibold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-paroorange">
                    Learn more <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="card-cyber bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-5 bg-purple-50 rounded-xl w-fit group-hover:bg-purple-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <Brain className="text-purple-600 group-hover:text-white transition-colors duration-300" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">AI & Chatbots</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Integrate intelligent chatbots and AI tools into your business processes within 24 hours.</p>
                  <Link to="/services" className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-purple-700">
                    Discover AI <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="card-cyber bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 p-5 bg-orange-50 rounded-xl w-fit group-hover:bg-paroorange transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <Shield className="text-paroorange group-hover:text-white transition-colors duration-300" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-paroorange transition-colors">Cybersecurity</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive awareness training for companies and schools to stay safe online.</p>
                  <Link to="/services" className="text-paroorange font-semibold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-orange-600">
                    Secure Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-paroblue via-paroblue to-parodark relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-paroorange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-paroblue/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Ready to Transform Your Business?</h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Join hundreds of satisfied clients leveraging ParoTeen's expertise. From websites to AI training, we have you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="btn-cyber bg-white text-paroblue px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
              </Link>
              <Link 
                to="/portfolio" 
                className="glass bg-white/10 border-2 border-white/50 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 hover:border-white"
              >
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
