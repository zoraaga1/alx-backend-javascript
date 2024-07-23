const express = require('express');

const app = express();

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or further use
module.exports = app;
