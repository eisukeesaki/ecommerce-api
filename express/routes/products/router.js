// const productsRouter = new (require("express-promise-router"))();
const Router = require("express-promise-router");
const productsController = require("./controller");

const productsRouter = new Router();

productsRouter.get("/", productsController.getAll)

module.exports = productsRouter;

