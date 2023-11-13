import { load } from "autobook/deps.ts";
import { autobook } from "autobook/lib/autobook/mod.ts";

if (import.meta.main) {
  await load({ export: true });
  await main();
}

async function main() {
  const username = Deno.env.get("CSUF_USERNAME");
  if (!username) {
    throw new Error("CSUF_USERNAME is not set.");
  }

  const password = Deno.env.get("CSUF_PASSWORD");
  if (!password) {
    throw new Error("CSUF_PASSWORD is not set.");
  }

  const additionalValidCWID = Deno.env.get("CSUF_CWID");
  if (!additionalValidCWID) {
    throw new Error("CSUF_CWID is not set.");
  }

  const numberOfStudentsString = Deno.env.get("CSUF_NUMBER_OF_STUDENTS");
  if (!numberOfStudentsString) {
    throw new Error("CSUF_NUMBER_OF_STUDENTS is not set.");
  }

  const numberOfStudents = parseInt(numberOfStudentsString);
  await autobook({
    username,
    password,
    additionalValidCWID,
    numberOfStudents,
  });
}
