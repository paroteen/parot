import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

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
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tech Insights & News</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                  <span className="text-paroorange font-bold bg-orange-50 px-2 py-1 rounded">{post.category}</span>
                  <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-paroblue cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="bg-gray-200 p-1 rounded-full"><User size={12} /></div>
                        <span>ParoTeen Team</span>
                    </div>
                    <button className="text-paroblue text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                    </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Signup (Optional UI) */}
        <div className="mt-16 bg-parodark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                 <p className="text-gray-400 mb-6 max-w-lg mx-auto">Get the latest tech news, hackathon updates, and security tips directly to your inbox.</p>
                 <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                     <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-paroblue" />
                     <button className="bg-paroblue hover:bg-blue-600 px-6 py-3 rounded-lg font-bold transition-colors">Subscribe</button>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;