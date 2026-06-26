import { describe, it, expect } from 'vitest';
import { projects, type Project } from '@/app/data/projects';

describe('Projects Data', () => {
  it('exports projects array', () => {
    expect(projects).toBeDefined();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('all projects have required fields', () => {
    projects.forEach((project, index) => {
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('language');
      expect(project).toHaveProperty('repoUrl');
      expect(project).toHaveProperty('tags');
      expect(project).toHaveProperty('updatedAt');
      
      // Validate types
      expect(typeof project.name).toBe('string');
      expect(typeof project.description).toBe('string');
      expect(typeof project.language).toBe('string');
      expect(typeof project.repoUrl).toBe('string');
      expect(Array.isArray(project.tags)).toBe(true);
      expect(typeof project.updatedAt).toBe('string');
    });
  });

  it('all projects have valid URLs', () => {
    projects.forEach((project) => {
      // Repo URL should be valid
      expect(() => new URL(project.repoUrl)).not.toThrow();
      expect(project.repoUrl).toContain('github.com');
      
      // Demo URL if present should be valid
      if (project.demoUrl) {
        expect(() => new URL(project.demoUrl)).not.toThrow();
      }
    });
  });

  it('all projects have valid dates', () => {
    projects.forEach((project) => {
      const date = new Date(project.updatedAt);
      expect(date).toBeInstanceOf(Date);
      expect(isNaN(date.getTime())).toBe(false);
    });
  });

  it('featured projects have additional fields', () => {
    const featuredProjects = projects.filter(p => p.featured);
    
    featuredProjects.forEach((project) => {
      expect(project.featured).toBe(true);
      expect(project).toHaveProperty('headline');
      expect(project).toHaveProperty('role');
      expect(project).toHaveProperty('stack');
      expect(project).toHaveProperty('impact');
      expect(Array.isArray(project.stack)).toBe(true);
      expect(typeof project.headline).toBe('string');
      expect(typeof project.role).toBe('string');
      expect(typeof project.impact).toBe('string');
    });
  });

  it('fork projects are marked correctly', () => {
    const forkProjects = projects.filter(p => p.fork);
    
    forkProjects.forEach((project) => {
      expect(project.fork).toBe(true);
      expect(project.tags).toContain('fork');
    });
  });

  it('tags are consistent', () => {
    const allTags = projects.flatMap(p => p.tags);
    const uniqueTags = [...new Set(allTags)];
    
    // Common tags that should exist
    expect(uniqueTags).toContain('featured');
    expect(uniqueTags).toContain('web');
    expect(uniqueTags).toContain('python');
    
    // All tags should be lowercase
    allTags.forEach(tag => {
      expect(tag).toBe(tag.toLowerCase());
    });
  });

  it('projects have recent update dates', () => {
    // Just verify dates are reasonable (within last few years)
    const now = new Date();
    const twoYearsAgo = new Date(now.getFullYear() - 2, now.getMonth(), now.getDate());
    
    projects.forEach((project) => {
      const date = new Date(project.updatedAt);
      expect(date.getTime()).toBeGreaterThan(twoYearsAgo.getTime());
      expect(date.getTime()).toBeLessThanOrEqual(now.getTime());
    });
  });
});