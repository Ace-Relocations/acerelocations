const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");


router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  controller.signup
);

router.post("/signin", controller.signin);
router.post("/logout", [authJwt.verifyToken], controller.logout);
router.post("/verify", controller.verify);
router.post("/verifyOTP", controller.verifyOTP);

module.exports = router;
