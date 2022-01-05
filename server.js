const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
  path: './config.env',
});

const app = require('./app');

const DB = process.env.DB_URL.replace(
  '<username>',
  process.env.DB_USER
).replace('<password>', process.env.DB_PASSWORD);

const server = http.createServer(app);

const PORT = process.env.PORT;

async function startServer() {
  await mongoose.connect(DB);
  server.listen(PORT, () => console.log('Server is ready'));
}

startServer();
