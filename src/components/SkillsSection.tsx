
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Frontend Mastery', description: 'React, Vue, HTML, XHTML, CSS, Tailwind' },
    { name: 'Backend Sorcery', description: 'Node.js, Python, Java' },
    { name: 'Database Wisdom', description: 'Firebase, MySQL' },
    { name: 'Design Craft', description: 'UI/UX, Figma' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            ATTRIBUTES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            The ancient powers I have mastered through countless battles in the digital realm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="ancient-border bg-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-cinzel text-xl font-semibold rune-decoration">
                  {skill.name}
                </h3>
                <span className="font-crimson text-primary font-bold text-lg">
                </span>
              </div>
              
              <p className="font-crimson text-muted-foreground mb-4">
                {skill.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
