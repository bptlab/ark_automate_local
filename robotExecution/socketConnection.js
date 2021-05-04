const fs = require('fs');
const chokidar = require('chokidar');
const exec = require('child_process').exec;
const io = require('socket.io-client');
const { getRobotLogs } = require('../utils/robotLogsHelper');

/**
 * @description Connects client with the server by using a socket. Also joins the respective room for the given userId
 * @param {Object} configurationData Json object that contains the userId
 */
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
    fs.writeFile(
      './robotExecution/executable.robot',
      robotCode,
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
    // test.robot is just used for testing purposes. Use executable.robot for the real product.
    exec(
      'robot --listener ./robotMonitoring/LiveLogsListener.py ./robotExecution/executable.robot',
      (err) => {
        if (err) {
          console.log(err.message);
        }
        // delete all unnecessary files after robot execution
        exec('find . -name "*.xml" -type f|xargs rm -f');
        exec('find . -name "*.html" -type f|xargs rm -f');
        exec('find . -name "*.log" -type f|xargs rm -f');
      }
    );
    const watcher = chokidar.watch('./robotMonitoring/robotLogs.json');
    watcher.on('change', () => {
      let robotLogs = getRobotLogs();
      while (true) {
        try {
          robotLogs = JSON.parse(robotLogs);
          break;
        } catch (error) {
          robotLogs = getRobotLogs();
          continue;
        }
      }
      socket.emit('updatedRobotJob', { jobId, robotLogs });
    });
  });
};
