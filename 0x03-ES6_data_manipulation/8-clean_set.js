/**
 * Removes the prefix from the strings in the set
 * @param {Set} set Set of strings
 * @param {string} startString Prefix to remove
 * @returns {string} New string with the prefix removed
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (typeof startString !== 'string' || !startString) return '';
  let newString = '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newString += value.slice(startString.length);
      newString += '-';
    }
  });
  if (newString[newString.length - 1] === '-') {
    return newString.slice(undefined, -1);
  }
  return newString;
}
