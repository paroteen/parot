import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import ScrollReveal from '../components/ScrollReveal';
import GlowLine from '../components/GlowLine';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Why Every Business Needs an AI Strategy in 2024',
      excerpt: 'Artificial Intelligence is no longer a luxury, it is a necessity. Discover how small businesses are leveraging AI chatbots.',
      date: 'Oct 12, 2023',
      category: 'AI Tech',
      image: 'https://picsum.photos/seed/ai/800/600'
    },
    {
      id: '2',
      title: 'Top 5 Cybersecurity Threats for Remote Teams',
      excerpt: 'With the rise of global remote work, phishing and ransomware attacks are evolving. Here is how to stay safe.',
      date: 'Nov 05, 2023',
      category: 'Security',
      image: 'https://picsum.photos/seed/hacker/800/600'
    },
    {
      id: '3',
      title: 'Building a High-Performance Website for Under $200',
      excerpt: 'You do not need a massive budget to have a professional online presence. ParoTeen breaks down the cost.',
      date: 'Dec 01, 2023',
      category: 'Development',
      image: 'https://picsum.photos/seed/web/800/600'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tech Insights & <span className="gradient-text">News</span>
          </h1>
          <GlowLine className="max-w-xs mb-12" />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} direction="up" delay={index * 150}>
              <article className="card-cyber bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                    <span className="text-paroorange font-bold bg-orange-50 px-3 py-1 rounded-full group-hover:bg-paroorange group-hover:text-white transition-all duration-300">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 group-hover:text-paroblue transition-colors">
                      <Calendar size={14} /> {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-paroblue cursor-pointer transition-colors group-hover:text-paroblue">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-paroblue transition-colors">
                      <div className="bg-gray-200 p-1 rounded-full group-hover:bg-paroblue group-hover:text-white transition-all">
                        <User size={12} />
                      </div>
                      <span>ParoTeen Team</span>
                    </div>
                    <button className="text-paroblue text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all group-hover:text-paroorange">
                      Read <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mt-20 card-cyber bg-gradient-to-br from-parodark via-paroblue to-parodark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Stay Updated</h2>
              <GlowLine className="max-w-md mx-auto mb-6" color="#FFA500" />
              <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                Get the latest tech news, hackathon updates, and security tips directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-paroorange transition-all" 
                />
                <button className="btn-cyber bg-paroorange hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl relative overflow-hidden">
                  <span className="relative z-10">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Blog;
