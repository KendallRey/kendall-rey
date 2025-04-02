"use client";

import { Section } from '@/components'
import { useIntersectionObserver } from '@/hooks';
import React from 'react'

const experiences = [
  {
    role: "Mid-Level Front End Developer",
    company: "Your Company Name",
    duration: "January 2023 - Present",
    details: [
      "Assisted in back-end API development to enable online payment functionality for users.",
      "Deploys production Front-end Server versions/updates.",
      "Initiated the redesign of the Canteen Management System UI, collaborating closely with a UI/UX designer to enhance user experience.",
      "Started School Management System web app.",
      "Actively participates in sprint planning and sprint retrospectives, collaborating with the team to refine development goals, identify blockers, and optimize workflows.",
      "Continuously monitored front-end server applications, ensuring that all latest builds were free from errors or failures.",
      "Maintained and applied minor patches to React Native (Expo) mobile app from the previous developer.",
      "Resolved issues in the mobile app and enabled deployment/publication to Google Play and the Apple App Store.",
    ],
  },
  {
    role: "Junior Front End Developer",
    company: "Your Company Name",
    duration: "June 2022 - December 2022",
    details: [
      "Applied patches to the previous Learning Management System.",
      "Initiated the development of an Accounting Management System to streamline student fee processing and improve transaction efficiency.",
      "Implemented a new Learning Management System to enhance educational processes and user experience.",
      "Participated in sprint planning and retrospectives, contributing to sprint goals and process improvements.",
    ],
  },
];

const page = () => {

  useIntersectionObserver({ className: 'timeline-item', classIn: 'fade-in-up', classOut: 'fade-in-out' });

  return (
    <Section id="experience" className="min-h-screen flex flex-col items-center  md:p-12">
      <h2 className="text-3xl font-semibold text-center">My Experience</h2>
      <ol className="relative border-gray-300">
          {experiences.map((exp, index) => (
            <li key={index} className="timeline-item translate-y-10 transition-all duration-700 ease-out mb-10 ml-6">
              <article className="p-6 shadow-md rounded-lg">
                <time className="text-sm text-gray-500">{exp.duration}</time>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <ul className="list-disc ml-5 mt-2 text-gray-500">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Section>
  )
}

export default page