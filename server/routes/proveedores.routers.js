const express = require("express");
const router = express.Router();
const controller = require("../controllers/proveedores.controller");

router.get("/", controller.getAllProveedores);

module.exports = router;

