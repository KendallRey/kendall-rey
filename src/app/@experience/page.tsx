'use client';

import { Chip, Section } from '@/components';
import { TECH } from '@/constants/techs';
import { useIntersectionObserver } from '@/hooks';
import React from 'react';

const experiences = [
  {
    role: 'Mid-Level Front End Developer',
    company: 'Your Company Name',
    duration: 'January 2023 - Present',
    details: [
      'Developed and maintained front-end applications, ensuring seamless integration with back-end APIs, including online payments.',
      'Led UI redesigns for the Canteen Management System, collaborating with UI/UX designers.',
      'Built and deployed the School Management System web app.',
      'Managed front-end production deployments and monitored application stability.',
      'Maintained and updated a React Native (Expo) mobile app, resolving issues and publishing updates',
      'Actively contributed to agile sprints, optimizing development workflows.',
    ],
    techs: [
      TECH.TYPESCRIPT,
      TECH.JAVASCRIPT,
      TECH.REACT,
      TECH.MATERIAL_UI,
      TECH.TAILWIND,
      TECH.JIRA,
      TECH.GITHUB,
      TECH.SASS,
      TECH.REDUX,
      TECH.POSTGRESQL,
      TECH.ZOD,
      TECH.DJANGO,
      TECH.REACT_NATIVE,
    ],
  },
  {
    role: 'Junior Front End Developer',
    company: 'Your Company Name',
    duration: 'June 2022 - December 2022',
    details: [
      'Enhanced the Learning Management System with patches and a new implementation.',
      'Initiated development of an Accounting Management System to streamline student fee processing.',
      'Collaborated in sprint planning and retrospectives to improve team efficiency.',
    ],
    techs: [
      TECH.TYPESCRIPT,
      TECH.JAVASCRIPT,
      TECH.REACT,
      TECH.BOOTSTRAP,
      TECH.JIRA,
      TECH.GITHUB,
    ],
  },
];

const ExperiencePage = () => {
  useIntersectionObserver({
    className: 'timeline-item',
    classIn: 'fade-in-up',
    classOut: 'fade-out-down',
  });
  useIntersectionObserver({
    className: 'section-title',
    classIn: 'fade-in-left',
    classOut: 'fade-out-right',
  });
  useIntersectionObserver({
    className: 'tech-chip',
    classIn: 'fade-in-left',
    classOut: 'fade-out-right',
  });

  return (
    <Section
      id="experience"
      className="min-h-screen flex flex-col items-center  md:p-12"
    >
      <h2 className="section-title fade-out-right text-3xl transition-all duration-700 font-semibold text-center">
        My Experience
      </h2>
      <ol className="relative border-gray-300">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="timeline-item fade-out-down transition-all duration-700 ease-out mb-10 ml-6"
          >
            <article className="p-6 shadow-md rounded-lg flex flex-col gap-2">
              <time className="text-sm text-gray-500">{exp.duration}</time>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <ul className="list-disc ml-5 mt-2 text-gray-400">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="flex gap-2 flex-wrap">
                {exp.techs?.map((tech) => (
                  <Chip
                    key={tech.name}
                    className={`tech-chip fade-out-right transition-all duration-700 ${tech.className || ''}`}
                  >
                    {tech.name}
                  </Chip>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default ExperiencePage;
