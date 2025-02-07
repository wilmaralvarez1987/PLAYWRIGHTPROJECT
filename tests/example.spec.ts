import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test mercadolibre', async ({ page }) => {
  await page.goto('https://mercadolibre.com.co')
  await page.locator('inpuT[id=\'cb1-edit\']').fill('iPhone 15')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible()
  //await page.pause()

  const titles = await page.locator('//ol[contains(@class,\'ui-search-layout\')]//h2').allInnerTexts()

  console.log('The number of tittles is:',titles.length)

  for(let title of titles){
     console.log('The title is:', title)
  }

});
