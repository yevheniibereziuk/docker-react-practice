const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Bereziuk study way!');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
