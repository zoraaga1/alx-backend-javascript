const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledWith('SUM', 100, 20));
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledWith('The total is: 10'));
  });
});
