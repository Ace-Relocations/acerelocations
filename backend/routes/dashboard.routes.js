const { authJwt } = require("../middlewares");
const controller = require("../controllers/dashboard.controller");
const express = require('express');
const router = express.Router();

router.get("/view", [authJwt.verifyToken], controller.getDashboard);
router.get("/insight/expense", [authJwt.verifyToken], controller.getExpenseInsight);
router.get("/insight/invoice", [authJwt.verifyToken], controller.getInvoiceInsight);

module.exports = router;