"use client";

import { useEffect, useRef } from 'react';

export default function ScrollReveal() {
  const observedElementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.fade-in');
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !observedElementsRef.current.has(entry.target)) {
            entry.target.classList.add('visible');
            observedElementsRef.current.add(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.16 },
    );

    elements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      observedElementsRef.current.clear();
    };
  }, []);

  return null;
}
