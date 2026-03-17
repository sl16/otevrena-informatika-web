import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '../data';
import { motion } from 'framer-motion';

const AboutProject: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
            Vzdělávání, které je <span className="text-brand-cyan">otevřené</span> všem
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            Otevřená Informatika vznikla jako iniciativa učitelů, kteří věří, že kvalitní vzdělávací materiály by měly být dostupné všem bez bariér. Naším cílem je vytvořit ucelený ekosystém zdrojů pro moderní výuku informatiky.
          </p>
          <Link 
            to="/zapojte-se" 
            className="inline-flex items-center gap-3 bg-brand-neon text-white px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-neon/20"
          >
            Chci se zapojit ➡️
          </Link>
        </div>

        {/* Authors Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 flex items-center justify-center text-brand-neon text-2xl">
              👥
            </div>
            <h2 className="text-3xl font-black text-white">Autoři projektu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-card/40 backdrop-blur-sm rounded-[32px] border border-white/5 p-8 hover:border-brand-neon/30 transition-all group"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/5 group-hover:border-brand-neon/50 transition-colors">
                    <img 
                      src={author.avatarUrl} 
                      alt={author.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">{author.name}</h3>
                    <p className="text-brand-cyan text-sm font-medium">{author.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {author.bio}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-3">
                    {author.links?.github && (
                      <a href={author.links.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-xl">
                        🐙
                      </a>
                    )}
                  </div>
                  <Link 
                    to={`/autori/${author.id}`}
                    className="text-xs font-black uppercase tracking-widest text-brand-neon hover:text-white transition-colors flex items-center gap-2"
                  >
                    Zobrazit příspěvky ➡️
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-brand-card to-brand-dark border border-white/5 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/10 blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">
              Věříme v sílu <span className="text-brand-cyan">sdílení</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Informatika se mění rychleji než jakýkoliv jiný předmět. Jediný způsob, jak udržet krok s dobou, je vzájemná spolupráce a sdílení zkušeností. Otevřená Informatika je platforma, kde se tyto zkušenosti setkávají.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-sm font-bold text-white flex items-center gap-2">
                ✨ Open Source
              </div>
              <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-sm font-bold text-white flex items-center gap-2">
                ✨ Creative Commons
              </div>
              <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-sm font-bold text-white flex items-center gap-2">
                ✨ Pro učitele zdarma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
