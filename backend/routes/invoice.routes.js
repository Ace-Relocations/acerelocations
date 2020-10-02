const { authJwt } = require("../middlewares");
const controller = require("../controllers/invoice.controller");
const express = require('express');
const router = express.Router();

router.post("/create", [authJwt.verifyToken], controller.createInvoice);
router.get("/view", [authJwt.verifyToken], controller.getInvoice);


module.exports = router;
