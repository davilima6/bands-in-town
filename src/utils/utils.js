const SANITIZE_MAP = {
  "/": "%252F",
  "?": "%253F",
  "*": "%252A",
  '"': "%27C"
};

/**
 * Sanitize user input
 * @function strSanitize
 * @param {string} strInput
 * @returns {string}
 */
export function strSanitize(strInput) {
  let strSanitized = strInput;

  for (const [char, sanitizedChar] of Object.entries(SANITIZE_MAP)) {
    strSanitized = strSanitized.replace(char, sanitizedChar);
  }

  return strSanitized;
}

/**
 * Format a sanitized string as human readable
 * @function strFormat
 * @param {string} strInput
 * @returns {string}
 */
export function strFormat(strInput) {
  let strFormatted = strInput;

  for (const [char, sanitizedChar] of Object.entries(SANITIZE_MAP)) {
    strFormatted = strFormatted.replace(sanitizedChar, char);
  }

  return strFormatted;
}
