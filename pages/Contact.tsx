import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Website Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);
    const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || '/api/contact';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        organization: '',
        service: 'Website Development',
        message: ''
      });
    } catch {
      setError('Could not send your message right now. Please call +250783594197.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-16 relative">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let&apos;s Understand Your Needs</h1>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                  Tell us your goals and constraints. We will propose a custom path forward.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass p-8 rounded-2xl shadow-xl border border-white/10 space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/10 p-4 rounded-xl text-paroblue group-hover:bg-paroblue group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-paroblue transition-colors">Our Locations</h3>
                    <p className="text-slate-400">Kigali, Rwanda (HQ)</p>
                    <p className="text-slate-400">USA</p>
                    <p className="text-slate-400">Asia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-orange-500/10 p-4 rounded-xl text-paroorange group-hover:bg-paroorange group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-paroorange transition-colors">Email</h3>
                    <p className="text-slate-400">info@paroteen.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-indigo-500/10 p-4 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-indigo-600 transition-colors">Phone</h3>
                    <a href="tel:+250783594197" className="text-slate-400 hover:text-white transition-colors">+250783594197</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl shadow-2xl p-8 md:p-10 border border-white/10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50"
                      placeholder="Company or initiative name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">What do you need?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50 custom-select"
                    >
                      <option className="bg-gray-900">Website Development</option>
                      <option className="bg-gray-900">AI Integration</option>
                      <option className="bg-gray-900">Cybersecurity Support</option>
                      <option className="bg-gray-900">Custom Software / CRM</option>
                      <option className="bg-gray-900">Technical Program Delivery</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/10 text-white focus:ring-2 focus:ring-paroblue focus:border-paroblue transition-all outline-none hover:border-paroblue/50 resize-none"
                      placeholder="Tell us your challenge, timeline, and expected outcome."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg p-3 text-sm">
                      <AlertCircle size={16} className="mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cyber w-full bg-paroblue hover:bg-[#1a7a9d] disabled:opacity-70 text-white font-bold py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:scale-105 relative overflow-hidden"
                  >
                    <Send size={20} className="relative z-10" />
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Request a Consultation'}</span>
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <ScrollReveal direction="fade">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-parogreen mb-6 transform animate-bounce">
                      <CheckCircle size={56} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                      Thank you. We will get back to you shortly.
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
