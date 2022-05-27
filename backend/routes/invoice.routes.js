const { authJwt } = require("../middlewares");
const controller = require("../controllers/invoice.controller");
const express = require('express');
const router = express.Router();

router.post("/create", [authJwt.verifyToken], controller.createInvoice);
router.get("/view", [authJwt.verifyToken], controller.getInvoice);
router.post("/update", [authJwt.verifyToken, authJwt.isAdmin], controller.updateInvoice);
router.post("/delete", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteInvoice);
router.post("/update/billno", controller.setBillno);

module.exports = router;
