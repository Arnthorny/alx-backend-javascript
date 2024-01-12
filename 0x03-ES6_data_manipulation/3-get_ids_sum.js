export default function getStudentIdsSum(studentsArr) {
  if (!Array.isArray(studentsArr)) return [];

  const totalId = studentsArr.reduce((x, y) => x + y.id, 0);
  return totalId;
}
