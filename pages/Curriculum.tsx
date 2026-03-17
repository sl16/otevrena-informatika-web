import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { curriculumPlans } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import IconRenderer from '../components/IconRenderer';

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ZŠ' | 'SŠ'>('SŠ');
  const activePlan = curriculumPlans.find(p => p.schoolType === activeTab);

  return (
    <div className="py-12 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Tematické <span className="text-brand-neon">plány</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ucelené návrhy výuky pro základní a střední školy. Najděte inspiraci pro celý školní rok 
            a sledujte, na jakých materiálech právě pracujeme.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-brand-card/50 p-1.5 rounded-2xl border border-white/5 flex gap-2">
            <button
              onClick={() => setActiveTab('ZŠ')}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'ZŠ' 
                  ? 'bg-brand-neon text-white shadow-lg shadow-brand-neon/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              🏫 Základní škola
            </button>
            <button
              onClick={() => setActiveTab('SŠ')}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'SŠ' 
                  ? 'bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              🎓 Střední škola
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={activeTab === 'ZŠ' ? 'blur-xl pointer-events-none select-none opacity-40' : ''}
            >
              {activePlan && (
                <div className="space-y-12">
                  <div className="bg-brand-card/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    <h2 className="text-3xl font-black text-white mb-4">{activePlan.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
                      {activePlan.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {activePlan.blocks.map((block: any, blockIdx: number) => (
                      <div key={block.id} className="relative">
                        {/* Vertical line connecting blocks */}
                        {blockIdx < activePlan.blocks.length - 1 && (
                          <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-brand-neon/50 to-transparent hidden md:block" />
                        )}
                        
                        <div className="flex flex-col md:flex-row gap-8">
                          {/* Block Header */}
                          <div className="md:w-1/4">
                            <div className="sticky top-32">
                              <div className="w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center text-brand-neon mb-6">
                                <IconRenderer name={block.iconName} size={28} />
                              </div>
                              <h3 className="text-2xl font-black text-white mb-2">{block.title}</h3>
                              <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">Tematický blok</p>
                            </div>
                          </div>
 
                          {/* Topics List */}
                          <div className="md:w-3/4 space-y-4">
                            {block.topics.map((topic: any) => (
                              <div 
                                key={topic.id}
                                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                                  topic.status === 'available'
                                    ? 'bg-brand-card/50 border-white/5 hover:border-brand-neon/30 hover:bg-brand-card'
                                    : 'bg-brand-dark/50 border-white/5 opacity-60'
                                }`}
                              >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                  <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                      {topic.status === 'available' ? (
                                        <span className="text-brand-neon">✅</span>
                                      ) : (
                                        <span className="text-slate-500">🕒</span>
                                      )}
                                      <h4 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                                        {topic.title}
                                      </h4>
                                      {topic.status === 'planned' && (
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-slate-500 border border-white/10">
                                          V přípravě
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                      {topic.description}
                                    </p>
                                  </div>

                                  {topic.status === 'available' && topic.materialId && (
                                    <Link 
                                      to={`/materialy/${topic.materialId}`}
                                      className="inline-flex items-center gap-2 bg-brand-neon/10 hover:bg-brand-neon text-brand-neon hover:text-white px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap border border-brand-neon/20"
                                    >
                                      Zobrazit materiál ➡️
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ZŠ Overlay */}
          {activeTab === 'ZŠ' && (
            <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-brand-card/90 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-brand-neon/20 rounded-3xl flex items-center justify-center text-brand-neon mx-auto mb-8 text-4xl">
                  ⚠️
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Hledáme tvůrce!</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Materiály pro základní školy bohužel zatím nemáme v dostatečné kvalitě. 
                  Pokud učíte na ZŠ a máte chuť se podělit o své přípravy, budeme nadšení!
                </p>
                <Link 
                  to="/zapoj-se" 
                  className="inline-flex items-center gap-3 bg-brand-neon text-white px-10 py-4 rounded-2xl font-black hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-neon/20"
                >
                  Chci se zapojit ➡️
                </Link>
              </motion.div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-brand-card to-brand-dark border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-neon/10 via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl font-black text-white mb-6 relative">Chybí vám nějaké téma?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative">
            Naše tematické plány neustále rozšiřujeme. Pokud máte vlastní návrh nebo chcete 
            pomoct s tvorbou materiálů, dejte nám vědět.
          </p>
          <Link 
            to="/zapoj-se" 
            className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-4 rounded-2xl font-black hover:bg-brand-neon hover:text-white transition-all shadow-xl shadow-white/5 relative"
          >
            Zapojte se do tvorby ➡️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
