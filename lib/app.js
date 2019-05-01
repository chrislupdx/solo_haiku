const express = require('express');
const app = express();
const mongoConnection = require('./utils/connect');

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

module.exports = app;
