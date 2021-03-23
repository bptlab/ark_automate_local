const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const config = require('./config.json');
const { connectWithSocket } = require('./robotExecution/socketConnection');
const { printLogo } = require('./utils/printLogo');

//Test Id (Lukas) = '80625d115100a2ee8d8e695b';

/**
 * @description Starts the desktop application
 */
const startApplication = () => {
  if (config.userId !== '') {
    console.log('\n');
    console.log('################ SOCKET CONNECTION ###############');
    console.log('\n');
    connectWithSocket(config);
  } else {
    readline.question(`Please enter your userId: `, (enteredUserId) => {
      let configurationData = {
        userId: enteredUserId,
      };
      let newConfig = JSON.stringify(configurationData);

      console.log('\n');

      fs.writeFile('./config.json', newConfig, (err) => {
        if (err) {
          console.log('There has been an error saving your userId.');
          console.log(err.message);
          return;
        }
        console.log(`UserId saved successfully.`);
      });
      readline.close();

      console.log('\n');
      console.log('################ SOCKET CONNECTION ###############');
      console.log('\n');
      connectWithSocket(configurationData);
    });
  }
};

printLogo();
startApplication();
