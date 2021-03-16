const fs = require('fs');
const exec = require('child_process').exec;
const io = require('socket.io-client');

const socket = io('http://localhost:5001');

socket.on('connect', () => {
  console.log('Client: ', socket.id);
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
