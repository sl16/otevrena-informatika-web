
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/o-projektu', label: 'O projektu', icon: 'ℹ️' },
    { path: '/materialy', label: 'Materiály', icon: '📖' },
    { path: '/tematicke-plany', label: 'Plány', icon: '🗺️' },
    { path: '/aplikace', label: 'Aplikace', icon: '💻' },
    { path: '/blog', label: 'Blog', icon: '📰' },
    { path: '/zapojte-se', label: 'Zapojte se', icon: '👥' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-slate-200">
      <header className="bg-brand-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="group">
              <Logo size={32} />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-all flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                      isActive 
                        ? 'bg-white/10 text-brand-neon' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <span className="text-xl">🐙</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black/40 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <Logo size={28} />
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 max-w-md">
                Portál pro učitele informatiky, kteří chtějí sdílet, tvořit a učit moderně. 
                Všechny materiály jsou dostupné zdarma pod licencí Creative Commons.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Navigace</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/o-projektu" className="text-slate-400 hover:text-brand-cyan transition-colors">O projektu</Link></li>
                <li><Link to="/materialy" className="text-slate-400 hover:text-brand-cyan transition-colors">Materiály IKT</Link></li>
                <li><Link to="/tematicke-plany" className="text-slate-400 hover:text-brand-cyan transition-colors">Tematické plány</Link></li>
                <li><Link to="/aplikace" className="text-slate-400 hover:text-brand-cyan transition-colors">Vzdělávací aplikace</Link></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-brand-cyan transition-colors">Blog</Link></li>
                <li><Link to="/zapojte-se" className="text-slate-400 hover:text-brand-cyan transition-colors">Zapojte se</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Kontakt</h3>
              <p className="text-sm text-slate-400 mb-4">Máte dotaz nebo nápad na spolupráci?</p>
              <a href="mailto:info@otevrenainformatika.cz" className="text-brand-cyan hover:text-brand-neon transition-colors font-mono text-sm">
                info@otevrenainformatika.cz
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-600">
            <div>© {new Date().getFullYear()} OTEVRENAINFORMATIKA.CZ</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Soukromí</a>
              <a href="#" className="hover:text-slate-400">Podmínky</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
