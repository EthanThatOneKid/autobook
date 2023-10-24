import { load } from "auto-book/deps.ts";

/**
 * mustEnv reads the required environment variables.
 */
export async function mustEnv() {
  const loadedEnv = await load();
  const resultEnv = {
    // Login credentials.
    CSUF_USERNAME: loadedEnv.CSUF_USERNAME,
    CSUF_PASSWORD: loadedEnv.CSUF_PASSWORD,
    // Number of students (1-14).
    NUMBER_OF_STUDENTS: loadedEnv.NUMBER_OF_STUDENTS,
    // Additional Valid campus-wide ID (CWID).
    // More information: Get CWID from your study buddy.
    CWID: loadedEnv.CWID,
  };
  for (const [key, value] of Object.entries(resultEnv)) {
    if (value === undefined) {
      throw new Error(`Environment variable ${key} is not set.`);
    }
  }

  return resultEnv;
}

/**
 * Env represents the type of the environment variables map.
 */
export type Env = ReturnType<typeof mustEnv> extends Promise<infer T> ? T
  : never;
