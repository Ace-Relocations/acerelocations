const { authJwt } = require("../middlewares");
const controller = require("../controllers/barcode.controller");
const express = require('express');
const router = express.Router();

router.post("/create", [authJwt.verifyToken], controller.createBarcode);
router.get("/view", [authJwt.verifyToken], controller.viewBarcode);
router.get("/view/all", [authJwt.verifyToken], controller.viewAllBarcode);
router.post("/update", [authJwt.verifyToken, authJwt.isAdmin], controller.updateBarcode);
router.post("/delete", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteBarcode);
router.get("/filter", [authJwt.verifyToken], controller.filterBarcode);


module.exports = router;