const { authJwt } = require("../middlewares");
const controller = require("../controllers/job.controller");
const express = require('express');
const router = express.Router();

router.post("/create", [authJwt.verifyToken], controller.createJob);
router.get("/view", [authJwt.verifyToken], controller.viewJob);
router.get("/view/all", [authJwt.verifyToken], controller.viewAllJob);
router.post("/update", [authJwt.verifyToken, authJwt.isAdmin], controller.updateJob);
router.post("/delete", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteJob);
router.get("/filter", [authJwt.verifyToken], controller.filterJob);


module.exports = router;