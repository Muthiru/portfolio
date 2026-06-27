"use client";

import { useState } from 'react';
import { certifications } from '../data/certifications';
import Image from 'next/image';

const externalLinkGlyph = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const INITIAL_CERTS_TO_SHOW = 6;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.issuer]) {
      acc[cert.issuer] = [];
    }
    acc[cert.issuer].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  const allCerts = Object.values(groupedCerts).flat();
  const displayedCerts = showAll ? allCerts : allCerts.slice(0, INITIAL_CERTS_TO_SHOW);

  return (
    <section id="certifications" className="fade-in" suppressHydrationWarning>
      <h2>Credentials</h2>
      <div className="divider"></div>
      <div className="certifications-container">
        <div className="certification-grid">
          {displayedCerts.map((cert) => (
            <article className="certification-card" key={cert.title}>
              {cert.previewImage && (
                <div className="certification-preview">
                  <Image
                    src={cert.previewImage}
                    alt={`${cert.title} certificate preview`}
                    fill
                    sizes="(max-width: 700px) 100vw, (min-width: 1200px) 280px, 250px"
                    className="certification-preview-image"
                  />
                </div>
              )}
              <div className="certification-content">
                <div className="certification-header">
                  <h4 className="certification-name">{cert.title}</h4>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      className="certification-verify-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.title} certificate`}
                    >
                      {externalLinkGlyph}
                    </a>
                  )}
                </div>
                <div className="certification-meta">
                  <time className="certification-date">{cert.issuedAt}</time>
                  <span className="certification-issuer">{cert.issuer}</span>
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="certification-skills">
                    {cert.skills.map(skill => (
                      <span key={skill} className="certification-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        {allCerts.length > INITIAL_CERTS_TO_SHOW && (
          <button 
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View less' : `View more (${allCerts.length - INITIAL_CERTS_TO_SHOW} more)`}
          </button>
        )}
      </div>
    </section>
  );
}