const fs = require('fs');
const chokidar = require('chokidar');
const exec = require('child_process').exec;
const io = require('socket.io-client');

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
      'robot --listener LiveLogsListener.py ./robotExecution/DanielTest2.robot',
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
    const watcher = chokidar.watch('./robotLogs.json');
    watcher.on('change', () => {
      console.log('File was changed!');

      let robotLogs = fs.readFileSync('./robotLogs.json', (err, data) => {
        if (err) {
          throw err;
        } else {
          return data;
        }
      });
      let logParsingFails = true;
      let parsedData = '';
      while (logParsingFails) {
        try {
          console.log('TRYING IT AGAIN');
          parsedData = JSON.parse(robotLogs);
          console.log(parsedData);
          logParsingFails = false;
          break;
        } catch (e) {
          console.log('CATCHED ERROR');
          robotLogs = fs.readFileSync('./robotLogs.json', (err, data) => {
            if (err) {
              throw err;
            } else {
              return data;
            }
          });
          continue;
        }
      }
      console.log(jobId, 'JOBID');
      socket.emit('updatedRobotJob', { jobId, robotLogs: parsedData });
    });
  });
};
