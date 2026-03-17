import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '../data';

const GetInvolved: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
            Zapojte se do <span className="text-brand-cyan">rozvoje</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Otevřená Informatika je projekt tvořený komunitou učitelů a nadšenců. Každý příspěvek pomáhá zlepšovat výuku technologií na našich školách.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Option 1: Content Creation */}
          <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 p-10 sm:p-16 shadow-2xl hover:border-brand-neon/30 transition-all group">
            <div className="w-20 h-20 rounded-3xl bg-brand-neon/10 flex items-center justify-center text-brand-neon mb-10 group-hover:scale-110 transition-transform text-4xl">
              📖
            </div>
            <h2 className="text-3xl font-black text-white mb-6">Tvořte materiály</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Máte skvělou prezentaci, pracovní list nebo metodiku, která se vám osvědčila v hodině? Sdílejte ji s ostatními kolegy. Pomůžete tak šetřit čas stovkám dalších učitelů.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                'Prezentace a pracovní listy',
                'Metodické příručky',
                'Zadání projektů a testů',
                'Odkazy na užitečné zdroje'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 bg-brand-neon rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="mailto:vojtabar119@gmail.com" 
              className="inline-flex items-center gap-3 text-brand-neon font-black uppercase tracking-widest text-sm hover:text-white transition-colors group/link"
            >
              Napište nám a pošlete podklady ➡️
            </a>
          </div>

          {/* Option 2: Code Contribution */}
          <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 p-10 sm:p-16 shadow-2xl hover:border-brand-cyan/30 transition-all group">
            <div className="w-20 h-20 rounded-3xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-10 group-hover:scale-110 transition-transform text-4xl">
              ⌨️
            </div>
            <h2 className="text-3xl font-black text-white mb-6">Rozvíjejte kód</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Umíte programovat? Pomozte nám vylepšovat webovou platformu nebo vyvíjet nové vzdělávací aplikace. Celý projekt je open-source a hostovaný na GitHubu.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                'Opravy chyb a vylepšení UI',
                'Vývoj nových interaktivních aplikací',
                'Optimalizace výkonu a přístupnosti',
                'Návrhy nových funkcí'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-brand-cyan font-black uppercase tracking-widest text-sm hover:text-white transition-colors group/link"
            >
              Přejít na GitHub 🐙
            </a>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white/5 rounded-[40px] border border-white/5 p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-neon to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-6">Máte jiný nápad na spolupráci?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Chcete s námi uspořádat workshop, stát se partnerem projektu nebo máte připomínku k obsahu? Jsme otevřeni jakékoliv formě konstruktivní spolupráce.
            </p>
            <a 
              href="mailto:vojtabar119@gmail.com" 
              className="bg-brand-neon hover:bg-white text-brand-dark px-10 py-5 rounded-2xl font-black transition-all shadow-[0_0_30px_rgba(0,102,255,0.2)] inline-flex items-center gap-3 text-lg"
            >
              Kontaktujte nás 💬
            </a>
          </div>
        </div>

        {/* About Project Section */}
        <section className="mt-24 pt-24 border-t border-white/5">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Vzdělávání, které je <span className="text-brand-cyan">otevřené</span> všem
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Otevřená Informatika vznikla jako iniciativa učitelů, kteří věří, že kvalitní vzdělávací materiály by měly být dostupné všem bez bariér. Naším cílem je vytvořit ucelený ekosystém zdrojů pro moderní výuku informatiky.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 flex items-center justify-center text-brand-neon text-2xl">
                👥
              </div>
              <h3 className="text-3xl font-black text-white">Autoři projektu</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authors.map((author) => (
                <div
                  key={author.id}
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
                      <h4 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">{author.name}</h4>
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
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-card to-brand-dark border border-white/5 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/10 blur-[100px] -mr-48 -mt-48" />
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-4xl font-black text-white mb-8 leading-tight">
                Věříme v sílu <span className="text-brand-cyan">sdílení</span>
              </h3>
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
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
