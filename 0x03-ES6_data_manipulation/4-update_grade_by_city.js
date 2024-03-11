/**
 * Update the student grade by city
 * @param {Array} students Students array
 * @param {string} city city a student belongs to
 * @param {Array} newGrades Latest grades for each student as per their ID
 * @returns {Array} Students with updated grade from a given city, otherwise an empty array []
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  if (typeof city !== 'string') return [];
  if (!Array.isArray(newGrades)) return [];

  return students.map((student) => {
    const newStudent = { ...student };
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (newGrade.length > 0) {
      newStudent.grade = newGrade[0].grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  }).filter((student) => student.location === city);
}
