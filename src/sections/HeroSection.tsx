import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#2C3E50] to-[#4ECDC4] text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {/* Abstract background pattern */}
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.3" />
              </linearGradient>
              <pattern id="pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.5" fill="rgba(255,255,255,0.3)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#grad)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="block">Empowering Innovation</span>
            <span className="block text-[#4ECDC4]">Through Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            We build smart, scalable, and secure applications that transform ideas into reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={scrollToContact}
              className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
            >
              Let's Work Together
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <a 
              href="#services"
              className="bg-transparent hover:bg-white/10 border border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;