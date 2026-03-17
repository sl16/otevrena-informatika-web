
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MaterialPDF } from '../src/components/MaterialPDF';
import { materials, authors } from '../data';
import IconRenderer from '../components/IconRenderer';

const MaterialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const material = materials.find(m => m.id === id);

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'video': return '📽️';
      case 'presentation': return '🖼️';
      case 'link': return '🔗';
      default: return '📄';
    }
  };

  if (!material) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Materiál nebyl nalezen</h2>
        <button onClick={() => navigate('/materialy')} className="text-blue-600 hover:underline">Zpět na přehled</button>
      </div>
    );
  }

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/materialy')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-neon mb-12 transition-all font-mono text-xs uppercase tracking-widest"
        >
          ⬅️ Zpět na seznam
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
              <div className="p-10 sm:p-16 border-b border-white/5 bg-white/5 flex flex-col items-center sm:flex-row gap-10">
                <IconRenderer 
                  name={material.iconName} 
                  category={material.category} 
                  size={80} 
                  className="w-40 h-40 shrink-0 shadow-2xl" 
                />
                <div className="text-center sm:text-left flex-grow">
                  <div className="mb-4">
                    <span className="bg-brand-neon text-brand-dark text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                      {material.category}
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                    {material.title}
                  </h1>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
                    <div className="flex items-center gap-2">
                      👤
                      {material.authorId ? (
                        <Link to={`/autori/${material.authorId}`} className="text-slate-300 hover:text-brand-neon transition-colors underline decoration-brand-neon/30 underline-offset-4">
                          {material.author}
                        </Link>
                      ) : (
                        <span className="text-slate-300">{material.author}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      📅
                      <span>{material.date}</span>
                    </div>
                  </div>

                  {/* Enhanced Metadata Section */}
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 py-6 border-y border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-neon text-lg">
                        🕒
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Délka lekce</div>
                        <div className="text-sm text-white font-bold">{material.duration || 'Nespecifikováno'}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-cyan text-lg">
                        👥
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Určeno pro</div>
                        <div className="text-sm text-white font-bold">
                          {material.targetAudience === 'ZŠ' ? 'Druhý stupeň ZŠ' : 
                           material.targetAudience === 'SŠ' ? 'Střední škola' : 
                           material.targetAudience === 'ZŠ/SŠ' ? 'ZŠ i SŠ' : 'Nespecifikováno'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
                    <a 
                      href={material.downloadUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-neon hover:bg-white text-brand-dark px-6 py-3 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)] flex items-center gap-2 text-sm"
                    >
                      Prezentace 🖼️
                    </a>
                    <PDFDownloadLink
                      document={<MaterialPDF material={material} />}
                      fileName={`Metodicka_prirucka_${material.id}.pdf`}
                    >
                      {({ loading }) => (
                        <button 
                          disabled={loading}
                          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-black transition-all border border-white/10 flex items-center gap-2 text-sm disabled:opacity-50"
                        >
                          {loading ? 'Příprava...' : 'Metodická příručka'} 📄
                        </button>
                      )}
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
              
              <div className="p-10 sm:p-16">
                <div className="prose prose-invert max-w-none mb-12 markdown-content">
                  <h3 className="text-2xl font-black text-white mb-6">O materiálu</h3>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {material.longDescription}
                  </ReactMarkdown>
                </div>

                <div className="flex flex-wrap gap-3 mb-12">
                  {material.tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2 text-[10px] text-brand-cyan bg-brand-cyan/10 px-4 py-2 rounded-xl font-bold border border-brand-cyan/20 uppercase tracking-widest">
                      🏷️ {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-6 p-10 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 text-brand-neon font-black text-sm uppercase tracking-widest mb-3">
                        🛡️ Licence materiálu
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">CC BY-NC-SA 4.0</h4>
                      <p className="text-sm text-slate-400 font-mono">
                        (Uveďte původ – Neužívejte komerčně – Zachovejte licenci)
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5">
                    <h5 className="text-sm font-bold text-white mb-3">Co to prakticky znamená?</h5>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex gap-3">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span><strong>Můžete sdílet a upravovat:</strong> Materiál si můžete stáhnout, upravit pro své žáky, vytisknout nebo sdílet s kolegy.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span><strong>Uveďte původ:</strong> Pokud materiál (nebo jeho upravenou verzi) sdílíte dál, musíte uvést, že původním autorem je Otevřená informatika (nebo konkrétní autor uvedený výše).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span><strong>Nekomerční použití:</strong> Materiál nesmíte prodávat nebo využívat k přímému finančnímu zisku. Je určen pro výuku a vzdělávání.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-cyan font-bold">•</span>
                        <span><strong>Zachovejte licenci:</strong> Pokud materiál upravíte a budete ho sdílet dál, musíte ho poskytnout ostatním za stejných podmínek (zdarma a pod stejnou licencí).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-card/40 backdrop-blur-xl rounded-[40px] border border-white/5 p-8 shadow-2xl sticky top-32">
              <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-neon rounded-full"></div>
                Podpůrné materiály
              </h3>
              
              {material.supportingMaterials && material.supportingMaterials.length > 0 ? (
                <div className="space-y-4">
                  {material.supportingMaterials.map((sm) => (
                    <a 
                      key={sm.id}
                      href={sm.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all shrink-0 text-lg">
                        {getMaterialIcon(sm.type)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-white font-bold text-sm mb-0.5 truncate">{sm.title}</div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{sm.type}</div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-sm italic">Žádné doplňující materiály nejsou k dispozici.</p>
              )}

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-4">Sdílet materiál</div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-lg">
                    🔗
                  </button>
                  {/* Add more social icons if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;
