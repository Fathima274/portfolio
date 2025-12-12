import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './Reveal';

const Skills: React.FC = () => {
  const hardSkills = SKILLS.filter(s => s.category === 'hard');
  const softSkills = SKILLS.filter(s => s.category === 'soft');

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-zinc-900 dark:text-white">My Arsenal</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">Tools and technologies I use to bring ideas to life</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-colors">
            <Reveal>
              <h3 className="text-2xl font-bold mb-8 text-indigo-500 dark:text-indigo-400">Technical Skills</h3>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill, index) => (
                <Reveal key={skill.name} delay={0.1 * index}>
                  <div className="px-5 py-2 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-zinc-900 transition-all cursor-default">
                    {skill.name}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-colors">
            <Reveal>
              <h3 className="text-2xl font-bold mb-8 text-purple-500 dark:text-purple-400">Soft Skills</h3>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Reveal key={skill.name} delay={0.1 * index}>
                  <div className="px-5 py-2 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-zinc-900 transition-all cursor-default">
                    {skill.name}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;