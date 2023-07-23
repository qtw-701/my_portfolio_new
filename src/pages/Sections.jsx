import React from 'react';
import { useNavigateContext } from '../context/NavigateContext';
import AboutSection from './AboutSection';
import HomeSection from './HomeSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const SECTION_CLASS = 'w-full py-16';
const SLIDE_CLASS = 'overflow-hidden flex items-center slide';
export default function Section() {
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useNavigateContext();
  return (
    <>
      <HomeSection id={'home'} scroll={homeRef} sectionClass={SECTION_CLASS} />
      <AboutSection
        id={'about'}
        scroll={aboutRef}
        sectionClass={SECTION_CLASS}
      />
      <SkillsSection
        id={'skills'}
        scroll={skillsRef}
        sectionClass={SECTION_CLASS}
      />
      <ProjectsSection
        id={'projects'}
        scroll={projectsRef}
        sectionClass={SECTION_CLASS}
        slideClass={SLIDE_CLASS}
      />
      <ContactSection
        id={'contact'}
        scroll={contactRef}
        sectionClass={SECTION_CLASS}
      />
    </>
  );
}
