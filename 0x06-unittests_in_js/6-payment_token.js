// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject(new Error('Failure case for testing purposes'));
    }
  });
}

module.exports = { getPaymentTokenFromAPI };
