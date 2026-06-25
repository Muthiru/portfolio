"use client";

import Image from 'next/image';

const profilePhoto = '/Daniel.jpeg';

export default function About() {
  return (
    <section id="about" className="fade-in">
      <p className="section-label">01 about</p>
      <h2>Who I am</h2>
      <div className="divider"></div>
      <div className="about-grid">
        <div>
          <div className="about-text">
            <p>
              I completed my BSc in Computer Science in Poland and build the kind of
              portfolio that shows how I think, not just which tools I have used. My path has been
              practical: at PRIOT Digital Systems, I moved from intern to part‑time developer after
              shipping production work on SaaS workflows, API integrations, billing, and document
              automation.
            </p>
            <p>
              The work I enjoy most sits where product, data, and reliability meet. I like taking
              an unclear requirement, shaping the data and backend behavior, then connecting it to
              a clean user flow. Outside professional work, that shows up in projects like a
              livestock management platform, a trading automation project, and computer-vision
              experiments with validation built in.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-chip"><span>📍</span>Lublin, Poland</div>
            <div className="fact-chip"><span>🎓</span>BSc Computer Science, June 2026</div>
            <div className="fact-chip"><span>💼</span>Open to work</div>
            <div className="fact-chip"><span>📧</span>njamadaniel3@gmail.com</div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <span className="value-card-label">01</span>
              <h3>Clear implementation</h3>
              <p>I break vague requirements into data models, API behavior, UI states, and deployment steps.</p>
            </div>
            <div className="value-card">
              <span className="value-card-label">02</span>
              <h3>Reliable delivery</h3>
              <p>I check edge cases, permissions, failed states, and integration behavior before calling work done.</p>
            </div>
            <div className="value-card">
              <span className="value-card-label">03</span>
              <h3>Fast learning</h3>
              <p>I am comfortable picking up new APIs, frameworks, and product domains when the problem needs it.</p>
            </div>
          </div>
        </div>
        <div className="about-avatar" aria-label="Daniel Njama profile photo">
          <Image
            src={profilePhoto}
            alt="Daniel Njama"
            fill
            sizes="200px"
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
