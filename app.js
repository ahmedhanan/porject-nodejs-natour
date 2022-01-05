const express = require('express');

const toursRouter = require('./src/routes/tours.routes');

const app = express();

app.use(express.json());

const API = process.env.API_VER;

app.use(`${API}+tours`, toursRouter);

module.exports = app;
