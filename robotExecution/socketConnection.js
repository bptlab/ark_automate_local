const fs = require('fs');
const exec = require('child_process').exec;
const io = require('socket.io-client');

exports.connectWithSocket = (configurationData) => {
  // socket stuff
  const { userId } = configurationData;
  const socket = io('http://localhost:5001');

  socket.on('connect', () => {
    console.log('Connected as client with socket: ', socket.id);
    console.log('\n');
    console.log('################ UPDATES ###############');
    console.log('\n');
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

  socket.on('robotExecution', ({ robotCode, jobId }) => {
    //console.log('newRobot: ', robotCode);
    fs.writeFile(
      './robotExecution/executable.robot',
      robotCode,
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
    exec('robot ./robotExecution/test.robot', (err) => {
      if (err) {
        console.log(err.message);
        socket.emit('updatedRobotJob', { jobId, status: 'failed' });
      }
      exec('find . -name "*.xml" -type f|xargs rm -f');
      exec('find . -name "*.html" -type f|xargs rm -f');
      exec('find . -name "*.log" -type f|xargs rm -f');
      socket.emit('updatedRobotJob', { jobId, status: 'success' });
    });
  });
};
