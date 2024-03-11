/**
 * Create a new Int8Array of the given length
 * @param {Number} length Length of the array
 * @param {Number} position Position to set the value
 * @param {Number} value Value to set
 * @returns {DataView} New Int8Array
 * @throws {Error} If position is outside the range
 */
export default function createInt8TypedArray(length, position, value) {
  const dataView = new DataView(new ArrayBuffer(length), 0, length);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
