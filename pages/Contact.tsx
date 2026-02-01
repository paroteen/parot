import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Get in <span className="gradient-text">Touch</span>
                </h1>
                <GlowLine className="max-w-xs mb-6" />
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Ready to start your next project? We are here to help you grow. 
                  Fill out the form or reach us directly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="card-cyber bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-4 rounded-xl text-paroblue group-hover:bg-paroblue group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-paroblue transition-colors">Our Locations</h3>
                    <p className="text-gray-600">Kigali, Rwanda (HQ)</p>
                    <p className="text-gray-600">New York, USA</p>
                    <p className="text-gray-600">Singapore, Asia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-50 p-4 rounded-xl text-paroorange group-hover:bg-paroorange group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-paroorange transition-colors">Email Us</h3>
                    <p className="text-gray-600">inquiries@paroteen.com</p>
                    <p className="text-gray-600">support@paroteen.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-indigo-50 p-4 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Call Us</h3>
                    <p className="text-gray-600">+250 788 000 000 (Rwanda)</p>
                    <p className="text-gray-600">+1 555 123 4567 (Intl)</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial Snippet */}
            <ScrollReveal direction="right" delay={400}>
              <div className="card-cyber bg-gradient-to-br from-paroblue to-parodark text-white p-8 rounded-2xl shadow-2xl italic relative overflow-hidden group">
                <div className="absolute inset-0 cyber-grid opacity-10"></div>
                <div className="relative z-10">
                  <p className="text-lg md:text-xl mb-4 leading-relaxed">
                    "ParoTeen transformed our online presence in just 48 hours. The AI chatbot they installed has increased our lead generation by 40%."
                  </p>
                  <div className="font-bold not-italic text-paroorange">— CEO, TechStart Africa</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="card-cyber bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none bg-white hover:border-paroblue/50"
                    >
                      <option>Website Development ($100)</option>
                      <option>AI Chatbot Integration</option>
                      <option>Cybersecurity Training</option>
                      <option>Custom Software / CRM</option>
                      <option>Hackathon Partnership</option>
                      <option>AI Corporate Training</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-cyber w-full bg-paroblue hover:bg-[#1a7a9d] text-white font-bold py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:scale-105 relative overflow-hidden"
                  >
                    <Send size={20} className="relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <ScrollReveal direction="fade">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-parogreen mb-6 transform animate-bounce">
                      <CheckCircle size={56} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Thank you for contacting ParoTeen. We will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-paroblue font-semibold hover:underline hover:text-paroorange transition-colors"
                    >
                      Send another message
                    </button>
                  </ScrollReveal>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
