
import React from 'react';
import Navigation from '@/components/Navigation';
import BackgroundFX from '@/components/BackgroundFX';
import ErdTree from '@/components/ErdTree';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import LanguagesSection from '@/components/LanguagesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      <ErdTree />
      <BackgroundFX />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <WorkExperienceSection />
      <CertificationsSection />
      <LanguagesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
