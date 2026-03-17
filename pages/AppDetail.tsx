
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { apps, authors } from '../data';
import IconRenderer from '../components/IconRenderer';

const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Aplikace nebyla nalezena</h2>
        <button onClick={() => navigate('/aplikace')} className="text-blue-600 hover:underline">Zpět na přehled</button>
      </div>
    );
  }

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/aplikace')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-cyan mb-12 transition-all font-mono text-xs uppercase tracking-widest"
        >
          ⬅️ Zpět na aplikace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
              <div className="p-10 sm:p-16 border-b border-white/5 bg-white/5 flex flex-col items-center sm:flex-row gap-10">
                <IconRenderer 
                  name={app.iconName} 
                  category={app.category} 
                  size={80} 
                  className="w-40 h-40 shrink-0 shadow-2xl" 
                />
                <div className="text-center sm:text-left">
                  <div className="mb-4">
                    <span className="bg-brand-cyan text-brand-dark text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                      {app.category}
                    </span>
                  </div>
                  <h1 className="text-4xl font-black text-white mb-3 tracking-tighter">
                    {app.name}
                  </h1>
                  <div className="flex items-center gap-6">
                    {app.authorId && (
                      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
                        👤
                        <Link to={`/autori/${app.authorId}`} className="hover:text-brand-neon transition-colors underline decoration-brand-neon/30 underline-offset-4">
                          {authors.find(a => a.id === app.authorId)?.name}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-10 sm:p-16">
                <div className="prose prose-invert max-w-none markdown-content">
                  <div className="text-xl text-slate-300 leading-relaxed mb-10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {app.longDescription}
                    </ReactMarkdown>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">
                    Klíčové funkce
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all">
                        <span className="text-brand-neon mt-0.5 shrink-0">✅</span>
                        <span className="text-slate-200 font-medium text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-brand-card/60 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-2xl text-center">
                <h2 className="text-2xl font-black text-white mb-4">Chcete vyzkoušet?</h2>
                <p className="text-sm text-slate-400 mb-10 leading-relaxed">
                  Aplikace běží přímo v prohlížeči, není třeba nic instalovat.
                </p>
                <a 
                  href={app.url}
                  className="w-full bg-brand-cyan hover:bg-white text-brand-dark px-8 py-5 rounded-2xl font-black transition-all shadow-[0_0_30px_rgba(0,229,255,0.2)] flex items-center justify-center gap-3 mb-6 text-lg"
                >
                  Spustit aplikaci ▶️
                </a>
                <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-mono">
                  OtevřenáInformatika.cz
                </p>
              </div>

              <div className="bg-brand-dark p-10 rounded-[40px] border border-brand-cyan/20 text-white shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 opacity-5 -mr-8 -mt-8 group-hover:opacity-10 transition-opacity text-[160px]">
                  🔗
                </div>
                <h3 className="font-black text-xl mb-3 relative text-brand-cyan">Open Source</h3>
                <p className="text-slate-400 text-sm mb-8 relative leading-relaxed">
                  Kód této aplikace je dostupný na GitHubu pod MIT licencí. Pomozte nám s vývojem!
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-neon transition-colors relative border-b border-white/10 pb-2 text-sm uppercase tracking-widest">
                  Přejít na GitHub 🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
