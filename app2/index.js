const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.send('Hello from App2 - Node.js!');
});

app.listen(port, () => {
  console.log(`App2 running on http://localhost:${port}`);
});
