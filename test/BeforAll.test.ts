import { test, expect, beforeAll, setSystemTime } from "bun:test";

beforeAll(() => {
  const date = new Date("1999-01-01T00:00:00.000Z");
  setSystemTime(date); // it's now January 1, 1999

// setSystemTime(); // reset to actual time
});

// refer to https://bun.sh/guides/test/mock-clock
