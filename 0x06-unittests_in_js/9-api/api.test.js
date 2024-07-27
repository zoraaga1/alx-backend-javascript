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

describe('GET /cart/:id', () => {
  it('should return a status code of 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a status code of 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the correct error message when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/abc`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Cart ID must be a number');
      done();
    });
  });
});
