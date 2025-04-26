import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Blocks, Cpu, Binary, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // You can change the logo by switching the icon component below
  const LogoIcon = Blocks; // Try: Code, Blocks, Cpu, Binary, or Terminal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C3E50] shadow-lg' : 'bg-[#2C3E50]/90'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center group">
          <LogoIcon size={32} className="text-white mr-2 transition-transform duration-300 group-hover:rotate-12" />
          <h1 className="text-white text-2xl font-bold">CodePath</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'services', 'contact', 'privacy'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-[#3498DB] font-semibold transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#2C3E50] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {['about', 'services', 'contact', 'privacy'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-[#3498DB] font-semibold transition-colors duration-300 block w-full text-left py-2"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;