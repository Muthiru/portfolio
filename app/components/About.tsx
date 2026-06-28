"use client";

import Image from 'next/image';

const profilePhoto = '/Daniel.jpeg';

export default function About() {
  return (
    <section id="about" className="fade-in" suppressHydrationWarning>
      <h2>Who I am</h2>
      <div className="divider"></div>
      <div className="about-grid">
        <div>
          <div className="about-text">
            <p>
              I completed my BSc in Computer Science at John Paul II Catholic University of Lubin. Alongside my degree, I was shipping production work as a full-stack developer at PRIOT Digital Systems - SaaS workflows, API integrations, billing, and document automation.
            </p>
            <p>
              Outside coursework and client work, I build things that need to hold up: a livestock management platform, a live-market trading bot,e-commerce websites and computer vision experiments. I&apos;d rather learn what a problem actually needs than reach for the first familiar tool.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-chip">Lublin, Poland</div>
            <div className="fact-chip">BSc Computer Science</div>
            <div className="fact-chip">Open to full-time roles</div>
          </div>
        </div>
        <div className="about-avatar" aria-label="Daniel Njama profile photo" style={{ position: 'relative' }}>
          <Image
            src={profilePhoto}
            alt="Daniel Njama"
            fill
            sizes="200px"
            style={{ objectFit: 'contain', objectPosition: 'top' }}
            onError={event => {
              event.currentTarget.hidden = true;
            }}
          />
          <span>DN</span>
        </div>
      </div>
    </section>
  );
}
