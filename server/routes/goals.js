const express = require("express");
const router = express.Router();
const controller = require("../controllers/goals");
const authMiddleware = require("../middleware/auth");

router.get("/goals/important" , controller.getImportant);
router.get("/goals/:id", controller.getGoals);
router.post("/goals", controller.addGoal);
router.delete("/goals/:id", controller.deleteGoal);

module.exports = router;
