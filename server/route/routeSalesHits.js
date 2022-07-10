const express = require("express");
const router = express.Router();
const controllerSalesHits = require("../controller/controllerSalesHits")


router.get("/", controllerSalesHits.getAll);
router.post("/", controllerSalesHits.createItem)
router.put("/:id", controllerSalesHits.updateItems)
router.delete("/:id", controllerSalesHits.deleteItems)
router.get("/:id", controllerSalesHits.getOneItems)

module.exports = router;