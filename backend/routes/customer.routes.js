const { authJwt } = require("../middlewares");
const controller = require("../controllers/customer.controller");
const express = require('express');
const router = express.Router();


  // router.get("/all", controller.allAccess);

  // router.get("/user", [authJwt.verifyToken], controller.userBoard);

  // router.get(
  //   "/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // router.get(
  //   "/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );

  router.post("/create", [authJwt.verifyToken], controller.createCustomer);
  router.get("/view", [authJwt.verifyToken], controller.viewCustomer);
  router.post("/update", [authJwt.verifyToken, authJwt.isAdmin], controller.updateCustomer);
  router.post("/delete", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteCustomer);

  module.exports = router;
