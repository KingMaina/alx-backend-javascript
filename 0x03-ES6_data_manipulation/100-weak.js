export const weakMap = new WeakMap();

/**
 * Throttles a fake API call usiing a WeakMap
 * @param {Object} endpoint - object with protocol and URI
 */
export function queryAPI(endpoint) {
  const timesAPIQueried = weakMap.get(endpoint);
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    const timesAPIQueried = weakMap.get(endpoint);
    weakMap.set(endpoint, timesAPIQueried + 1);
  }
}
