const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const strRows = data.split('\n');
    const dataObj = {};

    const actualRow = strRows.map((strRow) => strRow.split(','));
    const dataRow = actualRow.slice(1).filter((row) => row.length === 4);

    dataRow.forEach((row) => {
      const field = row[3];
      dataObj[field] = dataObj[field] === undefined ? [] : dataObj[field];

      dataObj[field].push(row);
    });

    console.log(`Number of students: ${dataRow.length}`);

    for (const field in dataObj) {
      if (Array.isArray(dataObj[field])) {
        const len = dataObj[field].length;
        const firstnames = dataObj[field].map((row) => row[0]).join(', ');

        console.log(`Number of students in ${field}: ${len}. List: ${firstnames}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
