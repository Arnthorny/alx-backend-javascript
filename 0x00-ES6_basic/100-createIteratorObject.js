export default function createIteratorObject(report) {
  const arrayIt = [];
  for (const val of Object.values(report.allEmployees)) {
    arrayIt.push(...val);
  }
  return arrayIt;
}

/*
export default function createIteratorObject(report) {
  let nxtIdx = 0;

  const iter = {
    next() {
      let result;
      if (nxtIdx < Object.values(report.allEmployees).length) {
        result = {value: Object.values(report.allEmployees)[nxtIdx], done: false};
        nxtIdx++;
        return result;
      }
      return { value: nxtIdx, done: true};
    },
  };
  return iter.next();
}
*/
