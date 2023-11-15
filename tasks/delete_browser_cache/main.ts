import { cleanCache } from "autobook/deps.ts";

if (import.meta.main) {
  await cleanCache();
}
