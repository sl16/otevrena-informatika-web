
import React from 'react';
import { blogPosts } from '../data';
import { Link } from 'react-router-dom';

const BlogList: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Zápisky z výuky</h1>
          <p className="text-slate-400 text-lg max-w-2xl">Pravidelná dávka inspirace, metodických tipů a novinek ze světa technologií ve vzdělávání.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 overflow-hidden hover:border-brand-neon/30 hover:bg-brand-card transition-all duration-500 group flex flex-col h-full shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                   src={post.imageUrl} 
                   alt={post.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-cyan bg-brand-cyan/10 px-3 py-1.5 rounded-lg border border-brand-cyan/20">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-brand-cyan transition-colors mb-4 leading-tight tracking-tighter">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">👤 {post.author}</span>
                    <span className="flex items-center gap-2">📅 {post.date}</span>
                  </div>
                  <div className="text-brand-neon group-hover:translate-x-1 transition-transform text-lg">
                    ➡️
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
