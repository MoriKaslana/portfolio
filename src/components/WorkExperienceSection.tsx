
import React from 'react';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Setjen Vokasi Kemendikbud — Jakarta',
    period: 'Aug 2025 – Nov 2025',
    description: '',
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            CAMPAIGNS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Battles fought and victories earned across the professional realm
          </p>
        </div>

        {experiences.length > 0 ? (
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block"></div>

            <div className="flex flex-col gap-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary glow-border mt-1.5 shrink-0"></div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 ancient-border bg-card p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-cinzel text-lg font-semibold rune-decoration text-foreground">
                        {exp.role}
                      </h3>
                      <span className="font-crimson text-sm text-primary whitespace-nowrap border border-primary/40 px-3 py-1 rounded-full self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-cinzel text-base text-primary/80 mb-3">{exp.company}</p>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-3"></div>
                    <p className="font-crimson text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Empty state */
          <div className="ancient-border bg-card p-10 rounded-lg max-w-xl mx-auto text-center">
            <p className="font-cinzel text-primary text-2xl mb-3">⚔</p>
            <p className="font-crimson text-xl text-muted-foreground italic">
              The bearer's campaigns are yet to be inscribed...
            </p>
            <p className="font-crimson text-sm text-muted-foreground mt-2 opacity-60">
              Add your work experience entries in WorkExperienceSection.tsx
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
