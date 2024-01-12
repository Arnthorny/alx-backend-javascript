export default function getStudentsByLocation(studentsArr, location) {
  if (!Array.isArray(studentsArr)) return [];

  const newArr = studentsArr.filter((x) => x.location === location);
  return newArr;
}
