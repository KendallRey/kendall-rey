'use client';

import { Chip, Section } from '@/components';
import { WeirdTypeHover } from '@/components/custom/WeirdTypeHover';
import { PROJECT_TYPE } from '@/constants/enums';
import { TECH } from '@/constants/techs';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Mui Component Generator',
    description:
      'A generator for MUI components in ReactJS, to kickstart your customizable components.',
    link: 'https://www.npmjs.com/package/mui-component-generator',
    image: '/mui-component-generator.png',
    techs: [TECH.TYPESCRIPT, TECH.NPM],
    type: PROJECT_TYPE.LEARNING,
  },
  {
    title: 'Manga List',
    description:
      'A simple manga manager to record, search, and organize any titles.',
    link: 'https://github.com/KendallRey/manga-list',
    image: '/manga-list.png',
    techs: [
      TECH.TYPESCRIPT,
      TECH.NEXTJS,
      TECH.MATERIAL_UI,
      TECH.DRIZZLE,
      TECH.TAILWIND,
      TECH.SUPABASE,
      TECH.POSTGRESQL,
      TECH.REDUX,
      TECH.VERCEL,
    ],
    type: PROJECT_TYPE.HOBBY,
  },
  {
    title: 'Portfolio 3D',
    description:
      'A sample portfolio built to explore 3D integration in React using Three.js.',
    link: 'https://nx-mono-coral.vercel.app/',
    image: '/portfolio-2024.png',
    techs: [
      TECH.TYPESCRIPT,
      TECH.NEXTJS,
      TECH.TAILWIND,
      TECH.THREE_JS,
      TECH.BLENDER_3D,
    ],
    type: PROJECT_TYPE.LEARNING,
  },
  {
    title: 'QR Scanner',
    description:
      'A Flutter app built with Dart for fast and reliable QR code scanning.',
    link: 'https://github.com/KendallRey/qr-scanner-flutter',
    image: '/qr-scanner-flutter.png',
    techs: [TECH.FLUTTER, TECH.DART],
    type: PROJECT_TYPE.LEARNING,
  },
  {
    title: 'NestJS Backend Template',
    description: 'Studying backend service with queueing via redis.',
    link: 'https://github.com/KendallRey/NestJS-BullMQ',
    image: '/nestjs-bullmq.png',
    techs: [TECH.NESTJS],
    type: PROJECT_TYPE.LEARNING,
  },
];

const ProjectsPage = () => {
  useIntersectionObserver(
    {
      className: 'project-card',
      classIn: 'fade-in-up',
      classOut: 'fade-out-down',
    },
    { delay: 300 },
  );
  useIntersectionObserver({
    className: 'section-title',
    classIn: 'fade-in-left',
    classOut: 'fade-out-right',
  });

  return (
    <Section
      id="projects"
      className="min-h-screen flex flex-col bg-gray-900 text-white md:p-12"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 md:pt-0">
        <h2 className="section-title fade-out-right text-4xl font-semibold text-center transition-all duration-700 mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card fade-out-down translate-y-10 transition-all duration-700 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="w-full h-48 flex items-center relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  quality={20}
                  className="object-cover"
                  style={{ filter: 'blur(8px)' }}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={392}
                  height={150}
                  className="z-10 px-2"
                />
              </div>
              <div className="relative mt-4 p-4 border-t border-gray-700 flex flex-col gap-1">
                {project.type && (
                  <Chip
                    className={`${project.type.className} absolute right-[16px] top-[-16px] z-10`}
                  >
                    {project.type.name}
                  </Chip>
                )}
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.techs?.map((tech) => (
                    <Chip
                      key={tech.name}
                      className={`tech-chip transition-all duration-700 ${tech.className || ''}`}
                    >
                      {tech.name}
                    </Chip>
                  ))}
                </div>
              </div>
            </Link>
          ))}
          <div className="project-card min-h-[320px] flex flex-col justify-center items-center translate-y-10 transition-all duration-700 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-xl font-bold">More Coming</h3>
            <WeirdTypeHover
              text="Just finalizing ideas."
              hoverText="(definitely not procrastinating)"
              el="p"
              className="text-gray-400"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsPage;
