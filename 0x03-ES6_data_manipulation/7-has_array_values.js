/**
 * Check if the set has the values from the array
 * @param {Set} set Set of values
 * @param {Array} array Array of values
 * @returns {Boolean} True if all values are present, otherwise false
 */
export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) return false;
  if (!Array.isArray(array)) return false;
  for (const element of array) {
    if (!set.has(element)) return false;
  }
  return true;
}
