/**
 * @description Evaluates if robot run has been successfull or not. See http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-status for the possible suite statuses.
 * @param {Object} robotRunLog Json object that contains the robot run log
 */
exports.wasRobotRunSuccessfull = (robotRunLog) => {
  if (robotRunLog.robot.suite.test.status.status === 'PASS') {
    return true;
  }
  return false;
};
