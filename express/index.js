const Express = require("express");
const morgan = require("morgan");
// const logMiddlewareStack = require(`${__rootDir}/dev_utils/loggers/middleware-stack`);
const path = require("path");
const { mountRoutes } = require("./routes");

const express = Express();

express.use(morgan("dev"));
express.use(Express.static(path.join(__rootDir, "/ui")));

mountRoutes(express);

module.exports = express;

