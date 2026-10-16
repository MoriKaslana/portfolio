import React from 'react';

const certifications = [
  {
    title: 'AI Basic',
    issuer: 'Google-Dicoding',
    date: 'Nov 2024',
    credential: '/cert/AI.jpg',
  },
  {
    title: 'Cloud Engineer',
    issuer: 'Google-Dicoding',
    date: 'Nov 2024',
    credential: '/cert/Cloud Engineer.jpg',
  },
  {
    title: 'Basic Web Development',
    issuer: 'Google-Dicoding',
    date: 'Sept 2024',
    credential: '/cert/Dasar Web Code.jpg',
  },
  {
    title: 'Git',
    issuer: 'Google-Dicoding',
    date: 'Sept 2024',
    credential: '/cert/Git.jpg',
  },
  {
    title: 'Basic JavaScript',
    issuer: 'Google-Dicoding',
    date: 'Sept 2024',
    credential: '/cert/JS.jpg',
  },
  {
    title: 'Machine Learning Implementation using Google Cloud',
    issuer: 'Google-Dicoding',
    date: 'Dec 2024',
    credential: '/cert/ML Google Cloud.jpg',
  },
  {
    title: 'Software Development',
    issuer: 'Google-Dicoding',
    date: 'Sep 2024',
    credential: '/cert/Software Dev.jpg',
  },
  {
    title: 'Certified Cybersecurity Educator Professional (CCEP)',
    issuer: 'RED TEAM LEADERS',
    date: 'Oct 2026',
    credential: '/cert/Red Team.jpg',
  },
  {
    title: 'Internship Mobile Developer',
    issuer: 'Kemendiknas',
    date: 'Feb 2026',
    credential: '/cert/Sertif Setjen_pages-to-jpg-0001.jpg',
  },
  {
    title: 'Junior Web Developer',
    issuer: 'BNSP',
    date: 'June 2026',
    credential: '/cert/e-serkom NG_page-0001.jpg',
  },
  {
    title: 'Bangkit Academy 2024 – Cloud Computing Cohort',
    issuer: 'Google',
    date: 'Jan 2025',
    credential: '/cert/_Bangkit 2024 Batch 2_ Certificate _ C128B4KY2016_pages-to-jpg-0001.jpg',
  },
];

// Sort A–Z by title (case-insensitive, without mutating the original array)
const sortedCertifications = [...certifications].sort((a, b) =>
  a.title.trim().localeCompare(b.title.trim(), undefined, { sensitivity: 'base' })
);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            SACRED SCROLLS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Seals of mastery granted by the guilds of knowledge
          </p>
        </div>

        {sortedCertifications.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sortedCertifications.map((cert) => (
              <div
                key={cert.title}
                className="ancient-border bg-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex flex-col gap-3"
              >
                {/* Certificate image, always visible */}
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-md border border-primary/20"
                  >
                    <img
                      src={encodeURI(cert.credential)}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </a>
                )}
                <h3 className="font-cinzel text-base font-semibold text-foreground text-center leading-snug">
                  {cert.title}
                </h3>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
                <p className="font-crimson text-sm text-primary/80 text-center">{cert.issuer}</p>
                <p className="font-crimson text-sm text-muted-foreground text-center">{cert.date}</p>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto font-cinzel text-xs text-primary hover:text-primary/70 text-center transition-colors duration-200 underline underline-offset-4"
                  >
                    View Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="ancient-border bg-card p-10 rounded-lg max-w-xl mx-auto text-center">
            <p className="font-cinzel text-primary text-2xl mb-3">📜</p>
            <p className="font-crimson text-xl text-muted-foreground italic">
              The sacred scrolls await their inscriptions...
            </p>
            <p className="font-crimson text-sm text-muted-foreground mt-2 opacity-60">
              Add your certifications in CertificationsSection.tsx
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
