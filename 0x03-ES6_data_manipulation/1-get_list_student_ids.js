export default function getListStudentIds(arrOfObj) {
  if (!Array.isArray(arrOfObj)) return [];

  const newArr = arrOfObj.map((x) => x.id);
  return newArr;
}
