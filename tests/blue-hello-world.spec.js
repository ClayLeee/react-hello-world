// @ts-check
import { test, expect } from '@playwright/test';

test('should display blue Hello world text', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://clayleee.github.io/react-hello-world/');

  // Locate the Hello world text element
  const helloWorldElement = page.getByText('Hello world');

  // Verify the element exists
  await expect(helloWorldElement).toBeVisible();

  // Take a screenshot for visual verification
  await page.screenshot({ path: 'tests/screenshots/hello-world-blue.png' });

  // Verify the text color is blue
  const textColor = await helloWorldElement.evaluate(el => {
    return window.getComputedStyle(el).color;
  });

  // RGB value for blue (can vary, but should contain high blue component)
  // This checks if the blue component is significantly higher than red and green
  const rgbMatch = textColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    const [_, r, g, b] = rgbMatch.map(Number);
    // Verify blue component is dominant
    expect(b).toBeGreaterThan(r);
    expect(b).toBeGreaterThan(g);
    console.log(`Text color is RGB(${r}, ${g}, ${b})`);
  } else {
    // Alternative check if the format is different
    expect(textColor.includes('blue') || textColor.includes('rgb(0, 0, 255)') ||
           textColor.includes('rgba(0, 0, 255')).toBeTruthy();
  }
});
