const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1><script>alert("XSS Attack!")</script>');
});

app.listen(port, () => {
  console.log(`Malicious app listening at http://localhost:${port}`);
});
