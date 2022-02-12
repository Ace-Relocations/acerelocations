const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
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

router.post("/create", [authJwt.verifyToken], controller.createUser);
router.get("/view", [authJwt.verifyToken], controller.viewUser);
router.get("/view/all", [authJwt.verifyToken], controller.viewAllUser);
router.post("/update", [authJwt.verifyToken], controller.updateUser);
router.post("/delete", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteUser);
router.get("/filter", [authJwt.verifyToken], controller.filterUser);

module.exports = router;
