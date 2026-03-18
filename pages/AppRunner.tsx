import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';
import { apps, authors } from '../data';
import { resolveAppRenderer } from '../src/apps';

const feedbackEmail = 'vojtabar119@gmail.com';

const AppRunner: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const app = apps.find((item) => item.id === id);

  if (!app) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Aplikace nebyla nalezena</h2>
        <button onClick={() => navigate('/aplikace')} className="text-blue-600 hover:underline">Zpět na přehled</button>
      </div>
    );
  }

  const authorName = app.authorId ? authors.find((author) => author.id === app.authorId)?.name : undefined;
  const AppComponent = resolveAppRenderer(app);

  const subject = `Zpětná vazba k aplikaci: ${app.name}`;
  const body = [
    'Dobrý den,',
    '',
    `chci nahlásit zpětnou vazbu k aplikaci ${app.name}.`,
    '',
    'Typ podnětu: [chyba / návrh zlepšení / jiné]',
    'Popis:',
    '',
    `ID aplikace: ${app.id}`,
    `URL: ${window.location.href}`,
  ].join('\n');
  const feedbackHref = `mailto:${feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <button
          onClick={() => navigate(`/aplikace/${app.id}`)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-cyan transition-all font-mono text-xs uppercase tracking-widest"
        >
          &larr; Zpět na detail aplikace
        </button>

        <div className="bg-brand-card/40 backdrop-blur-xl rounded-[34px] border border-white/5 shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12 border-b border-white/5 bg-white/5 flex flex-col sm:flex-row gap-8 items-start">
            <IconRenderer
              name={app.iconName}
              category={app.category}
              size={72}
              className="w-28 h-28 shrink-0"
            />
            <div className="flex-grow">
              <div className="mb-4">
                <span className="bg-brand-cyan text-brand-dark text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  {app.category}
                </span>
              </div>
              <h1 className="text-4xl font-black text-white mb-3 tracking-tighter">{app.name}</h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-5">{app.description}</p>
              {authorName && (
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                  Autor: <Link to={`/autori/${app.authorId}`} className="text-slate-300 hover:text-brand-neon transition-colors">{authorName}</Link>
                </p>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {AppComponent ? (
              <AppComponent
                onComplete={() => undefined}
                appName={app.name}
                certificateTitle={app.certificateTitle || `Certifikát - ${app.name}`}
              />
            ) : (
              <div className="border border-amber-300/40 bg-amber-300/10 rounded-2xl p-6">
                <h2 className="text-xl font-black text-amber-100 mb-2">Tuto aplikaci zatím nelze spustit v interním režimu.</h2>
                <p className="text-amber-50/90 mb-5">Pro tuto položku zatím není připravený interaktivní renderer.</p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-5 py-3 rounded-xl font-bold"
                >
                  Otevřít původní odkaz
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="bg-brand-card/40 backdrop-blur-xl rounded-[28px] border border-white/5 shadow-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-black text-white mb-2">Narazili jste na problém?</h2>
          <p className="text-slate-300 mb-5 leading-relaxed">
            Pokud je aplikace rozbitá nebo máte nápad na zlepšení, pošlete nám zpětnou vazbu. Předvyplnili jsme i ID aplikace a URL stránky.
          </p>
          <a
            href={feedbackHref}
            className="inline-flex items-center gap-2 bg-brand-neon hover:bg-white text-brand-dark px-6 py-3 rounded-xl font-black transition-all"
          >
            Poslat zpětnou vazbu
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppRunner;
