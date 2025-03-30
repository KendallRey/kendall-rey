"use client";

import { Section } from "@/components";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    title: "Project One",
    description: "A placeholder project description. This project focuses on UI/UX.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project Two",
    description: "Another project about front-end development and animations.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project Three",
    description: "A mobile app project built with React Native and Expo.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
  },
];

const page = () => {

  useIntersectionObserver("project-card", { delay: 300 });

  return (
    <Section id="projects" className="h-screen flex flex-col bg-gray-900 text-white  p-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default page;
