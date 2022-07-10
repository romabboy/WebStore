const express = require("express");
const router = express.Router();
const controllerSearchItems = require("../controller/controllerSearchItems")


router.post("/", controllerSearchItems.getSearchItems);

module.exports = router;