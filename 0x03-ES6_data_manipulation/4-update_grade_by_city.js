export default function updateStudentGradeByCity(studentsArr, city, newGrades) {
  if (!Array.isArray(studentsArr)) return [];

  const studentByCity = studentsArr.filter((x) => x.location === city);
  const newStudentsArr = studentByCity.map((student) => {
    const newGradeArr = newGrades.filter((x) => x.studentId === student.id);
    const newGrade = (newGradeArr[0] && newGradeArr[0].grade) || 'N/A';

    /* eslint-disable no-param-reassign */
    student.grade = newGrade;
    return student;
  });

  return newStudentsArr;
}
