const { wasRobotRunSuccessfull } = require('./statusWorker');
const { failingRobotRun, passingRobotRun } = require('./testData');

describe('entire robot run status', () => {
  it('classifies a passed suite as passing', () => {
    expect(wasRobotRunSuccessfull(passingRobotRun)).toBe(true);
  });
  it('classifies a failed suite as failing', () => {
    expect(wasRobotRunSuccessfull(failingRobotRun)).toBe(false);
  });
});
