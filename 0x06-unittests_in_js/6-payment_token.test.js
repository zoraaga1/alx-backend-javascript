// 6-payment_token.test.js
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done(); // Indicate that the test is complete
      })
      .catch(done); // Pass errors to Mocha
  });

  it('should throw an error when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        // This should not be called
        done(new Error('Expected method to reject.'));
      })
      .catch(error => {
        expect(error.message).to.equal('Failure case for testing purposes');
        done(); // Indicate that the test is complete
      });
  });
});
