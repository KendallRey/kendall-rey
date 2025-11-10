'use client';

import { Chip, Section } from '@/components';
import { TECH } from '@/constants/techs';
import { useIntersectionObserver } from '@/hooks';
import React from 'react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Serve Diagnostica Inc.',
    company_link: 'https://servegroup.asia/',
    duration: 'June 2025 - September 2025',
    details: [
      'Started development of ID System for recording patient / member personal information, relatives, emergency contacts, etc. Including RFID function for seamless searching and identification.',
      'Provide assistance to clients for support and fix from current Laboratory Information System issues.',
      'Computer servicing tasks, including reformatting PCs, troubleshooting hardware/software issues, and assisting colleagues with computer-related problems.',
    ],
    techs: [
      TECH.TYPESCRIPT,
      TECH.JAVASCRIPT,
      TECH.REACT,
      TECH.TAILWIND,
      TECH.ANT_DESIGN,
      TECH.SHADCN_UI,
      TECH.GITHUB,
      TECH.ZUSTAND,
      TECH.POSTGRESQL,
      TECH.ZOD,
      TECH.DJANGO,
      TECH.DOCKER_COMPOSE,
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Pro-Solutions Technology, Co.',
    company_link: 'https://www.pro-solutions.technology/',
    duration: 'June 2022 - June 2025',
    details: [
      'Enhanced the Learning Management System with patches and a new implementation.',
      'Initiated development of an Accounting Management System to streamline student fee processing.',
      'Collaborated in sprint planning and retrospectives to improve team efficiency.',
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
      TECH.BOOTSTRAP,
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
              <span>
                <a
                  href={exp.company_link}
                  target="_blank"
                  className="text-lg font-semibold text-blue-400 hover:text-blue-600 hover:underline transition-all"
                >
                  {exp.company}
                </a>
              </span>
              <h3 className="text-md font-semibold">{exp.role}</h3>
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
