export default function Experience() {
  return (
    <section id="experience" className="fade-in">
      <p className="section-label">experience</p>
      <h2>Work Experience</h2>
      <div className="divider"></div>
      <div className="timeline">
        <div className="timeline-item">
          <p className="timeline-date">Jul 2025 — May 2026</p>
          <p className="timeline-role">Full Stack Developer (Part‑Time)</p>
          <p className="timeline-place">PRIOT Digital Systems · Maribor, Slovenia (Remote)</p>
          <p className="timeline-desc">
            Promoted from Intern to Part‑Time Developer based on performance. Key contributions:
          </p>
          <ul className="timeline-list">
            <li>Integrated Google OAuth 2.0 and Stripe API payment workflows, writing server‑side routes and running functional tests</li>
            <li>Built automated PDF extraction pipeline using Gemini API and Firestore, cutting manual processing time by ~60%</li>
            <li>Rebuilt React components with Tailwind CSS, testing layouts across mobile, tablet, and desktop breakpoints</li>
            <li>Contributed to code reviews and bug triage in an Agile sprint workflow</li>
          </ul>
        </div>
        <div className="timeline-item">
          <p className="timeline-date">Sep 2023 — Jun 2026</p>
          <p className="timeline-role">BSc Computer Science</p>
          <p className="timeline-place">John Paul II Catholic University of Lublin · Poland</p>
          <p className="timeline-desc">
            Completed a Computer Science degree focused on full‑stack development, software
            engineering, and applied AI/ML alongside part‑time professional development work.
            Built a portfolio of solo projects spanning web platforms, automated trading
            systems, and computer vision.
          </p>
        </div>
      </div>
    </section>
  );
}
