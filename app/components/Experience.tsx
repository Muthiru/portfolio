export default function Experience() {
  return (
    <section id="experience" className="fade-in">
      <p className="section-label">05 experience</p>
      <h2>My journey</h2>
      <div className="divider"></div>
      <div className="timeline">
        <div className="timeline-item">
          <p className="timeline-date">Jul 2025 — May 2026</p>
          <p className="timeline-role">Full Stack Developer (Part‑Time)</p>
          <p className="timeline-place">PRIOT Digital Systems · Maribor, Slovenia (Remote)</p>
          <p className="timeline-desc">
            Promoted from Intern to Part‑Time Developer based on performance; shipped production
            features for a SaaS inventory platform used by multiple business clients. Integrated
            Google OAuth 2.0 and Stripe API payment workflows, writing server‑side routes and
            running functional and edge‑case tests to confirm subscriptions, billing, and access
            control behaved correctly. Built an automated PDF extraction pipeline using the
            Gemini API and Firestore, validating data accuracy across hundreds of documents per
            month and cutting manual processing time by ~60%. Rebuilt React.js components with
            Tailwind CSS, testing layouts across mobile, tablet, and desktop breakpoints, and
            contributed to code reviews and bug triage in an Agile sprint workflow.
          </p>
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
