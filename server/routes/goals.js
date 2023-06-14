const express = require("express");
const router = express.Router();
const controller = require("../controllers/goals");
const authMiddleware = require("../middleware/auth");

router.get("/goals/important/:id", controller.getImportant);
router.get("/goals/:id", controller.getGoals);
router.post("/goals", controller.addGoal);
router.delete("/goals/:id", controller.deleteGoal);
router.put("/completed", controller.updateCompleted);

module.exports = router;
