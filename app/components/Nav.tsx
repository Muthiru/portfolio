"use client";

import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#certifications', label: 'certifications' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <a className="nav-logo" href="#hero" aria-label="Daniel Njama home" onClick={() => setIsOpen(false)}>
        <span className="nav-logo-mark">DN</span>
        <span className="nav-logo-text">danielnjama</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen(current => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="nav-links" id="site-navigation">
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
