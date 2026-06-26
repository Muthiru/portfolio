"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Project, projects } from '../data/projects';
import { trackEvent, AnalyticsEvents } from '@/app/lib/analytics';

const filters = [
  { label: 'Latest', value: 'latest' },
  { label: 'All', value: 'all' },
  { label: 'Featured', value: 'featured' },
  { label: 'Web', value: 'web' },
  { label: 'Python', value: 'python' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Java', value: 'java' },
  { label: 'Forks', value: 'fork' },
];

const githubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

function ProjectPreview({ project, showFullImage }: { project: Project; showFullImage?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (project.screenshot && !imageFailed) {
    return (
      <figure className="project-preview project-screenshot">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt ?? `${project.name} screenshot`}
          fill
          loading="lazy"
          sizes="(max-width: 700px) 100vw, (min-width: 1200px) 400px, 350px"
          className="project-screenshot-image"
          style={{ objectFit: showFullImage ? 'contain' : 'cover' }}
          onError={() => setImageFailed(true)}
        />
      </figure>
    );
  }

  return (
    <div className={`project-preview project-preview-${project.preview ?? 'livestock'}`} aria-hidden="true">
      <div className="preview-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="preview-body">
        <div className="preview-sidebar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="preview-main">
          <div className="preview-chart">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="preview-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('latest');
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  const filteredProjects = sortedProjects.filter(project => {
    if (filter === 'latest') return !project.fork && !project.tags.includes('profile');
    if (filter === 'all') return true;
    return project.tags.includes(filter);
  });

  const spotlightProjects = sortedProjects
    .filter(project => project.outcomes && !project.fork)
    .slice(0, 3);
  const spotlightProjectNames = new Set(spotlightProjects.map(project => project.name));
  const archiveProjects = filter === 'latest'
    ? filteredProjects.filter(project => !spotlightProjectNames.has(project.name))
    : filteredProjects;
  const visibleProjects = showOtherProjects ? archiveProjects : archiveProjects.slice(0, 3);
  const hiddenProjectsCount = Math.max(archiveProjects.length - visibleProjects.length, 0);

  return (
    <section id="projects" className="fade-in">
      <p className="section-label">04 projects</p>
      <h2>Latest projects</h2>
      <div className="divider"></div>
      <p className="projects-intro">
        Selected work that shows how I build: clear data models, usable interfaces, API integrations, validation, and deployable software.
      </p>
      <div className="projects-proof-grid" aria-label="Project strengths">
        <div>
          <span>Full-stack</span>
          <strong>Typed web apps, APIs, auth, data models</strong>
        </div>
        <div>
          <span>Automation</span>
          <strong>WebSocket workflows, cloud jobs, reporting</strong>
        </div>
        <div>
          <span>Validation</span>
          <strong>QA checks, SQL validation, model testing</strong>
        </div>
      </div>
      <div className="spotlight-grid" aria-label="Featured case studies">
        {spotlightProjects.map(project => (
          <article className="spotlight-card" key={project.name}>
            <ProjectPreview project={project} />
            <div className="spotlight-content">
              <div className="spotlight-meta">
                <span className="spotlight-role">{project.role}</span>
                {project.metric && <span className="spotlight-metric">{project.metric}</span>}
              </div>
              <h3>{project.name}</h3>
              <p>{project.headline ?? project.description}</p>
              {project.impact && <p className="spotlight-impact">{project.impact}</p>}
              <div className="spotlight-stack">
                {project.stack?.slice(0, 5).map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="spotlight-actions">
                <button className="project-link project-link-button" type="button" onClick={() => {
                  trackEvent(AnalyticsEvents.PROJECT_CLICK, { project: project.name, location: 'spotlight' });
                  setActiveProject(project);
                }}>
                  Case study
                </button>
                <a 
                  href={project.repoUrl} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(AnalyticsEvents.GITHUB_CLICK, { project: project.name })}
                >
                  {githubIcon}
                  GitHub
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-filter" aria-label="Project filters">
        {filters.map(item => (
          <button
            key={item.value}
            className={`filter-btn ${filter === item.value ? 'active' : ''}`}
            aria-pressed={filter === item.value}
            onClick={() => {
              setFilter(item.value);
              setShowOtherProjects(item.value !== 'latest');
            }}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visibleProjects.map(project => (
          <article
            key={project.name}
            className={`project-card ${project.fork ? 'is-muted' : ''}`}
          >
            {project.featured && <span className="project-badge">featured</span>}
            {project.fork && <span className="project-badge project-badge-muted">fork</span>}
            <div className="project-icon" aria-hidden="true">
              {project.language === 'Python' ? 'PY' : project.language === 'JavaScript' ? 'JS' : project.language === 'TypeScript' ? 'TS' : project.language}
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            {project.metric && <p className="project-metric">{project.metric}</p>}
            <div className="project-tags">
              <span className="project-tag">{project.language}</span>
              {project.tags
                .filter(tag => !['featured', 'fork'].includes(tag))
                .map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              <span className="project-tag">Updated {project.updatedAt}</span>
            </div>
            <div className="project-links">
              {project.outcomes && (
                <button className="project-link project-link-button" type="button" onClick={() => setActiveProject(project)}>
                  Case study
                </button>
              )}
              <a href={project.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                {githubIcon}
                GitHub
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {hiddenProjectsCount > 0 || showOtherProjects ? (
        <div className="projects-actions">
          <button
            className="btn btn-outline"
            onClick={() => setShowOtherProjects(current => !current)}
            type="button"
          >
            {showOtherProjects ? 'Show fewer projects' : `Open ${hiddenProjectsCount} other projects`}
          </button>
          <a href="https://github.com/Muthiru?tab=repositories" className="project-archive-link" target="_blank" rel="noopener noreferrer">
            View GitHub archive
          </a>
        </div>
      ) : null}
      {activeProject && (
        <div className="case-study-backdrop" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={() => setActiveProject(null)}>
          <article className="case-study-modal" onClick={event => event.stopPropagation()}>
            <button className="case-study-close" type="button" aria-label="Close case study" onClick={() => setActiveProject(null)}>
              ×
            </button>
            <ProjectPreview project={activeProject} showFullImage />
            <div className="case-study-content">
              <p className="section-label">{activeProject.role}</p>
              <h3 id="case-study-title">{activeProject.name}</h3>
              <p className="case-study-impact">{activeProject.impact ?? activeProject.description}</p>
              {(activeProject.problem || activeProject.solution) && (
                <div className="case-study-split">
                  {activeProject.problem && (
                    <div>
                      <span>Problem</span>
                      <p>{activeProject.problem}</p>
                    </div>
                  )}
                  {activeProject.solution && (
                    <div>
                      <span>Solution</span>
                      <p>{activeProject.solution}</p>
                    </div>
                  )}
                </div>
              )}
              <div className="case-study-stack">
                {activeProject.stack?.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul className="case-study-list">
                {activeProject.outcomes?.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={activeProject.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  {githubIcon}
                  GitHub
                </a>
                {activeProject.demoUrl && (
                  <a href={activeProject.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
