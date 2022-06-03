const couponsRouter = new (require("express-promise-router"))();
const couponsController = require("./controller");

couponsRouter.post("/", couponsController.isValid);

module.exports = couponsRouter;

