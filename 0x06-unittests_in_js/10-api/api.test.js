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

describe('GET /available_payments', () => {
  it('should return a status code of 200', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      if (error) return done(error);
      const parsedBody = JSON.parse(body);
      expect(parsedBody.payment_methods).to.deep.equal({
        credit_cards: true,
        paypal: false
      });
      done();
    });
  });
});

describe('POST /login', () => {
  it('should return a status code of 200 when username is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'Alice' }
    }, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct welcome message when username is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'Alice' }
    }, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome Alice');
      done();
    });
  });

  it('should return a status code of 400 when username is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  it('should return the correct error message when username is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Missing username');
      done();
    });
  });
});
