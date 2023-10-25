import { chromium } from "playwright";
import { $, URLs } from "auto-book/lib/bookings";
import "dotenv/config";

await main();

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await login(page, env).catch(console.error);
  // TODO: Check if max bookings reached.
  await book(page, env).catch(console.error);
  // TODO: Complete booking.
  // await browser.close();
}

// async function login(page: Page, env: Env) {
//   await page.goto(URLs.login);
//   await page.waitForSelector($.login.username);
//   await page.type($.login.username, env.CSUF_USERNAME);
//   await page.type($.login.password, env.CSUF_PASSWORD);
//   await page.click($.login.submit);
//   await page.waitForNavigation({ waitUntil: "load" });
//   // await delay(3 * SECOND);
// }

// async function book(page: Page, env: Env) {
//   // await page.waitForSelector($.booking.numberOfStudents);
//   await page
//     .type($.booking.numberOfStudents, env.NUMBER_OF_STUDENTS)
//     .catch(console.error);
//   await page.type($.booking.additionalValidCWID, env.CWID).catch(console.error);
//   // TODO: Complete booking.
//   // TODO: Determine date and time for booking.
//   // await page.type($.book.date, );
//   // await page.select($.book.time, );
// }
