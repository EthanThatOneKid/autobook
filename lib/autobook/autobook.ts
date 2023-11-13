import { launch, type Page } from "autobook/deps.ts";
import { selectors, urls } from "./constants.ts";

/**
 * AutobookOptions are the options of the autobook operation.
 */
export interface AutobookOptions {
  /**
   * username is the username of the user.
   */
  username: string;

  /**
   * password is the password of the user.
   */
  password: string;

  /**
   * numberOfStudents is the number of students to book.
   */
  numberOfStudents: number;

  /**
   * additionalValidCWID is the required additional valid CWID to book
   */
  additionalValidCWID: string;
}

/**
 * autobook books a study room.
 */
export async function autobook(options: AutobookOptions) {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(urls.login);
  await page.waitForSelector(selectors.login.username);
  await login(page, {
    usernameSelector: selectors.login.username,
    passwordSelector: selectors.login.password,
    submitSelector: selectors.login.submit,
    usernameValue: options.username,
    passwordValue: options.password,
  });
  await page.waitForNavigation();
  await Deno.writeFile("./screenshot.png", await page.screenshot());

  // TODO: Check if max bookings reached.
  // await book(page, env).catch(console.error);
  // TODO: Complete booking.
  // await browser.close();
}

interface LoginEvaluateOptions {
  usernameSelector: string;
  passwordSelector: string;
  submitSelector: string;
  usernameValue: string;
  passwordValue: string;
}

async function login(page: Page, options: LoginEvaluateOptions) {
  await page.evaluate((options) => {
    const usernameInput = document.querySelector<HTMLInputElement>(
      options.usernameSelector,
    );
    if (!usernameInput) {
      throw new Error("Username input not found.");
    }

    const passwordInput = document.querySelector<HTMLInputElement>(
      options.passwordSelector,
    );
    if (!passwordInput) {
      throw new Error("Password input not found.");
    }

    const submitButton = document.querySelector<HTMLButtonElement>(
      options.submitSelector,
    );
    if (!submitButton) {
      throw new Error("Submit button not found.");
    }

    usernameInput.value = options.usernameValue;
    passwordInput.value = options.passwordValue;
    submitButton.click();
  }, { args: [options] });
}
