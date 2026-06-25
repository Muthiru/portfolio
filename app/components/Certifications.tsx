import Image from 'next/image';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="fade-in">
      <p className="section-label">03 certifications</p>
      <h2>Certifications</h2>
      <div className="divider"></div>
      <p className="certifications-intro">
        A focused place for verified courses, certificates, and credentials that support my full-stack development work.
      </p>
      {certifications.length > 0 ? (
        <div className="certifications-grid">
          {certifications.map(certificate => (
            <article className="certification-card" key={`${certificate.issuer}-${certificate.title}`}>
              {certificate.previewImage && certificate.certificateFile && (
                <a
                  className="certification-preview"
                  href={certificate.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${certificate.title} certificate`}
                >
                  <Image
                    src={certificate.previewImage}
                    alt={`${certificate.title} certificate preview`}
                    fill
                    sizes="(max-width: 700px) 100vw, 300px"
                  />
                </a>
              )}
              <div className="certification-content">
                <span className="certification-issuer">{certificate.issuer}</span>
                <h3>{certificate.title}</h3>
                {certificate.issuedAt && <p className="certification-date">Issued {certificate.issuedAt}</p>}
                <div className="certification-skills">
                  {certificate.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              {(certificate.certificateFile || certificate.credentialUrl) && (
                <div className="certification-links">
                  {certificate.certificateFile && (
                    <a
                      className="project-link"
                      href={certificate.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View certificate
                    </a>
                  )}
                  {certificate.credentialUrl && (
                    <a
                      className="project-link"
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="certifications-empty">
          <span>Ready for credentials</span>
          <p>Verified certificates and credential links will appear here as they are published.</p>
        </div>
      )}
    </section>
  );
}
