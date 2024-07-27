const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('GET /', () => {
  it('should return a status code of 200', (done) => {
    request.get(`${baseUrl}/`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
