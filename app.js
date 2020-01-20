const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send({ hello: 'World' });
});

const server = app.listen(3001, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
