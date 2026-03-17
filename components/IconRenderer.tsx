
import React from 'react';
import { Category } from '../types';

interface IconRendererProps {
  name?: string;
  size?: number;
  className?: string;
  category?: Category;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, size = 24, className = '', category }) => {
  const getIcon = () => {
    switch (name) {
      case 'terminal': return '💻';
      case 'brain': return '🧠';
      case 'cpu': return '⚙️';
      case 'shield-lock': return '🔒';
      case 'mail-warning': return '⚠️';
      case 'circuit-board': return '🔌';
      case 'binary': return '🔢';
      case 'code': return '⌨️';
      case 'zap': return '⚡';
      case 'book': return '📖';
      case 'database': return '🗄️';
      case 'newspaper': return '📰';
      case 'smartphone': return '📱';
      case 'layout': return '🎨';
      case 'more-horizontal': return '💬';
      case 'map': return '🗺️';
      default: return '📄';
    }
  };

  const getBgColor = () => {
    switch (category) {
      case Category.PROGRAMMING: return 'bg-brand-neon/10 text-brand-neon border-brand-neon/20';
      case Category.AI: return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20';
      case Category.HARDWARE: return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case Category.CYBERSECURITY: return 'bg-red-500/10 text-red-400 border-red-500/20';
      case Category.ALGORITHMS: return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case Category.OFFICE: return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default: return 'bg-white/5 text-slate-400 border-white/10';
    }
  };

  return (
    <div className={`flex items-center justify-center rounded-3xl border transition-all duration-500 ${getBgColor()} ${className}`} style={{ fontSize: size }}>
      {getIcon()}
    </div>
  );
};

export default IconRenderer;
