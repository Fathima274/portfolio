import React from 'react';
import { TOOLS } from '../constants';
import { Reveal } from './Reveal';

const Tools: React.FC = () => {
  return (
    <section className="py-20 px-6 border-y border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto">
         <Reveal>
          <p className="text-center text-zinc-400 dark:text-zinc-500 mb-10 text-sm tracking-widest uppercase">My Daily Drivers</p>
        </Reveal>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-70">
          {TOOLS.map((tool, index) => (
            <Reveal key={tool.name} delay={index * 0.1}>
              <div className="flex flex-col items-center gap-3 group">
                <div className="text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                  {tool.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;