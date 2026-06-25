"use client";

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.16 },
    );

    elements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
