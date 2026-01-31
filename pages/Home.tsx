import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Brain, Users, Globe2, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Technology Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-parodark/90 to-paroblue/80 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Empowering Your Future with <br/>
              <span className="text-paroorange">Innovative Tech Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-50 font-light">
              We provide cutting-edge software, AI tools, and cybersecurity training to businesses and individuals globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-paroorange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Global Reach */}
      <section className="py-12 bg-white -mt-10 relative z-20 max-w-6xl mx-auto rounded-xl shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-paroblue">
            <Globe2 size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Global Presence</h3>
          <p className="text-gray-500">Rwanda, USA, & Asia</p>
        </div>
        <div className="p-6 border-l-0 md:border-l border-gray-100">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-paroorange">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">100+ Clients</h3>
          <p className="text-gray-500">Trusted by startups & enterprises</p>
        </div>
        <div className="p-6 border-l-0 md:border-l border-gray-100">
          <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
            <Trophy size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Award Winning</h3>
          <p className="text-gray-500">Excellence in Hackathons & Dev</p>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-paroblue mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-gray-600">Tailored technology solutions to drive your growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:bg-paroblue transition-colors duration-300">
                <Code className="text-paroblue group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Website Development</h3>
              <p className="text-gray-600 mb-6">High-quality, responsive websites built in 1-2 days. Starting at just <span className="text-paroorange font-bold">$100</span>.</p>
              <Link to="/services" className="text-paroblue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="mb-6 p-4 bg-purple-50 rounded-xl w-fit group-hover:bg-purple-600 transition-colors duration-300">
                <Brain className="text-purple-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI & Chatbots</h3>
              <p className="text-gray-600 mb-6">Integrate intelligent chatbots and AI tools into your business processes within 24 hours.</p>
              <Link to="/services" className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Discover AI <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="mb-6 p-4 bg-orange-50 rounded-xl w-fit group-hover:bg-paroorange transition-colors duration-300">
                <Shield className="text-paroorange group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">Comprehensive awareness training for companies and schools to stay safe online.</p>
              <Link to="/services" className="text-paroorange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Secure Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-paroblue">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Join hundreds of satisfied clients leveraging ParoTeen's expertise. From websites to AI training, we have you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-paroblue px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Link>
            <Link to="/portfolio" className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;