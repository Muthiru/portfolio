"use client";

import { useEffect, useRef } from 'react';

export default function ScrollReveal() {
  const observedElementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // Use setTimeout to ensure hydration completes before DOM manipulation
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>('.fade-in');
      
      if (elements.length === 0) return;

      const observedSet = observedElementsRef.current;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !observedSet.has(entry.target)) {
              (entry.target as HTMLElement).classList.add('visible');
              observedSet.add(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
      );

      // Check if elements are already in viewport
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('visible');
          observedSet.add(element);
        } else {
          observer.observe(element);
        }
      });

      return () => {
        observer.disconnect();
        observedSet.clear();
      };
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}
