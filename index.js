const fs = require('fs');
const exec = require('child_process').exec;
const io = require('socket.io-client');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const userId = '80625d115100a2ee8d8e695b';
let userId = '';

// user and client management

const getUserId = () => {
  if (userId !== '') {
    console.log(`Starting Client...`);
  } else {
    readline.question(`Please enter your userId: `, (enteredUserId) => {
      console.log('\n');
      console.log(`UserId successfully entered!`);
      userId = String(enteredUserId);
      readline.close();
      console.log('\n');
      console.log('################ SOCKET CONNECTION ###############');
      console.log('\n');

      // socket stuff

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
    });
  }
};

// user input

const printLogo = () => {
  console.log('\n');
  console.log(
    ' █████╗ ██████╗ ██╗  ██╗     █████╗ ██╗   ██╗████████╗ ██████╗ ███╗   ███╗ █████╗ ████████╗███████╗'
  );
  console.log(
    '██╔══██╗██╔══██╗██║ ██╔╝    ██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗████╗ ████║██╔══██╗╚══██╔══╝██╔════╝'
  );
  console.log(
    '███████║██████╔╝█████╔╝     ███████║██║   ██║   ██║   ██║   ██║██╔████╔██║███████║   ██║   █████╗'
  );
  console.log(
    '██╔══██║██╔══██╗██╔═██╗     ██╔══██║██║   ██║   ██║   ██║   ██║██║╚██╔╝██║██╔══██║   ██║   ██╔══╝'
  );
  console.log(
    '██║  ██║██║  ██║██║  ██╗    ██║  ██║╚██████╔╝   ██║   ╚██████╔╝██║ ╚═╝ ██║██║  ██║   ██║   ███████╗'
  );
  console.log(
    '╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝'
  );
  console.log('\n');
};

printLogo();
getUserId();
