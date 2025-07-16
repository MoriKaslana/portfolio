
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="font-cinzel text-2xl font-bold text-primary glow-text">
            ◆ BEARER OF CODE ◆
          </div>
          
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          
          <p className="font-crimson text-muted-foreground max-w-md mx-auto">
            "In the darkness between keystrokes, legends are born."
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/MoriKaslana" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="font-cinzel text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ishom-nabil-umran-alihaq-98383a218/" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="font-cinzel text-sm">LinkedIn</span>
            </a>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="font-crimson text-sm text-muted-foreground">
              © 2025 Digital Bearer. Forged in the fires of creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
