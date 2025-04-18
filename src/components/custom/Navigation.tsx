'use client';

import { useState } from 'react';
import { Nav } from '@/components/nav/Nav';
import Link from 'next/link';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg text-white focus:outline-none"
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <Nav
        className={`
          fixed top-0 right-0 h-full w-64 bg-gray-900/90 shadow-lg p-6 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:relative md:translate-x-0 md:w-auto md:h-auto md:p-4 md:bg-gray-900/40 md:shadow-md
          flex flex-col border border-gray-700 rounded-2xl backdrop-blur-sm
        `}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Projects
            </Link>
          </li>
        </ul>
      </Nav>
    </div>
  );
};
