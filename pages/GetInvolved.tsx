import React from 'react';

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
      </div>
    </div>
  );
};

export default GetInvolved;
