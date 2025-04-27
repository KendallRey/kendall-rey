// framer motion would be overkill for this

import { useEffect } from 'react';

type ArgProps = {
  className: string;
  classIn?: string;
  classOut?: string;
};

type Options = {
  delay?: number;
};

export const useIntersectionObserver = (args: ArgProps, options?: Options) => {
  const { className, classIn, classOut } = args ?? {};
  const delay = options?.delay || 240;

  useEffect(() => {
    const observerIn = createObserver(classIn, classOut, true, 0.5);

    document.querySelectorAll(`.${className}`).forEach((item) => {
      observerIn?.observe(item);
    });

    return () => {
      observerIn?.disconnect();
    };
  }, []);

  const createObserver = (
    addClass: string | null | undefined,
    removeClass: string | null | undefined,
    isIntersecting: boolean,
    threshold: number = 0.2,
  ) => {
    if (!addClass) return null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (isIntersecting ? entry.isIntersecting : !entry.isIntersecting) {
            setTimeout(() => {
              if (addClass) entry.target.classList.add(addClass);
              if (removeClass) entry.target.classList.remove(removeClass);
            }, index * delay);
          }
        });
      },
      {
        threshold,
      },
    );

    return observer;
  };
};
