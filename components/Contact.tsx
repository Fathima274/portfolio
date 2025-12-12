import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-indigo-600 rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Text & Contact Info */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 md:mb-8 text-zinc-900 dark:text-white">
              Let’s Make <br />
              Something <span className="text-indigo-500">Great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 md:mb-12 max-w-md">
              Whether you have a project in mind or just want to chat about design and tech, I'm always open to new opportunities.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4 md:gap-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-medium text-zinc-900 dark:text-zinc-50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group">
                <span className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-medium text-zinc-900 dark:text-zinc-50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group">
                <span className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="break-words">{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </Reveal>

          {/* Socials moved to left */}
          <Reveal delay={0.4}>
             <div className="flex gap-4 mt-8 md:mt-10">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all">
                   <Linkedin className="w-5 h-5" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all">
                   <Github className="w-5 h-5" />
                </a>
             </div>
          </Reveal>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col justify-center items-center lg:items-end">
          <Reveal delay={0.4} width="100%">
             <form className="bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 w-full max-w-lg shadow-xl shadow-zinc-200/50 dark:shadow-none transition-colors">
                <div className="mb-4 md:mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>

                <div className="mb-6 md:mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full py-3 md:py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-xl hover:bg-indigo-600 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
             </form>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 dark:text-zinc-500 text-sm transition-colors text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name} — All Rights Reserved.</p>
        <p>Built with React, Tailwind & Framer Motion</p>
      </div>
    </section>
  );
};

export default Contact;