#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const config = require('../config.json');
const { connectWithSocket } = require('../robotExecution/socketConnection');
const { printLogo } = require('../utils/printLogo');

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
      const configurationData = {
        userId: enteredUserId,
      };
      const newConfig = JSON.stringify(configurationData);

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
