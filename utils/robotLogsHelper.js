const fs = require('fs');

/**
 * @description Reads the robotLogs.json file ans returns the json object
 * @return {Object} current robotLogs json object
 */
exports.getRobotLogs = () => {
  return fs.readFileSync('./robotMonitoring/robotLogs.json', (err, data) => {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
};
