const express = require(".");
const indexRouter = require("./index.router");

function mountRoutes(express) {
  const basePath = "/";

  express.use(basePath, indexRouter);
}

module.exports = {
  mountRoutes
}

