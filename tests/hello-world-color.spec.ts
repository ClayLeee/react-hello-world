import { test, expect } from '@playwright/test';

test.describe('Hello World Color Test', () => {
  test('should verify Hello world text is red', async ({ page }) => {
    // Navigate to the React Hello World application
    await page.goto('https://clayleee.github.io/react-hello-world/');

    // Wait for the page to load and find the Hello world element
    const helloWorldElement = page.locator('.hello-world');

    // Verify the element exists
    await expect(helloWorldElement).toBeVisible();

    // Verify the text content
    await expect(helloWorldElement).toHaveText('Hello world');

    // Check the current color - this test will fail as the color is blue, not red
    const currentColor = await helloWorldElement.evaluate((element) => {
      return window.getComputedStyle(element).color;
    });

    console.log(`Current color: ${currentColor}`);

    // This assertion will fail - the current color is rgb(0, 123, 255) (blue)
    // Expected color should be red (rgb(255, 0, 0) or similar red color)
    await expect(helloWorldElement).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('should document current state - Hello world is blue, not red', async ({ page }) => {
    // Navigate to the React Hello World application
    await page.goto('https://clayleee.github.io/react-hello-world/');

    // Find the Hello world element
    const helloWorldElement = page.locator('.hello-world');

    // Verify the element exists and has the correct text
    await expect(helloWorldElement).toBeVisible();
    await expect(helloWorldElement).toHaveText('Hello world');

    // Document the current color (should be blue)
    await expect(helloWorldElement).toHaveCSS('color', 'rgb(0, 123, 255)');

    // Take a screenshot for documentation
    await page.screenshot({ path: 'tests/screenshots/hello-world-current-blue.png' });
  });
});
