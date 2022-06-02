const indexRouter = require("express").Router();
const indexController = require("./index.controller");

indexRouter.get("/", indexController.sendUI);

module.exports = indexRouter;

