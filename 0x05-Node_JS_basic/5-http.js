const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];
const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(path, true).then(
      (arr) => res.write(arr.join('\n')),
      (err) => res.write(err.message),
    );
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
