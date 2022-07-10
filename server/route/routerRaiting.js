const express = require("express");
const router = express.Router();
const controllerRaiting = require("../controller/controllerRating")

router.use("/:id",controllerRaiting.validationUrl)
router.get("/:id", controllerRaiting.getRaiting);
router.post("/:id", controllerRaiting.addRaititng);

module.exports = router; 