export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !(typeof startString === 'string')) return '';
  const newArr = Array.from(set)
    .filter(
      (x) => startString && typeof x === 'string' && x.startsWith(startString),
    )
    .map((x) => x.slice(startString.length));
  return newArr.join('-');
}
