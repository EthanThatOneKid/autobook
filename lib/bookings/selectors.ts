/**
 * $ contains all the selectors for auto-book.
 */
export const $ = {
  login: {
    username: "#user_name",
    password: "#user_password",
    submit: "#sysverb_login",
  },
  booking: {
    // numberOfStudents: "input:not([type]):nth-child(2)",
    // additionalValidCWID: "input:not([type]):nth-child(3)",
    // date: "input[type=text]:nth-child(1)",
    // time: "select:nth-child(1)",
    // shortDescription: "input[maxlength='4000']",
    // submit: "#submit_button",
    numberOfStudents:
      "body > div:nth-of-type(3) > div > div:nth-of-type(4) > table > tbody > tr > td:nth-of-type(1) > table:nth-of-type(2) > tbody > tr > td > table > tbody > tr:nth-of-type(3) > td > span > div > table > tbody > tr:nth-of-type(1) > td > div > div > div:nth-of-type(2) > input:nth-of-type(2)",
    additionalValidCWID: ".form-control:nth-child(3)",
  },
} as const;
