import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <Reveal>
            <span className="text-indigo-500 font-medium tracking-wider uppercase text-sm">
              Hello, I'm  fathima
            </span>
          </Reveal>
          
          <Reveal delay={0.35}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-zinc-900 dark:text-white">
              I Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Build Websites
              </span> <br />
              That Stand Out.
            </h1>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="#projects" 
                className="group relative px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-full overflow-hidden hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="resume.pdf" 
                target="_blank"
                className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all flex items-center gap-2"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all flex items-center gap-2"
              >
                Contact
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <Reveal delay={0.5}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
              {/* Abstract decorative circle behind */}
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/20 group">
                <img 
                  src="profile.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;