import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!response.ok) {
        throw new Error('Failed');
      }
      setSuccess('You are subscribed. Thank you for joining our updates.');
      setEmail('');
    } catch {
      setError('Could not complete your subscription. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 relative">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech Insights & <span className="gradient-text">News</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-paroblue to-paroorange rounded-full mb-12"></div>
        </ScrollReveal>

        <div className="text-slate-400 mb-8">No public posts yet. We only publish verified updates.</div>

        {/* Newsletter Signup */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mt-20 glass rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden group border border-white/10">
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Stay Updated</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-paroblue to-paroorange mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                Get the latest tech news, hackathon updates, and security tips directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-paroorange transition-all"
                />
                <button type="submit" disabled={loading} className="btn-cyber bg-paroorange hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl relative overflow-hidden disabled:opacity-70">
                  <span className="relative z-10">{loading ? 'Submitting...' : 'Subscribe'}</span>
                </button>
              </form>
              {success && (
                <div className="mt-4 flex items-start gap-2 text-green-300 bg-green-500/10 border border-green-400/30 rounded-lg p-3 text-sm">
                  <CheckCircle size={16} className="mt-0.5" />
                  <span>{success}</span>
                </div>
              )}
              {error && (
                <div className="mt-4 flex items-start gap-2 text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg p-3 text-sm">
                  <AlertCircle size={16} className="mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Blog;
