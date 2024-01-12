export default function cleanSet(set, startString) {
  const newArr = Array.from(set)
    .filter((x) => startString && x.startsWith(startString))
    .map((x) => x.slice(startString.length));
  return newArr.join('-');
}
