const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// User Registration
router.post("/register", authController.registerUser);

// User Login
router.post("/login", authController.loginUser);

module.exports = router;
