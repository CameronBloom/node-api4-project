require('dotenv').config(); // eslint-disable-line

const express = require('express'); // eslint-disable-line
const cors = require("cors"); // eslint-disable-line

const server = express();

const port = process.env.PORT || 9000; // eslint-disable-line

server.use(express.json());
server.use(cors());

server.get('/hello', (req, res) => {
  res.json('hello, there');
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});