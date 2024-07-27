const express = require('express');
const app = express();
const port = 7865;

// Endpoint for root
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for cart with validation
app.get('/cart/:id', (req, res) => {
  const cartId = parseInt(req.params.id, 10);

  if (isNaN(cartId)) {
    return res.status(404).send('Cart ID must be a number');
  }

  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
