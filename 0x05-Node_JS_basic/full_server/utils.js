import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else if (data) {
        const strRows = String(data).split('\n');
        const dataObj = {};
        const actualRows = strRows.map((strRow) => strRow.split(','));
        const dataRows = actualRows.slice(1).filter((row) => row.length === 4);

        dataRows.forEach((row) => {
          const field = row[3];
          dataObj[field] = dataObj[field] === undefined ? [] : dataObj[field];

          dataObj[field].push(row[0]);
        });

        resolve(dataObj);
      }
    });
  });
}

export default readDatabase;
