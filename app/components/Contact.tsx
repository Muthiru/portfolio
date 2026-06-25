"use client";
import { useState, FormEvent } from 'react';
export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message sent';
      case 'error':
        return 'Try again';
      default:
        return 'Send message';
    }
  };

  const statusMessage = {
    idle: 'Tell me what you are building, hiring for, or trying to improve.',
    sending: 'Sending your message...',
    success: 'Message sent. I will get back to you soon.',
    error: 'Something failed. You can retry or email me directly.',
  }[status];

  return (
    <section id="contact" className="fade-in">
      <p className="section-label">06 contact</p>
      <h2>Let&apos;s build something useful</h2>
      <div className="divider"></div>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-eyebrow">Open to full-stack roles, backend-heavy product work, and practical web builds.</p>
          <h3>Send the context. I&apos;ll bring the implementation thinking.</h3>
          <p>
            I&apos;m especially interested in teams that need someone who can move between UI,
            APIs, databases, integrations, and the small reliability details that make software
            feel finished.
          </p>
          <div className="contact-focus-grid" aria-label="What Daniel can help with">
            <div>
              <span>01</span>
              <strong>SaaS features</strong>
            </div>
            <div>
              <span>02</span>
              <strong>API integrations</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Data workflows</strong>
            </div>
          </div>
          <div className="availability-panel">
            <div>
              <span>Availability</span>
              <strong>Open to full-time roles</strong>
            </div>
            <div>
              <span>Best fit</span>
              <strong>Full-stack development, backend implementation, API integrations</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Remote / EU-friendly timezone</strong>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/Muthiru" className="social-link" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/daniel-njama" className="social-link" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:njamadaniel3@gmail.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>
        <div className="contact-form-card">
          <div className="contact-form-header">
            <h3>Send a message</h3>
            <p>{statusMessage}</p>
          </div>
          <form className="contact-form-body" id="contact-form" onSubmit={handleSubmit}
                action="https://formsubmit.co/njamadaniel3@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New message from portfolio site"/>
            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_captcha" value="false"/>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" id="name" name="name" type="text" placeholder="Your name" required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" id="email" name="email" type="email" placeholder="your@email.com" required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" name="message" placeholder="Tell me about the role, project, timeline, or problem." required/>
            </div>
            <button className="form-submit" type="submit" disabled={status === 'sending'}>{getButtonText()}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
