/**
 * $ contains all the selectors for auto-book.
 */
export const $ = {
  login: {
    username: "#user_name",
    password: "#user_password",
    submit: "#sysverb_login",
  },
  book: {
    numberOfStudents: "input:not([type]):nth-child(2)",
    additionalValidCWID: "input:not([type]):nth-child(3)",
    date: "input[type=text]:nth-child(1)",
    time: "select:nth-child(1)",
    shortDescription: "input[maxlength='4000']",
    submit: "#submit_button",
  },
};
