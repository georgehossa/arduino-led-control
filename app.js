const express = require('express');
const Path = require('path');

const app = express();

const io = require('socket.io')(app.listen(8081));

app.use(express.static('src'));

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/src/index.html`);
});

io.on('conection', function(socket) {
  socket.on('green', function() {
    console.log('Green checkbox active');
  });
});

const server = app.listen(3001, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
