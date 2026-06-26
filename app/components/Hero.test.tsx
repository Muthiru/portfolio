import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Hero from '@/app/components/Hero';

describe('Hero Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the hero section with greeting', () => {
    render(<Hero />);
    
    expect(screen.getByText('hello, world 👋')).toBeInTheDocument();
    expect(screen.getByText('Daniel Njama')).toBeInTheDocument();
  });

  it('displays typewriter text', () => {
    render(<Hero />);
    
    // The typewriter element should exist and contain some text
    const typewriterElement = screen.getByTestId('typewriter');
    expect(typewriterElement).toBeInTheDocument();
    expect(typewriterElement.textContent?.length).toBeGreaterThan(0);
  });

  it('renders all three hero proof points', () => {
    render(<Hero />);
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Impact')).toBeInTheDocument();
    expect(screen.getByText('Range')).toBeInTheDocument();
    
    expect(screen.getByText('Production SaaS features')).toBeInTheDocument();
    expect(screen.getByText('~60% less manual processing')).toBeInTheDocument();
    expect(screen.getByText('Frontend, backend, data, cloud')).toBeInTheDocument();
  });

  it('renders all CTA buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('View Featured Work')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('has correct links for CTA buttons', () => {
    render(<Hero />);
    
    const viewWorkLink = screen.getByText('View Featured Work').closest('a');
    const contactLink = screen.getByText('Contact Me').closest('a');
    const cvLink = screen.getByText('Download CV').closest('a');
    
    expect(viewWorkLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
    expect(cvLink).toHaveAttribute('href', '/resume.pdf');
    expect(cvLink).toHaveAttribute('download');
  });
});