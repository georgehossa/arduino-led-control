import './scss/main.scss';

const express = require('express');

const app = express();
// const io = require('socket.io')(app.listen(8081));
const five = require('johnny-five');

app.use(express.static(`${__dirname}/app`));

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});
