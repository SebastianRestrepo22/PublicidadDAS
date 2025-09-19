const express = require("express");
const router = express.Router();
const controller = require("../controllers/insumos.controller");

router.get("/", controller.getAllinsumos);

module.exports = router;
