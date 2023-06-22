import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Пребарајте' }).click();
  await page.getByRole('combobox', { name: 'Пребарајте' }).fill('time');
  await page.getByRole('combobox', { name: 'Пребарајте' }).press('Enter');
  await page.getByRole('link', { name: 'TIME.mk time.mk https://time.mk' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '„Титан“ има кислород до четврток напладне – спасувачките екипи во трка со времето во потрага по исчезнатата подморница' }).click();
  const page1 = await page1Promise;
});