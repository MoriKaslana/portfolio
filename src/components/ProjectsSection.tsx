
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
title: 'MHW Wiki',
      description: 'A mystical website thay help thy new player to acknowledge MHW.',
      tech: ['XHTML, CSS, JavaScript, Firebase'],
      status: 'Legendary',
      image: 'public/assets/mhw.png',
      link: 'https://github.com/MoriKaslana/MHW-Wiki'
    },
    {
      title: 'AlZain IT and Medical Solutions',
      description: 'An otherworldly assists for those whom need IT and Medical Solutions.',
      tech: ['HTML, HTML5, CSS, JavaScript'],
      status: 'Epic',
      image: 'public/assets/alzain.png',
      link: 'https://github.com/AlZain-IT/alzain'
    },
    {
      title: 'Velkstore',
      description: 'An e-commerce platform for whom those in need of boost in game currency.',
      tech: ['HTML, CSS, JavaScript, Node.js'],
      status: 'Epic',
      image: 'public/assets/velkstore.png',
      link: 'https://github.com/MoriKaslana/VelkStore'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Legendary': return 'text-yellow-400';
      case 'Epic': return 'text-purple-400';
      default: return 'text-primary';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            LEGENDARY ARTIFACTS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Behold the digital relics forged in the fires of creativity and tempered by the winds of innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="ancient-border bg-card rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:glow-border"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-background relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`font-cinzel text-sm font-bold px-3 py-1 rounded-full bg-black/50 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold mb-3 rune-decoration">
                  {project.title}
                </h3>
                
                <p className="font-crimson text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="font-crimson text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a className="flex-1 ancient-border bg-primary text-primary-foreground py-2 px-4 rounded font-cinzel font-medium hover:bg-primary/80 transition-colors" href={project.link}>
                    Source of the Power
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
