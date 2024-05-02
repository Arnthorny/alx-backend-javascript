const express = require('express');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let data = 'This is the list of our students\n';
  await countStudents(path, true).then(
    (arr) => { data += arr.join('\n'); },
    (err) => { data += err.message; },
  );
  res.send(data);
});

const port = 1245;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on port ${port} on ${host}`);
});

module.exports = app;
