// Define the function
function sendPaymentRequestToAPI(a, b) {
  const total = a + b;
  console.log(`The total is: ${total}`);
  return total;
}

// Export the function
module.exports = { sendPaymentRequestToAPI };
