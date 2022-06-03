const productsRouter = new (require("express-promise-router"))();
const productsController = require("./controller");

productsRouter.get("/", productsController.getAll)

module.exports = productsRouter;

