const { wasRobotRunSuccessful } = require('./statusWorker');
const { failingRobotRun, passingRobotRun } = require('./testData');

describe('entire robot run status', () => {
  it('classifies a passed suite as passing', () => {
    expect(wasRobotRunSuccessful(passingRobotRun)).toBe(true);
  });
  it('classifies a failed suite as failing', () => {
    expect(wasRobotRunSuccessful(failingRobotRun)).toBe(false);
  });
});
