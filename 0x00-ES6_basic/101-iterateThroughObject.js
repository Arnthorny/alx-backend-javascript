export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const [idx, val] of reportWithIterator.entries()) {
    if (idx) str += ' | ';
    str += val;
  }
  return str;
}
