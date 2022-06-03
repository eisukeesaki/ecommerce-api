const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.sendUI);

module.exports = router;

