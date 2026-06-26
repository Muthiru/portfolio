import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the homepage with all sections', async ({ page }) => {
    // Check hero section
    await expect(page.getByText('hello, world 👋')).toBeVisible();
    await expect(page.getByText('Daniel Njama')).toBeVisible();
    
    // Check navigation
    await expect(page.getByRole('navigation')).toBeVisible();
    
    // Check main sections exist
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should navigate to sections when clicking nav links', async ({ page }) => {
    // Click on Projects nav link
    await page.getByRole('link', { name: /Projects/i }).click();
    await expect(page.locator('#projects')).toBeInViewport();
    
    // Click on Contact nav link
    await page.getByRole('link', { name: /Contact/i }).click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should have working hero CTA buttons', async ({ page }) => {
    // Click "View Featured Work"
    await page.getByRole('link', { name: /View Featured Work/i }).click();
    await expect(page.locator('#projects')).toBeInViewport();
    
    // Go back to top
    await page.goto('/');
    
    // Click "Contact Me"
    await page.getByRole('link', { name: /Contact Me/i }).click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should download resume when clicking CV button', async ({ page }) => {
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: /Download CV/i }).click();
    const download = await downloadPromise;
    
    expect(download.suggestedFilename()).toBe('resume.pdf');
  });

  test('should have correct meta information', async ({ page }) => {
    await expect(page).toHaveTitle(/Daniel Njama.*Full Stack Developer/i);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Daniel Njama');
    expect(description).toContain('Full Stack Developer');
  });
});