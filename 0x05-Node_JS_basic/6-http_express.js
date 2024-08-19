const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = 1245;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on port ${port} on ${host}`);
});

module.exports = app;
