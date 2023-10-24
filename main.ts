import { type Page, puppeteer } from "auto-book/deps.ts";
import { type Env, mustEnv } from "auto-book/lib/env/mod.ts";
import { $, URLs } from "auto-book/lib/booking/mod.ts";

if (import.meta.main) {
  await main();
}

async function main() {
  const env = await mustEnv();
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await login(page, env);
  // TODO: Check if max bookings reached.
  await book(page, env);
  // TODO: Complete booking.
  // await browser.close();
}

async function login(page: Page, env: Env) {
  await page.goto(URLs.login);
  await page.waitForSelector($.login.username);
  await page.type($.login.username, env.CSUF_USERNAME);
  await page.type($.login.password, env.CSUF_PASSWORD);
  await page.click($.login.submit);
  await page.waitForNavigation();
}

async function book(page: Page, env: Env) {
  await page.waitForSelector($.book.numberOfStudents);
  await page.type($.book.numberOfStudents, env.NUMBER_OF_STUDENTS);
  await page.type($.book.additionalValidCWID, env.CWID);
  // TODO: Complete booking.
  // TODO: Determine date and time for booking.
  // await page.type($.book.date, );
  // await page.select($.book.time, );
}
