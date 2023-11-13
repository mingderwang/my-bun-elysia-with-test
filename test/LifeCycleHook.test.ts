import { beforeEach, afterEach } from "bun:test";

beforeEach(() => {
  console.log("running test.");
});

afterEach(() => {
  console.log("done with test.");
});

// refer to https://bun.sh/docs/test/lifecycle
