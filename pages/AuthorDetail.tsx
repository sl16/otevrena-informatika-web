import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { authors, materials, apps, blogPosts } from '../data';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const AuthorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find(a => a.id === id);

  if (!author) {
    return <Navigate to="/o-projektu" replace />;
  }

  const authorMaterials = materials.filter(m => m.authorId === id);
  const authorApps = apps.filter(a => a.authorId === id);
  const authorBlogPosts = blogPosts.filter(b => b.authorId === id);

  const hasContributions = authorMaterials.length > 0 || authorApps.length > 0 || authorBlogPosts.length > 0;

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/o-projektu" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
        >
          ⬅️ Zpět na projekt
        </Link>

        {/* Author Profile Header */}
        <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 p-10 md:p-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/10 blur-[100px] -mr-48 -mt-48" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-40 h-40 rounded-[40px] overflow-hidden border-4 border-white/5 shadow-2xl">
              <img 
                src={author.avatarUrl} 
                alt={author.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="text-brand-neon font-mono text-[10px] uppercase tracking-widest mb-4">Profil autora</div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {author.name}
              </h1>
              <p className="text-brand-cyan font-bold text-lg mb-6">{author.role}</p>
              <div className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8 prose prose-invert markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {author.bio}
                </ReactMarkdown>
              </div>
              
              <div className="flex gap-6 justify-center md:justify-start">
                {author.links?.web && (
                  <a href={author.links.web} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    🌐 Web
                  </a>
                )}
                {author.links?.github && (
                  <a href={author.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    🐙 GitHub
                  </a>
                )}
                {author.links?.twitter && (
                  <a href={author.links.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    🐦 Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {!hasContributions ? (
          <div className="text-center py-24 bg-white/5 rounded-[40px] border border-white/5">
            <p className="text-slate-500 italic">Tento autor zatím nepřidal žádné příspěvky.</p>
          </div>
        ) : (
          <div className="space-y-24">
            {/* Materials */}
            {authorMaterials.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center text-brand-neon text-xl">
                    📖
                  </div>
                  <h2 className="text-2xl font-black text-white">Výukové materiály</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {authorMaterials.map((mat) => (
                    <Card 
                      key={mat.id}
                      to={`/materialy/${mat.id}`}
                      iconName={mat.iconName}
                      title={mat.title}
                      description={mat.description}
                      category={mat.category}
                      tags={mat.tags}
                      duration={mat.duration}
                      targetAudience={mat.targetAudience}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Apps */}
            {authorApps.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan text-xl">
                    💻
                  </div>
                  <h2 className="text-2xl font-black text-white">Vzdělávací aplikace</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {authorApps.map((app) => (
                    <Card 
                      key={app.id}
                      to={`/aplikace/${app.id}`}
                      iconName={app.iconName}
                      title={app.name}
                      description={app.description}
                      category={app.category}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Blog Posts */}
            {authorBlogPosts.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl">
                    📰
                  </div>
                  <h2 className="text-2xl font-black text-white">Články na blogu</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {authorBlogPosts.map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="bg-brand-card/50 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden hover:border-brand-neon/30 hover:bg-brand-card transition-all duration-500 group flex flex-col h-full shadow-2xl"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-cyan bg-brand-cyan/10 px-2 py-1 rounded-md border border-brand-cyan/20">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-white group-hover:text-brand-cyan transition-colors mb-3 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorDetail;
