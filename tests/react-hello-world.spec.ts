import { test, expect } from '@playwright/test';

test.describe('React Hello World Application', () => {
  test('should display "Hello world" message on homepage', async ({ page }) => {
    // Navigate to the React Hello World application
    await page.goto('https://clayleee.github.io/react-hello-world/');
    
    // Verify the page title
    await expect(page).toHaveTitle('React Hello World');
    
    // Verify the main content is displayed
    const helloWorldElement = page.getByText('Hello world');
    await expect(helloWorldElement).toBeVisible();
    
    // Verify the React app root element exists
    const rootElement = page.locator('#root');
    await expect(rootElement).toBeVisible();
    
    // Verify the App component structure
    const appElement = page.locator('.App');
    await expect(appElement).toBeVisible();
    
    // Verify the hello-world class element
    const helloWorldDiv = page.locator('.hello-world');
    await expect(helloWorldDiv).toBeVisible();
    await expect(helloWorldDiv).toHaveText('Hello world');
  });
  
  test('should have correct page structure and styling', async ({ page }) => {
    // Navigate to the application
    await page.goto('https://clayleee.github.io/react-hello-world/');
    
    // Verify the favicon is loaded correctly
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', '/react-hello-world/vite.svg');
    
    // Verify viewport meta tag is present
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Verify CSS and JS assets are loaded
    const cssLink = page.locator('link[rel="stylesheet"]');
    await expect(cssLink).toHaveAttribute('href', /\/react-hello-world\/assets\/index-.*\.css/);
    
    // Check that the page has the expected number of DOM elements
    const elementCount = await page.evaluate(() => document.querySelectorAll('*').length);
    expect(elementCount).toBeGreaterThan(10);
  });
});
