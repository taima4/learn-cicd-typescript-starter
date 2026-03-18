import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../src/api/auth.js";

describe("getAPIKey", () => {
  test("should return the API key when Authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey correct-key-123"
    };
    expect(getAPIKey(headers)).toBe("correct-key-123");
  });

  test("should throw an error if no Authorization header is present", () => {
    const headers = {};
    expect(() => getAPIKey(headers)).toThrow();
  });

  test("should throw an error if Authorization header is malformed", () => {
    const headers = {
      authorization: "NotApiKey some-value"
    };
    expect(() => getAPIKey(headers)).toThrow();
  });
});