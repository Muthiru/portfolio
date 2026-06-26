import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('contact form should be accessible', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#contact')
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab through all interactive elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });
});
