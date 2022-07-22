import puppeteer from "puppeteer";

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

test("Page loads", async () => {
  if (page === undefined) {
    fail();
  }
  const root = await page.$("#root");
  expect(root).not.toBeNull();
});

afterAll(async () => await browser?.close?.());
