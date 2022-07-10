const express = require("express");
const router = express.Router();
const controllerAdmin = require("../controller/controllerAdmin")

router.post("/", controllerAdmin.verefication);

module.exports = router;