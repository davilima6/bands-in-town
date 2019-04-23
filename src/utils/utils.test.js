import { strFormat, strSanitize } from "./utils";

describe("utils", () => {
  test("sanitizes a string input correctly", () => {
    const strInput = '/?*"';
    const expected = "%252F%253F%252A%27C";

    const value = strSanitize(strInput);

    expect(value).toEqual(expected);
  });

  test("formats a sanitized string as human readable output (reverts sanitization)", () => {
    const strInput = "%252F%253F%252A%27C";
    const expected = '/?*"';

    const value = strFormat(strInput);

    expect(value).toEqual(expected);
  });
});
