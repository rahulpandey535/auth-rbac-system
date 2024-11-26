const express = require("express");
const { getUserData } = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const router = express.Router();

router.get("/admin", authenticate, authorizeRoles("Admin"), getUserData);
router.get("/moderator", authenticate, authorizeRoles("Moderator"), getUserData);

module.exports = router;
