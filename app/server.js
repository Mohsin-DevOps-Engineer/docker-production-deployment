const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Docker Production Deployment Successful');
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
