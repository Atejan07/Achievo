const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const authMiddleware = require("../middleware/auth");

router.post("/register", controller.create);
router.post("/login", controller.login);
router.get("/profile", authMiddleware, controller.profile);
router.post("/logout", controller.logout);

module.exports = router;
