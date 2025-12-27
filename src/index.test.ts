import { describe, it, expect, beforeEach } from "vitest";
import { asyncDefer, defer } from ".";
import delay from "delay";

describe("defer", () => {
  let str = "";

  beforeEach(() => {
    using a = defer(() => {
      str += " World";
    });

    using b = defer(() => {
      str += "Hello";
    });
  });

  it("works", () => {
    expect(str).toBe("Hello World");
  });
});

describe("asyncDefer", () => {
  let str = "";

  beforeEach(async () => {
    await using a = asyncDefer(async () => {
      await delay(100);
      str += " World";
    });

    await using b = asyncDefer(async () => {
      await delay(100);
      str += "Hello";
    });
  });

  it("works", () => {
    expect(str).toBe("Hello World");
  });
});
