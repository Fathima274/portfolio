import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-2 text-zinc-900 dark:text-white">Featured Work</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">A selection of my recent projects</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white transition-colors">
              View all on GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={0.2 * index} width="100%">
              <div className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 h-full flex flex-col shadow-lg shadow-zinc-200/50 dark:shadow-none">
                {/* Image Placeholder */}
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-900 overflow-hidden relative">
                   <img 
                    src={project.image || `https://picsum.photos/600/400?random=${project.id}`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">View Details</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;