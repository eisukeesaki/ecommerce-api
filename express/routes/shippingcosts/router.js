const shippingcostsRouter = new (require("express-promise-router"))();
const shippingcostsController = require("./controller");

shippingcostsRouter.get("/", shippingcostsController.getVancouver);

module.exports = shippingcostsRouter;

