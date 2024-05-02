const fs = require('fs').promises;

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

    let retStr = returnRes ? 'This is the list of our students\n' : '';

    retStr += `Number of students: ${dataRows.length}\n`;

    for (const field in dataObj) {
      if (Array.isArray(dataObj[field])) {
        const len = dataObj[field].length;
        const firstnames = dataObj[field].map((row) => row[0]).join(', ');

        retStr += `Number of students in ${field}: ${len}. List: ${firstnames}\n`;
      }
    }
    retStr = retStr.trimRight();
    if (!returnRes) console.log(retStr);
    return retStr;
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
