const greenSwitch = document.querySelector('.switch.green input');
const blueSwitch = document.querySelector('.switch.blue input');
const yellowSwitch = document.querySelector('.switch.yellow input');
const socket = io();

if (greenSwitch.checked) {
  socket.emmit('green');
}
