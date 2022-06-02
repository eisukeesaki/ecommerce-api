const Express = require('express');
const morgan = require('morgan');
const { mountRoutes } = require('./routes');
const express = Express();

express.use(morgan('dev'));

mountRoutes(express);

module.exports = express;

