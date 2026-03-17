
import React from 'react';
import { apps } from '../data';
import Card from '../components/Card';

const AppsList: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Vzdělávací aplikace</h1>
          <p className="text-slate-400 text-lg max-w-2xl">Webové nástroje připravené pro okamžité použití ve výuce. Bez instalace, přímo v prohlížeči.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {apps.map((app) => (
            <Card 
              key={app.id}
              to={`/aplikace/${app.id}`}
              iconName={app.iconName}
              title={app.name}
              description={app.description}
              category={app.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsList;
