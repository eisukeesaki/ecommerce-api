function mountRoutes(express) {
  // const router = require("./router");
  const productsRouter = require("./products/router");

  const basePath = "/";

  // express.use(basePath, router);
  express.use(`${basePath}products`, productsRouter);
}

module.exports = {
  mountRoutes
}

