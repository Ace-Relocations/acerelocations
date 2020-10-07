const { authJwt } = require("../middlewares");
const controller = require("../controllers/expense.controller");
const express = require('express');
const router = express.Router();

router.post("/create", [authJwt.verifyToken], controller.createExpense);
router.get("/view", [authJwt.verifyToken], controller.getExpense);
router.post("/update", [authJwt.verifyToken], controller.updateExpense);


module.exports = router;