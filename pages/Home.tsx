
import React from 'react';
import { materials, apps, blogPosts } from '../data';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const latestMaterials = materials.slice(0, 3);
  const latestApps = apps.slice(0, 3);
  const latestBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-brand-dark">
      {/* ... Hero Section ... */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-neon/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Bezplatné <span className="text-brand-cyan">vzdělávací materiály</span> pro informatiku
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Sdílíme pedagogické materiály a vyvíjíme vzdělávací aplikace, které učitelům usnadňují výuku moderních technologií.
            </p>
            <ul className="mb-10 flex flex-wrap md:flex-nowrap justify-center gap-3 text-sm">
              <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 whitespace-nowrap">
                <span aria-hidden="true">🫰</span>
                <span>Zcela zdarma</span>
              </li>
              <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 whitespace-nowrap">
                <span aria-hidden="true">🎯</span>
                <span>Vizuálně a metodicky sjednocené</span>
              </li>
			  <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 whitespace-nowrap">
                <span aria-hidden="true">👩‍🏫</span>
                <span>Pro učitele od učitelů</span>
              </li>
			  <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 whitespace-nowrap">
                <span aria-hidden="true">🔓</span>
                <span>Open-source</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/materialy" className="bg-brand-neon hover:bg-white text-brand-dark px-10 py-5 rounded-xl font-black transition-all shadow-[0_0_40px_rgba(0,102,255,0.3)] flex items-center justify-center gap-2 text-lg">
                ✨ Procházet materiály
              </Link>
              <Link to="/tematicke-plany" className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 border border-white/10 text-lg">
                🗺️ Tematické plány
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black text-white">Nejnovější materiály</h2>
            </div>
            <Link to="/materialy" className="text-brand-cyan font-bold hover:text-brand-neon transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
              Všechny materiály <span className="group-hover:translate-x-1 transition-transform">➡️</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {latestMaterials.map((mat) => (
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
                meta={{ author: mat.author, date: mat.date }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black text-white">Vzdělávací aplikace</h2>
            </div>
            <Link to="/aplikace" className="text-brand-cyan font-bold hover:text-brand-neon transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
              Všechny aplikace <span className="group-hover:translate-x-1 transition-transform">➡️</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {latestApps.map((app) => (
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
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black text-white">Z našeho blogu</h2>
            </div>
            <Link to="/blog" className="text-brand-cyan font-bold hover:text-brand-neon transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
              Všechny články <span className="group-hover:translate-x-1 transition-transform">➡️</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {latestBlogPosts.map((post) => (
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
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{post.date}</span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-brand-neon group-hover:text-brand-dark transition-all duration-300">
                      ➡️
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
