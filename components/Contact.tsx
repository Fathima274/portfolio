import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8 text-zinc-900 dark:text-white">
              Let’s Make <br />
              Something <span className="text-indigo-500">Great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-md">
              Whether you have a project in mind or just want to chat about design and tech, I'm always open to new opportunities.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-2xl font-medium text-zinc-900 dark:text-zinc-50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group">
                <span className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                  <Mail className="w-6 h-6" />
                </span>
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-2xl font-medium text-zinc-900 dark:text-zinc-50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group">
                <span className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                  <Phone className="w-6 h-6" />
                </span>
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:items-end">
          <Reveal delay={0.4}>
             <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 w-full max-w-md shadow-xl shadow-zinc-200/50 dark:shadow-none transition-colors">
                <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white">Socials</h3>
                <div className="flex flex-col gap-4">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all group">
                    <div className="flex items-center gap-3">
                      <Linkedin className="text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-white" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-white">LinkedIn</span>
                    </div>
                    <ArrowIcon />
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all group">
                    <div className="flex items-center gap-3">
                      <Github className="text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-white" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-white">GitHub</span>
                    </div>
                    <ArrowIcon />
                  </a>
                </div>
             </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 dark:text-zinc-500 text-sm transition-colors">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name} — All Rights Reserved.</p>
        <p>Built with React, Tailwind & Framer Motion</p>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default Contact;