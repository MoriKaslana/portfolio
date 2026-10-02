
import React from 'react';

const education = [
  {
    degree: 'Bachelor of Applied Science — Informatics Engineering',
    institution: 'Politeknik Negeri Jakarta',
    period: 'Aug 2022 – Sept 2026',
    gpa: 'GPA: 3.51',
  },
  {
    degree: 'Cloud Computing Cohort',
    institution: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    period: 'Aug 2024 – Dec 2024',
    gpa: null,
  },
  {
    degree: "Associate's Degree — Informatics Engineering",
    institution: 'CEP – CCIT FTUI',
    period: 'Aug 2022 – Aug 2024',
    gpa: 'GPA: 3.05',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            CHRONICLES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            The halls of knowledge where my journey began
          </p>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {education.map((entry, index) => (
            <div
              key={index}
              className="ancient-border bg-card p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="font-cinzel text-lg font-semibold rune-decoration text-foreground">
                  {entry.degree}
                </h3>
                <span className="font-crimson text-sm text-primary whitespace-nowrap border border-primary/40 px-3 py-1 rounded-full self-start">
                  {entry.period}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-cinzel text-base text-primary/80">{entry.institution}</p>
                {entry.gpa && (
                  <span className="font-crimson text-sm text-muted-foreground">{entry.gpa}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
