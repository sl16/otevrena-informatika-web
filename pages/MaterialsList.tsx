
import React, { useState } from 'react';
import { materials } from '../data';
import Card from '../components/Card';
import { Category } from '../types';

const MaterialsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredMaterials = materials.filter(mat => {
    const matchesSearch = mat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || mat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories: Array<Category | 'All'> = ['All', ...Object.values(Category)];

  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Pedagogické materiály</h1>
          <p className="text-slate-400 text-lg">Inspirujte se materiály od kolegů nebo sdílejte ty své. Vše připraveno pro moderní výuku.</p>
        </div>

        {/* Filters */}
        <div className="mb-16">
          <div className="relative w-full mb-5">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">🔍</span>
            <input 
              type="text" 
              placeholder="Vyhledat materiál..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-3 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-2xl whitespace-nowrap text-xs font-bold uppercase tracking-widest border transition-all ${
                  selectedCategory === cat 
                    ? 'bg-brand-neon border-brand-neon text-brand-dark shadow-[0_0_20px_rgba(0,255,102,0.2)]' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-brand-neon/50 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Vše' : cat}
              </button>
            ))}
          </div>
        </div>

        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredMaterials.map((mat) => (
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
        ) : (
          <div className="text-center py-32 bg-white/5 rounded-[40px] border border-white/5">
            <div className="bg-white/5 p-8 rounded-full inline-block mb-6 text-slate-600 text-6xl">
              🔍
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Nebyly nalezeny žádné materiály</h3>
            <p className="text-slate-500">Zkuste změnit klíčová slova nebo filtr.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialsList;
