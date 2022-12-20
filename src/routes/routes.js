const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const login = require("../controllers/login");
const passport = require("passport");
router.post("/register", register.register);
router.post("/login", login.login, passport.authenticate("local"));

module.exports = router;
