export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  const timesAPIQueried = weakMap.get(endpoint);
  if (!timesAPIQueried) {
    weakMap.set(endpoint, 1);
  } else if (timesAPIQueried >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, timesAPIQueried + 1);
}
