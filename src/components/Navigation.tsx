
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Attributes', href: '#skills' },
    { name: 'Artifacts', href: '#projects' },
    { name: 'Summon', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm ancient-border border-t-0 border-l-0 border-r-0' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-cinzel text-2xl font-bold text-primary glow-text">
            ◆ BEARER ◆
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-cinzel font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button - simplified for this version */}
          <div className="md:hidden">
            <button className="text-primary">
              <span className="font-cinzel text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
