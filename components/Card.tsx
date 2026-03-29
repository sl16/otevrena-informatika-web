
import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from './IconRenderer';
import { Category } from '../types';

interface CardProps {
  to: string;
  iconName: string;
  title: string;
  description: string;
  category: Category;
  meta?: {
    author?: string;
    date?: string;
  };
  tags?: string[];
  duration?: string;
  targetAudience?: string;
}

const Card: React.FC<CardProps> = ({ to, iconName, title, description, category, meta, tags, duration, targetAudience }) => {
  return (
    <Link 
      to={to} 
      className="bg-brand-card/50 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden hover:border-brand-neon/30 hover:bg-brand-card transition-all duration-500 group flex flex-col h-full shadow-2xl"
    >
      <div className="p-8 pb-0">
        <IconRenderer 
          name={iconName} 
          category={category} 
          size={48} 
          className="w-full h-48 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-brand-neon transition-colors">
            {category}
          </span>
          {(duration || targetAudience) && (
            <div className="flex gap-3 text-[10px] font-mono text-slate-500">
              {duration && (
                <span className="flex items-center gap-1">
                  🕒 {duration}
                </span>
              )}
              {targetAudience && (
                <span className="flex items-center gap-1">
                  👥 {targetAudience}
                </span>
              )}
            </div>
          )}
        </div>
        <h3 className="text-xl font-black text-white group-hover:text-brand-cyan transition-colors mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto space-y-4">
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-brand-cyan bg-brand-cyan/10 px-2 py-1 rounded-md border border-brand-cyan/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex flex-col gap-1">
              {meta?.author && (
                <span className="text-[10px] text-slate-500 flex items-center gap-1.5 font-mono">
                  👤 {meta.author}
                </span>
              )}
              {meta?.date && (
                <span className="text-[10px] text-slate-500 flex items-center gap-1.5 font-mono">
                  📅 {meta.date}
                </span>
              )}
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-brand-neon group-hover:text-brand-dark transition-all duration-300">
              ➡️
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
