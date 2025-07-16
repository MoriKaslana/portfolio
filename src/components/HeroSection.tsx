
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full glow-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-primary rounded-full glow-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary rounded-full glow-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary rounded-full glow-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 float-animation">
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-4 glow-text">
            Ishom Nabil Umran Alihaq
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
        </div>

        <h2 className="font-cinzel text-2xl md:text-3xl font-medium mb-6 rune-decoration">
          BEARER OF CODE
        </h2>

        <p className="font-crimson text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          A digital wanderer traversing the realms of Web Design, 
          crafting experiences that bridge the mortal and digital worlds. 
          Welcome, traveler, to my domain of creation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#projects" 
            className="ancient-border bg-card px-8 py-4 rounded-md font-cinzel font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            View Legendary Works
          </a>
          <a 
            href="#contact" 
            className="ancient-border bg-transparent px-8 py-4 rounded-md font-cinzel font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            Initiate Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
