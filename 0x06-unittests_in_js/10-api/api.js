const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

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

// Endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing username');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
