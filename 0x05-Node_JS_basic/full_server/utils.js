import { promises as fs } from 'fs';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });

    const strRows = data.split('\n');
    const dataObj = {};

    const actualRows = strRows.map((strRow) => strRow.split(','));
    const dataRows = actualRows.slice(1).filter((row) => row.length === 4);

    dataRows.forEach((row) => {
      const field = row[3];
      dataObj[field] = dataObj[field] === undefined ? [] : dataObj[field];

      dataObj[field].push(row[0]);
    });
    return dataObj;
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

export default readDatabase;
