const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const PORT = 7865;
const BASE_URL = `http://localhost:${PORT}`;

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(PORT, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should return a status code of 200', (done) => {
    request.get(BASE_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
