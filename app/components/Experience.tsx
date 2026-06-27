const experiences = [
  {
    type: 'work',
    period: 'Jul 2025 — May 2026',
    role: 'Full Stack Developer',
    company: 'PRIOT Digital Systems',
    location: 'Maribor, Slovenia (Remote)',
    description: 'Promoted from Intern to Part‑Time Developer based on performance.',
    achievements: [
      'Integrated Google OAuth 2.0 and Stripe API payment workflows, writing server‑side routes and running functional tests',
      'Built automated PDF extraction pipeline using Gemini API and Firestore, cutting manual processing time by ~60%',
      'Rebuilt React components with Tailwind CSS, testing layouts across mobile, tablet, and desktop breakpoints',
      'Contributed to code reviews and bug triage in an Agile sprint workflow'
    ]
  },
  {
    type: 'education',
    period: 'Sep 2023 — Jun 2026',
    role: 'BSc Computer Science',
    company: 'John Paul II Catholic University of Lublin',
    location: 'Poland',
    description: 'Completed a Computer Science degree focused on full‑stack development, software engineering, and applied AI/ML alongside part‑time professional development work. Built a portfolio of solo projects spanning web platforms, automated trading systems, and computer vision.',
    achievements: []
  }
];

export default function Experience() {
  return (
    <section id="experience" className="fade-in" suppressHydrationWarning>
      <h2>Work & Education</h2>
      <div className="divider"></div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <article className="experience-card" key={index}>
            <div className="experience-header">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-type-badge">{exp.type === 'work' ? 'Work' : 'Education'}</div>
            </div>
            <h3 className="experience-role">{exp.role}</h3>
            <div className="experience-company">
              <span className="company-name">{exp.company}</span>
              {exp.location && <span className="company-location"> · {exp.location}</span>}
            </div>
            <p className="experience-description">{exp.description}</p>
            {exp.achievements.length > 0 && (
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}