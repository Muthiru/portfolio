const dataIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const fullStackIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const adaptIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const aiIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
    <circle cx="7.5" cy="14.5" r="1.5"></circle>
    <circle cx="16.5" cy="14.5" r="1.5"></circle>
  </svg>
);

const capabilities = [
  {
    title: 'Data & systems thinking',
    description: 'Turning messy, scattered records into structured, relational systems.',
    icon: dataIcon,
  },
  {
    title: 'Full-stack delivery',
    description: 'Shipping features end-to-end, from database to interface.',
    icon: fullStackIcon,
  },
  {
    title: 'Fast stack adaptation',
    description: 'Picking up whatever a problem actually needs - Nuxt, Python, PHP, Vue etc.',
    icon: adaptIcon,
  },
  {
    title: 'Applied AI/ML',
    description: 'Practical computer vision and automation, not just theory.',
    icon: aiIcon,
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="fade-in" suppressHydrationWarning>
      <h2>Capability areas</h2>
      <div className="divider"></div>
      <div className="how-i-work-grid">
        {capabilities.map(capability => (
          <article className="work-card" key={capability.title}>
            <div className="work-icon">
              {capability.icon}
            </div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}