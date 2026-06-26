"use client";

import { useEffect, useState } from 'react';

const TYPEWRITER_PHRASES = [
  'Full Stack Developer',
  'React & TypeScript',
  'Backend & API Builder',
  'Cloud & API Integrations',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex];
    const isComplete = !isDeleting && characterIndex === phrase.length;
    const isEmpty = isDeleting && characterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setPhraseIndex(current => (current + 1) % TYPEWRITER_PHRASES.length);
          setCharacterIndex(1);
          return;
        }

        setCharacterIndex(current => current + (isDeleting ? -1 : 1));
      },
      isComplete ? 1400 : isDeleting ? 40 : 80,
    );

    return () => window.clearTimeout(timeout);
  }, [characterIndex, isDeleting, phraseIndex]);

  const text = TYPEWRITER_PHRASES[phraseIndex].slice(0, characterIndex);

  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">hello, world 👋</p>
        <h1 className="hero-name">Daniel Njama</h1>
        <p className="hero-title">
          <span id="typewriter" data-testid="typewriter">{text}</span>
          <span className="cursor"></span>
        </p>
        <p className="hero-desc">
          I turn product ideas into working full-stack software: interfaces people can use, backend logic that holds up, integrations that behave correctly, and deployments that are ready to review. QA is part of how I build, but my main focus is designing and shipping complete web applications.
        </p>
        <div className="hero-proof-grid" aria-label="Career highlights">
          <div className="hero-proof">
            <span>Experience</span>
            <strong>Production SaaS features</strong>
          </div>
          <div className="hero-proof">
            <span>Impact</span>
            <strong>~60% less manual processing</strong>
          </div>
          <div className="hero-proof">
            <span>Range</span>
            <strong>Frontend, backend, data, cloud</strong>
          </div>
        </div>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">View Featured Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          <a href="/resume.pdf" className="btn btn-outline" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
