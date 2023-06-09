const express = require("express");
const router = express.Router();
const controller = require('../controllers/goals');
const authMiddleware = require("../middleware/auth"); 


router.get('/goals', controller.getGoals);
router.post('/goals' , controller.addGoal);
router.delete('/goals/:id', controller.deleteGoal);


module.exports= router;