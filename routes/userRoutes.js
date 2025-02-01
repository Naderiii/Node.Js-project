const express = require('express');
const router = express.Router();
const {registerUser, login, current} = require("../controllers/userController");

router.post("/register").post(registerUser);
router.post("/login").post(login);
router.get("/current").get(current);

module.exports = router;