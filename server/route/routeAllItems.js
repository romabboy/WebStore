const express = require("express");
const router = express.Router();
const controllerAllItems = require("../controller/controllerAllItems");

router.get("/", controllerAllItems.getAll);
router.get("/sales-hits",controllerAllItems.getSalesHits);
router.get("/:type", controllerAllItems.getTypeItems);
router.get("/:type/filter", controllerAllItems.filterItems);
router.get("/:type/:id", controllerAllItems.getOneItems);
router.post("/:type/filterItems",controllerAllItems.getItemsWithFilter);
router.use("/:type/:id", controllerAllItems.validationUrl)
router.post("/", controllerAllItems.createItem);
router.put("/:type/:id", controllerAllItems.updateItems);
router.delete("/:type/:id", controllerAllItems.deleteItems);



module.exports = router;