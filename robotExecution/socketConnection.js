const fs = require('fs');
const { exec } = require('child_process');
const io = require('socket.io-client');
const parser = require('xml2json');
const { wasRobotRunSuccessfull } = require('../utils/statusWorker');

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
    fs.writeFile('./robotExecution/executable.robot', robotCode, (err) => {
      if (err) {
        return console.log(err);
      }
    });

    // test.robot is just used for testing purposes. Use executable.robot for the real product.
    exec('robot ./robotExecution/executable.robot', (err) => {
      const robotRunLogXml = fs.readFileSync('./output.xml', 'utf8');
      let robotRunLog = parser.toJson(robotRunLogXml);
      robotRunLog = JSON.parse(robotRunLog);

      if (wasRobotRunSuccessfull(robotRunLog)) {
        socket.emit('updatedRobotJobStatus', { jobId, status: 'successful' });
      } else {
        if (err) {
          console.error(err.message);
        }
        socket.emit('updatedRobotJobStatus', { jobId, status: 'failed' });
      }

      // delete all unnecessary files after robot execution
      exec('find . -name "*.xml" -type f|xargs rm -f');
      exec('find . -name "*.html" -type f|xargs rm -f');
      exec('find . -name "*.log" -type f|xargs rm -f');
    });
  });
};
