export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  for (const value of arrayCopy) {
    const index = arrayCopy.indexOf(value);
    arrayCopy[index] = `${appendString}${value}`;
  }

  return arrayCopy;
}
