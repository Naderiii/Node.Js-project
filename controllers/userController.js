const asyncHandler = require("express-async-handler");
const User = require("../models/uerModel");
const bcryptjs = require('bcryptjs');

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (!userAvailable) {
    res.status(400);
    throw new Error("User already register")
  }
  //Hash password
  const hashPassword = await bcryptjs.hash(password, 10);
  const user = User.create({
    username,
    email,
    password: hashPassword
  });
  console.log(`User created ${user}`);
  res.json({ message: "Register the user" });
});

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser
}