const { authJwt } = require("../middlewares");
const controller = require("../controllers/dashboard.controller");
const express = require('express');
const router = express.Router();

router.get("/view", [authJwt.verifyToken], controller.getDashboard);


module.exports = router;