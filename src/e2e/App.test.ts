import puppeteer from 'puppeteer';
import * as expectPage from 'expect-puppeteer';

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: true,
	});
	page = await browser.newPage();
	await page.goto('http://localhost:3000');
});

test('Prompt to login visible', async () => {
	if (page === undefined) {
		fail();
	}
	await expectPage.default(page).toMatch('please enter username and password');
});

test('Redirects to logging page', async () => {
	if (page === undefined) {
		fail();
	}
	const url = page.url();
	expect(url).toMatch('login');
});

test('Login redirects to personal dashboard', async () => {
	if (page === undefined) {
		fail();
	}

	await page.type('#username', 'diegomouradev');
	await page.type('#password', 'niceTestPass123!');
	await page.click('input[type="submit"]');
	await page.waitForNavigation();

	await expectPage.default(page).toMatch('Hello Diego Moura Dev!');
});

afterAll(async () => await browser?.close?.());
