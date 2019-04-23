import { sanitize } from "./utils";

describe("StorageService", () => {
  test("performs defined substitutions correctly", () => {
    const userInput = '/?*"';
    const expected = "%252F%253F%252A%27C";

    const value = sanitize(userInput);

    expect(value).toEqual(expected);
  });
});
