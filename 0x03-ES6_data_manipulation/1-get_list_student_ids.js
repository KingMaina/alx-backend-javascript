/**
 * Get the list of student ids
 * @param {Array} studentList Students array
 * @returns {Array} List of student ids, otherwise an empty array []
 */
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) return [];
  return studentList.map((student) => student.id);
}
