"use client";

import { useTypewriter } from '@/app/hooks/useTypewriter';
import { trackEvent, AnalyticsEvents } from '@/app/lib/analytics';

const TYPEWRITER_PHRASES = [
  'Full Stack Developer',
  'React & TypeScript',
  'Backend & API Builder',
  'Cloud & API Integrations',
];

export default function Hero() {
  const { text } = useTypewriter({ phrases: TYPEWRITER_PHRASES });

  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I&apos;m Daniel 👋</p>
        <h1 className="hero-name">Daniel Njama</h1>
        <p className="hero-title">
          <span id="typewriter">{text}</span>
          <span className="cursor"></span>
        </p>
        <p className="hero-desc">
          I turn product ideas into working full-stack software: interfaces people can use, 
          backend logic that holds up, and deployments that are ready to review.
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
          <a 
            href="/resume.pdf" 
            className="btn btn-outline" 
            download
            onClick={() => trackEvent(AnalyticsEvents.RESUME_DOWNLOAD)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
