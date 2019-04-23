/**
 * Sanitize user input
 * @function sanitize
 * @param {string} strInput
 * @returns {string}
 */
export function sanitize(artistName) {
  const strSanitized = artistName
    .replace("/", "%252F")
    .replace("?", "%253F")
    .replace("*", "%252A")
    .replace('"', "%27C");

  return strSanitized;
}
