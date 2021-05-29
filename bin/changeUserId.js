#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const config = require('../config.json');
const { printLogo } = require('../utils/printLogo');

/**
 * @description Changes the userId
 */
const changeUserId = () => {
  readline.question(`Please enter a userId: `, (enteredUserId) => {
    const configurationData = {
      userId: enteredUserId,
    };
    const newConfig = JSON.stringify(configurationData);
    console.log('\n');
    const { userId } = config;
    const oldUserId = userId;
    fs.writeFile('./config.json', newConfig, (err) => {
      if (err) {
        console.log('There has been an error changing your userId.');
        console.log(err.message);
        return;
      }
      console.log(
        `UserId successfully changed from ${oldUserId} to ${enteredUserId}`
      );
    });
    readline.close();
  });
};

printLogo();
changeUserId();
