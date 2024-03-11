/**
 * Get the students by location
 * @param {Array} studentList Students array
 * @param {string} city City name
 * @returns {Array} Students from the given city, otherwise an empty array []
 */
export default function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) return [];
  if (typeof city !== 'string') return [];
  return studentList.filter((student) => student.location === city);
}
