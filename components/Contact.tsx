import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Let's Make <br /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Great</span>.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-lg">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
          </RevealOnScroll>

          <div className="space-y-4 md:space-y-6">
            <RevealOnScroll delay={0.3}>
                <a href="mailto:contact@alexcarter.dev" className="flex items-center space-x-3 md:space-x-4 text-lg md:text-xl text-gray-300 hover:text-white transition-colors group">
                    <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-all">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span>contact@alexcarter.dev</span>
                </a>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
                <a href="tel:+15551234567" className="flex items-center space-x-3 md:space-x-4 text-lg md:text-xl text-gray-300 hover:text-white transition-colors group">
                    <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-purple-500/50 transition-all">
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                </a>
            </RevealOnScroll>
          </div>

          <div className="flex gap-4 mt-8 md:mt-12">
             <RevealOnScroll delay={0.5}>
                <a href="#" className="p-3 md:p-4 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400 border border-white/10">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
             </RevealOnScroll>
             <RevealOnScroll delay={0.6}>
                <a href="#" className="p-3 md:p-4 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all text-gray-400 border border-white/10">
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                </a>
             </RevealOnScroll>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
             <RevealOnScroll delay={0.4} width="100%">
                <form className="w-full space-y-4 md:space-y-6 bg-zinc-900/50 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/5 shadow-xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20" placeholder="Your Email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-white/20" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-white text-black font-bold py-3 md:py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-base md:text-lg">
                        Send Message <Send className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </form>
             </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};