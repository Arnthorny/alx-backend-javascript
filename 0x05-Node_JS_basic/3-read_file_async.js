const fs = require('fs').promises;

/* eslint-disable consistent-return */
async function countStudents(path, returnRes = false) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });

    const strRows = data.split('\n');
    const dataObj = {};

    const actualRows = strRows.map((strRow) => strRow.split(','));
    const dataRows = actualRows.slice(1).filter((row) => row.length === 4);

    dataRows.forEach((row) => {
      const field = row[3];
      dataObj[field] = dataObj[field] === undefined ? [] : dataObj[field];

      dataObj[field].push(row);
    });

    const retArr = [];
    let tmpStr = `Number of students: ${dataRows.length}`;
    if (returnRes) retArr.push(tmpStr);
    else console.log(tmpStr);

    for (const field in dataObj) {
      if (Array.isArray(dataObj[field])) {
        const len = dataObj[field].length;
        const firstnames = dataObj[field].map((row) => row[0]).join(', ');

        tmpStr = `Number of students in ${field}: ${len}. List: ${firstnames}`;
        if (returnRes) retArr.push(tmpStr);
        else console.log(tmpStr);
      }
    }
    return retArr;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
