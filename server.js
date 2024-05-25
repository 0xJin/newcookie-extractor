const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/get-cookies', (req, res) => {
  const options = {
    url: 'https://translate.google.com/',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      return res.status(500).send('Error fetching cookies');
    }
    res.send(response.headers['set-cookie']);
  });
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
