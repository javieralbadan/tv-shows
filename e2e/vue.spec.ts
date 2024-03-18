import { expect, test } from '@playwright/test';

const CATEGORIES = 7;
const EXPECTED_TITLES = ['Action', 'Drama', 'Comedy', 'Nature', 'Sports', 'Food', 'Thriller'];
const SHOW_ITEMS = 10;

test('loads the app and shows the header and 7 lists', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('header h1')).toHaveText('TV Shows App');

	await expect(page.locator('nav .navbutton')).toHaveCount(CATEGORIES);
	const navButtonsTexts = await page.locator('nav .navbutton').allInnerTexts();
	for (let i = 0; i < navButtonsTexts.length; i++) {
		await expect(navButtonsTexts[i]).toBe(EXPECTED_TITLES[i]);
	}

	await expect(page.locator('main .show-list')).toHaveCount(CATEGORIES);
	const listsTitles = await page.locator('.show-list h2').allInnerTexts();
	for (let i = 0; i < listsTitles.length; i++) {
		await expect(listsTitles[i]).toBe(EXPECTED_TITLES[i]);
	}
});

test('navigates properly to a section after click in navbutton', async ({ page }) => {
	await page.goto('/');
	const buttonLocator = page.locator('nav').getByRole('button', { name: 'Sports' });
	await buttonLocator.click();
	// eslint-disable-next-line playwright/no-wait-for-timeout
	await page.waitForTimeout(1000);

	const sportListLocator = page.locator('.show-list#sports');
	const isVisible = await sportListLocator.isVisible();
	expect(isVisible).toBeTruthy();
	await expect(sportListLocator.locator('.rail .show-card')).toHaveCount(SHOW_ITEMS);
});

test('navigates properly and loads the show details', async ({ page }) => {
	await page.goto('/');
	const buttonLocator = page.locator('nav').getByRole('button', { name: 'Comedy' });
	await buttonLocator.click();
	// eslint-disable-next-line playwright/no-wait-for-timeout
	await page.waitForTimeout(1000);

	const comedyListLocator = page.locator('.show-list#comedy');
	await comedyListLocator.isVisible();
	const comedyCardLocator = comedyListLocator.locator('.rail .show-card').nth(2);
	await comedyCardLocator.click();

	await page.waitForURL('http://localhost:5173/tv-shows/show/354028');
	const currentURL = page.url();
	expect(currentURL === 'http://localhost:5173/tv-shows/show/354028').toBeTruthy();
	await expect(page.locator('h2.showname')).toHaveText('Comedy Legends');
	await expect(page.locator('a.button')).toHaveText('Official Site');
});
