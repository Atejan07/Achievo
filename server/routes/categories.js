const controller = require("../controllers/category");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.get("/categories", controller.getCategories);
router.post("/categories", controller.addCategory);
router.delete("/categories/:id", controller.deleteCategory);

module.exports = router;
