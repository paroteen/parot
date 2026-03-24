import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

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

    const endpoint = (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined) || '/api/newsletter';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error('Subscription failed');

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Updates</h1>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            We publish updates only when we have real project insights and impact milestones to share.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="glass rounded-2xl p-8 md:p-10 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Newsletter</h2>
            <p className="text-slate-400 mb-6">
              Subscribe for product updates, cybersecurity insights, and social impact progress.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/20 text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-paroorange hover:bg-orange-600 disabled:opacity-70 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {loading ? 'Submitting...' : 'Subscribe'}
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
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Blog;
