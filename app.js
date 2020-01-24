const express = require('express');
const Path = require('path');

const app = express();

app.use(express.static('src'));

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/src/index.html`);
});

const server = app.listen(3001, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
