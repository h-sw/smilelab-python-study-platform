var express = require("express");
var router = express.Router();

router.use("/", require("./compile"));

module.exports = router;
