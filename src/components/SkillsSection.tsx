
import React from 'react';

const skillCategories = [
  {
    title: 'Soft Skills',
    icon: '⚔️',
    flavor: 'Virtues forged through trial and fellowship',
    skills: [
      'Problem-Solving',
      'Communication',
      'Teamwork',
      'Public Speaking',
      'Time Management',
    ],
  },
  {
    title: 'Hard Skills',
    icon: '🛡️',
    flavor: 'Arcane arts mastered through relentless study',
    skills: [
      'UI/UX Design',
      'HTML',
      'CSS',
      'JavaScript',
      'Firebase',
      'Python',
      'Vue.js',
      'React.JS',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    title: 'Software Skills',
    icon: '📜',
    flavor: 'Sacred tools wielded across countless campaigns',
    skills: [
      'Visual Studio Code',
      'Android Studio',
      'Figma',
      'Microsoft Office',
      'Canva',
      'Google Cloud Platform',
      'Github',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            ATTRIBUTES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            The ancient powers I have mastered through countless battles in the digital realm
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="ancient-border bg-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-cinzel text-xl font-semibold rune-decoration">
                    {category.title}
                  </h3>
                </div>
                <p className="font-crimson text-sm text-muted-foreground italic">
                  {category.flavor}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-5 opacity-50"></div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-crimson text-sm px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
