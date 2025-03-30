// framer motion would be overkill for this

import { useEffect } from 'react'

type Options = {
  delay?: number; // Base delay in milliseconds (default: 240ms)
};

export const useIntersectionObserver = (className: string, options?: Options) => {

  const delay = options?.delay || 240; // Default delay of 240ms

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if(entry.isIntersecting){
          setTimeout(() => {
            entry.target.classList.add("fade-in-up");
          }, index * delay); // Staggered delay per item
        }
      })
    }, {
      threshold: 0.2
    })

    document.querySelectorAll(`.${className}`).forEach((item) => {
      observer.observe(item);
    })

    return () => observer.disconnect();
  },[])

}
