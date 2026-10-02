
import React from 'react';

const languages = [
  {
    name: 'Bahasa Indonesia',
    level: 'Native',
    description: 'Mother tongue — spoken and written with full mastery.',
    bars: 5,
  },
  {
    name: 'English',
    level: 'Professional',
    description: 'Professional working proficiency in reading, writing, and public speaking.',
    bars: 4,
  },
  {
    name: 'Japanese',
    level: 'Elementary',
    description: 'Elementary proficiency — foundational understanding of the language.',
    bars: 2,
  },
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            TONGUES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            The languages of men and scholars spoken by the bearer
          </p>
        </div>

        {/* Language Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="ancient-border bg-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-72"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-cinzel text-xl font-semibold rune-decoration text-foreground">
                  {lang.name}
                </h3>
                <span className="font-crimson text-sm text-primary border border-primary/40 px-3 py-1 rounded-full">
                  {lang.level}
                </span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-4"></div>

              {/* Proficiency bars */}
              <div className="flex gap-1.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i < lang.bars
                        ? 'bg-primary glow-border'
                        : 'bg-muted'
                    }`}
                  ></div>
                ))}
              </div>

              <p className="font-crimson text-muted-foreground text-sm leading-relaxed">
                {lang.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
