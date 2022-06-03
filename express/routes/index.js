function mountRoutes(express) {
  // const router = require("./router");
  const productsRouter = require("./products/router");
  const shippingcostsRouter = require("./shippingcosts/router");
  const couponsRouter = require("./coupons/router");

  const basePath = "/";

  // express.use(basePath, router);
  express.use(`${basePath}products`, productsRouter);
  express.use(`${basePath}shippingcosts`, shippingcostsRouter);
  express.use(`${basePath}coupons`, couponsRouter);
}

module.exports = {
  mountRoutes
}

