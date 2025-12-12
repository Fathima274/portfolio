import React from 'react';
import { ABOUT_TEXT, EDUCATION } from '../constants';
import { Reveal } from './Reveal';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* About Me Text */}
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 flex items-center gap-4 text-zinc-900 dark:text-white">
              About Me
              <span className="h-1 flex-1 bg-zinc-300 dark:bg-zinc-800 rounded-full"></span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </Reveal>
        </div>

        {/* Education Timeline */}
        <div className="flex flex-col justify-center">
           <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 flex items-center gap-4 text-zinc-900 dark:text-white">
              Education
              <span className="h-1 flex-1 bg-zinc-300 dark:bg-zinc-800 rounded-full"></span>
            </h2>
          </Reveal>
          
          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <Reveal key={index} delay={0.3 + (index * 0.1)}>
                <div className="relative pl-8 border-l-2 border-zinc-300 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                  <span className="absolute -left-[9px] top-1 bg-white dark:bg-zinc-950 p-1 rounded-full border border-zinc-300 dark:border-zinc-800 text-indigo-500">
                    <GraduationCap size={16} />
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.degree}</h3>
                  <p className="text-indigo-500 dark:text-indigo-400 font-medium mt-1">{item.period}</p>
                  <p className="text-zinc-500 dark:text-zinc-500 mt-2">{item.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;