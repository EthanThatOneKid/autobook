import { launch } from "autobook/deps.ts";

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
export function autobook(options: AutobookOptions) {
  console.log(options);
}
