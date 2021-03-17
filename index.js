const fs = require('fs');
const exec = require('child_process').exec;
const io = require('socket.io-client');

const socket = io('http://localhost:5001');
const userId = '80625d115100a2ee8d8e695b';

socket.on('connect', () => {
  console.log('Client: ', socket.id);
  socket.emit('joinUserRoom', userId);
});

socket.on('successUserRoomConnection', (message) => {
  console.log(message);
});
socket.on('errorUserRoomConnection', (message) => {
  console.log(message);
});
socket.on('newClientJoinedUserRoom', (message) => {
  console.log(message);
});

socket.on('robotExecution', (robotCode) => {
  //console.log('newRobot: ', robotCode);
  fs.writeFile('./executable.robot', robotCode, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
  exec('robot executable.robot');
});
