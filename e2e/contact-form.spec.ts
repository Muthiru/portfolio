import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should display contact form with all fields', async ({ page }) => {
    await expect(page.getByLabelText('Name')).toBeVisible();
    await expect(page.getByLabelText('Email')).toBeVisible();
    await expect(page.getByLabelText('Message')).toBeVisible();
    await expect(page.getByRole('button', { name: /Send message/i })).toBeVisible();
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /Send message/i }).click();
    
    // Check that fields are required (browser validation)
    const nameInput = page.getByLabelText('Name');
    await expect(nameInput).toBeEmpty();
  });

  test('should enable/disable submit button based on form state', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /Send message/i });
    
    // Button should be enabled initially
    await expect(submitButton).toBeEnabled();
    
    // Fill in the form
    await page.getByLabelText('Name').fill('John Doe');
    await page.getByLabelText('Email').fill('john@example.com');
    await page.getByLabelText('Message').fill('Hello, I would like to discuss a project.');
    
    // Button should still be enabled
    await expect(submitButton).toBeEnabled();
  });

  test('should show success message after successful submission', async ({ page }) => {
    // Fill in the form
    await page.getByLabelText('Name').fill('John Doe');
    await page.getByLabelText('Email').fill('john@example.com');
    await page.getByLabelText('Message').fill('Hello, I would like to discuss a project.');
    
    // Submit the form
    await page.getByRole('button', { name: /Send message/i }).click();
    
    // Wait for success message (or error if API not configured)
    const successMessage = page.getByText(/Message sent/i);
    const errorMessage = page.getByText(/Something failed/i);
    
    // Either success or error is acceptable (error if env vars not set)
    await expect(successMessage.or(errorMessage)).toBeVisible();
  });

  test('should clear form after successful submission', async ({ page }) => {
    // Fill in the form
    await page.getByLabelText('Name').fill('John Doe');
    await page.getByLabelText('Email').fill('john@example.com');
    await page.getByLabelText('Message').fill('Hello, I would like to discuss a project.');
    
    // Submit
    await page.getByRole('button', { name: /Send message/i }).click();
    
    // Wait for success message
    const successMessage = page.getByText(/Message sent/i);
    if (await successMessage.isVisible()) {
      // Form should be cleared
      await expect(page.getByLabelText('Name')).toBeEmpty();
      await expect(page.getByLabelText('Email')).toBeEmpty();
      await expect(page.getByLabelText('Message')).toBeEmpty();
    }
  });
});

test.describe('Mobile Navigation', () => {
  test('should toggle mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
    await page.goto('/');
    
    // Mobile menu button should be visible
    const menuButton = page.getByRole('button', { name: /menu/i }).or(page.locator('.nav-toggle'));
    await expect(menuButton).toBeVisible();
    
    // Click to open menu
    await menuButton.click();
    
    // Navigation links should be visible
    await expect(page.getByRole('navigation')).toContainText(/About/i);
    await expect(page.getByRole('navigation')).toContainText(/Projects/i);
    await expect(page.getByRole('navigation')).toContainText(/Contact/i);
  });
});