
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts, authors } from '../data';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Článek nebyl nalezen</h2>
        <button onClick={() => navigate('/blog')} className="text-brand-neon hover:underline">Zpět na blog</button>
      </div>
    );
  }

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-neon mb-12 transition-all font-mono text-xs uppercase tracking-widest"
        >
          ⬅️ Zpět na blog
        </button>

        <article className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="p-10 sm:p-16">
            <div className="mb-8">
              <span className="bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-brand-cyan/20">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-xs font-mono text-slate-500 uppercase tracking-widest mb-12 pb-8 border-b border-white/5">
              <div className="flex items-center gap-2">
                👤
                {post.authorId ? (
                  <Link to={`/autori/${post.authorId}`} className="text-slate-300 hover:text-brand-neon transition-colors underline decoration-brand-neon/30 underline-offset-4">
                    {post.author}
                  </Link>
                ) : (
                  <span className="text-slate-300">{post.author}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                📅
                <span>{post.date}</span>
              </div>
              <button className="ml-auto flex items-center gap-2 hover:text-white transition-colors">
                ➡️ Sdílet
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-2xl text-slate-300 leading-relaxed italic mb-12 border-l-4 border-brand-neon pl-8 py-2">
                {post.excerpt}
              </p>
              <div className="text-slate-400 leading-relaxed text-lg markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
